import JWT from "jsonwebtoken";

interface UserInterface {
  id: string;
  email: string;
}

const secret: string = process.env.JSON_WEB_SECRET!;

function generateToken(user: UserInterface): string {
  const token = JWT.sign(user, secret, { expiresIn: "1h" });
  return token;
}

function decodeToken(token: string): string | JWT.JwtPayload {
  const user = JWT.verify(token, secret);
  return user;
}

export { generateToken, decodeToken };
