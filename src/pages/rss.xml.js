import rss from '@astrojs/rss';

const posts = Object.values(
  import.meta.glob('./posts/*.md', { eager: true })
);

export async function GET(context) {
  return rss({
    title: '未来',
    description: '关于科技、历史与未来的博客',
    site: context.site,

    items: posts.map((post) => ({
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date,
      description: post.frontmatter.description,
      link: post.url,
    })),
  });
}