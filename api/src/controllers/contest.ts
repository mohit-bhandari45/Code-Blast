import { Request, Response } from "express";
import prismaClient from "../lib/db.js";

async function handleListContest(req: Request, res: Response): Promise<any> {
  const contests = await prismaClient.contest.findMany();
  return res.status(200).json({ contests: contests });
}

async function handleCreateContest(req: Request, res: Response): Promise<any> {
  const { name, description, startTime, endTime, problemIds } = req.body;

  // Validate input
  if (!name || !startTime || !endTime || !Array.isArray(problemIds)) {
    return res.status(400).json({
      error: "Name, start time, end time, and problem IDs are required.",
    });
  }

  try {
    // Create the new contest with associated problem IDs
    const newContest = await prismaClient.contest.create({
      data: {
        name,
        description,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        problems: {
          connect: problemIds.map((id) => ({ id })), // Connect existing problem IDs
        },
      },
    });

    // Respond with the created contest
    return res.status(201).json(newContest);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating the contest." });
  }
}

export { handleListContest, handleCreateContest };
