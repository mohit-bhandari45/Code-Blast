import { decodeToken } from "../services/auth.js";
async function checkForAuthentication(req, res, next) {
    try {
        req.user = null;
        const token = req.headers["authorization"];
        if (token) {
            const tokenValue = token.split(" ")[1];
            const user = decodeToken(tokenValue);
            req.user = user;
            return next();
        }
        //If no token
        res.status(401).json({ msg: "Login to perform operations" });
    }
    catch (error) {
        console.log(error);
        res.status(200).json({ msg: "Internal Server error" });
    }
}
export default checkForAuthentication;
