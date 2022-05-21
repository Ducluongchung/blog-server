import { mongoose } from "mongoose";

const schema = new mongoose.Schema({
  name: String,
});

export const RoleModel = mongoose.model("role", schema);
