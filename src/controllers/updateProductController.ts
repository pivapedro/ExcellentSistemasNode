import { Request, Response } from "express";
import { UpdateProductService } from "../services/UpdateProductService";

export class UpdateProductController {
  async handle(req: Request, res: Response) {
    const { name, description, value, product_id, current_inventory } =
      req.body;

    const service = new UpdateProductService();

    const result = await service.execute({
      product_id,
      name,
      description,
      value,
      current_inventory,
    });

    if (result instanceof Error) return res.status(400).json(result.message);

    return res.json(result);
  }
}
