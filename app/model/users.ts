import mongoose from 'mongoose';

export type UsersDocument = mongoose.Document & {
  name: string,
  document: string,
  email: string,
  spiritualName: string,
  guru: string,
  status_id: string,
  permissions: string[]
};

const usersSchema = new mongoose.Schema({
  name: String,
  document: String,
  email: String,
  spiritualName: String,
  guru: String,
  status_id: {type: String, default: "61612b0d6fa4d7ac743be63c"},
  permissions: [String]
});

// Note: OverwriteModelError: Cannot overwrite `Books` model once compiled. error
export const users = (mongoose.models.permissions ||
mongoose.model<UsersDocument>('users', usersSchema, process.env.DB_USERS_COLLECTION)
);