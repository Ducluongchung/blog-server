import { mongoose } from "mongoose";
const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      requireL: true,
    },
    author: {
      type: String,
      require: true,
      default: "Annonymous",
    },
    attachment: String,
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);
export const PostModel = mongoose.model("post", schema);
