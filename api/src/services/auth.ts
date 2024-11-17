import JWT from "jsonwebtoken";
import CustomJwtPayload from "../types/types.js";

interface UserInterface {
  id: string;
  email: string;
}

const secret: string = process.env.JSON_WEB_SECRET!;

function generateToken(user: UserInterface): string {
  const token = JWT.sign(user, secret, { expiresIn: "1h" });
  return token;
}

function decodeToken(token: string): CustomJwtPayload {
  const user = JWT.verify(token, secret);
  return user as CustomJwtPayload;
}

export { generateToken, decodeToken };
