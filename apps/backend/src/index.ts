import express from "express";
import { BACKEND_URL } from "@repo/common/config";
const app = express();

console.log(BACKEND_URL);

app.get("/", (req, res) => {
  return res.json({
    msg: "hellow world",
  });
});

app.listen(8000);
