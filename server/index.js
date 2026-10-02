import "dotenv/config";
import express from "express";
import cors from "cors";

import pizzasRouter from "./routes/pizzas.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pizzas", pizzasRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Pizza API работает",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
