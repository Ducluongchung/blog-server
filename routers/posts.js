import express from "express";
import { getPosts, createPost } from "../controllers/post.js";

const router = express.Router();

router.get("/post", getPosts);

router.get("/createPost", createPost);

export default router;
