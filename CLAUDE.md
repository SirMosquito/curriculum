# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

Not a software project. It holds André Bernardo's personal CV. There is no build, no test suite,
no dependencies — the only artefacts are the CV document itself and `.mcp.json`.

Contents:

- `cv.md` — the working source of the CV content. Edit wording here first.
- `CV André 2026.pdf` — the current published CV, a single-page Canva export.
- `cv-improvements.md` — running checklist of CV weaknesses to fix, with a fill-in section for
  facts only the user can supply (scale metrics, promotion history, the 2017–2020 gap). Written in
  Portuguese: it is a working note, not a CV artefact, so the English (GB) rule does not apply.

## Language rule

**The CV is always written in English (GB).** This applies to the CV body, any new drafts,
tailored versions, and cover letters kept here.

British conventions to apply:

- `-ise` / `-isation`, not `-ize` / `-ization` — *organisation*, *specialised*, *optimisation*
- `-our` — *behaviour*, *favour*; `-re` — *centre*, *metre*; `licence` (noun) / `license` (verb)
- `programme` (initiative) vs `program` (software)
- Dates as `September 2020`; DD/MM/YYYY if numeric

Fixed in `cv.md`, still wrong in the published PDF:

- **The name renders as "André Bernado"** — the second `r` is missing. Confirmed at the operator
  level: the 40pt heading draws 13 glyphs (`A n d r é _ B e r n a d o`), not 14. A real typo in the
  Canva design, not an extraction artefact.
- "organization" in the Lousã Volley Clube entry → "organisation"
- PDF metadata declares `/Lang (pt-PT)` although the content is English — set the Canva document
  language to English (UK) so exports carry `en-GB`

## Source of truth: `cv.md` for content, Canva for layout

The PDF is a **Canva export** (`/Producer (Canva)`, design keys in the PDF `/Keywords`:
`DAHNC7Ed_vo`, `BAHNCxY6GCA`). Text is baked into a vector form XObject with subset fonts —
the PDF is not editable here in any meaningful way.

Consequence: never attempt to patch wording inside the PDF. The flow is: edit `cv.md` → hand the
user the exact replacement text → they paste it into Canva → re-export over the PDF. So `cv.md` runs
ahead of the PDF, and the two are expected to diverge until the next export.

## Reading the PDF

`pdftoppm` is not installed, so the Read tool cannot render pages. Use `pypdf`, which is installed:

```python
from pypdf import PdfReader
print(PdfReader("CV André 2026.pdf").pages[0].extract_text())
```

Every glyph is positioned individually, so the output is space-separated per character
(`A n d r é`) — collapse `"  "` to `" "` and `" "` to `""` to read it. Hand-rolling the decode
is a trap: the subset fonts use 2-byte CIDs, so a per-byte pass over the `/ToUnicode` CMaps silently
drops `I`, `L`, `/`, `@` and all punctuation. Reach for the raw operators (in the form XObject
`/X10`, currently object 17) only to count glyphs and settle questions like the missing `r` above.

## CV structure

Two-column, single page. Left column: **Work Experience** (Software Engineer, Critical Software —
September 2020 to present, bullet list). Right column: **Summary**, **Relevant Skills**,
**Educational History**, **Affiliations**, **Awards**. Header carries the name, target title
(Senior Software Engineer), LinkedIn (`linkedin.com/in/andbernardo`) and email
(`andbernardo@outlook.com`).

Keep bullets outcome-first and one line where possible; the layout is tight and a single-page CV
is a hard constraint — any addition needs a corresponding cut.

## MCP servers

`.mcp.json` configures `chrome-devtools` (stdio, npx) and `atlassian` (HTTP, internal Pulsar build
host). Both are inherited environment tooling, unrelated to the CV content.
