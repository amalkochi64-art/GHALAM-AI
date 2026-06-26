import express from "express";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    system: "GHALAM-AI",
    version: "1.0.0"
  });
});

export default app;