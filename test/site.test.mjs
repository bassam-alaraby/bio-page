import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { HtmlValidate } from "html-validate";

const root = new URL("../", import.meta.url);
const siteDir = new URL("../_site/", import.meta.url);
const read = (file) => readFileSync(new URL(file, siteDir), "utf8");
const exists = (file) => existsSync(new URL(file, siteDir));
const siteData = JSON.parse(readFileSync(new URL("_data/site.json", root), "utf8"));

const html = () => read("index.html");

const localRefs = (pageHtml) =>
  [...pageHtml.matchAll(/(?:href|src)="([^"]*)"/g)]
    .map((match) => match[1])
    .filter((url) => url && !/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url));

// Resolve a reference relative to the page's directory under _site.
const resolveRef = (url) => {
  const ref = url.split(/[?#]/)[0];
  if (!ref) return "index.html";
  return path.posix.normalize(ref).replace(/^\//, "");
};

const htmlValidate = new HtmlValidate({
  extends: ["html-validate:recommended"],
  rules: {
    "heading-level": "off",
    "hidden-focusable": "off",
    "input-missing-label": "off",
    "no-implicit-button-type": "off",
    "no-inline-style": "off",
    "no-raw-characters": "off",
    "no-trailing-whitespace": "off",
    "require-sri": "off",
    "void-style": "off",
    "attribute-boolean-style": "off",
    "attribute-empty-style": "off",
  },
});

test("the build generated the page and its passthrough assets", () => {
  for (const file of ["index.html", "style.css", "script.js", "CNAME"]) {
    assert.ok(exists(file), `missing ${file} in _site`);
  }
  assert.ok(exists(siteData.media.avatar), `avatar ${siteData.media.avatar} missing in _site`);
  assert.ok(exists(siteData.og.image), `og image ${siteData.og.image} missing in _site`);
});

test("generated HTML is valid", async () => {
  const report = await htmlValidate.validateString(html(), "index.html");
  const messages = report.results.flatMap((result) => result.messages);
  assert.ok(report.valid, `index.html is not valid:\n${messages.map((m) => `  ${m.ruleId}: ${m.message}`).join("\n")}`);
});

test("all internal links, images, and favicons resolve to files in _site", () => {
  const refs = localRefs(html());
  assert.ok(refs.length > 0, "no local references found");
  for (const url of refs) {
    assert.ok(exists(resolveRef(url)), `index.html references missing ${url}`);
  }
});

test("JSON-LD parses", () => {
  const blocks = [...html().matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  assert.ok(blocks.length > 0, "no JSON-LD block found");
  for (const [, json] of blocks) {
    assert.doesNotThrow(() => JSON.parse(json), "JSON-LD is not parsable");
  }
});

test("OG and canonical URLs are absolute", () => {
  const isAbsolute = (url) => /^https:\/\//i.test(url);
  const canonical = html().match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  assert.ok(canonical && isAbsolute(canonical), "canonical URL is not absolute");
  const ogUrl = html().match(/<meta property="og:url" content="([^"]*)"/)?.[1];
  assert.ok(ogUrl && isAbsolute(ogUrl), "og:url is not absolute");
  for (const name of ["og:image", "twitter:image"]) {
    const url = html().match(new RegExp(`<meta (?:property|name)="${name}" content="([^"]*)"`))?.[1];
    assert.ok(url && isAbsolute(url), `${name} is not absolute`);
  }
  const jsonLd = JSON.parse(html().match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] ?? "{}");
  assert.ok(isAbsolute(jsonLd.url ?? ""), "JSON-LD url is not absolute");
});

// Fields the template reads. Presence only; values are Pages CMS's business.
const siteFields = {
  name: true,
  url: true,
  title: true,
  description: true,
  author: true,
  jobTitle: true,
  og: { description: true, image: true, imageAlt: true },
  links: { email: true, portfolio: true, projects: true, github: true, linkedin: true, facebook: true, instagram: true },
  media: { cv: true, avatar: true },
  profile: { heading: true, bio: true, avatarAlt: true },
  routes: { method: true, path: true, label: true, status: true, link: true, active: true },
  socials: true,
};

const assertFields = (data, fields, label, trail = "") => {
  for (const [key, spec] of Object.entries(fields)) {
    const value = data?.[key];
    assert.ok(value !== undefined && value !== null, `${label} is missing ${trail}${key}`);
    if (spec === true) continue;
    const list = Array.isArray(value);
    for (const item of list ? value : [value]) {
      assertFields(item, spec, label, `${trail}${key}${list ? "[]" : ""}.`);
    }
  }
};

test("site.json has the fields the template reads", () => {
  assertFields(siteData, siteFields, "site.json");
});

test("no phone numbers or WhatsApp links in the output", () => {
  const page = html();
  assert.doesNotMatch(page, /whatsapp|wa\.me|tel:/i, "output mentions WhatsApp or phone links");
  assert.doesNotMatch(page, /\+\d[\d\s().-]{6,}\d/, "output contains an international phone number");
  assert.doesNotMatch(page, /\b0\d{2,4}[-\s]\d{3,4}[-\s]\d{3,4}\b/, "output contains a local phone number");
});

test("no download attribute in the output", () => {
  assert.doesNotMatch(html(), /\bdownload\b/i, "output contains a download attribute");
});
