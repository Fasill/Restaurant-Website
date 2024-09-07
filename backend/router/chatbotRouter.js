import express from "express";
import { chat } from "../controllers/chatbot2.js";
const router = express.Router();

router.post("/chat", chat);
router.get("/", (req, res) => {
  res.json({ message: "hello" });
});

export default router;
