import express from "express";
import userRouter from "./routes/user.js";
import contestRouter from "./routes/contest.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/contest", contestRouter);

app.get("/", (req, res) => {
  res.json({ msg: "Hello" });
});

app.post("/", (req, res) => {
  res.json({ msg: "Hello Post" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT:${process.env.PORT}`);
});
