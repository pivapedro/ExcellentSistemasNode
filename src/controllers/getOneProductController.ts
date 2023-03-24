import { Request, Response } from "express";
import { GetOneProductService } from "../services/GetOneProductService";

export class GetOneProductController {
  async handle(req: Request, res: Response) {
    const { product_id } = req.body;

    const service = new GetOneProductService();

    const result = await service.execute({ product_id });

    if (result instanceof Error) return res.status(400).json(result.message);

    return res.json(result);
  }
  async execute(req: Request, res: Response) {
    const { product_id } = req.body;

    const service = new GetOneProductService();

    const result = await service.execute({ product_id });

    if (result instanceof Error) return null;

    return result;
  }
}
