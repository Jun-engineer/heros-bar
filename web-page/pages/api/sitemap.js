export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml');
  
  // サイトマップのXML形式を生成
  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
      <url>
        <loc>https://d2ynp8qdcw1ah8.cloudfront.net/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>https://d2ynp8qdcw1ah8.cloudfront.net/news/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>https://d2ynp8qdcw1ah8.cloudfront.net/news/1</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    </urlset>
  `;

  res.write(sitemap);
  res.end();
}
