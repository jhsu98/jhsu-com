import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_f9e129f8.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/privacy.a47619ea.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/privacy.a47619ea.css"}],"routeData":{"route":"/privacy","type":"page","pattern":"^\\/privacy$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.md","pathname":"/privacy","prerender":false,"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":false,"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/privacy.a47619ea.css"}],"routeData":{"route":"/terms","type":"page","pattern":"^\\/terms$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.md","pathname":"/terms","prerender":false,"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/privacy.a47619ea.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"never"}}}],"site":"https://j-hsu.com","base":"/","compressHTML":true,"componentMetadata":[["C:/Users/Jonathan/git/jhsu-com/src/pages/privacy.md",{"propagation":"none","containsHead":true}],["C:/Users/Jonathan/git/jhsu-com/src/pages/terms.md",{"propagation":"none","containsHead":true}],["C:/Users/Jonathan/git/jhsu-com/src/pages/[...blog]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Jonathan/git/jhsu-com/src/pages/[...blog]/[category]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Jonathan/git/jhsu-com/src/pages/[...blog]/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Jonathan/git/jhsu-com/src/pages/[...blog]/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Jonathan/git/jhsu-com/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Jonathan/git/jhsu-com/src/pages/404.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/Jonathan/git/jhsu-com/src/utils/blog.ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/Jonathan/git/jhsu-com/src/components/widgets/BlogLatestPosts.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...blog]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...blog]/[category]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...blog]/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...blog]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Jonathan/git/jhsu-com/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_b7bad079.mjs","/src/pages/rss.xml.ts":"chunks/pages/rss_3bf65339.mjs","/src/pages/terms.md":"chunks/pages/terms_84fc8266.mjs","\u0000@astrojs-manifest":"manifest_b9885ded.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_9c7e8000.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_c281f85f.mjs","\u0000@astro-page:src/pages/privacy@_@md":"chunks/privacy_39d2dda0.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"chunks/rss_b7a3f4a4.mjs","\u0000@astro-page:src/pages/terms@_@md":"chunks/terms_e26e7cae.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_fc9755d7.mjs","\u0000@astro-page:src/pages/[...blog]/[category]/[...page]@_@astro":"chunks/_.._105f5d9a.mjs","\u0000@astro-page:src/pages/[...blog]/[tag]/[...page]@_@astro":"chunks/_.._8261095b.mjs","\u0000@astro-page:src/pages/[...blog]/[...page]@_@astro":"chunks/_.._e91a7948.mjs","\u0000@astro-page:src/pages/[...blog]/index@_@astro":"chunks/index_01a6cf71.mjs","C:/Users/Jonathan/git/jhsu-com/src/assets/images/app-store.png":"chunks/app-store_8c19e6c3.mjs","C:/Users/Jonathan/git/jhsu-com/src/assets/images/default.png":"chunks/default_22e1abdf.mjs","C:/Users/Jonathan/git/jhsu-com/src/assets/images/google-play.png":"chunks/google-play_f6c5ae54.mjs","C:/Users/Jonathan/git/jhsu-com/src/assets/images/hero.png":"chunks/hero_1625d002.mjs","C:/Users/Jonathan/git/jhsu-com/src/content/post/astrowind-template-in-depth.mdx?astroContentCollectionEntry=true":"chunks/astrowind-template-in-depth_687d978c.mjs","C:/Users/Jonathan/git/jhsu-com/src/content/post/get-started-website-with-astro-tailwind-css.md?astroContentCollectionEntry=true":"chunks/get-started-website-with-astro-tailwind-css_f2f5d6d3.mjs","C:/Users/Jonathan/git/jhsu-com/src/content/post/how-to-customize-astrowind-to-your-brand.md?astroContentCollectionEntry=true":"chunks/how-to-customize-astrowind-to-your-brand_6a298242.mjs","C:/Users/Jonathan/git/jhsu-com/src/content/post/landing.md?astroContentCollectionEntry=true":"chunks/landing_eb78020c.mjs","C:/Users/Jonathan/git/jhsu-com/src/content/post/markdown-elements-demo-post.mdx?astroContentCollectionEntry=true":"chunks/markdown-elements-demo-post_355ac344.mjs","C:/Users/Jonathan/git/jhsu-com/src/content/post/useful-resources-to-create-websites.md?astroContentCollectionEntry=true":"chunks/useful-resources-to-create-websites_9232a189.mjs","C:/Users/Jonathan/git/jhsu-com/src/content/post/astrowind-template-in-depth.mdx?astroPropagatedAssets":"chunks/astrowind-template-in-depth_84734347.mjs","C:/Users/Jonathan/git/jhsu-com/src/content/post/get-started-website-with-astro-tailwind-css.md?astroPropagatedAssets":"chunks/get-started-website-with-astro-tailwind-css_a6b524df.mjs","C:/Users/Jonathan/git/jhsu-com/src/content/post/how-to-customize-astrowind-to-your-brand.md?astroPropagatedAssets":"chunks/how-to-customize-astrowind-to-your-brand_959d7d69.mjs","C:/Users/Jonathan/git/jhsu-com/src/content/post/landing.md?astroPropagatedAssets":"chunks/landing_5cfd6820.mjs","C:/Users/Jonathan/git/jhsu-com/src/content/post/markdown-elements-demo-post.mdx?astroPropagatedAssets":"chunks/markdown-elements-demo-post_214b1439.mjs","C:/Users/Jonathan/git/jhsu-com/src/content/post/useful-resources-to-create-websites.md?astroPropagatedAssets":"chunks/useful-resources-to-create-websites_a2468fda.mjs","C:/Users/Jonathan/git/jhsu-com/src/content/post/astrowind-template-in-depth.mdx":"chunks/astrowind-template-in-depth_c198d527.mjs","C:/Users/Jonathan/git/jhsu-com/src/content/post/get-started-website-with-astro-tailwind-css.md":"chunks/get-started-website-with-astro-tailwind-css_07cf8b92.mjs","C:/Users/Jonathan/git/jhsu-com/src/content/post/how-to-customize-astrowind-to-your-brand.md":"chunks/how-to-customize-astrowind-to-your-brand_cae0b02e.mjs","C:/Users/Jonathan/git/jhsu-com/src/content/post/landing.md":"chunks/landing_39b9457c.mjs","C:/Users/Jonathan/git/jhsu-com/src/content/post/markdown-elements-demo-post.mdx":"chunks/markdown-elements-demo-post_41cf68f1.mjs","C:/Users/Jonathan/git/jhsu-com/src/content/post/useful-resources-to-create-websites.md":"chunks/useful-resources-to-create-websites_b53c3f23.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/favicon.0252af4f.ico","/_astro/favicon.2d7a3102.svg","/_astro/apple-touch-icon.1de27c4e.png","/_astro/inter-greek-ext-wght-normal.81f77e51.woff2","/_astro/inter-cyrillic-ext-wght-normal.1c3007b8.woff2","/_astro/inter-cyrillic-wght-normal.eba94878.woff2","/_astro/inter-greek-wght-normal.d92c6cbc.woff2","/_astro/inter-vietnamese-wght-normal.15df7612.woff2","/_astro/inter-latin-wght-normal.88df0b5a.woff2","/_astro/inter-latin-ext-wght-normal.a2bfd9fe.woff2","/_astro/app-store.4cd7a2ff.png","/_astro/google-play.2a9ea62e.png","/_astro/hero.08a3a925.png","/_astro/default.5cdc518a.png","/_astro/privacy.a47619ea.css","/profile.jpg","/robots.txt","/_headers","/decapcms/config.yml","/decapcms/index.html"]});

export { manifest };
