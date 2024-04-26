import express, { Response } from "express";
import cors from "cors";
import { router } from "./routes";

const app = express();
app.use(express.json());

// Middleware para habilitar o CORS
app.use((req, res: Response, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(router);
app.use(cors());

app.listen(3333, () => {
  console.log("Projeto rodando em http://localhost:3333");
});
