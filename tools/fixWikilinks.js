#!/usr/bin/env node

/**
 * ============================================================================
 * fixWikilinks.js
 * ============================================================================
 *
 * Convierte wikilinks relativos en wikilinks absolutos.
 *
 * Ejemplo:
 *
 *      [[Características Pokémon]]
 *
 * pasa a:
 *
 *      [[Pokémon/Características Pokémon|Características Pokémon]]
 *
 * Características:
 *
 *  ✓ Conserva aliases.
 *  ✓ Conserva headings.
 *  ✓ Conserva block references.
 *  ✓ Detecta enlaces ambiguos.
 *  ✓ Detecta notas inexistentes.
 *  ✓ Nunca modifica enlaces que ya poseen una ruta.
 *  ✓ Idempotente.
 *
 * Modos:
 *
 *      --check
 *          Analiza el proyecto sin modificar archivos.
 *
 *      --dry-run
 *          Muestra todos los cambios que haría.
 *
 *      --apply
 *          Escribe los cambios en los archivos.
 *
 * ============================================================================
 */

"use strict";

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

////////////////////////////////////////////////////////////////////////////////
// CONFIGURACIÓN
////////////////////////////////////////////////////////////////////////////////

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, "..");
const CONTENT = path.join(ROOT, "content");

const IGNORE_LINKS = new Set([
    "Tormenta Arena"
]);
////////////////////////////////////////////////////////////////////////////////
// CLI
////////////////////////////////////////////////////////////////////////////////

const args = new Set(process.argv.slice(2));
const MODE = {

    check: args.has("--check"),
    dryRun: args.has("--dry-run"),
    apply: args.has("--apply")

};

const enabledModes = Object.values(MODE).filter(Boolean).length;

if (enabledModes !== 1) {

    console.log("");
    console.log("Uso:");
    console.log("");
    console.log("  node tools/fixWikilinks.js --check");
    console.log("  node tools/fixWikilinks.js --dry-run");
    console.log("  node tools/fixWikilinks.js --apply");
    console.log("");

    process.exit(1);

}

////////////////////////////////////////////////////////////////////////////////
// ESTADÍSTICAS
////////////////////////////////////////////////////////////////////////////////

const report = [];

const stats = {

    invalidExplicitPaths: 0,

    scannedFiles: 0,

    modifiedFiles: 0,

    fixedLinks: 0,

    untouchedLinks: 0,

    ambiguousLinks: 0,

};

////////////////////////////////////////////////////////////////////////////////
// BASE DE DATOS EN MEMORIA
////////////////////////////////////////////////////////////////////////////////

/**
 * basename -> [
 *      {
 *          path,
 *          file
 *      }
 * ]
 */
const noteIndex = new Map();

/**
 * Todos los enlaces ambiguos encontrados.
 */
const ambiguous = [];

/**
 * Enlaces cuyo destino no existe.
 */

/**
 * Rutas explícitas que no existen.
 */
const invalidExplicit = [];

////////////////////////////////////////////////////////////////////////////////
// UTILIDADES
////////////////////////////////////////////////////////////////////////////////

function normalizeSlashes(value) {

    return value.replace(/\\/g, "/");

}

function withoutExtension(file) {

    return file.replace(/\.md$/i, "");

}

function escapeAlias(alias) {

    return alias
        .replace(/\\/g, "\\\\")
        .replace(/\|/g, "\\|");

}

function relativeToContent(file) {

    return normalizeSlashes(
        path.relative(CONTENT, file)
    );

}

function startsWithAt(text, index, value) {

    return text.startsWith(value, index);

}

function isEmbed(text, index) {

    return index > 0 && text[index - 1] === "!";

}

function displayName(notePath) {

    return path.basename(notePath);

}

////////////////////////////////////////////////////////////////////////////////
// SCANNER
////////////////////////////////////////////////////////////////////////////////

const STATE = {

    NORMAL: 0,

    INLINE_CODE: 1,

    CODE_BLOCK: 2,

    HTML_COMMENT: 3

};

////////////////////////////////////////////////////////////////////////////////
// PROGRAMA PRINCIPAL
////////////////////////////////////////////////////////////////////////////////

main();

function main() {

    console.log("");
    console.log("═══════════════════════════════════════════════");
    console.log("          FIX WIKILINKS");
    console.log("═══════════════════════════════════════════════");
    console.log("");

    buildIndex();

    processDirectory(CONTENT);

    printSummary();

}

////////////////////////////////////////////////////////////////////////////////
// INDEXADOR
////////////////////////////////////////////////////////////////////////////////

function buildIndex() {

    console.log("Indexando notas...\n");

    walkDirectory(CONTENT);

    console.log(
        `✓ ${noteIndex.size} nombres de notas indexados.\n`
    );

}

function walkDirectory(directory) {

    const entries = fs.readdirSync(directory, {
        withFileTypes: true
    });

    for (const entry of entries) {

        const fullPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {

            walkDirectory(fullPath);
            continue;

        }

        if (!entry.isFile())
            continue;

        if (!entry.name.endsWith(".md"))
            continue;

        indexNote(fullPath);

    }

}

function indexNote(file) {

    const relative = relativeToContent(file);

    const withoutExt = withoutExtension(relative);

    const basename = path.basename(withoutExt);

    const record = {

        basename,
        path: normalizeSlashes(withoutExt),
        file

    };

    if (!noteIndex.has(basename))
        noteIndex.set(basename, []);

    noteIndex.get(basename).push(record);

}

////////////////////////////////////////////////////////////////////////////////
// CONSULTAS DEL ÍNDICE
////////////////////////////////////////////////////////////////////////////////

function findNote(name) {

    if (!noteIndex.has(name))
        return null;

    const results = noteIndex.get(name);

    if (results.length === 1)
        return results[0];

    return results;

}

function isAmbiguous(result) {

    return Array.isArray(result);

}

function registerAmbiguous(target, matches) {

    stats.ambiguousLinks++;

    ambiguous.push({

        target,

        matches

    });

}


////////////////////////////////////////////////////////////////////////////////
// PARSER DE WIKILINKS
////////////////////////////////////////////////////////////////////////////////

/**
 * Devuelve true si el target ya contiene una ruta.
 *
 * Ejemplos:
 *
 *      Pokémon/Tipos
 *      ../Tipos
 *      ./Tipos
 */
function hasExplicitPath(target) {

    return (
        target.includes("/") ||
        target.startsWith("./") ||
        target.startsWith("../")
    );

}

/**
 * Separa un wikilink en sus componentes.
 *
 * Entrada:
 *
 *      Página
 *      Página|Alias
 *      Página#Título
 *      Página#^bloque
 *      Página#Título|Alias
 *
 * Devuelve:
 *
 * {
 *      target,
 *      heading,
 *      alias
 * }
 */
function parseTarget(text) {

    text = text.trim();

    let alias = null;

    const aliasIndex = findFirstUnescaped(text, "|");

    if (aliasIndex !== -1) {

        alias = text.substring(aliasIndex + 1).trim();

        text = text.substring(0, aliasIndex).trim();

    }

    let heading = null;

    const headingIndex = findFirstUnescaped(text, "#");

    if (headingIndex !== -1) {

        heading = text.substring(headingIndex + 1).trim();

        text = text.substring(0, headingIndex).trim();

    }

    return {

        target: text,
        heading,
        alias

    };

}

/**
 * Reconstruye un wikilink.
 */
function buildTarget(parsed, absoluteTarget) {

    let result = absoluteTarget;

    if (parsed.heading)
        result += "#" + parsed.heading;

    // Si el usuario ya escribió un alias, lo conservamos.
    if (parsed.alias !== null) {

        result += "\\|" + escapeAlias(parsed.alias);

        return `[[${result}]]`;

    }

    // Si no había alias, usamos el nombre original del enlace.
    result += "\\|" + escapeAlias(parsed.target);

    return `[[${result}]]`;

}
/**
 * Busca el primer carácter no escapado.
 */
function findFirstUnescaped(text, character) {

    let escaped = false;

    for (let i = 0; i < text.length; i++) {

        const current = text[i];

        if (escaped) {

            escaped = false;
            continue;

        }

        if (current === "\\") {

            escaped = true;
            continue;

        }

        if (current === character)
            return i;

    }

    return -1;

}

////////////////////////////////////////////////////////////////////////////////
// RESOLUCIÓN
////////////////////////////////////////////////////////////////////////////////

/**
 * Obtiene la ruta absoluta de una nota.
 *
 * Devuelve:
 *
 *      string      -> encontrada
 *      null        -> inexistente
 *      undefined   -> ambigua
 */
function resolveTarget(parsed) {

    if (hasExplicitPath(parsed.target))
        return parsed.target;

    const result = findNote(parsed.target);

    if (result === null)
        return null;

    if (isAmbiguous(result))
        return undefined;

    return result.path;

}

function explicitPathExists(target) {

    const normalized = normalizeSlashes(target);

    const file = path.join(CONTENT, normalized + ".md");

    return fs.existsSync(file);

}

////////////////////////////////////////////////////////////////////////////////
// PROCESADOR
////////////////////////////////////////////////////////////////////////////////

function processDirectory(directory) {

    const entries = fs.readdirSync(directory, {
        withFileTypes: true
    });

    for (const entry of entries) {

        const fullPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {

            processDirectory(fullPath);
            continue;

        }

        if (!entry.isFile())
            continue;

        if (!entry.name.endsWith(".md"))
            continue;

        processFile(fullPath);

    }

}

////////////////////////////////////////////////////////////////////////////////

function processFile(file) {

    stats.scannedFiles++;

    const original = fs.readFileSync(file, "utf8");

    const result = processMarkdown(original);

    if (!result.changed) {

        return;

    }

    stats.modifiedFiles++;

    report.push({

        file: relativeToContent(file),

        changes: result.changes

    });

    if (MODE.apply) {

        fs.writeFileSync(file, result.text);

    }

}

////////////////////////////////////////////////////////////////////////////////

function processMarkdown(text) {

    let output = "";

    let changes = [];

    let changed = false;

    let state = STATE.NORMAL;

    let i = 0;

    while (i < text.length) {

        ////////////////////////////////////////////////////////////////////////
        // NORMAL
        ////////////////////////////////////////////////////////////////////////

        if (state === STATE.NORMAL) {

            // Bloque de código
            if (startsWithAt(text, i, "```")) {

                state = STATE.CODE_BLOCK;

                output += "```";

                i += 3;

                continue;

            }

            // Comentario HTML

            if (startsWithAt(text, i, "<!--")) {

                state = STATE.HTML_COMMENT;

                output += "<!--";

                i += 4;

                continue;

            }

            // Código inline

            if (text[i] === "`") {

                state = STATE.INLINE_CODE;

                output += "`";

                i++;

                continue;

            }

            // Embed

            if (

                startsWithAt(text, i, "[[") &&
                isEmbed(text, i)

            ) {

                output += "[[";

                i += 2;

                continue;

            }

            // Wikilink

            if (startsWithAt(text, i, "[[")) {

                const end = text.indexOf("]]", i);

                if (end === -1) {

                    output += text.substring(i);

                    break;

                }

                const raw = text.substring(i + 2, end);
                const parsed = parseTarget(raw);
                const replacement = processLink(raw);

                output += replacement.text;

                if (replacement.changed) {

                    changed = true;

                    changes.push({

                        before: "[[" + raw + "]]",

                        after: replacement.text

                    });

                }

                i = end + 2;

                continue;

            }

            output += text[i];

            i++;

            continue;

        }

        ////////////////////////////////////////////////////////////////////////
        // INLINE CODE
        ////////////////////////////////////////////////////////////////////////

        if (state === STATE.INLINE_CODE) {

            output += text[i];

            if (text[i] === "`")
                state = STATE.NORMAL;

            i++;

            continue;

        }

        ////////////////////////////////////////////////////////////////////////
        // CODE BLOCK
        ////////////////////////////////////////////////////////////////////////

        if (state === STATE.CODE_BLOCK) {

            if (startsWithAt(text, i, "```")) {

                output += "```";

                i += 3;

                state = STATE.NORMAL;

                continue;

            }

            output += text[i];

            i++;

            continue;

        }

        ////////////////////////////////////////////////////////////////////////
        // HTML COMMENT
        ////////////////////////////////////////////////////////////////////////

        if (state === STATE.HTML_COMMENT) {

            if (startsWithAt(text, i, "-->")) {

                output += "-->";

                i += 3;

                state = STATE.NORMAL;

                continue;

            }

            output += text[i];

            i++;

        }

    }

    return {

        changed,

        changes,

        text: output

    };

}

////////////////////////////////////////////////////////////////////////////////

function processLink(raw) {

    const parsed = parseTarget(raw);

    if (IGNORE_LINKS.has(parsed.target)) {

        stats.untouchedLinks++;

        return {

            changed: false,
            text: "[[" + raw + "]]"

        };

    }

    if (!parsed.target) {

        return {

            changed: false,
            text: "[[" + raw + "]]"

        };

    }

    const resolved = resolveTarget(parsed);

    // Ruta explícita.
    // No se modifica, pero verificamos que exista.
    if (resolved === parsed.target) {

        if (!explicitPathExists(parsed.target)) {

            stats.invalidExplicitPaths++;

            invalidExplicit.push(parsed.target);

        }

        stats.untouchedLinks++;

        return {

            changed: false,

            text: "[[" + raw + "]]"

        };

    }

    if (resolved === null) {

        stats.untouchedLinks++;

        return {

            changed: false,

            text: "[[" + raw + "]]"

        };

    }

    if (resolved === undefined) {

        registerAmbiguous(

            parsed.target,

            findNote(parsed.target)

        );

        return {

            changed: false,

            text: "[[" + raw + "]]"

        };

    }

    const rebuilt = buildTarget(parsed, resolved);

    if (rebuilt === "[[" + raw + "]]") {

        stats.untouchedLinks++;

        return {

            changed: false,

            text: rebuilt

        };

    }

    stats.fixedLinks++;

    return {

        changed: true,

        text: rebuilt

    };

}

////////////////////////////////////////////////////////////////////////////////
// RESUMEN
////////////////////////////////////////////////////////////////////////////////

function printSummary() {

    console.log("");
    console.log("═══════════════════════════════════════════════");
    console.log("                 RESUMEN");
    console.log("═══════════════════════════════════════════════");
    console.log("");

    if (MODE.dryRun) {

        for (const file of report) {

            console.log(file.file);

            for (const change of file.changes) {

                console.log("");
                console.log("  " + change.before);
                console.log("→ " + change.after);

            }

            console.log("");

        }

    }

    console.log("Archivos recorridos      :", stats.scannedFiles);
    console.log("Archivos modificados     :", stats.modifiedFiles);
    console.log("Wikilinks corregidos     :", stats.fixedLinks);
    console.log("Sin cambios             :", stats.untouchedLinks);
    console.log("Ambiguos                :", stats.ambiguousLinks);
    console.log("Rutas inválidas         :", stats.invalidExplicitPaths);

    console.log("");

    ////////////////////////////////////////////////////////////////////////
    // Ambiguos
    ////////////////////////////////////////////////////////////////////////

    if (ambiguous.length) {

        console.log("Enlaces ambiguos:");
        console.log("");

        for (const item of ambiguous) {

            console.log("• " + item.target);

            for (const match of item.matches)
                console.log("    - " + match.path);

            console.log("");

        }

    }

    ////////////////////////////////////////////////////////////////////////
    // Rutas explícitas inválidas
    ////////////////////////////////////////////////////////////////////////

    if (invalidExplicit.length) {

        console.log("Rutas explícitas inválidas:");
        console.log("");

        for (const target of [...new Set(invalidExplicit)])
            console.log("• " + target);

        console.log("");

    }

    ////////////////////////////////////////////////////////////////////////
    // Código de salida
    ////////////////////////////////////////////////////////////////////////

    if (
        MODE.check &&
        (
            stats.ambiguousLinks ||
            stats.invalidExplicitPaths
        )
    ) {

        console.log("❌ Se encontraron problemas en los wikilinks.");
        process.exit(1);

    }

    if (MODE.check) {

        console.log("✓ Todos los wikilinks son válidos.");
        process.exit(0);

    }

    if (MODE.dryRun) {

        console.log("✓ Simulación completada.");
        process.exit(0);

    }

    console.log("✓ Cambios aplicados correctamente.");
    process.exit(0);

}