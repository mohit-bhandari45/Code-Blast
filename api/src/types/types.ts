import JWT from "jsonwebtoken";

export default interface CustomJwtPayload extends JWT.JwtPayload {
  id: string;
  email: string;
};
