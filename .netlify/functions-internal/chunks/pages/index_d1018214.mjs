import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, h as addAttribute, u as unescapeHTML, j as renderComponent, l as renderSlot, F as Fragment, A as AstroError, n as UnknownContentCollectionError, o as renderUniqueStylesheet, p as renderScriptElement, q as createHeadAndContent } from '../astro_f9e129f8.mjs';
import 'clsx';
import { S as SITE, U as UI, t as trimSlash, g as getHomePermalink, a as getAsset, b as getPermalink, $ as $$Layout, c as getImage, f as findImage, A as APP_BLOG, B as BLOG_BASE, C as CATEGORY_BASE, T as TAG_BASE, d as cleanSlug, P as POST_PERMALINK_PATTERN, e as getBlogPermalink } from './404_20c5fc28.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';
import { twMerge } from 'tailwind-merge';
import { parseUrl, transformUrl } from 'unpic';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$m = createAstro("https://j-hsu.com");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Icon;
  const req = Astro2.request;
  const { name = "", title, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new Error(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new Error('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new Error(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new Error(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new Error(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}>${title && renderTemplate`<title>${title}</title>`}${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use ${addAttribute(`#${id}`, "xlink:href")}></use></svg>`;
}, "C:/Users/Jonathan/git/jhsu-com/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$l = createAstro("https://j-hsu.com");
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead()}<span class="self-center ml-2 rtl:ml-0 rtl:mr-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white">${SITE?.name}</span>`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/Logo.astro", void 0);

const $$Astro$k = createAstro("https://j-hsu.com");
const $$ToggleTheme = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$ToggleTheme;
  const {
    label = "Toggle between Dark and Light mode",
    class: className = "text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center",
    iconClass = "w-6 h-6",
    iconName = "tabler:sun"
  } = Astro2.props;
  return renderTemplate`${!(UI.theme && UI.theme.endsWith(":only")) && renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-color-scheme>${renderComponent($$result, "Icon", $$Icon, { "name": iconName, "class": iconClass })}</button>`}`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/common/ToggleTheme.astro", void 0);

const $$Astro$j = createAstro("https://j-hsu.com");
const $$ToggleMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$ToggleMenu;
  const {
    label = "Toggle Menu",
    class: className = "flex flex-col h-12 w-12 rounded justify-center items-center cursor-pointer group"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-menu><span class="sr-only">${label}</span>${renderSlot($$result, $$slots["default"], renderTemplate`<span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:rotate-45 group-[.expanded]:translate-y-2.5"></span><span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:opacity-0"></span><span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:-rotate-45 group-[.expanded]:-translate-y-2.5"></span>`)}</button>`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/common/ToggleMenu.astro", void 0);

const $$Astro$i = createAstro("https://j-hsu.com");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "secondary",
    target,
    text = Astro2.slots.render("default"),
    icon = "",
    class: className = "",
    ...rest
  } = Astro2.props;
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    tertiary: "btn btn-tertiary",
    link: "cursor-pointer hover:text-primary"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(target ? { target, rel: "noopener noreferrer" } : {})}${spreadAttributes(rest)}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</a>`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/ui/Button.astro", void 0);

const $$Astro$h = createAstro("https://j-hsu.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Header;
  const {
    id = "header",
    links = [],
    actions = [],
    isSticky = false,
    isDark = false,
    isFullWidth = false,
    showToggleTheme = false,
    showRssFeed = false,
    position = "center"
  } = Astro2.props;
  const currentPath = `/${trimSlash(new URL(Astro2.url).pathname)}`;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute([
    { sticky: isSticky, relative: !isSticky, dark: isDark },
    "top-0 z-40 flex-none mx-auto w-full border-b border-gray-50/0 transition-[opacity] ease-in-out"
  ], "class:list")}${spreadAttributes(id ? { id } : {})}><div class="absolute inset-0"></div><div${addAttribute([
    "relative text-default py-3 px-3 md:px-6 mx-auto w-full md:flex md:justify-between",
    {
      "max-w-7xl": !isFullWidth
    }
  ], "class:list")}><div${addAttribute([{ "mr-auto rtl:mr-0 rtl:ml-auto": position === "right" }, "flex justify-between"], "class:list")}><a class="flex items-center"${addAttribute(getHomePermalink(), "href")}>${renderComponent($$result, "Logo", $$Logo, {})}</a><div class="flex items-center md:hidden">${renderComponent($$result, "ToggleMenu", $$ToggleMenu, {})}</div></div><nav class="items-center w-full md:w-auto hidden md:flex text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:mx-5" aria-label="Main navigation"><ul class="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium">${links.map(({ text, href, links: links2 }) => renderTemplate`<li${addAttribute(links2?.length ? "dropdown" : "", "class")}>${links2?.length ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<button class="hover:text-link dark:hover:text-white px-4 py-3 flex items-center">${text}${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-down", "class": "w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" })}</button><ul class="dropdown-menu md:backdrop-blur-md dark:md:bg-dark rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl">${links2.map(({ text: text2, href: href2 }) => renderTemplate`<li><a${addAttribute([
    "first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap",
    { "aw-link-active": href2 === currentPath }
  ], "class:list")}${addAttribute(href2, "href")}>${text2}</a></li>`)}</ul>` })}` : renderTemplate`<a${addAttribute([
    "hover:text-link dark:hover:text-white px-4 py-3 flex items-centers",
    { "aw-link-active": href === currentPath }
  ], "class:list")}${addAttribute(href, "href")}>${text}</a>`}</li>`)}</ul></nav><div${addAttribute([
    { "ml-auto rtl:ml-0 rtl:mr-auto": position === "left" },
    "hidden md:self-center flex md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0"
  ], "class:list")}><div class="items-center flex justify-between w-full md:w-auto"><div class="flex">${showToggleTheme && renderTemplate`${renderComponent($$result, "ToggleTheme", $$ToggleTheme, { "iconClass": "w-6 h-6 md:w-5 md:h-5 md:inline-block" })}`}${showRssFeed && renderTemplate`<a class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center" aria-label="RSS Feed"${addAttribute(getAsset("/rss.xml"), "href")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:rss", "class": "w-5 h-5" })}</a>`}</div>${actions?.length ? renderTemplate`<span class="ml-4 rtl:ml-0 rtl:mr-4">${actions.map((btnProps) => renderTemplate`${renderComponent($$result, "Button", $$Button, { ...btnProps, "class": "ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto" })}`)}</span>` : ""}</div></div></div></header>`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/widgets/Header.astro", void 0);

const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/#about' },
    { text: 'Resume', href: '/#resume' },
    { text: 'Porfolio', href: '/#porfolio' },
    { text: 'Blog', href: '/blog' },
  ],
  actions: [
    {
      text: 'Hire me',
      href: '#',
    },
  ],
};

({
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
});

const $$Astro$g = createAstro("https://j-hsu.com");
const $$PageLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { metadata } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["announcement"], renderTemplate`<!-- <Announcement /> -->`)}${renderSlot($$result2, $$slots["header"], renderTemplate`${renderComponent($$result2, "Header", $$Header, { ...headerData, "isSticky": true, "showRssFeed": true, "showToggleTheme": true })}`)}${maybeRenderHead()}<main>${renderSlot($$result2, $$slots["default"])}</main>${renderSlot($$result2, $$slots["footer"], renderTemplate`<!-- <Footer {...footerData} /> -->`)}` })}`;
}, "C:/Users/Jonathan/git/jhsu-com/src/layouts/PageLayout.astro", void 0);

const config = {
  // FIXME: Use this when image.width is minor than deviceSizes
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  deviceSizes: [
    640,
    // older and lower-end phones
    750,
    // iPhone 6-8
    828,
    // iPhone XR/11
    960,
    // older horizontal phones
    1080,
    // iPhone 6-8 Plus
    1280,
    // 720p
    1668,
    // Various iPads
    1920,
    // 1080p
    2048,
    // QXGA
    2560,
    // WQXGA
    3200,
    // QHD+
    3840,
    // 4K
    4480,
    // 4.5K
    5120,
    // 5K
    6016
    // 6K
  ],
  formats: ["image/webp"]
};
const computeHeight = (width, aspectRatio) => {
  return Math.floor(width / aspectRatio);
};
const parseAspectRatio = (aspectRatio) => {
  if (typeof aspectRatio === "number")
    return aspectRatio;
  if (typeof aspectRatio === "string") {
    const match = aspectRatio.match(/(\d+)\s*[/:]\s*(\d+)/);
    if (match) {
      const [, num, den] = match.map(Number);
      if (den && !isNaN(num))
        return num / den;
    } else {
      const numericValue = parseFloat(aspectRatio);
      if (!isNaN(numericValue))
        return numericValue;
    }
  }
  return void 0;
};
const getSizes = (width, layout) => {
  if (!width || !layout) {
    return void 0;
  }
  switch (layout) {
    case `constrained`:
      return `(min-width: ${width}px) ${width}px, 100vw`;
    case `fixed`:
      return `${width}px`;
    case `fullWidth`:
      return `100vw`;
    default:
      return void 0;
  }
};
const pixelate = (value) => value || value === 0 ? `${value}px` : void 0;
const getStyle = ({
  width,
  height,
  aspectRatio,
  layout,
  objectFit = "cover",
  objectPosition = "center",
  background
}) => {
  const styleEntries = [
    ["object-fit", objectFit],
    ["object-position", objectPosition]
  ];
  if (background?.startsWith("https:") || background?.startsWith("http:") || background?.startsWith("data:")) {
    styleEntries.push(["background-image", `url(${background})`]);
    styleEntries.push(["background-size", "cover"]);
    styleEntries.push(["background-repeat", "no-repeat"]);
  } else {
    styleEntries.push(["background", background]);
  }
  if (layout === "fixed") {
    styleEntries.push(["width", pixelate(width)]);
    styleEntries.push(["height", pixelate(height)]);
    styleEntries.push(["object-position", "top left"]);
  }
  if (layout === "constrained") {
    styleEntries.push(["max-width", pixelate(width)]);
    styleEntries.push(["max-height", pixelate(height)]);
    styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
    styleEntries.push(["width", "100%"]);
  }
  if (layout === "fullWidth") {
    styleEntries.push(["width", "100%"]);
    styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
    styleEntries.push(["height", pixelate(height)]);
  }
  if (layout === "responsive") {
    styleEntries.push(["width", "100%"]);
    styleEntries.push(["height", "auto"]);
    styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
  }
  if (layout === "contained") {
    styleEntries.push(["max-width", "100%"]);
    styleEntries.push(["max-height", "100%"]);
    styleEntries.push(["object-fit", "contain"]);
    styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
  }
  if (layout === "cover") {
    styleEntries.push(["max-width", "100%"]);
    styleEntries.push(["max-height", "100%"]);
  }
  const styles = Object.fromEntries(styleEntries.filter(([, value]) => value));
  return Object.entries(styles).map(([key, value]) => `${key}: ${value};`).join(" ");
};
const getBreakpoints = ({
  width,
  breakpoints,
  layout
}) => {
  if (layout === "fullWidth" || layout === "cover" || layout === "responsive" || layout === "contained") {
    return breakpoints || config.deviceSizes;
  }
  if (!width) {
    return [];
  }
  const doubleWidth = width * 2;
  if (layout === "fixed") {
    return [width, doubleWidth];
  }
  if (layout === "constrained") {
    return [
      // Always include the image at 1x and 2x the specified width
      width,
      doubleWidth,
      // Filter out any resolutions that are larger than the double-res image
      ...(breakpoints || config.deviceSizes).filter((w) => w < doubleWidth)
    ];
  }
  return [];
};
const astroAsseetsOptimizer = async (image, breakpoints) => {
  if (!image || typeof image === "string") {
    return [];
  }
  return Promise.all(
    breakpoints.map(async (w) => {
      const url = (await getImage({ src: image, width: w })).src;
      return {
        src: url,
        width: w
      };
    })
  );
};
const unpicOptimizer = async (image, breakpoints, width, height) => {
  if (!image || typeof image !== "string") {
    return [];
  }
  const urlParsed = parseUrl(image);
  if (!urlParsed) {
    return [];
  }
  return Promise.all(
    breakpoints.map(async (w) => {
      const url = await transformUrl({
        url: image,
        width: w,
        height: width && height ? computeHeight(w, width / height) : height,
        cdn: urlParsed.cdn
      }) || image;
      return {
        src: String(url),
        width: w
      };
    })
  );
};
async function getImagesOptimized(image, { src: _, width, height, sizes, aspectRatio, widths, layout = "constrained", style = "", ...rest }, transform = () => Promise.resolve([])) {
  if (typeof image !== "string") {
    width ||= Number(image.width) || void 0;
    height ||= typeof width === "number" ? computeHeight(width, image.width / image.height) : void 0;
  }
  width = width && Number(width) || void 0;
  height = height && Number(height) || void 0;
  widths ||= config.deviceSizes;
  sizes ||= getSizes(Number(width) || void 0, layout);
  aspectRatio = parseAspectRatio(aspectRatio);
  if (aspectRatio) {
    if (width) {
      if (height) ; else {
        height = width / aspectRatio;
      }
    } else if (height) {
      width = Number(height * aspectRatio);
    } else if (layout !== "fullWidth") {
      console.error("When aspectRatio is set, either width or height must also be set");
      console.error("Image", image);
    }
  } else if (width && height) {
    aspectRatio = width / height;
  } else if (layout !== "fullWidth") {
    console.error("Either aspectRatio or both width and height must be set");
    console.error("Image", image);
  }
  let breakpoints = getBreakpoints({ width, breakpoints: widths, layout });
  breakpoints = [...new Set(breakpoints)].sort((a, b) => a - b);
  const srcset = (await transform(image, breakpoints, Number(width) || void 0, Number(height) || void 0)).map(({ src, width: width2 }) => `${src} ${width2}w`).join(", ");
  return {
    src: typeof image === "string" ? image : image.src,
    attributes: {
      width,
      height,
      srcset: srcset || void 0,
      sizes,
      style: `${getStyle({
        width,
        height,
        aspectRatio,
        layout
      })}${style ?? ""}`,
      ...rest
    }
  };
}

const $$Astro$f = createAstro("https://j-hsu.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new Error();
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  if (!props.loading) {
    props.loading = "lazy";
  }
  if (!props.decoding) {
    props.decoding = "async";
  }
  const _image = await findImage(props.src);
  let image = void 0;
  if (_image !== null && typeof _image === "object") {
    image = await getImagesOptimized(_image, props, astroAsseetsOptimizer);
  } else if (typeof _image === "string" && (_image.startsWith("http://") || _image.startsWith("https://"))) {
    image = await getImagesOptimized(_image, props, unpicOptimizer);
  } else if (_image) {
    image = await getImagesOptimized(_image, props);
  }
  return renderTemplate`${!image ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}` : renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(image.attributes)}>`}`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/common/Image.astro", void 0);

const $$Astro$e = createAstro("https://j-hsu.com");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    id,
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    actions = await Astro2.slots.render("actions"),
    image = await Astro2.slots.render("image")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"${spreadAttributes(id ? { id } : {})}><div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div><div class="relative max-w-7xl mx-auto px-4 sm:px-6"><div class="pt-0 md:pt-[76px] pointer-events-none"></div><div class="py-12 md:py-20"><div class="text-center pb-10 md:pb-16 max-w-5xl mx-auto">${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`}${title && renderTemplate`<h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">${unescapeHTML(title)}</h1>`}<div class="max-w-3xl mx-auto">${subtitle && renderTemplate`<p class="text-xl text-muted mb-6 dark:text-slate-300">${unescapeHTML(subtitle)}</p>`}${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4">${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto">${renderComponent($$result, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0" })}</div>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(actions)}` })}`}</div>`}</div>${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`}</div><div>${image && renderTemplate`<div class="relative m-auto max-w-5xl">${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "mx-auto rounded-md w-full", "widths": [400, 768, 1024, 2040], "sizes": "(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px", "loading": "eager", "width": 1024, "height": 576, ...image })}`}</div>`}</div></div></div></section>`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/widgets/Hero.astro", void 0);

const $$Astro$d = createAstro("https://j-hsu.com");
const $$Headline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Headline;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    classes = {}
  } = Astro2.props;
  const {
    container: containerClass = "max-w-3xl",
    title: titleClass = "text-3xl md:text-4xl ",
    subtitle: subtitleClass = "text-xl"
  } = classes;
  return renderTemplate`${(title || subtitle || tagline) && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge("mb-8 md:mx-auto md:mb-12 text-center", containerClass), "class")}>${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`}${title && renderTemplate`<h2${addAttribute(twMerge(
    "font-bold leading-tighter tracking-tighter font-heading text-heading text-3xl",
    titleClass
  ), "class")}>${unescapeHTML(title)}</h2>`}${subtitle && renderTemplate`<p${addAttribute(twMerge("mt-4 text-muted", subtitleClass), "class")}>${unescapeHTML(subtitle)}</p>`}</div>`}`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/ui/Headline.astro", void 0);

const $$Astro$c = createAstro("https://j-hsu.com");
const $$Background = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Background;
  const { isDark = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["absolute inset-0", { "bg-dark dark:bg-transparent": isDark }], "class:list")}>${renderSlot($$result, $$slots["default"])}</div>`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/ui/Background.astro", void 0);

const $$Astro$b = createAstro("https://j-hsu.com");
const $$WidgetWrapper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$WidgetWrapper;
  const { id, isDark = false, containerClass = "", bg, as = "section" } = Astro2.props;
  const WrapperTag = as;
  return renderTemplate`${renderComponent($$result, "WrapperTag", WrapperTag, { "class": "relative not-prose scroll-mt-[72px]", ...id ? { id } : {} }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">${renderSlot($$result2, $$slots["bg"], renderTemplate`${bg ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(bg)}` })}` : renderTemplate`${renderComponent($$result2, "Background", $$Background, { "isDark": isDark })}`}`)}</div><div${addAttribute([
    twMerge("relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default", containerClass),
    { dark: isDark }
  ], "class:list")}>${renderSlot($$result2, $$slots["default"])}</div>` })}`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/ui/WidgetWrapper.astro", void 0);

const $$Astro$a = createAstro("https://j-hsu.com");
const $$ItemGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ItemGrid;
  const { items = [], columns, defaultIcon = "", classes = {} } = Astro2.props;
  const {
    container: containerClass = "",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary",
    action: actionClass = ""
  } = classes;
  return renderTemplate`${items && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge(
    `grid mx-auto gap-8 md:gap-y-12 ${columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2 " : ""}`,
    containerClass
  ), "class")}>${items.map(({ title, description, icon, callToAction, classes: itemClasses = {} }) => renderTemplate`<div><div${addAttribute(twMerge("flex flex-row max-w-md", panelClass, itemClasses?.panel), "class")}><div class="flex justify-center">${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge("w-7 h-7 mr-2 rtl:mr-0 rtl:ml-2", defaultIconClass, itemClasses?.icon) })}`}</div><div class="mt-0.5">${title && renderTemplate`<h3${addAttribute(twMerge("text-xl font-bold", titleClass, itemClasses?.title), "class")}>${title}</h3>`}${description && renderTemplate`<p${addAttribute(twMerge(`${title ? "mt-3" : ""} text-muted`, descriptionClass, itemClasses?.description), "class")}>${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div${addAttribute(twMerge(
    `${title || description ? "mt-3" : ""}`,
    actionClass,
    itemClasses?.actionClass
  ), "class")}>${renderComponent($$result, "Button", $$Button, { "variant": "link", ...callToAction })}</div>`}</div></div></div>`)}</div>`}`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/ui/ItemGrid.astro", void 0);

const $$Astro$9 = createAstro("https://j-hsu.com");
const $$Content = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Content;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    callToAction,
    items = [],
    columns,
    image = await Astro2.slots.render("image"),
    isReversed = false,
    isAfterContent = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${isAfterContent ? "pt-0 md:pt-0 lg:pt-0" : ""} ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "max-w-xl sm:mx-auto lg:max-w-2xl",
    title: "text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading",
    subtitle: "max-w-3xl mx-auto sm:text-center text-xl text-muted dark:text-slate-400"
  } })}${maybeRenderHead()}<div class="mx-auto max-w-7xl p-4 md:px-8"><div${addAttribute(`md:flex ${isReversed ? "md:flex-row-reverse" : ""} md:gap-16`, "class")}><div class="md:basis-1/2 self-center">${content && renderTemplate`<div class="mb-12 text-lg dark:text-slate-400">${unescapeHTML(content)}</div>`}${callToAction && renderTemplate`<div class="mt-[-40px] mb-8 text-primary">${renderComponent($$result2, "Button", $$Button, { "variant": "link", ...callToAction })}</div>`}${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": "tabler:check", "classes": {
    container: `gap-y-4 md:gap-y-8`,
    panel: "max-w-none",
    title: "text-lg font-medium leading-6 dark:text-white ml-2 rtl:ml-0 rtl:mr-2",
    description: "text-muted dark:text-slate-400 ml-2 rtl:ml-0 rtl:mr-2",
    icon: "flex h-7 w-7 items-center justify-center rounded-full bg-green-600 dark:bg-gray-300 text-gray-800 p-1",
    action: "text-lg font-medium leading-6 dark:text-white ml-2 rtl:ml-0 rtl:mr-2"
  } })}</div><div aria-hidden="true" class="mt-10 md:mt-0 md:basis-1/2">${image && renderTemplate`<div class="relative m-auto max-w-4xl">${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto w-full rounded-lg bg-gray-500 shadow-lg", "width": 500, "height": 500, "widths": [400, 768], "sizes": "(max-width: 768px) 100vw, 432px", "layout": "responsive", ...image })}`}</div>`}</div></div></div>` })}`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/widgets/Content.astro", void 0);

const $$Astro$8 = createAstro("https://j-hsu.com");
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    actions = await Astro2.slots.render("actions"),
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="max-w-3xl mx-auto text-center p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600">${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "mb-0 md:mb-0",
    title: "text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading",
    subtitle: "text-xl text-muted dark:text-slate-400"
  } })}${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 mt-6">${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto">${renderComponent($$result2, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0" })}</div>`) : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(actions)}` })}`}</div>`}</div>` })}`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/widgets/CallToAction.astro", void 0);

const $$Astro$7 = createAstro("https://j-hsu.com");
const $$Features3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Features3;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    image,
    items = [],
    columns,
    defaultIcon,
    isBeforeContent,
    isAfterContent,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `${isBeforeContent ? "md:pb-8 lg:pb-12" : ""} ${isAfterContent ? "pt-0 md:pt-0 lg:pt-0" : ""} ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": classes?.headline })}${maybeRenderHead()}<div aria-hidden="true" class="aspect-w-16 aspect-h-7">${image && renderTemplate`<div class="w-full h-80 object-cover rounded-xl mx-auto bg-gray-500 shadow-lg">${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "w-full h-80 object-cover rounded-xl mx-auto bg-gray-500 shadow-lg", "width": "auto", "height": 320, "widths": [400, 768], "layout": "fullWidth", ...image })}`}</div>`}</div>${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": defaultIcon, "classes": {
    container: "mt-12",
    panel: "max-w-full sm:max-w-md",
    title: "text-lg font-semibold",
    description: "mt-0.5",
    icon: "flex-shrink-0 mt-1 text-primary w-6 h-6",
    ...classes?.items ?? {}
  } })}` })}`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/widgets/Features3.astro", void 0);

const $$Astro$6 = createAstro("https://j-hsu.com");
const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    testimonials = [],
    callToAction,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })}${maybeRenderHead()}<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">${testimonials && testimonials.map(({ title: title2, testimonial, name, job, image }) => renderTemplate`<div class="flex h-auto"><div class="flex flex-col p-4 md:p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600">${title2 && renderTemplate`<h2 class="text-lg font-medium leading-6 pb-4">${title2}</h2>`}${testimonial && renderTemplate`<blockquote class="flex-auto"><p class="text-muted">" ${testimonial} "</p></blockquote>`}<hr class="border-slate-200 dark:border-slate-600 my-4"><div class="flex items-center">${image && renderTemplate`<div class="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600">${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600 min-w-full min-h-full", "width": 40, "height": 40, "widths": [400, 768], "layout": "fixed", ...image })}`}</div>`}<div class="grow ml-3 rtl:ml-0 rtl:mr-3">${name && renderTemplate`<p class="text-base font-semibold">${name}</p>`}${job && renderTemplate`<p class="text-xs text-muted">${job}</p>`}</div></div></div></div>`)}</div>${callToAction && renderTemplate`<div class="flex justify-center mx-auto w-fit mt-8 md:mt-12 font-medium">${renderComponent($$result2, "Button", $$Button, { ...callToAction })}</div>`}` })}`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/widgets/Testimonials.astro", void 0);

const $$Astro$5 = createAstro("https://j-hsu.com");
const $$Timeline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Timeline;
  const { items = [], classes = {}, defaultIcon } = Astro2.props;
  const {
    container: containerClass = "",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary dark:text-slate-200 border-primary dark:border-blue-700"
  } = classes;
  return renderTemplate`${items && items.length && renderTemplate`${maybeRenderHead()}<div${addAttribute(containerClass, "class")}>${items.map(
    ({ title, description, icon, classes: itemClasses = {} }, index = 0) => renderTemplate`<div${addAttribute(twMerge("flex", panelClass, itemClasses?.panel), "class")}><div class="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4"><div><div class="flex items-center justify-center">${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge(
      "w-10 h-10 p-2 rounded-full border-2",
      defaultIconClass,
      itemClasses?.icon
    ) })}`}</div></div>${index !== items.length - 1 && renderTemplate`<div class="w-px h-full bg-black/10 dark:bg-slate-400/50"></div>`}</div><div${addAttribute(`pt-1 ${index !== items.length - 1 ? "pb-8" : ""}`, "class")}>${title && renderTemplate`<p${addAttribute(twMerge(
      "text-xl font-bold",
      titleClass,
      itemClasses?.title
    ), "class")}>${unescapeHTML(title)}</p>`}${description && renderTemplate`<p${addAttribute(twMerge(
      "text-muted mt-2",
      descriptionClass,
      itemClasses?.description
    ), "class")}>${unescapeHTML(description)}</p>`}</div></div>`
  )}</div>`}`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/ui/Timeline.astro", void 0);

const $$Astro$4 = createAstro("https://j-hsu.com");
const $$Steps = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Steps;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    image = await Astro2.slots.render("image"),
    isReversed = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex flex-col gap-8 md:gap-12", { "md:flex-row-reverse": isReversed }, { "md:flex-row": image }], "class:list")}><div${addAttribute(["md:py-4 md:self-center", { "md:basis-1/2": image }, { "w-full": !image }], "class:list")}>${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "text-left rtl:text-right",
    title: "text-3xl lg:text-4xl",
    ...classes?.headline ?? {}
  } })}${renderComponent($$result2, "Timeline", $$Timeline, { "items": items, "classes": classes?.items })}</div>${image && renderTemplate`<div class="relative md:basis-1/2">${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "inset-0 object-cover object-top w-full rounded-md shadow-lg md:absolute md:h-full bg-gray-400 dark:bg-slate-700", "widths": [400, 768], "sizes": "(max-width: 768px) 100vw, 432px", "width": 432, "height": 768, "layout": "cover", "src": image?.src, "alt": image?.alt || "" })}`}</div>`}</div>` })}`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/widgets/Steps.astro", void 0);

const $$Astro$3 = createAstro("https://j-hsu.com");
const $$GridItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$GridItem;
  const { post } = Astro2.props;
  const image = await findImage(post.image);
  return renderTemplate`${maybeRenderHead()}<article class="mb-6 transition"><div class="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6">${image && renderTemplate`<a${addAttribute(getPermalink(post.permalink, "post"), "href")}>${renderComponent($$result, "Image", $$Image, { "src": image, "class": "w-full md:h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700", "widths": [400, 900], "width": 400, "sizes": "(max-width: 900px) 400px, 900px", "alt": post.title, "aspectRatio": "16:9", "layout": "cover", "loading": "lazy", "decoding": "async" })}</a>`}</div><h3 class="mb-2 text-xl font-bold leading-tight sm:text-2xl font-heading">${!APP_BLOG?.post?.isEnabled ? post.title : renderTemplate`<a${addAttribute(getPermalink(post.permalink, "post"), "href")} class="hover:text-primary dark:hover:text-blue-700  transition ease-in duration-200">${post.title}</a>`}</h3><p class="text-muted dark:text-slate-400 text-lg">${post.excerpt}</p></article>`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/blog/GridItem.astro", void 0);

const $$Astro$2 = createAstro("https://j-hsu.com");
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Grid;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-6 row-gap-5 md:grid-cols-2 lg:grid-cols-4 -mb-6">${posts.map((post) => renderTemplate`${renderComponent($$result, "Item", $$GridItem, { "post": post })}`)}</div>`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/blog/Grid.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post/astrowind-template-in-depth.mdx": () => import('../astrowind-template-in-depth_687d978c.mjs'),"/src/content/post/get-started-website-with-astro-tailwind-css.md": () => import('../get-started-website-with-astro-tailwind-css_f2f5d6d3.mjs'),"/src/content/post/how-to-customize-astrowind-to-your-brand.md": () => import('../how-to-customize-astrowind-to-your-brand_6a298242.mjs'),"/src/content/post/landing.md": () => import('../landing_eb78020c.mjs'),"/src/content/post/markdown-elements-demo-post.mdx": () => import('../markdown-elements-demo-post_355ac344.mjs'),"/src/content/post/useful-resources-to-create-websites.md": () => import('../useful-resources-to-create-websites_9232a189.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"post":{"type":"content","entries":{"astrowind-template-in-depth":"/src/content/post/astrowind-template-in-depth.mdx","get-started-website-with-astro-tailwind-css":"/src/content/post/get-started-website-with-astro-tailwind-css.md","landing":"/src/content/post/landing.md","how-to-customize-astrowind-to-your-brand":"/src/content/post/how-to-customize-astrowind-to-your-brand.md","markdown-elements-demo-post":"/src/content/post/markdown-elements-demo-post.mdx","useful-resources-to-create-websites":"/src/content/post/useful-resources-to-create-websites.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post/astrowind-template-in-depth.mdx": () => import('../astrowind-template-in-depth_84734347.mjs'),"/src/content/post/get-started-website-with-astro-tailwind-css.md": () => import('../get-started-website-with-astro-tailwind-css_a6b524df.mjs'),"/src/content/post/how-to-customize-astrowind-to-your-brand.md": () => import('../how-to-customize-astrowind-to-your-brand_959d7d69.mjs'),"/src/content/post/landing.md": () => import('../landing_5cfd6820.mjs'),"/src/content/post/markdown-elements-demo-post.mdx": () => import('../markdown-elements-demo-post_214b1439.mjs'),"/src/content/post/useful-resources-to-create-websites.md": () => import('../useful-resources-to-create-websites_a2468fda.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const generatePermalink = async ({
  id,
  slug,
  publishDate,
  category
}) => {
  const year = String(publishDate.getFullYear()).padStart(4, "0");
  const month = String(publishDate.getMonth() + 1).padStart(2, "0");
  const day = String(publishDate.getDate()).padStart(2, "0");
  const hour = String(publishDate.getHours()).padStart(2, "0");
  const minute = String(publishDate.getMinutes()).padStart(2, "0");
  const second = String(publishDate.getSeconds()).padStart(2, "0");
  const permalink = POST_PERMALINK_PATTERN.replace("%slug%", slug).replace("%id%", id).replace("%category%", category || "").replace("%year%", year).replace("%month%", month).replace("%day%", day).replace("%hour%", hour).replace("%minute%", minute).replace("%second%", second);
  return permalink.split("/").map((el) => trimSlash(el)).filter((el) => !!el).join("/");
};
const getNormalizedPost = async (post) => {
  const { id, slug: rawSlug = "", data } = post;
  const { Content, remarkPluginFrontmatter } = await post.render();
  const {
    publishDate: rawPublishDate = /* @__PURE__ */ new Date(),
    updateDate: rawUpdateDate,
    title,
    excerpt,
    image,
    tags: rawTags = [],
    category: rawCategory,
    author,
    draft = false,
    metadata = {}
  } = data;
  const slug = cleanSlug(rawSlug);
  const publishDate = new Date(rawPublishDate);
  const updateDate = rawUpdateDate ? new Date(rawUpdateDate) : void 0;
  const category = rawCategory ? cleanSlug(rawCategory) : void 0;
  const tags = rawTags.map((tag) => cleanSlug(tag));
  return {
    id,
    slug,
    permalink: await generatePermalink({ id, slug, publishDate, category }),
    publishDate,
    updateDate,
    title,
    excerpt,
    image,
    category,
    tags,
    author,
    draft,
    metadata,
    Content,
    // or 'content' in case you consume from API
    readingTime: remarkPluginFrontmatter?.readingTime
  };
};
const load = async function() {
  const posts = await getCollection("post");
  const normalizedPosts = posts.map(async (post) => await getNormalizedPost(post));
  const results = (await Promise.all(normalizedPosts)).sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf()).filter((post) => !post.draft);
  return results;
};
let _posts;
const isBlogEnabled = APP_BLOG.isEnabled;
const isBlogListRouteEnabled = APP_BLOG.list.isEnabled;
const isBlogPostRouteEnabled = APP_BLOG.post.isEnabled;
const isBlogCategoryRouteEnabled = APP_BLOG.category.isEnabled;
const isBlogTagRouteEnabled = APP_BLOG.tag.isEnabled;
const blogListRobots = APP_BLOG.list.robots;
const blogPostRobots = APP_BLOG.post.robots;
const blogCategoryRobots = APP_BLOG.category.robots;
const blogTagRobots = APP_BLOG.tag.robots;
const blogPostsPerPage = APP_BLOG?.postsPerPage;
const fetchPosts = async () => {
  if (!_posts) {
    _posts = await load();
  }
  return _posts;
};
const findLatestPosts = async ({ count }) => {
  const _count = count || 4;
  const posts = await fetchPosts();
  return posts ? posts.slice(0, _count) : [];
};
const getStaticPathsBlogList = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogListRouteEnabled)
    return [];
  return paginate(await fetchPosts(), {
    params: { blog: BLOG_BASE || void 0 },
    pageSize: blogPostsPerPage
  });
};
const getStaticPathsBlogPost = async () => {
  if (!isBlogEnabled || !isBlogPostRouteEnabled)
    return [];
  return (await fetchPosts()).flatMap((post) => ({
    params: {
      blog: post.permalink
    },
    props: { post }
  }));
};
const getStaticPathsBlogCategory = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogCategoryRouteEnabled)
    return [];
  const posts = await fetchPosts();
  const categories = /* @__PURE__ */ new Set();
  posts.map((post) => {
    typeof post.category === "string" && categories.add(post.category.toLowerCase());
  });
  return Array.from(categories).flatMap(
    (category) => paginate(
      posts.filter((post) => typeof post.category === "string" && category === post.category.toLowerCase()),
      {
        params: { category, blog: CATEGORY_BASE || void 0 },
        pageSize: blogPostsPerPage,
        props: { category }
      }
    )
  );
};
const getStaticPathsBlogTag = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogTagRouteEnabled)
    return [];
  const posts = await fetchPosts();
  const tags = /* @__PURE__ */ new Set();
  posts.map((post) => {
    Array.isArray(post.tags) && post.tags.map((tag) => tags.add(tag.toLowerCase()));
  });
  return Array.from(tags).flatMap(
    (tag) => paginate(
      posts.filter((post) => Array.isArray(post.tags) && post.tags.find((elem) => elem.toLowerCase() === tag)),
      {
        params: { tag, blog: TAG_BASE || void 0 },
        pageSize: blogPostsPerPage,
        props: { tag }
      }
    )
  );
};

const $$Astro$1 = createAstro("https://j-hsu.com");
const $$BlogLatestPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogLatestPosts;
  const {
    title = await Astro2.slots.render("title"),
    linkText = "View all posts",
    linkUrl = getBlogPermalink(),
    information = await Astro2.slots.render("information"),
    count = 4,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const posts = APP_BLOG.isEnabled ? await findLatestPosts({ count }) : [];
  return renderTemplate`${APP_BLOG.isEnabled ? renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-8">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2>${APP_BLOG.list.isEnabled && linkText && linkUrl && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "link", "href": linkUrl }, { "default": ($$result3) => renderTemplate`${linkText} »` })}`}</div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}`}`;
}, "C:/Users/Jonathan/git/jhsu-com/src/components/widgets/BlogLatestPosts.astro", void 0);

const $$Astro = createAstro("https://j-hsu.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const metadata = {
    title: "Personal Homepage Demo"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "announcement": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "announcement" })}`, "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, { "id": "hero", "title": "Jonathan Hsu", "tagline": "Personal Portfolio", "actions": [{ variant: "primary", target: "_blank", text: "Hire me", href: "/" }] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
I'm a Solutions Consulant passionate about solving expensive problems. I believe in co-creating solutions with customers and developing a deep relationship as their trusted advisor. I specialize in business process automation, specifically field service workflows in the Agriculture, Utilities, and Engineering industries.
` })}` })}${renderComponent($$result2, "Content", $$Content, { "id": "about", "columns": 3, "items": [
    {
      icon: "tabler:brand-linkedin",
      callToAction: {
        target: "_blank",
        text: "LinkedIn",
        href: "https://linkedin.com/in/jhsu98"
      }
    },
    {
      icon: "tabler:brand-github",
      callToAction: {
        target: "_blank",
        text: "GitHub",
        href: "https://github.com/jhsu98"
      }
    },
    {
      icon: "tabler:brand-medium",
      callToAction: {
        target: "_blank",
        text: "Medium",
        href: "https://medium.com/@jhsu98"
      }
    }
  ], "image": {
    src: "/profile.jpg",
    alt: "Jonathan Hsu"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate`${maybeRenderHead()}<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">About me</h3><p>
Welcome to my problem-solving journey. I've lived a variety of professional lives. From the dojo to the classroom to the conference table, my obsession with building relationships and connecting people to answers remains constant.
</p><br><p>
Having the effective communication skills to define business problems along with the technical chops to make plans a reality, you won't find a better person to co-create a solution with.
</p><br><p>Feel free to connect or follow me:</p>` })}` })}${renderComponent($$result2, "Steps", $$Steps, { "id": "resume", "title": "Work experience", "items": [
    {
      title: 'VP, Customer Success<br /><span class="font-normal">Zerion Software, Inc.</span><br /><span class="text-sm font-normal">2016 - Present</span>',
      description: `Collaborate with clients to understand design requirements and objectives. <br /> Develop branding solutions, including logos, color palettes, and brand guidelines. <br /> Design marketing materials such as brochures, posters, and digital assets. <br /> Create visually appealing user interfaces for websites and applications.`,
      icon: "tabler:briefcase"
    },
    {
      title: 'Adjunct Faculty<br /><span class="font-normal">IST Department, George Mason University</span><br /><span class="text-sm font-normal">2010 - 2016</span>',
      description: `Assisted senior designers in creating design concepts and visual assets. <br /> Contributed to the development of brand identities and marketing collateral. <br /> Collaborated with the marketing team to ensure consistent design across campaigns. <br /> Gained hands-on experience in various design software and tools.`,
      icon: "tabler:briefcase"
    },
    {
      title: 'Head Instructor<br /><span class="font-normal">The Black Belt Academy</span><br /><span class="text-sm font-normal">1997 - 2016</span>',
      description: `Assisted senior designers in creating design concepts and visual assets. <br /> Contributed to the development of brand identities and marketing collateral. <br /> Collaborated with the marketing team to ensure consistent design across campaigns. <br /> Gained hands-on experience in various design software and tools.`,
      icon: "tabler:briefcase"
    }
  ], "classes": { container: "max-w-3xl" } })}${renderComponent($$result2, "Steps", $$Steps, { "id": "resume", "title": "Education", "items": [
    {
      title: `PhD, Higher Education Administration<br /><span class="font-normal">College of Education & Human Development</span> <br /> <span class="text-sm font-normal">George Mason University - 2019</span>`,
      icon: "tabler:school"
    },
    {
      title: `MS, Information Technology ITPM / Federal Sector<br /><span class="font-normal">Volgenau School of Engineering</span><br /><span class="text-sm font-normal">George Mason University - 2010</span>`,
      icon: "tabler:school"
    }
  ], "classes": { container: "max-w-3xl" } })}${renderComponent($$result2, "Features3", $$Features3, { "title": "Skills", "subtitle": "", "columns": 3, "defaultIcon": "tabler:point-filled", "items": [
    {
      title: "B2B SaaS Solution Consulting",
      description: "Advise organizations on cloud technology solutions"
    },
    {
      title: "Business Process Automation",
      description: "Design automations for complex business processes"
    },
    {
      title: "Digital Transformation",
      description: "Migrate traditional data operations to digital solutions"
    },
    {
      title: "Integrations & REST APIs",
      description: "Build bridges between multiple softwares"
    },
    {
      title: "Programming & Software Development",
      description: "Proficient in Python, JavaScript, Java, and SQL"
    },
    {
      title: "Growth / Revenue Operations",
      description: "Implement strategies to optimize revenue and growth alignment"
    },
    {
      title: "Customer Success Leadership",
      description: "Develop teams focused on retention, cross-selling, and up-selling"
    },
    {
      title: "Product Led Growth",
      description: "Advocate for strategies to improve product led growth (PLG)"
    },
    {
      title: "CRM Admin & Development",
      description: "Architect and administrate customer-centric systems"
    }
  ] })}${renderComponent($$result2, "Content", $$Content, { "id": "porfolio", "title": "Creative problem solving", "subtitle": "Elegant solutions that empower working smarter, not harder. Enjoy a sample of the solutions I've architected over the years", "isReversed": true, "items": [
    {
      title: "Description:",
      description: "Developed a comprehensive brand identity for a tech startup, Tech Innovators, specializing in disruptive innovations. The goal was to convey a modern yet approachable image that resonated with both corporate clients and tech enthusiasts."
    },
    {
      title: "Role:",
      description: "Led the entire branding process from concept to execution. Created a dynamic logo that symbolized innovation, selected a vibrant color palette, and I designed corporate stationery, website graphics, and social media assets."
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1658248165252-71e116af1b34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    alt: "Tech Design Image"
  }, "callToAction": {
    target: "_blank",
    text: "Go to the project",
    icon: "tabler:chevron-right",
    href: "#"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate`<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Project 1: <br><span class="text-2xl">Brand identity for tech innovators</span></h3>` })}` })}${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    {
      title: "Description:",
      description: 'Designed a captivating event poster for an art and music festival, "ArtWave Fusion," aiming to showcase the synergy between visual art and music genres.'
    },
    {
      title: "Role:",
      description: `Translated the festival's creative theme into a visually striking poster. Used bold typography, vibrant colors, and abstract elements to depict the fusion of art and music. Ensured the design captured the festival's vibrant atmosphere.`
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    alt: "Art and Music Poster Image"
  }, "callToAction": {
    target: "_blank",
    text: "Go to the project",
    icon: "tabler:chevron-right",
    href: "#"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate`<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Project 2: <br><span class="text-2xl">Event poster for art & music festival</span></h3>` })}` })}${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    {
      title: "Description:",
      description: `Redesigned the e-commerce website for an eco-conscious fashion brand, GreenVogue. The objective was to align the brand's online presence with its sustainable ethos and improve user experience.`
    },
    {
      title: "Role:",
      description: `Conducted a thorough analysis of the brand's values and customer base to inform the design direction. Created a visually appealing interface with intuitive navigation, highlighting sustainable materials, and integrating a user-friendly shopping experience.`
    }
  ], "image": {
    src: "https://plus.unsplash.com/premium_photo-1683288295841-782fa47e4770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    alt: "Fashion e-commerce Image"
  }, "callToAction": {
    target: "_blank",
    text: "Go to the project",
    icon: "tabler:chevron-right",
    href: "#"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate`<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Project 3: <br><span class="text-2xl">E-commerce website redesign for fashion brand</span></h3>` })}` })}${renderComponent($$result2, "Testimonials", $$Testimonials, { "title": "Client testimonials", "subtitle": "Discover what clients have to say about their experiences working with me.", "testimonials": [
    {
      testimonial: `She took our vague concept and turned it into a visual masterpiece that perfectly aligned with our goals. Her attention to detail and ability to translate ideas into compelling visuals exceeded our expectations.`,
      name: "Mark Thompson",
      job: "Creative director",
      image: {
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        alt: "Mark Thompson Image"
      }
    },
    {
      testimonial: `She transformed our brand identity with her creative finesse, capturing our essence in every element. Her dedication and talent truly shine through her work.`,
      name: "Emily Martinez",
      job: "CEO",
      image: {
        src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80",
        alt: "Emily Martinez Image"
      }
    },
    {
      testimonial: `She has an uncanny ability to communicate emotions and stories. She crafted a logo for our NGO that not only represents our cause but also evokes empathy. Her professionalism and commitment make her a designer of exceptional caliber.`,
      name: "Laura Simmons",
      job: "Founder of an NGO",
      image: {
        src: "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        alt: "Laura Simmons Image"
      }
    },
    {
      testimonial: `We entrusted Sarah with revamping our website's user interface, and the results were astounding. Her intuitive design sense enhanced user experience, leading to a significant increase in engagement. She's a designer who truly understands the synergy of aesthetics and functionality.`,
      name: "Alex Foster",
      job: "Director of web services",
      image: {
        src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        alt: "Alex Foster Image"
      }
    },
    {
      testimonial: `She took our vision and elevated it beyond imagination. Her ability to capture brand essence and translate it into design is nothing short of remarkable. Working with her has been an inspiring journey.`,
      name: "Jessica Collins",
      job: "Product Manager",
      image: {
        src: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80",
        alt: "Jessica Collins Image"
      }
    },
    {
      testimonial: `Her ability to transform concepts into captivating visuals is nothing short of extraordinary. She took our event poster idea and turned it into a visual masterpiece that perfectly captured the essence of our festival. Sarah's dedication, creativity, and knack for delivering beyond expectations make her an invaluable asset to any project.`,
      name: "Michael Carter",
      job: "Event Coordinator",
      image: {
        src: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        alt: "Michael Carter Image"
      }
    }
  ] })}${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Let's create together", "subtitle": "Ready to transform your vision into captivating designs?", "actions": [{
    variant: "primary",
    text: "Hire me",
    href: "/"
  }] })}${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "id": "blog", "title": "Explore my insightful articles on my blog", "information": `Dive into a realm of design wisdom and creative inspiration, where you'll find invaluable insights, practical tips, and captivating narratives that elevate and enrich your creative journey.` }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate`<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>` })}` })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Header", $$Header, { "links": [
    { text: "Home", href: "#" },
    { text: "About", href: "#about" },
    { text: "Resume", href: "#resume" },
    { text: "Porfolio", href: "#porfolio" },
    { text: "Blog", href: "#blog" }
  ], "actions": [
    {
      text: "Hire me",
      href: "#"
    }
  ], "isSticky": true, "showToggleTheme": true })}` })}` })}`;
}, "C:/Users/Jonathan/git/jhsu-com/src/pages/index.astro", void 0);

const $$file = "C:/Users/Jonathan/git/jhsu-com/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Index,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PageLayout as $, $$Image as a, $$Icon as b, $$Button as c, blogCategoryRobots as d, getStaticPathsBlogTag as e, fetchPosts as f, getStaticPathsBlogCategory as g, blogTagRobots as h, getStaticPathsBlogList as i, blogListRobots as j, getStaticPathsBlogPost as k, blogPostRobots as l, $$ToggleTheme as m, $$Logo as n, index as o };