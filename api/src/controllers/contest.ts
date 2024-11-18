import { Request, Response } from "express";
import prismaClient from "../lib/db.js";
import CustomJwtPayload from "../types/types.js";

async function handleListContest(req: Request, res: Response): Promise<any> {
  try {
    // Fetch contests along with associated problem IDs
    const contests = await prismaClient.contest.findMany({});

    return res.status(200).json({ contests });
  } catch (error) {
    console.error("Error fetching contests:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching contests." });
  }
}

async function handleCreateContest(req: Request, res: Response): Promise<any> {
  const { title, description, startTime, duration, opponentId } = req.body;
  const user: CustomJwtPayload = req.user! as CustomJwtPayload;
  const participantsIds = [user.id, opponentId];

  // Validate input
  if (!title || !startTime || !duration || !opponentId) {
    return res.status(400).json({
      error: "Name, start time and end time are required.",
    });
  }

  try {
    // Create the new contest with associated problem IDs
    const newContest = await prismaClient.contest.create({
      data: {
        title,
        description,
        createdById: user.id,
        participants: {
          connect: participantsIds.map((id: string) => ({ id })),
        },
        startTime: new Date(startTime),
        duration,
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

export { handleCreateContest, handleListContest };
