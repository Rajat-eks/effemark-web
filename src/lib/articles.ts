import { promises as fs } from "fs";
import path from "path";

export interface Article {
  slug: string;
  title: string;
  description: string;
  banner: string;
  keywords: string[];
  createdAt: string;
  updatedAt: string;
}

const dataFilePath = path.join(process.cwd(), "src", "data", "articles.json");

async function ensureDataFileExists(): Promise<void> {
  try {
    await fs.access(dataFilePath);
  } catch {
    const dir = path.dirname(dataFilePath);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(dataFilePath, JSON.stringify([], null, 2), "utf-8");
  }
}

export async function readArticles(): Promise<Article[]> {
  await ensureDataFileExists();
  const raw = await fs.readFile(dataFilePath, "utf-8");
  try {
    const parsed = JSON.parse(raw) as Article[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function writeArticles(articles: Article[]): Promise<void> {
  await ensureDataFileExists();
  await fs.writeFile(dataFilePath, JSON.stringify(articles, null, 2), "utf-8");
}

export function validateArticlePayload(input: any): {
  valid: boolean;
  errors: string[];
  data?: Pick<
    Article,
    "slug" | "title" | "description" | "banner" | "keywords"
  >;
} {
  const errors: string[] = [];

  const slug = typeof input?.slug === "string" ? input.slug.trim() : "";
  const title = typeof input?.title === "string" ? input.title.trim() : "";
  const description =
    typeof input?.description === "string" ? input.description.trim() : "";
  const banner = typeof input?.banner === "string" ? input.banner.trim() : "";
  const keywordsInput = input?.keywords;

  let keywords: string[] = [];
  if (Array.isArray(keywordsInput)) {
    keywords = keywordsInput.map((k) => String(k).trim()).filter(Boolean);
  } else if (typeof keywordsInput === "string") {
    keywords = keywordsInput
      .split(",")
      .map((k: string) => k.trim())
      .filter(Boolean);
  }

  if (!slug) errors.push("slug is required");
  if (!title) errors.push("title is required");
  if (!description) errors.push("description is required");
  if (!banner) errors.push("banner is required");
  if (keywords.length === 0)
    errors.push("keywords must have at least one item");

  if (errors.length) return { valid: false, errors };

  return {
    valid: true,
    errors: [],
    data: { slug, title, description, banner, keywords },
  };
}
