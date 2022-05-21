import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/post.js";

const router = express.Router();

router.get("/post", getPosts);

router.post("/post", createPost);

router.post("/post/update", updatePost);

router.delete("/post/delete/:id", deletePost);

export default router;
