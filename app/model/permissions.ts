import mongoose from 'mongoose';

export type PermissionsDocument = mongoose.Document & {
  name: string,
  description: string
};

const permissionsSchema = new mongoose.Schema({
    name: String,
    description: String
});

export const permissions = (mongoose.models.permissions ||
mongoose.model<PermissionsDocument>('permissions', permissionsSchema, process.env.DB_PERMISSIONS_COLLECTION)
);