import express from "express";
import json from "./universities.json" assert { type: "json" };

const app = express();
const port = 3000;

app.get("/search", (req, res) => {
  const { name } = req.query;

  if (typeof name !== "string" || name.length < 5) return res.status(400).end();

  res
    .status(200)
    .json(json.filter((u) => u.name.toLowerCase().startsWith(name.toLowerCase())))
    .end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
