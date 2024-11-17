import express from "express";
import contestRouter from "./contest.js";
import checkForAuthentication from "../../middlewares/auth.js";

const router = express.Router();

router.use(checkForAuthentication);

router.use("/contest", contestRouter);

export default router;
