import express from "express";
import User from "../models/User.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", protect, adminOnly, async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const newUser = new User({ username, password, role });
    await newUser.save();
    res.json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
