import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "~/consts";

export async function GET(context: { site?: URL }) {
  const posts = (await getCollection("writing", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );

  return rss({
    title: `${SITE.name} — writing`,
    description: "Notes on Azure architecture for seed and Series A startups.",
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/writing/${post.id}`,
    })),
    customData: `<language>en-gb</language>`,
  });
}
