import express from "express";
import contestRouter from "./contest.js";
import problemRouter from "./problem.js";
const router = express.Router();
router.use(contestRouter);
router.use(problemRouter);
export default router;
