import { Request, Response } from "express";
import { UpdateOrderService } from "../services/UpdateOrderService";

export class UpdateOrderController {
  async handle(req: Request, res: Response) {
    const { client, order_id } = req.body;

    const service = new UpdateOrderService();

    const result = await service.execute({
      client,
      order_id,
    });

    if (result instanceof Error) return res.status(400).json(result.message);

    return res.json(result);
  }
}
