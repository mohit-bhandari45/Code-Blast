import CustomJwtPayload from "../types/types.js";
import { decodeToken } from "../services/auth.js";
import { Request, Response, NextFunction } from "express";

async function checkForAuthentication(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    req.user = null;
    const token: string = req.headers["authorization"]!;
    if (token) {
      const tokenValue: string = token.split(" ")[1];
      const user: CustomJwtPayload = decodeToken(tokenValue);
      req.user = user;
      return next();
    }

    //If no token
    res.status(401).json({ msg: "Login to perform operations" });
  } catch (error) {
    console.log(error);
    res.status(200).json({ msg: "Internal Server error" });
  }
}

export default checkForAuthentication;
