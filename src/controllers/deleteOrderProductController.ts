import { Request, Response } from "express";
import { DeleteOrderProductService } from "../services/DeleteOrderProductService";

export class DeleteOrderProductsController {
  async handle(req: Request, res: Response) {
    const { product_sales_id } = req.body;
    const service = new DeleteOrderProductService();

    const result = await service.execute(product_sales_id);

    if (result instanceof Error) return res.status(400).json(result.message);

    return res.status(204).end();
  }
}
