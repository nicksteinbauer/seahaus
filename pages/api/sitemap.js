import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const SITE_URL = 'https://www.seahausbahamas.com'; // 🔁 Replace with your site URL

export default async function handler(req, res) {
  const entries = await client.getEntries({
    content_type: 'page', // 👈 Adjust this to match your page content type
    select: 'fields.slug,sys.updatedAt',
  });

  const urls = entries.items.map((entry) => {
    const slug = entry.fields.slug || '';
    const lastMod = new Date(entry.sys.updatedAt).toISOString();
    return `
      <url>
        <loc>${SITE_URL}/${slug}</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    >
      ${urls.join('\n')}
    </urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
  res.end();
}
