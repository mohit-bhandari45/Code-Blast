import express from "express";
import userRouter from "./routes/user.js";
const app = express();
app.use(express.json());
app.use("/api/users", userRouter);
app.get("/", (req, res) => {
  res.json({ msg: "Hello" });
});
app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT:${process.env.PORT}`);
});
