import express from "express";
import userRouter from "./routes/user";
const app = express();

app.use("/api/users", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT:${process.env.PORT}`);
});