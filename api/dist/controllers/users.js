import prismaClient from "../lib/db.js";
import { createHmac, randomBytes } from "crypto";
async function handleSignUp(req, res) {
  const { name, email, password } = req.body;
  try {
    // Checking for existing user
    const existingUser = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    if (existingUser) {
      return res.status(409).json({ msg: "Email already in use" });
    }
    const salt = randomBytes(16).toString("hex"); // Generating a salt
    const hashedPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");
    await prismaClient.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        salt: salt,
      },
    });
    return res.status(201).json({ msg: "User created successfully" });
  } catch (error) {
    console.error("Error during sign up:", error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}
async function handleLogin(req, res) {
  const { email, password } = req.body;
  try {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    // Checking if user was found
    if (!user) {
      return res.status(404).json({ msg: "User Not Found" });
    }
    const salt = user.salt; // Accessing salt only after confirming user exists
    // Hashing the provided password with the user's salt
    const userProvidedHash = createHmac("sha256", salt)
      .update(password)
      .digest("hex");
    // Comparing hashes (assuming user has a hashed password in user.password)
    if (userProvidedHash === user.password) {
      // Successful login, return success message only
      return res.status(200).json({ msg: "Login Successful" });
    } else {
      return res.status(401).json({ msg: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}
export { handleSignUp, handleLogin };
