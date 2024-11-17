import express from "express";
import {
  handleCreateContest,
  handleListContest,
} from "../../controllers/contest.js";
const router = express.Router();
router.get("/", handleListContest);
router.post("/create", handleCreateContest);
export default router;
