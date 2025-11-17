import { MetadataRoute } from 'next';
import { monitorProduct, trademarkProducts } from '@/data/products';
import { connectMongoose } from '@/lib/mongoose';
import { ArticleModel } from '@/models/Article';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get base URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://effemark.com';
  const isProduction = process.env.NODE_ENV === 'production';
  const siteUrl = isProduction ? 'https://effemark.com' : baseUrl;

  // Get current date for lastModified
  const currentDate = new Date();

  // Static pages with their priorities and change frequencies
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/faqs`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/samples`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/trademark-search-services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/trademark-monitoring`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/global-trademark-search`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/trademark-docketing`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/articles`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/business-model`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/refund-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms-condition`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Generate product pages from products data
  const allProducts = [...trademarkProducts, ...monitorProduct];
  const productPages: MetadataRoute.Sitemap = allProducts
    .filter((product: any) => product.path) // Only include products with paths
    .map((product: any) => ({
      url: `${siteUrl}${product.path}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  // Get article pages from database
  let articlePages: MetadataRoute.Sitemap = [];
  try {
    await connectMongoose();
    const articles = await ArticleModel.find({ status: true })
      .select('slug updatedAt')
      .lean();
    
    articlePages = articles.map((article: any) => ({
      url: `${siteUrl}/articles/${article.slug}`,
      lastModified: article.updatedAt ? new Date(article.updatedAt) : currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  } catch (error) {
    // If database connection fails, just skip articles
    console.error('Error fetching articles for sitemap:', error);
  }

  // Combine all pages
  return [...staticPages, ...productPages, ...articlePages];
}

