import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Olá Henrique" });
});

mongoose
  .connect(process.env.DATABASE_CONNECTION as string)
  .then(() => {
    app.listen(port, () => {
      console.log(`MongoDB connected / Server running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
