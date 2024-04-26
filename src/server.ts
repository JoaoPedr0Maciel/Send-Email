import express, { Request, Response } from "express";
import cors from "cors";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);
app.use(cors());

app.listen(3333, () => {
  console.log("Projeto rodando em http://localhost:3333");
});
