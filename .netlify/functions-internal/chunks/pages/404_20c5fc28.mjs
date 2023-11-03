import '@astrojs/internal-helpers/path';
import { e as createAstro, f as createComponent, A as AstroError, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as defineScriptVars, j as renderComponent, u as unescapeHTML, F as Fragment, k as renderHead, l as renderSlot } from '../astro_f9e129f8.mjs';
/* empty css                             */import fs from 'fs';
import yaml from 'js-yaml';
import merge from 'lodash.merge';
import 'clsx';
import slugify from 'limax';
import { escape } from 'html-escaper';
import { i as isESMImportedImage, g as getImage$1 } from '../astro-assets-services_900cc72f.mjs';

const $$Astro$d = createAstro("https://j-hsu.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "C:/Users/Jonathan/git/jhsu-com/node_modules/astro/components/Image.astro", void 0);

const $$Astro$c = createAstro("https://j-hsu.com");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const additionalAttributes = {};
  if (fallbackImage.srcSet.values.length > 0) {
    additionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}>${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}>`;
  })}<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(fallbackImage.attributes)}></picture>`;
}, "C:/Users/Jonathan/git/jhsu-com/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///C:/Users/Jonathan/git/jhsu-com/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const config = yaml.load(fs.readFileSync("src/config.yaml", "utf8"));
const DEFAULT_SITE_NAME = "Website";
const getSite = () => {
  const _default = {
    name: DEFAULT_SITE_NAME,
    site: void 0,
    base: "/",
    trailingSlash: false,
    googleSiteVerificationId: ""
  };
  return merge({}, _default, config?.site ?? {});
};
const getMetadata = () => {
  const siteConfig = getSite();
  const _default = {
    title: {
      default: siteConfig?.name || DEFAULT_SITE_NAME,
      template: "%s"
    },
    description: "",
    robots: {
      index: false,
      follow: false
    },
    openGraph: {
      type: "website"
    }
  };
  return merge({}, _default, config?.metadata ?? {});
};
const getI18N = () => {
  const _default = {
    language: "en",
    textDirection: "ltr"
  };
  const value = merge({}, _default, config?.i18n ?? {});
  return Object.assign(value, {
    dateFormatter: new Intl.DateTimeFormat(value.language, {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC"
    })
  });
};
const getAppBlog = () => {
  const _default = {
    isEnabled: false,
    postsPerPage: 6,
    post: {
      isEnabled: true,
      permalink: "/blog/%slug%",
      robots: {
        index: true,
        follow: true
      }
    },
    list: {
      isEnabled: true,
      pathname: "blog",
      robots: {
        index: true,
        follow: true
      }
    },
    category: {
      isEnabled: true,
      pathname: "category",
      robots: {
        index: true,
        follow: true
      }
    },
    tag: {
      isEnabled: true,
      pathname: "tag",
      robots: {
        index: false,
        follow: true
      }
    }
  };
  return merge({}, _default, config?.apps?.blog ?? {});
};
const getUI = () => {
  const _default = {
    theme: "system",
    classes: {},
    tokens: {}
  };
  return merge({}, _default, config?.ui ?? {});
};
const getAnalytics = () => {
  const _default = {
    vendors: {
      googleAnalytics: {
        id: void 0,
        partytown: true
      }
    }
  };
  return merge({}, _default, config?.analytics ?? {});
};
const SITE = getSite();
const I18N = getI18N();
const METADATA = getMetadata();
const APP_BLOG = getAppBlog();
const UI = getUI();
const ANALYTICS = getAnalytics();

const formatter = I18N?.dateFormatter || new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC"
});
const getFormattedDate = (date) => date ? formatter.format(date) : "";
const trim = (str = "", ch) => {
  let start = 0, end = str.length || 0;
  while (start < end && str[start] === ch)
    ++start;
  while (end > start && str[end - 1] === ch)
    --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};

const trimSlash = (s) => trim(trim(s, "/"));
const createPath = (...params) => {
  const paths = params.map((el) => trimSlash(el)).filter((el) => !!el).join("/");
  return "/" + paths + (SITE.trailingSlash && paths ? "/" : "");
};
const BASE_PATHNAME = SITE.base || "/";
const cleanSlug = (text = "") => trimSlash(text).split("/").map((slug) => slugify(slug)).join("/");
const BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
const CATEGORY_BASE = cleanSlug(APP_BLOG?.category?.pathname);
const TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || "tag";
const POST_PERMALINK_PATTERN = trimSlash(APP_BLOG?.post?.permalink || `${BLOG_BASE}/%slug%`);
const getCanonical = (path = "") => {
  const url = String(new URL(path, SITE.site));
  if (SITE.trailingSlash == false && path && url.endsWith("/")) {
    return url.slice(0, -1);
  } else if (SITE.trailingSlash == true && path && !url.endsWith("/")) {
    return url + "/";
  }
  return url;
};
const getPermalink = (slug = "", type = "page") => {
  let permalink;
  switch (type) {
    case "category":
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;
    case "tag":
      permalink = createPath(TAG_BASE, trimSlash(slug));
      break;
    case "post":
      permalink = createPath(trimSlash(slug));
      break;
    case "page":
    default:
      permalink = createPath(slug);
      break;
  }
  return definitivePermalink(permalink);
};
const getHomePermalink = () => getPermalink("/");
const getBlogPermalink = () => getPermalink(BLOG_BASE);
const getAsset = (path) => "/" + [BASE_PATHNAME, path].map((el) => trimSlash(el)).filter((el) => !!el).join("/");
const definitivePermalink = (permalink) => createPath(BASE_PATHNAME, permalink);

const $$Astro$b = createAstro("https://j-hsu.com");
const $$CommonMeta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$CommonMeta;
  return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="sitemap"${addAttribute(getAsset("/sitemap-index.xml"), "href")}>`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/common/CommonMeta.astro", void 0);

const favIcon = "/_astro/favicon.0252af4f.ico";

const favIconSvg = {"src":"/_astro/favicon.2d7a3102.svg","width":128,"height":128,"format":"svg"};

const appleTouchIcon = {"src":"/_astro/apple-touch-icon.1de27c4e.png","width":180,"height":180,"format":"png"};

const $$Astro$a = createAstro("https://j-hsu.com");
const $$Favicons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Favicons;
  return renderTemplate`<link rel="shortcut icon"${addAttribute(favIcon, "href")}><link rel="icon" type="image/svg+xml"${addAttribute(favIconSvg.src, "href")}><link rel="mask-icon"${addAttribute(favIconSvg.src, "href")} color="#8D46E7"><link rel="apple-touch-icon" sizes="180x180"${addAttribute(appleTouchIcon.src, "href")}>`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/Favicons.astro", void 0);

const $$Astro$9 = createAstro("https://j-hsu.com");
const $$CustomStyles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$CustomStyles;
  return renderTemplate`<style is:global>
  :root {
    --aw-font-sans: 'Inter Variable';
    --aw-font-serif: var(--aw-font-sans);
    --aw-font-heading: var(--aw-font-sans);

    --aw-color-primary: rgb(30 64 175);
    --aw-color-secondary: rgb(30 58 138);
    --aw-color-accent: rgb(109 40 217);

    --aw-color-text-heading: rgb(0 0 0); 
    --aw-color-text-default: rgb(16 16 16);
    --aw-color-text-muted: rgb(16 16 16 / 66%);
    --aw-color-bg-page: rgb(255 255 255);

    --aw-color-bg-page-dark: rgb(3 6 32);

    ::selection {background-color: lavender;}

  }

  .dark {
    --aw-font-sans: 'Inter Variable';
    --aw-font-serif: var(--aw-font-sans);
    --aw-font-heading: var(--aw-font-sans);

    --aw-color-primary: rgb(30 64 175);
    --aw-color-secondary: rgb(30 58 138);
    --aw-color-accent: rgb(109 40 217);

    --aw-color-text-heading: rgb(0 0 0); 
    --aw-color-text-default: rgb(229 236 246);
    --aw-color-text-muted: rgb(229 236 246 / 66%);
    --aw-color-bg-page: var(--aw-color-bg-page-dark);

    ::selection {background-color: black; color: snow}

  }
</style>`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/CustomStyles.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$8 = createAstro("https://j-hsu.com");
const $$ApplyColorMode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ApplyColorMode;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<script>(function(){", '\n  function applyTheme(theme) {\n    if (theme === "dark") {\n      document.documentElement.classList.add("dark");\n    } else {\n      document.documentElement.classList.remove("dark");\n    }\n    const matches = document.querySelectorAll("[data-aw-toggle-color-scheme] > input");\n\n    if (matches && matches.length) {\n      matches.forEach((elem) => {\n        elem.checked = theme !== "dark";\n      });\n    }\n  }\n\n  if ((defaultTheme && defaultTheme.endsWith(":only")) || (!localStorage.theme && defaultTheme !== "system")) {\n    applyTheme(defaultTheme.replace(":only", ""));\n  } else if (\n    localStorage.theme === "dark" ||\n    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)\n  ) {\n    applyTheme("dark");\n  } else {\n    applyTheme("light");\n  }\n})();<\/script>'])), defineScriptVars({ defaultTheme: UI.theme || "system" }));
}, "C:/Users/Jonathan/git/jhsu-com/src/components/common/ApplyColorMode.astro", void 0);

const createMetaTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<meta ${attrs} />`;
};
const createLinkTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<link ${attrs} />`;
};
const createOpenGraphTag = (property, content) => {
  return createMetaTag({ property: `og:${property}`, content });
};
const buildOpenGraphMediaTags = (mediaType, media) => {
  let tags = "";
  const addTag = (tag) => {
    tags += tag + "\n";
  };
  media.forEach((medium) => {
    addTag(createOpenGraphTag(mediaType, medium.url));
    if (medium.alt) {
      addTag(createOpenGraphTag(`${mediaType}:alt`, medium.alt));
    }
    if (medium.secureUrl) {
      addTag(createOpenGraphTag(`${mediaType}:secure_url`, medium.secureUrl));
    }
    if (medium.type) {
      addTag(createOpenGraphTag(`${mediaType}:type`, medium.type));
    }
    if (medium.width) {
      addTag(createOpenGraphTag(`${mediaType}:width`, medium.width.toString()));
    }
    if (medium.height) {
      addTag(createOpenGraphTag(`${mediaType}:height`, medium.height.toString()));
    }
  });
  return tags;
};
const buildTags = (config) => {
  let tagsToRender = "";
  const addTag = (tag) => {
    tagsToRender += tag + "\n";
  };
  if (config.title) {
    const formattedTitle = config.titleTemplate ? config.titleTemplate.replace("%s", config.title) : config.title;
    addTag(`<title>${escape(formattedTitle)}</title>`);
  }
  if (config.description) {
    addTag(createMetaTag({ name: "description", content: config.description }));
  }
  let robotsContent = [];
  if (typeof config.noindex !== "undefined") {
    robotsContent.push(config.noindex ? "noindex" : "index");
  }
  if (typeof config.nofollow !== "undefined") {
    robotsContent.push(config.nofollow ? "nofollow" : "follow");
  }
  if (config.robotsProps) {
    const { nosnippet, maxSnippet, maxImagePreview, noarchive, unavailableAfter, noimageindex, notranslate } = config.robotsProps;
    if (nosnippet)
      robotsContent.push("nosnippet");
    if (maxSnippet)
      robotsContent.push(`max-snippet:${maxSnippet}`);
    if (maxImagePreview)
      robotsContent.push(`max-image-preview:${maxImagePreview}`);
    if (noarchive)
      robotsContent.push("noarchive");
    if (unavailableAfter)
      robotsContent.push(`unavailable_after:${unavailableAfter}`);
    if (noimageindex)
      robotsContent.push("noimageindex");
    if (notranslate)
      robotsContent.push("notranslate");
  }
  if (robotsContent.length > 0) {
    addTag(createMetaTag({ name: "robots", content: robotsContent.join(",") }));
  }
  if (config.canonical) {
    addTag(createLinkTag({ rel: "canonical", href: config.canonical }));
  }
  if (config.mobileAlternate) {
    addTag(createLinkTag({ rel: "alternate", media: config.mobileAlternate.media, href: config.mobileAlternate.href }));
  }
  if (config.languageAlternates && config.languageAlternates.length > 0) {
    config.languageAlternates.forEach((languageAlternate) => {
      addTag(createLinkTag({ rel: "alternate", hrefLang: languageAlternate.hrefLang, href: languageAlternate.href }));
    });
  }
  if (config.openGraph) {
    const title = config.openGraph?.title || config.title;
    if (title) {
      addTag(createOpenGraphTag("title", title));
    }
    const description = config.openGraph?.description || config.description;
    if (description) {
      addTag(createOpenGraphTag("description", description));
    }
    if (config.openGraph.url) {
      addTag(createOpenGraphTag("url", config.openGraph.url));
    }
    if (config.openGraph.type) {
      addTag(createOpenGraphTag("type", config.openGraph.type));
    }
    if (config.openGraph.images && config.openGraph.images.length) {
      addTag(buildOpenGraphMediaTags("image", config.openGraph.images));
    }
    if (config.openGraph.videos && config.openGraph.videos.length) {
      addTag(buildOpenGraphMediaTags("video", config.openGraph.videos));
    }
    if (config.openGraph.locale) {
      addTag(createOpenGraphTag("locale", config.openGraph.locale));
    }
    if (config.openGraph.site_name) {
      addTag(createOpenGraphTag("site_name", config.openGraph.site_name));
    }
    if (config.openGraph.profile) {
      if (config.openGraph.profile.firstName) {
        addTag(createOpenGraphTag("profile:first_name", config.openGraph.profile.firstName));
      }
      if (config.openGraph.profile.lastName) {
        addTag(createOpenGraphTag("profile:last_name", config.openGraph.profile.lastName));
      }
      if (config.openGraph.profile.username) {
        addTag(createOpenGraphTag("profile:username", config.openGraph.profile.username));
      }
      if (config.openGraph.profile.gender) {
        addTag(createOpenGraphTag("profile:gender", config.openGraph.profile.gender));
      }
    }
    if (config.openGraph.book) {
      if (config.openGraph.book.authors && config.openGraph.book.authors.length) {
        config.openGraph.book.authors.forEach((author) => {
          addTag(createOpenGraphTag("book:author", author));
        });
      }
      if (config.openGraph.book.isbn) {
        addTag(createOpenGraphTag("book:isbn", config.openGraph.book.isbn));
      }
      if (config.openGraph.book.releaseDate) {
        addTag(createOpenGraphTag("book:release_date", config.openGraph.book.releaseDate));
      }
      if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
        config.openGraph.book.tags.forEach((tag) => {
          addTag(createOpenGraphTag("book:tag", tag));
        });
      }
    }
    if (config.openGraph.article) {
      if (config.openGraph.article.publishedTime) {
        addTag(createOpenGraphTag("article:published_time", config.openGraph.article.publishedTime));
      }
      if (config.openGraph.article.modifiedTime) {
        addTag(createOpenGraphTag("article:modified_time", config.openGraph.article.modifiedTime));
      }
      if (config.openGraph.article.expirationTime) {
        addTag(createOpenGraphTag("article:expiration_time", config.openGraph.article.expirationTime));
      }
      if (config.openGraph.article.authors && config.openGraph.article.authors.length) {
        config.openGraph.article.authors.forEach((author) => {
          addTag(createOpenGraphTag("article:author", author));
        });
      }
      if (config.openGraph.article.section) {
        addTag(createOpenGraphTag("article:section", config.openGraph.article.section));
      }
      if (config.openGraph.article.tags && config.openGraph.article.tags.length) {
        config.openGraph.article.tags.forEach((tag) => {
          addTag(createOpenGraphTag("article:tag", tag));
        });
      }
    }
    if (config.openGraph.video) {
      if (config.openGraph.video.actors && config.openGraph.video.actors.length) {
        config.openGraph.video.actors.forEach((actor) => {
          addTag(createOpenGraphTag("video:actor", actor.profile));
          if (actor.role) {
            addTag(createOpenGraphTag("video:actor:role", actor.role));
          }
        });
      }
      if (config.openGraph.video.directors && config.openGraph.video.directors.length) {
        config.openGraph.video.directors.forEach((director) => {
          addTag(createOpenGraphTag("video:director", director));
        });
      }
      if (config.openGraph.video.writers && config.openGraph.video.writers.length) {
        config.openGraph.video.writers.forEach((writer) => {
          addTag(createOpenGraphTag("video:writer", writer));
        });
      }
      if (config.openGraph.video.duration) {
        addTag(createOpenGraphTag("video:duration", config.openGraph.video.duration.toString()));
      }
      if (config.openGraph.video.releaseDate) {
        addTag(createOpenGraphTag("video:release_date", config.openGraph.video.releaseDate));
      }
      if (config.openGraph.video.tags && config.openGraph.video.tags.length) {
        config.openGraph.video.tags.forEach((tag) => {
          addTag(createOpenGraphTag("video:tag", tag));
        });
      }
      if (config.openGraph.video.series) {
        addTag(createOpenGraphTag("video:series", config.openGraph.video.series));
      }
    }
  }
  if (config.facebook && config.facebook.appId) {
    addTag(createMetaTag({ property: "fb:app_id", content: config.facebook.appId }));
  }
  if (config.twitter) {
    if (config.twitter.cardType) {
      addTag(createMetaTag({ name: "twitter:card", content: config.twitter.cardType }));
    }
    if (config.twitter.site) {
      addTag(createMetaTag({ name: "twitter:site", content: config.twitter.site }));
    }
    if (config.twitter.handle) {
      addTag(createMetaTag({ name: "twitter:creator", content: config.twitter.handle }));
    }
  }
  if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
    config.additionalMetaTags.forEach((metaTag) => {
      const attributes = {
        content: metaTag.content
      };
      if ("name" in metaTag && metaTag.name) {
        attributes.name = metaTag.name;
      } else if ("property" in metaTag && metaTag.property) {
        attributes.property = metaTag.property;
      } else if ("httpEquiv" in metaTag && metaTag.httpEquiv) {
        attributes["http-equiv"] = metaTag.httpEquiv;
      }
      addTag(createMetaTag(attributes));
    });
  }
  if (config.additionalLinkTags && config.additionalLinkTags.length > 0) {
    config.additionalLinkTags.forEach((linkTag) => {
      const attributes = {
        rel: linkTag.rel,
        href: linkTag.href
      };
      if (linkTag.sizes) {
        attributes.sizes = linkTag.sizes;
      }
      if (linkTag.media) {
        attributes.media = linkTag.media;
      }
      if (linkTag.type) {
        attributes.type = linkTag.type;
      }
      if (linkTag.color) {
        attributes.color = linkTag.color;
      }
      if (linkTag.as) {
        attributes.as = linkTag.as;
      }
      if (linkTag.crossOrigin) {
        attributes.crossorigin = linkTag.crossOrigin;
      }
      addTag(createLinkTag(attributes));
    });
  }
  return tagsToRender.trim();
};

const $$Astro$7 = createAstro("https://j-hsu.com");
const $$AstroSeo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$AstroSeo;
  const {
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(buildTags({
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  }))}` })}`;
}, "C:/Users/Jonathan/git/jhsu-com/node_modules/@astrolib/seo/src/AstroSeo.astro", void 0);

const load = async function() {
  let images = void 0;
  try {
    images = /* #__PURE__ */ Object.assign({"/src/assets/images/app-store.png": () => import('../app-store_8c19e6c3.mjs'),"/src/assets/images/default.png": () => import('../default_22e1abdf.mjs'),"/src/assets/images/google-play.png": () => import('../google-play_f6c5ae54.mjs'),"/src/assets/images/hero.png": () => import('../hero_1625d002.mjs')});
  } catch (e) {
  }
  return images;
};
let _images = void 0;
const fetchLocalImages = async () => {
  _images = _images || await load();
  return _images;
};
const findImage = async (imagePath) => {
  if (typeof imagePath !== "string") {
    return imagePath;
  }
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://") || imagePath.startsWith("/")) {
    return imagePath;
  }
  if (!imagePath.startsWith("~/assets/images")) {
    return imagePath;
  }
  const images = await fetchLocalImages();
  const key = imagePath.replace("~/", "/src/");
  return images && typeof images[key] === "function" ? (await images[key]())["default"] : null;
};
const adaptOpenGraphImages = async (openGraph = {}, astroSite = new URL("")) => {
  if (!openGraph?.images?.length) {
    return openGraph;
  }
  const images = openGraph.images;
  const defaultWidth = 1200;
  const defaultHeight = 626;
  const adaptedImages = await Promise.all(
    images.map(async (image) => {
      if (image?.url) {
        const resolvedImage = await findImage(image.url);
        if (!resolvedImage) {
          return {
            url: ""
          };
        }
        const _image = await getImage({
          src: resolvedImage,
          alt: "Placeholder alt",
          width: image?.width || defaultWidth,
          height: image?.height || defaultHeight
        });
        if (typeof _image === "object") {
          return {
            url: typeof _image.src === "string" ? String(new URL(_image.src, astroSite)) : "pepe",
            width: typeof _image.width === "number" ? _image.width : void 0,
            height: typeof _image.height === "number" ? _image.height : void 0
          };
        }
        return {
          url: ""
        };
      }
      return {
        url: ""
      };
    })
  );
  return { ...openGraph, ...adaptedImages ? { images: adaptedImages } : {} };
};

const $$Astro$6 = createAstro("https://j-hsu.com");
const $$Metadata = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Metadata;
  const {
    title,
    ignoreTitleTemplate = false,
    canonical = String(getCanonical(String(Astro2.url.pathname))),
    robots = {},
    description,
    openGraph = {},
    twitter = {}
  } = Astro2.props;
  const seoProps = merge(
    {
      title: "",
      titleTemplate: "%s",
      canonical,
      noindex: true,
      nofollow: true,
      description: void 0,
      openGraph: {
        url: canonical,
        site_name: SITE?.name,
        images: [],
        locale: I18N?.language || "en",
        type: "website"
      },
      twitter: {
        cardType: openGraph?.images?.length ? "summary_large_image" : "summary"
      }
    },
    {
      title: METADATA?.title?.default,
      titleTemplate: METADATA?.title?.template,
      noindex: typeof METADATA?.robots?.index !== "undefined" ? !METADATA.robots.index : void 0,
      nofollow: typeof METADATA?.robots?.follow !== "undefined" ? !METADATA.robots.follow : void 0,
      description: METADATA?.description,
      openGraph: METADATA?.openGraph,
      twitter: METADATA?.twitter
    },
    {
      title,
      titleTemplate: ignoreTitleTemplate ? "%s" : void 0,
      canonical,
      noindex: typeof robots?.index !== "undefined" ? !robots.index : void 0,
      nofollow: typeof robots?.follow !== "undefined" ? !robots.follow : void 0,
      description,
      openGraph: { url: canonical, ...openGraph },
      twitter
    }
  );
  return renderTemplate`${renderComponent($$result, "AstroSeo", $$AstroSeo, { ...{ ...seoProps, openGraph: await adaptOpenGraphImages(seoProps?.openGraph, Astro2.site) } })}`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/common/Metadata.astro", void 0);

const $$Astro$5 = createAstro("https://j-hsu.com");
const $$SiteVerification = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SiteVerification;
  return renderTemplate`${SITE.googleSiteVerificationId && renderTemplate`<meta name="google-site-verification"${addAttribute(SITE.googleSiteVerificationId, "content")}>`}`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/common/SiteVerification.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://j-hsu.com");
const $$GoogleAnalytics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$GoogleAnalytics;
  const { id = "GA_MEASUREMENT_ID", partytown = false } = Astro2.props;
  const attrs = partytown ? { type: "text/partytown" } : {};
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script async", "", "><\/script><script", ">(function(){", '\n  window.dataLayer = window.dataLayer || [];\n  function gtag() {\n    window.dataLayer.push(arguments);\n  }\n  gtag("js", new Date());\n  gtag("config", id);\n})();<\/script>'])), addAttribute(`https://www.googletagmanager.com/gtag/js?id=${id}`, "src"), spreadAttributes(attrs), spreadAttributes(attrs), defineScriptVars({ id }));
}, "C:/Users/Jonathan/git/jhsu-com/node_modules/@astrolib/analytics/src/GoogleAnalytics.astro", void 0);

const $$Astro$3 = createAstro("https://j-hsu.com");
const $$Analytics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Analytics;
  return renderTemplate`${ANALYTICS?.vendors?.googleAnalytics?.id ? renderTemplate`${renderComponent($$result, "GoogleAnalytics", $$GoogleAnalytics, { "id": String(ANALYTICS.vendors.googleAnalytics.id), "partytown": ANALYTICS?.vendors?.googleAnalytics?.partytown })}` : null}`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/common/Analytics.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://j-hsu.com");
const $$BasicScripts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BasicScripts;
  return renderTemplate(_a || (_a = __template(["<script>(function(){", `
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {
    applyTheme(defaultTheme.replace(':only', ''));
  } else if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  function attachEvent(selector, event, fn) {
    const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;
    if (matches && matches.length) {
      matches.forEach((elem) => {
        elem.addEventListener(event, (e) => fn(e, elem), false);
      });
    }
  }

  window.onload = function () {
    let lastKnownScrollPosition = window.scrollY;
    let ticking = true;

    attachEvent('#header nav', 'click', function () {
      document.querySelector("[data-aw-toggle-menu]")?.classList.remove("expanded");
      document.body.classList.remove("overflow-hidden");
      document.getElementById("header")?.classList.remove("h-screen");
      document.getElementById("header")?.classList.remove("expanded");
      document.getElementById("header")?.classList.remove("bg-page");
      document.querySelector("#header nav")?.classList.add("hidden");
      document.querySelector("#header > div > div:last-child")?.classList.add("hidden");
    });

    attachEvent('[data-aw-toggle-menu]', 'click', function (_, elem) {
      elem.classList.toggle("expanded");
      document.body.classList.toggle("overflow-hidden");
      document.getElementById("header")?.classList.toggle("h-screen");
      document.getElementById("header")?.classList.toggle("expanded");
      document.getElementById("header")?.classList.toggle("bg-page");
      document.querySelector("#header nav")?.classList.toggle("hidden");
      document.querySelector("#header > div > div:last-child")?.classList.toggle("hidden");
    });

    attachEvent('[data-aw-toggle-color-scheme]', 'click', function () {
      if (defaultTheme.endsWith(':only')) {
        return;
      }
      document.documentElement.classList.toggle('dark');
      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });

    attachEvent('[data-aw-social-share]', 'click', function (_, elem) {
      const network = elem.getAttribute('data-aw-social-share');
      const url = encodeURIComponent(elem.getAttribute('data-aw-url'));
      const text = encodeURIComponent(elem.getAttribute('data-aw-text'));

      let href;
      switch (network) {
        case 'facebook':
          href = \`https://www.facebook.com/sharer.php?u=\${url}\`;
          break;
        case 'twitter':
          href = \`https://twitter.com/intent/tweet?url=\${url}&text=\${text}\`;
          break;
        case 'linkedin':
          href = \`https://www.linkedin.com/shareArticle?mini=true&url=\${url}&title=\${text}\`;
          break;
        case 'whatsapp':
          href = \`https://wa.me/?text=\${text}%20\${url}\`;
          break;
        case 'mail':
          href = \`mailto:?subject=%22\${text}%22&body=\${text}%20\${url}\`;
          break;

        default:
          return;
      }

      const newlink = document.createElement('a');
      newlink.target = '_blank';
      newlink.href = href;
      newlink.click();
    });

    function appyHeaderStylesOnScroll() {
      const header = document.getElementById('header');
      if (lastKnownScrollPosition > 60 && !header.classList.contains('scroll')) {
        document.getElementById('header').classList.add('scroll');
      } else if (lastKnownScrollPosition <= 60 && header.classList.contains('scroll')) {
        document.getElementById('header').classList.remove('scroll');
      }
      ticking = false;
    }
    appyHeaderStylesOnScroll();

    attachEvent([document], 'scroll', function () {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          appyHeaderStylesOnScroll();
        });
        ticking = true;
      }
    });
  };

  window.onpageshow = function () {
    document.documentElement.classList.add('motion-safe:scroll-smooth');
    const elem = document.querySelector('[data-aw-toggle-menu]');
    if (elem) {
      elem.classList.remove('expanded');
    }
    document.body.classList.remove("overflow-hidden");
    document.getElementById("header")?.classList.remove("h-screen");
    document.getElementById("header")?.classList.remove("expanded");
    document.querySelector("#header nav")?.classList.add("hidden");
  };
})();<\/script>`], ["<script>(function(){", `
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {
    applyTheme(defaultTheme.replace(':only', ''));
  } else if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  function attachEvent(selector, event, fn) {
    const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;
    if (matches && matches.length) {
      matches.forEach((elem) => {
        elem.addEventListener(event, (e) => fn(e, elem), false);
      });
    }
  }

  window.onload = function () {
    let lastKnownScrollPosition = window.scrollY;
    let ticking = true;

    attachEvent('#header nav', 'click', function () {
      document.querySelector("[data-aw-toggle-menu]")?.classList.remove("expanded");
      document.body.classList.remove("overflow-hidden");
      document.getElementById("header")?.classList.remove("h-screen");
      document.getElementById("header")?.classList.remove("expanded");
      document.getElementById("header")?.classList.remove("bg-page");
      document.querySelector("#header nav")?.classList.add("hidden");
      document.querySelector("#header > div > div:last-child")?.classList.add("hidden");
    });

    attachEvent('[data-aw-toggle-menu]', 'click', function (_, elem) {
      elem.classList.toggle("expanded");
      document.body.classList.toggle("overflow-hidden");
      document.getElementById("header")?.classList.toggle("h-screen");
      document.getElementById("header")?.classList.toggle("expanded");
      document.getElementById("header")?.classList.toggle("bg-page");
      document.querySelector("#header nav")?.classList.toggle("hidden");
      document.querySelector("#header > div > div:last-child")?.classList.toggle("hidden");
    });

    attachEvent('[data-aw-toggle-color-scheme]', 'click', function () {
      if (defaultTheme.endsWith(':only')) {
        return;
      }
      document.documentElement.classList.toggle('dark');
      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });

    attachEvent('[data-aw-social-share]', 'click', function (_, elem) {
      const network = elem.getAttribute('data-aw-social-share');
      const url = encodeURIComponent(elem.getAttribute('data-aw-url'));
      const text = encodeURIComponent(elem.getAttribute('data-aw-text'));

      let href;
      switch (network) {
        case 'facebook':
          href = \\\`https://www.facebook.com/sharer.php?u=\\\${url}\\\`;
          break;
        case 'twitter':
          href = \\\`https://twitter.com/intent/tweet?url=\\\${url}&text=\\\${text}\\\`;
          break;
        case 'linkedin':
          href = \\\`https://www.linkedin.com/shareArticle?mini=true&url=\\\${url}&title=\\\${text}\\\`;
          break;
        case 'whatsapp':
          href = \\\`https://wa.me/?text=\\\${text}%20\\\${url}\\\`;
          break;
        case 'mail':
          href = \\\`mailto:?subject=%22\\\${text}%22&body=\\\${text}%20\\\${url}\\\`;
          break;

        default:
          return;
      }

      const newlink = document.createElement('a');
      newlink.target = '_blank';
      newlink.href = href;
      newlink.click();
    });

    function appyHeaderStylesOnScroll() {
      const header = document.getElementById('header');
      if (lastKnownScrollPosition > 60 && !header.classList.contains('scroll')) {
        document.getElementById('header').classList.add('scroll');
      } else if (lastKnownScrollPosition <= 60 && header.classList.contains('scroll')) {
        document.getElementById('header').classList.remove('scroll');
      }
      ticking = false;
    }
    appyHeaderStylesOnScroll();

    attachEvent([document], 'scroll', function () {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          appyHeaderStylesOnScroll();
        });
        ticking = true;
      }
    });
  };

  window.onpageshow = function () {
    document.documentElement.classList.add('motion-safe:scroll-smooth');
    const elem = document.querySelector('[data-aw-toggle-menu]');
    if (elem) {
      elem.classList.remove('expanded');
    }
    document.body.classList.remove("overflow-hidden");
    document.getElementById("header")?.classList.remove("h-screen");
    document.getElementById("header")?.classList.remove("expanded");
    document.querySelector("#header nav")?.classList.add("hidden");
  };
})();<\/script>`])), defineScriptVars({ defaultTheme: UI.theme }));
}, "C:/Users/Jonathan/git/jhsu-com/src/components/common/BasicScripts.astro", void 0);

const $$Astro$1 = createAstro("https://j-hsu.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { metadata = {} } = Astro2.props;
  const { language, textDirection } = I18N;
  return renderTemplate`<html${addAttribute(language, "lang")}${addAttribute(textDirection, "dir")} class="2xl:text-[20px]"><head>${renderComponent($$result, "CommonMeta", $$CommonMeta, {})}${renderComponent($$result, "Favicons", $$Favicons, {})}${renderComponent($$result, "CustomStyles", $$CustomStyles, {})}${renderComponent($$result, "ApplyColorMode", $$ApplyColorMode, {})}${renderComponent($$result, "Metadata", $$Metadata, { ...metadata })}${renderComponent($$result, "SiteVerification", $$SiteVerification, {})}${renderComponent($$result, "Analytics", $$Analytics, {})}${renderHead()}</head><body class="antialiased text-default bg-page tracking-tight">${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "BasicScripts", $$BasicScripts, {})}</body></html>`;
}, "C:/Users/Jonathan/git/jhsu-com/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://j-hsu.com");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const title = `Error 404`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": { title } }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="flex items-center h-full p-16"><div class="container flex flex-col items-center justify-center px-5 mx-auto my-8"><div class="max-w-md text-center"><h2 class="mb-8 font-bold text-9xl"><span class="sr-only">Error</span><span class="text-primary">404</span></h2><p class="text-3xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p><p class="mt-4 mb-8 text-lg text-muted dark:text-slate-400">
But dont worry, you can find plenty of other things on our homepage.
</p><a rel="noopener noreferrer"${addAttribute(getHomePermalink(), "href")} class="btn ml-4">Back to homepage</a></div></div></section>` })}`;
}, "C:/Users/Jonathan/git/jhsu-com/src/pages/404.astro", void 0);

const $$file = "C:/Users/Jonathan/git/jhsu-com/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, APP_BLOG as A, BLOG_BASE as B, CATEGORY_BASE as C, I18N as I, METADATA as M, POST_PERMALINK_PATTERN as P, SITE as S, TAG_BASE as T, UI as U, _404 as _, getAsset as a, getPermalink as b, getImage as c, cleanSlug as d, getBlogPermalink as e, findImage as f, getHomePermalink as g, getFormattedDate as h, imageConfig as i, getCanonical as j, $$Image as k, trimSlash as t };
