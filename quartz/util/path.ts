import {
  isFilePath,
  isFullSlug,
  isSimpleSlug,
  isRelativeURL,
  isAbsoluteURL,
  getFullSlug,
  slugifyFilePath,
  simplifySlug,
  joinSegments,
  endsWith,
  trimSuffix,
  stripSlashes,
  getFileExtension,
  isFolderPath,
  getAllSegmentPrefixes,
  pathToRoot,
  resolveRelative as resolveRelativeFromUtils,
  splitAnchor,
  slugTag,
  transformInternalLink,
  transformLink as transformLinkFromUtils,
  normalizeHastElement,
} from "@quartz-community/utils"

export {
  isFilePath,
  isFullSlug,
  isSimpleSlug,
  isRelativeURL,
  isAbsoluteURL,
  getFullSlug,
  slugifyFilePath,
  simplifySlug,
  joinSegments,
  endsWith,
  trimSuffix,
  stripSlashes,
  getFileExtension,
  isFolderPath,
  getAllSegmentPrefixes,
  pathToRoot,
  splitAnchor,
  slugTag,
  transformInternalLink,
  normalizeHastElement,
}

export type {
  FilePath,
  FullSlug,
  SimpleSlug,
  RelativeURL,
  TransformOptions,
} from "@quartz-community/utils"

import type { FullSlug, RelativeURL, SimpleSlug, TransformOptions } from "@quartz-community/utils"

// --- v5-specific exports below ---

export const QUARTZ = "quartz"

const externalUrlRegex = /^[a-z][a-z0-9+.-]*:|^\/\//i

export function getBasePath(): string {
  if (typeof document === "undefined") return ""
  return document.body?.dataset?.basepath ?? ""
}

export function resolveBasePath(to: string, basePath = getBasePath()): string {
  if (to === "" || to === "." || to === "./") {
    return basePath === "" ? "/" : `${basePath}/`
  }

  const [pathname, hash = ""] = to.split("#", 2)
  const simplified = simplifySlug(stripSlashes(pathname) as FullSlug)
  const path = simplified === "/" ? "/" : `/${stripSlashes(simplified)}`
  const withBase = basePath === "" ? path : joinSegments(basePath, path)
  const trailingSlash = simplified !== "/" && isFolderPath(pathname) ? "/" : ""
  return `${withBase === "" ? "/" : withBase}${trailingSlash}${hash ? `#${hash}` : ""}`
}

export function absolutizeInternalUrl(
  value: string,
  basePath = getBasePath(),
  pageUrl?: string | URL,
): string {
  if (value.startsWith("#") || externalUrlRegex.test(value) || value.startsWith("data:"))
    return value

  const origin = typeof window === "undefined" ? "https://example.com" : window.location.origin
  const base = pageUrl ?? (typeof window === "undefined" ? `${origin}/` : window.location.href)

  try {
    const url = new URL(value, base)
    if (url.origin !== origin) return value

    let pathname = decodeURI(url.pathname)
    if (basePath && pathname.startsWith(basePath)) {
      pathname = pathname.slice(basePath.length) || "/"
    }

    return resolveBasePath(`${pathname}${url.hash}`, basePath)
  } catch {
    return resolveBasePath(value, basePath)
  }
}

export function resolveRelative(_current: FullSlug, target: FullSlug | SimpleSlug): RelativeURL {
  return resolveBasePath(target as string) as RelativeURL
}

export function transformLink(src: FullSlug, target: string, opts: TransformOptions): RelativeURL {
  return absolutizeInternalUrl(transformLinkFromUtils(src, target, opts)) as RelativeURL
}

// from micromorph/src/utils.ts
// https://github.com/natemoo-re/micromorph/blob/main/src/utils.ts#L5
const _rebaseHtmlElement = (
  el: Element,
  attr: string,
  basePath: string,
  destination: string | URL,
) => {
  const value = el.getAttribute(attr)
  if (!value) return
  const rebased = new URL(value, destination)
  el.setAttribute(attr, absolutizeInternalUrl(rebased.pathname + rebased.hash, basePath))
}
export function normalizeRelativeURLs(el: Element | Document, destination: string | URL) {
  const basePath =
    el instanceof Document ? (el.body?.dataset?.basepath ?? getBasePath()) : getBasePath()
  el.querySelectorAll('[href=""], [href^="/"], [href^="./"], [href^="../"]').forEach((item) => {
    _rebaseHtmlElement(item, "href", basePath, destination)
  })
  el.querySelectorAll('[src=""], [src^="/"], [src^="./"], [src^="../"]').forEach((item) => {
    _rebaseHtmlElement(item, "src", basePath, destination)
  })
}
