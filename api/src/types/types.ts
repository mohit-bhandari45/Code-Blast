/* eslint-disable semi */
import JWT from "jsonwebtoken";

export default interface CustomJwtPayload extends JWT.JwtPayload {
  id: string;
  email: string;
  // eslint-disable-next-line prettier/prettier
}