"use strict";
// import { Router, Request, Response, NextFunction } from "express";
// import { RedisManager } from "../RedisManager";
// const submissionRoute = Router();
// // Middleware to handle async errors
// const asyncHandler =
//   (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
//     Promise.resolve(fn(req, res, next)).catch(next);
// submissionRoute.post(
//   "/",
//   asyncHandler(async (req: Request, res: Response) => {
//     const { body } = req; // Ensure `body` is available through middleware
//     // Validate request body
//     if (!body) {
//       return res.status(400).json({ error: "Request body is required" });
//     }
//     try {
//       // Await Redis operation response
//       const redisResponse = await RedisManager.getInstance().sendAndAwait(body);
//       // Send success response
//       res.status(200).json({ response: redisResponse });
//     } catch (error) {
//       console.error("Redis operation failed:", error);
//       res.status(500).json({ error: "Internal server error" });
//     }
//   }),
// );
// export default submissionRoute;
