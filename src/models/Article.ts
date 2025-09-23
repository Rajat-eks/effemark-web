import mongoose, { Schema, type Model } from "mongoose";

export interface ArticleDoc {
  heading: string;
  description: string;
  slug: string;
  filepath: string;
  metaTitle: string;
  metaDescription: string;
  metakewword: string[];
  articleDate: Date;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ArticleSchema = new Schema<ArticleDoc>(
  {
    heading: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },
    filepath: { type: String, required: true, trim: true },
    metaTitle: { type: String, required: true, trim: true },
    metaDescription: { type: String, required: true, trim: true },
    metakewword: { type: [String], required: true, default: [] },
    articleDate: { type: Date, required: true },
    status: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

export const ArticleModel: Model<ArticleDoc> =
  (mongoose.models.Article as Model<ArticleDoc>) ||
  mongoose.model<ArticleDoc>("Article", ArticleSchema);
