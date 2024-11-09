import JWT from "jsonwebtoken";
const secret = process.env.JSON_WEB_SECRET;
function generateToken(user) {
    const token = JWT.sign(user, secret, { expiresIn: "1h" });
    return token;
}
function decodeToken(token) {
    const user = JWT.verify(token, secret);
    return user;
}
export { generateToken, decodeToken };
