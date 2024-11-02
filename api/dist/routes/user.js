import express from "express";
import { handleLogin, handleSignUp } from "../controllers/users.js";
const router = express.Router();
router.post("/signup", handleSignUp);
router.post("/login", handleLogin);
export default router;
