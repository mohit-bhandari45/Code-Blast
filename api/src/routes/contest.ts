import express from "express";
import { handleCreateContest, handleListContest } from "@/controllers/contest";

const router = express.Router();

router.post("/", handleListContest);
router.post("/create", handleCreateContest);

export default router;
