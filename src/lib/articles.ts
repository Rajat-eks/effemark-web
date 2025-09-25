import { promises as fs } from "fs";
import path from "path";

export interface Article {
  heading: string;
  content: string;
  slug: string;
  filepath: string;
  metaTitle: string;
  metaDescription: string;
  metakewword: string[];
  articleDate: string; // ISO date string
  status: string;
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
    | "heading"
    | "content"
    | "slug"
    | "filepath"
    | "metaTitle"
    | "metaDescription"
    | "metakewword"
    | "articleDate"
    | "status"
  >;
} {
  const errors: string[] = [];

  const heading =
    typeof input?.heading === "string" ? input.heading.trim() : "";
  const content =
    typeof input?.content === "string" ? input.content.trim() : "";
  const slug = typeof input?.slug === "string" ? input.slug.trim() : "";
  const filepath =
    typeof input?.filepath === "string" ? input.filepath.trim() : "";
  const metaTitle =
    typeof input?.metaTitle === "string" ? input.metaTitle.trim() : "";
  const metaDescription =
    typeof input?.metaDescription === "string"
      ? input.metaDescription.trim()
      : "";
  const metakewwordInput = input?.metakewword;
  const articleDateRaw = input?.articleDate;
  const status = typeof input?.status === "boolean" ? input.status : false;

  let metakewword: string[] = [];
  if (Array.isArray(metakewwordInput)) {
    metakewword = metakewwordInput
      .map((k: any) => String(k).trim())
      .filter(Boolean);
  } else if (typeof metakewwordInput === "string") {
    metakewword = metakewwordInput
      .split(",")
      .map((k: string) => k.trim())
      .filter(Boolean);
  }

  // Validate required fields
  if (!heading) errors.push("heading is required");
  if (!content) errors.push("content is required");
  if (!slug) errors.push("slug is required");
  if (!filepath) errors.push("filepath is required");
  if (!metaTitle) errors.push("metaTitle is required");
  if (!metaDescription) errors.push("metaDescription is required");
  if (metakewword.length === 0)
    errors.push("metakewword must have at least one item");
  if (!status) errors.push("status is required");

  // articleDate can be a Date or ISO string input
  let articleDate = "";
  if (articleDateRaw instanceof Date) {
    articleDate = articleDateRaw.toISOString();
  } else if (typeof articleDateRaw === "string") {
    const d = new Date(articleDateRaw);
    if (!isNaN(d.getTime())) articleDate = d.toISOString();
  }
  if (!articleDate) errors.push("articleDate must be a valid date");

  if (errors.length) return { valid: false, errors };

  return {
    valid: true,
    errors: [],
    data: {
      heading,
      content,
      slug,
      filepath,
      metaTitle,
      metaDescription,
      metakewword,
      articleDate,
      status,
    },
  };
}
