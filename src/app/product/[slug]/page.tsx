import React from "react";
import { monitorProduct, trademarkProducts } from "@/data/products";
import type { Metadata } from "next";
import ProductClient from "./ProductClient";

interface PageProps {
  params: { slug: string };
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const product = [...trademarkProducts, ...monitorProduct].find(
    (item: any) => item.path === `/${slug}`
  );

  // Get base URL from environment or use default
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://effemark.com';
  const isProduction = process.env.NODE_ENV === 'production';
  const siteUrl = isProduction ? 'https://effemark.com' : baseUrl;

  if (product) {
    // Ensure image URL is absolute
    const imageUrl = product.banner 
      ? (product.banner.startsWith('http') 
          ? product.banner 
          : `${siteUrl}${product.banner.startsWith('/') ? '' : '/'}${product.banner}`)
      : undefined;

    return {
      title: product.metaTitle || product.name || "Product | EffeMark",
      description: product.metaDescription || `Learn more about ${product.name} at EffeMark. Professional trademark services.`,
      keywords: product.metaKeywords || product.name,
      openGraph: {
        title: product.metaTitle || product.name,
        description: product.metaDescription || `Learn more about ${product.name} at EffeMark.`,
        type: "website",
        url: `${siteUrl}/product/${slug}`,
        siteName: "EffeMark",
        images: imageUrl ? [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: product.name,
          },
        ] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: product.metaTitle || product.name,
        description: product.metaDescription || `Learn more about ${product.name} at EffeMark.`,
        images: imageUrl ? [imageUrl] : [],
      },
      alternates: {
        canonical: `${siteUrl}/product/${slug}`,
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  }

  // Default metadata if product not found
  return {
    title: "Product | EffeMark",
    description: "Professional trademark search and monitoring services",
    keywords: "Trademark Search, Trademark Monitoring, Trademark Services",
    robots: {
      index: false,
      follow: true,
    },
  };
}

const page: React.FC<PageProps> = ({ params }) => {
  return <ProductClient slug={params.slug} />;
};

export default page;
