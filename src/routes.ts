import { Request, Response, Router } from "express";
import { SendMailController } from "./controllers/SendMailController";

export const router = Router();

router.post("/send", new SendMailController().handle);
