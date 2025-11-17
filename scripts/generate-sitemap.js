const fs = require('fs');
const path = require('path');
const { createRequire } = require('module');

// Create a require function that can handle ES modules
// We'll read the products file directly and parse it
let trademarkProducts = [];
let monitorProduct = [];

try {
  // Read the products file as text
  const productsPath = path.join(__dirname, '../src/data/products.js');
  const productsContent = fs.readFileSync(productsPath, 'utf8');
  
  // Extract the arrays using regex (simple approach)
  // This is a workaround since we can't directly import ES modules in CommonJS
  const trademarkMatch = productsContent.match(/export const trademarkProducts = (\[[\s\S]*?\]);/);
  const monitorMatch = productsContent.match(/export const monitorProduct = (\[[\s\S]*?\]);/);
  
  if (trademarkMatch) {
    trademarkProducts = eval(trademarkMatch[1]);
  }
  if (monitorMatch) {
    monitorProduct = eval(monitorMatch[1]);
  }
} catch (error) {
  console.error('Error reading products file:', error);
  process.exit(1);
}

// Get base URL from environment or use default
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://effemark.com';
const isProduction = process.env.NODE_ENV === 'production';
const siteUrl = isProduction ? 'https://effemark.com' : baseUrl;

// Get current date in ISO format
const currentDate = new Date().toISOString();

// Static pages
const staticPages = [
  { url: siteUrl, priority: '1.0', changefreq: 'daily' },
  { url: `${siteUrl}/about-us`, priority: '0.8', changefreq: 'monthly' },
  { url: `${siteUrl}/contact-us`, priority: '0.8', changefreq: 'monthly' },
  { url: `${siteUrl}/faqs`, priority: '0.7', changefreq: 'monthly' },
  { url: `${siteUrl}/samples`, priority: '0.7', changefreq: 'monthly' },
  { url: `${siteUrl}/trademark-search-services`, priority: '0.9', changefreq: 'weekly' },
  { url: `${siteUrl}/trademark-monitoring`, priority: '0.9', changefreq: 'weekly' },
  { url: `${siteUrl}/global-trademark-search`, priority: '0.9', changefreq: 'weekly' },
  { url: `${siteUrl}/trademark-docketing`, priority: '0.9', changefreq: 'weekly' },
  { url: `${siteUrl}/articles`, priority: '0.7', changefreq: 'weekly' },
  { url: `${siteUrl}/business-model`, priority: '0.6', changefreq: 'monthly' },
  { url: `${siteUrl}/privacy-policy`, priority: '0.3', changefreq: 'yearly' },
  { url: `${siteUrl}/refund-policy`, priority: '0.3', changefreq: 'yearly' },
  { url: `${siteUrl}/terms-condition`, priority: '0.3', changefreq: 'yearly' },
];

// Generate product pages
const allProducts = [...trademarkProducts, ...monitorProduct];
const productPages = allProducts
  .filter((product) => product.path)
  .map((product) => ({
    url: `${siteUrl}${product.path}`,
    priority: '0.8',
    changefreq: 'weekly',
  }));

// Combine all pages
const allPages = [...staticPages, ...productPages];

// Generate XML sitemap
function generateSitemapXML() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  allPages.forEach((page) => {
    xml += `  <url>
    <loc>${escapeXml(page.url)}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  xml += `</urlset>`;

  return xml;
}

// Escape XML special characters
function escapeXml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Generate and write sitemap
try {
  const sitemapXML = generateSitemapXML();
  const publicDir = path.join(process.cwd(), 'public');
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXML, 'utf8');
  
  console.log(`✅ Sitemap generated successfully!`);
  console.log(`📄 Location: ${sitemapPath}`);
  console.log(`🌐 Total URLs: ${allPages.length}`);
  console.log(`   - Static pages: ${staticPages.length}`);
  console.log(`   - Product pages: ${productPages.length}`);
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}

