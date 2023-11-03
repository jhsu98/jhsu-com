import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_b9885ded.mjs';
import './chunks/astro_f9e129f8.mjs';
import 'clsx';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_9c7e8000.mjs');
const _page1  = () => import('./chunks/index_c281f85f.mjs');
const _page2  = () => import('./chunks/privacy_39d2dda0.mjs');
const _page3  = () => import('./chunks/rss_b7a3f4a4.mjs');
const _page4  = () => import('./chunks/terms_e26e7cae.mjs');
const _page5  = () => import('./chunks/404_fc9755d7.mjs');
const _page6  = () => import('./chunks/_.._105f5d9a.mjs');
const _page7  = () => import('./chunks/_.._8261095b.mjs');
const _page8  = () => import('./chunks/_.._e91a7948.mjs');
const _page9  = () => import('./chunks/index_01a6cf71.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/privacy.md", _page2],["src/pages/rss.xml.ts", _page3],["src/pages/terms.md", _page4],["src/pages/404.astro", _page5],["src/pages/[...blog]/[category]/[...page].astro", _page6],["src/pages/[...blog]/[tag]/[...page].astro", _page7],["src/pages/[...blog]/[...page].astro", _page8],["src/pages/[...blog]/index.astro", _page9]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
