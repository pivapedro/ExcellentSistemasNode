import { Request, Response } from "express";
import { GetOneOrderService } from "../services/GetOneOrderService";

export class GetOneOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;

    const service = new GetOneOrderService();

    const result = await service.execute({ order_id });

    if (result instanceof Error) return res.status(400).json(result.message);

    return res.json(result);
  }
  async execute(req: Request, res: Response) {
    const { order_id } = req.body;

    const service = new GetOneOrderService();

    const result = await service.execute({ order_id });

    if (result instanceof Error) return null;

    return result;
  }
}
