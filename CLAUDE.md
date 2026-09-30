# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

Not a software project. It holds André Bernardo's personal CV. There is no test suite. There is
one build step (`npm run build`) with one dependency (`marked`), which turns `cv/cv.md` into
the published outputs in `docs/`.

Contents:

- `cv/cv-completo.md` — the **master CV**: long-form, English (GB), the full record. Facts land
  here first.
- `cv/cv.md` — the published version, cut from the master. This is what the build reads.
- `historico/` — the personal archive the CV is cut from: career timeline, the six years at Critical
  Software reconstructed year by year, and the quantitative record from Jira. Portuguese working
  notes, except `historico/factos-para-cv.md`, which is English because it is text destined for the
  CV. See `historico/README.md`.
- `docs/` — **generated, but committed on purpose**: `index.html` (the GitHub Pages site) and
  `Andre-Bernardo-CV.pdf` (the file attached to applications). Never hand-edit; rebuild instead.
- `build/` — `build.mjs` (the build script) and `template.html` (page skeleton and all CSS, screen
  and print). `package.json` / `package-lock.json` pin the single dependency.

The flow for content is: `historico/` (evidence) → `cv/cv-completo.md` (master) → `cv/cv.md`
(published) → `npm run build` → `docs/` (`index.html` for GitHub Pages, `Andre-Bernardo-CV.pdf` for
applications). The Canva design and its PDF export were retired in September 2026 in favour of
this build.

## Building the outputs

```
npm install      # once
npm run build    # writes docs/index.html, docs/Andre-Bernardo-CV.pdf, docs/.nojekyll
```

- The script reads `cv/cv.md`, renders it with `marked` into `build/template.html`, then prints that
  same HTML to PDF with Chrome headless (`--print-to-pdf`, A4, no header/footer). One source, so
  the page and the PDF cannot drift.
- Columns come from the `## ` headings: **Work Experience** goes left, every other section goes
  right in source order. The header is the `# Name`, then the title paragraph, then the contact
  line — keep that order at the top of `cv/cv.md`.
- **The PDF is parser-first.** Applications go through applicant-tracking software before a
  human, so the print stylesheet drops the two columns and lays the CV out as a single column in
  `cv.md` order (Summary, Work Experience, Skills, Education, Affiliations & Awards), in Arial,
  with plain bold headings (no uppercase transform, no letter-spacing), no icons, no tables, no
  colour. Keep it that way: any print-CSS change must not reintroduce columns, text in images,
  or decorative fonts. The two-column layout exists only on the web page.
- Chrome is resolved from `CHROME_PATH`, then the usual install paths, then `google-chrome` /
  `chromium`. Set `CHROME_PATH` if the build cannot find it.
- **Any change to `cv/cv.md` must be followed by `npm run build`, and `docs/` committed with it.**
  The PDF differs on every build (creation timestamp), so a `docs/` diff after a rebuild is
  expected; `index.html` only changes with content or with the build date in the footer.
- Live URLs once Pages is enabled (Settings → Pages → Deploy from a branch → `main`, `/docs`):
  `https://sirmosquito.github.io/curriculum/` and
  `https://sirmosquito.github.io/curriculum/Andre-Bernardo-CV.pdf`.

## Language rule

**The CV is always written in English (GB).** This applies to the CV body, any new drafts,
tailored versions, and cover letters kept here.

British conventions to apply:

- `-ise` / `-isation`, not `-ize` / `-ization` — *organisation*, *specialised*, *optimisation*
- `-our` — *behaviour*, *favour*; `-re` — *centre*, *metre*; `licence` (noun) / `license` (verb)
- `programme` (initiative) vs `program` (software)
- Dates as `September 2020`; DD/MM/YYYY if numeric

## CV structure

Two-column **on the web page** (the PDF is single-column, see above). Left column: **Work Experience** — the Critical Software entry is **unfolded by grade**
(Senior Engineer, Professional Engineer, Junior Engineer, Graduate Engineer, newest first), each
with its own dates and bullets, under a shared company header carrying the product and its scale.
Right column: **Summary**, **Relevant Skills**, **Educational History**, **Affiliations**,
**Awards**. Header carries the name, target title (Senior Software Engineer), LinkedIn
(`linkedin.com/in/andbernardo`) and email (`andbernardo@outlook.com`).

Keep bullets outcome-first and one line where possible. **The single page is no longer a hard
constraint** — the user lifted it in August 2026 to make room for the grade progression, so the
CV may span more than one page. Length still costs the reader, so an addition should displace
something weaker rather than simply pile on.

## MCP servers

`.mcp.json` configures `chrome-devtools` (stdio, npx) and `atlassian` (HTTP, internal Pulsar build
host). Both are inherited environment tooling, unrelated to the CV content.

## Version control

Tracked in git since August 2026; remote `origin` is `github.com/SirMosquito/curriculum`
(the user's personal GitHub account, not the work one). GitHub Pages serves `docs/` from `main`.
The local `user.email` is deliberately set to the personal address `andbernardo@outlook.com` so
work email does not end up in a public history.

`.mcp.json` is **gitignored on purpose** — it points at the internal host
`pulsar-build.critical.pt:9000`. Do not commit it, and do not quote internal hostnames in tracked
files.

`historico/raw/` is **gitignored on purpose** too. It holds the raw Jira extraction, and internal
issue titles carry client names, project codes and internal addresses. The same rule applies to
anything else sourced from internal systems: aggregate and sanitise before it enters a tracked file
— product and technology level only, never client names or project codes.
