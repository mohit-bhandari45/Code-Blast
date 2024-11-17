import express from "express";
import {
  handleListProblems,
  handleCreateProblem,
} from "../../controllers/problem.js";
const router = express.Router();
router.get("/", handleListProblems);
router.post("/create", handleCreateProblem);
export default router;
