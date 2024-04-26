import { SendMailModel } from "../interfaces/SendMailModel";
import { SendMailService } from "../services/SendMailService";
import { Request, Response } from "express";

export class SendMailController {
  async handle(req: Request, res: Response) {
    const { name, lastName, email }: SendMailModel = req.body;

    const sendMailService = new SendMailService();
    const sendMail = await sendMailService.sendMail({ name, lastName, email });

    return res.json({ msg: sendMail });
  }
}
