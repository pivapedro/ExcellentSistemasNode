import { Request, Response } from "express";
import { CreateOrderService } from "../services/CreateOrderService";

export class CreateOrderController {
  async handle(req: Request, res: Response) {
    const { client } = req.body;

    const service = new CreateOrderService();
    const result = await service.execute({
      client,
    });

    if (result instanceof Error) return res.status(400).json(result.message);

    return res.json(result);
  }
}
