import express from "express";
import {
  handleCreateProblem,
  handleListProblems,
} from "../controllers/problem.js";

const router = express.Router();

router.get("/", handleListProblems);
router.post("/create", handleCreateProblem);

export default router;
