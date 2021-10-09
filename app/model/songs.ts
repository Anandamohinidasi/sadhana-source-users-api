import mongoose from 'mongoose';

export type BooksDocument = mongoose.Document & {
  name: string,
  id: number,
  description: string,
  createdAt: Date,
};

const booksSchema = new mongoose.Schema({
  name: String,
  id: { type: Number, index: true, unique: true },
  description: String,
  createdAt: { type: Date, default: Date.now },
});

// Note: OverwriteModelError: Cannot overwrite `Books` model once compiled. error
export const books = (mongoose.models.permissions ||
mongoose.model<BooksDocument>('permissions', booksSchema, process.env.DB_BOOKS_COLLECTION)
);