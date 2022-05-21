import mongoose from "mongoose";

import { mongoose } from "mongoose";

const schema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

export const UserModels = mongoose.model("user", schema);
