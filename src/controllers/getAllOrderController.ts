import { Request, Response } from "express";
import { GetAllOrderService } from "../services/GetAllOrderService";

export class GetAllOrderController {
  async handle(req: Request, res: Response) {
    const serviceOrder = new GetAllOrderService();

    const order = await serviceOrder.execute();

    return res.json(order);
  }
}
