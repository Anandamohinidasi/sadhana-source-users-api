import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UsersDocument = mongoose.Document & {
  name: string,
  document: string,
  email: string,
  spiritualName: string,
  password: string,
  guru: string,
  status_id: string,
  permissions: string[]
};

const usersSchema = new mongoose.Schema({
  name: String,
  document: String,
  email: String,
  spiritualName: String,
  password: String,
  guru: String,
  status_id: {type: String, default: "61612b0d6fa4d7ac743be63c"},
  permissions: [String]
});

usersSchema.pre("save", async function(next) {
const user: any = this;
if(user.isModified("password")) {
  user.password = await bcrypt.hash(user.password, 8);
}
  next();
})

export const users = (mongoose.models.permissions ||
mongoose.model<UsersDocument>('users', usersSchema, process.env.DB_USERS_COLLECTION)
);