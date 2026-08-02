import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.join(__dirname, "..", "content", "Pokedex");

// Región recibida por consola
const region = process.argv[2];

if (!region) {
    console.log("Uso:");
    console.log('node tools/generatePokedex.js "1 - Kanto"');
    process.exit(1);
}

const regionPath = path.join(ROOT, region);

if (!fs.existsSync(regionPath)) {
    console.error(`No existe la región "${region}".`);
    process.exit(1);
}

// ----------------------------------------

function leerFrontmatter(contenido) {
    const tipo1 = contenido.match(/^tipo1:\s*(.+)$/mi)?.[1] ?? "";
    const tipo2 = contenido.match(/^tipo2:\s*(.+)$/mi)?.[1] ?? "";

    return { tipo1, tipo2 };
}

function enlaceTipo(tipo) {

    if (!tipo) return "";

    const limpio = tipo
        .replace(/"/g, "")          // Elimina comillas
        .replace(/^tipo\s+/i, "")   // Elimina "tipo "
        .trim()
        .toLowerCase();

    const visible =
        limpio.charAt(0).toUpperCase() +
        limpio.slice(1);

    return `[[Pokémon/Tipos Pokémon/${visible}\\|${visible}]]`;
}

// ----------------------------------------

const pokemonFiles = fs.readdirSync(regionPath)
    .filter(file => file.endsWith(".md") && file !== "README.md")
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const grupos = new Map();

for (const file of pokemonFiles) {

    const base = file.replace(".md", "");

    const [numero, nombre] = base.split(" - ");

    const contenido = fs.readFileSync(path.join(regionPath, file), "utf8");

    const { tipo1, tipo2 } = leerFrontmatter(contenido);

    const enlacePokemon = `[[${base}\\|${nombre}]]`;

    const tipos = [
        enlaceTipo(tipo1),
        enlaceTipo(tipo2)
    ].filter(Boolean).join(" / ");

    if (!grupos.has(numero)) {
        grupos.set(numero, []);
    }

    grupos.get(numero).push({
        pokemon: enlacePokemon,
        tipos
    });
}

// ----------------------------------------

let output = `# ${region.split(" - ")[1]}\n\n`;

output += "| Nº | Pokémon | Tipos |\n";
output += "|:--:|---------|:-----:|\n";

for (const [numero, lista] of grupos) {

    const pokemon = lista
        .map(p => p.pokemon)
        .join("<br>");

    const tipos = lista
        .map(p => p.tipos)
        .join("<br>");

    output += `| ${Number(numero)} | ${pokemon} | ${tipos} |\n`;
}

fs.writeFileSync(
    path.join(regionPath, "README.md"),
    output,
    "utf8"
);

console.log(`✓ Pokédex de ${region} generada.`);