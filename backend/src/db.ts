import mongoose, { model, Schema } from "mongoose";
import "dotenv/config";

mongoose
  .connect(process.env.DB_URL as string)
  .then((res) => console.log("DB is running"));

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
  title: String,
  link: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  type: String,
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  contentId: { type: String, unique: true },
});
const LinkSchema = new Schema({
  hash: String,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
});
export const LinkModel = model("Links", LinkSchema);
export const ContentModel = model("Content", ContentSchema);
