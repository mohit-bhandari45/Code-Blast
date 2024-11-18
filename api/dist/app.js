import express from "express";
import authRoutes from "./routes/auth.js";
import apiRoutes from "./routes/apis/index.js";
const app = express();
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/auth", authRoutes);
app.get("/", (req, res) => {
    res.json({ msg: "Hello" });
});
export default app;
