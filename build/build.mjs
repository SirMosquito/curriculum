// Builds docs/ from cv/cv.md: docs/index.html (GitHub Pages) and docs/Andre-Bernardo-CV.pdf.
//
//   npm run build
//
// The HTML is written first, then Chrome headless prints that same file to PDF, so the page and
// the PDF can never drift apart. Chrome is resolved from CHROME_PATH, then the usual install
// locations, then PATH.

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { marked } from "marked";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = resolve(root, "cv", "cv.md");
const TEMPLATE = resolve(root, "build", "template.html");
const OUT_DIR = resolve(root, "docs");
const OUT_HTML = resolve(OUT_DIR, "index.html");
const PDF_NAME = "Andre-Bernardo-CV.pdf";
const OUT_PDF = resolve(OUT_DIR, PDF_NAME);

// Sections that sit in the left column on screen. Everything else goes right, in source order, so
// a new `## ` heading in cv/cv.md never breaks the build. The DOM always keeps cv.md's order: the
// two-column layout is pure CSS, and the PDF prints as a single column in that same order so an
// applicant-tracking system reads the CV top to bottom.
const LEFT_COLUMN = new Set(["Work Experience"]);

marked.use({ gfm: true, breaks: false });

// ---------------------------------------------------------------------------------------------
// Parse cv/cv.md into header + sections

function parse(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const preamble = [];
  const sections = [];
  let current = null;

  for (const line of lines) {
    const h2 = /^## (.+)$/.exec(line);
    if (h2) {
      current = { title: h2[1].trim(), body: [] };
      sections.push(current);
    } else if (current) {
      current.body.push(line);
    } else {
      preamble.push(line);
    }
  }

  const blocks = preamble.join("\n").trim().split(/\n\s*\n/);
  const h1 = /^# (.+)$/.exec(blocks[0] ?? "");
  if (!h1) throw new Error("cv/cv.md must start with a `# Name` heading");
  const [, name] = h1;
  const title = (blocks[1] ?? "").trim();
  const contact = (blocks[2] ?? "").trim();
  if (!title || !contact) {
    throw new Error("cv/cv.md header must be: `# Name`, a title paragraph, then a contact line");
  }
  return { name, title, contact, sections };
}

function renderSection({ title, body }) {
  const id = title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const column = LEFT_COLUMN.has(title) ? "col-left" : "col-right";
  const html = marked.parse(body.join("\n").trim());
  return `<section id="${id}" class="${column}" aria-labelledby="${id}-heading">\n<h2 id="${id}-heading">${title}</h2>\n${html}</section>\n`;
}

// Wrap each grade block (`**Grade** · dates` + its list) so it can refuse to split across pages.
// The markdown renders it as `<p><strong>…</strong> · dates</p><ul>…</ul>`.
function wrapGradeBlocks(html) {
  return html.replace(
    /<p><strong>([^<]+)<\/strong>([^<]*)<\/p>\n<ul>([\s\S]*?)<\/ul>/g,
    (_, grade, dates, items) =>
      `<div class="grade">\n<p class="grade-title"><strong>${grade}</strong>${dates}</p>\n<ul>${items}</ul>\n</div>`,
  );
}

// `### Entry` followed by a date paragraph → mark the date so it can be styled.
function markDates(html) {
  return html.replace(/(<\/h3>)\n<p>((?:January|February|March|April|May|June|July|August|September|October|November|December|\d{4})[^<]*)<\/p>/g,
    '$1\n<p class="dates">$2</p>');
}

function updatedStamp() {
  return new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

// ---------------------------------------------------------------------------------------------
// HTML

function buildHtml() {
  const cv = parse(readFileSync(SOURCE, "utf8"));
  const sections = cv.sections.map(renderSection).join("");
  // The screen grid gives the right column one auto row per section plus a trailing 1fr row that
  // absorbs the rest of the left column's height, so right-column sections stay packed at the top.
  const rightCount = cv.sections.filter((s) => !LEFT_COLUMN.has(s.title)).length;

  const values = {
    name: cv.name,
    title: cv.title,
    contact: marked.parseInline(cv.contact),
    sections: markDates(wrapGradeBlocks(sections)),
    rows: `repeat(${Math.max(rightCount, 1)}, auto) 1fr`,
    pdf: PDF_NAME,
    updated: updatedStamp(),
  };

  const template = readFileSync(TEMPLATE, "utf8");
  const html = template.replace(/\{\{(\w+)\}\}/g, (m, key) => {
    if (!(key in values)) throw new Error(`template placeholder without a value: ${m}`);
    return values[key];
  });

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_HTML, html);
  writeFileSync(resolve(OUT_DIR, ".nojekyll"), "");
  return cv;
}

// ---------------------------------------------------------------------------------------------
// PDF

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ].filter(Boolean);
  const found = candidates.find((p) => existsSync(p));
  if (!found) {
    throw new Error(
      "Chrome not found. Set CHROME_PATH to the Chrome/Chromium executable. Tried:\n  " +
        candidates.join("\n  "),
    );
  }
  return found;
}

function buildPdf() {
  const chrome = findChrome();
  const args = [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--no-pdf-header-footer",
    "--no-first-run",
    "--disable-extensions",
    `--print-to-pdf=${OUT_PDF}`,
    pathToFileURL(OUT_HTML).href,
  ];
  const result = spawnSync(chrome, args, { encoding: "utf8", timeout: 60_000 });
  if (result.error) throw result.error;
  if (result.status !== 0 || !existsSync(OUT_PDF)) {
    throw new Error(`Chrome exited with ${result.status}\n${result.stderr}`);
  }
  return chrome;
}

// ---------------------------------------------------------------------------------------------

const cv = buildHtml();
console.log(`html  ${OUT_HTML}  (${cv.sections.length} sections)`);
const chrome = buildPdf();
console.log(`pdf   ${OUT_PDF}  (via ${chrome})`);
