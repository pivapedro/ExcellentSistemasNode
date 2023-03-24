import { Request, Response } from "express";
import { DeleteOrderService } from "../services/DeleteOrderService";

export class DeleteOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;
    const service = new DeleteOrderService();

    const result = await service.execute(order_id);

    if (result instanceof Error) return res.status(400).json(result.message);

    return res.status(204).end();
  }
}
