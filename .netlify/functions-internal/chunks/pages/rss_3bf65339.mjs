import { getRssString } from '@astrojs/rss';
import { A as APP_BLOG, S as SITE, M as METADATA, b as getPermalink } from './404_20c5fc28.mjs';
import { f as fetchPosts } from './index_d1018214.mjs';
import '@astrojs/internal-helpers/path';
import '../astro_f9e129f8.mjs';
import 'clsx';
import 'html-escaper';
/* empty css                             */import 'fs';
import 'js-yaml';
import 'lodash.merge';
import 'limax';
import '../astro-assets-services_900cc72f.mjs';
import '@iconify/utils';
import 'tailwind-merge';
import 'unpic';

const GET = async () => {
  if (!APP_BLOG.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  const posts = await fetchPosts();
  const rss = await getRssString({
    title: `${SITE.name}’s Blog`,
    description: METADATA?.description || "",
    site: "https://j-hsu.com",
    items: posts.map((post) => ({
      link: getPermalink(post.permalink, "post"),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate
    })),
    trailingSlash: SITE.trailingSlash
  });
  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};

export { GET };
