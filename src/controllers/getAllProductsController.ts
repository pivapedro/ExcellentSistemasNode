import { Request, Response } from "express";
import { GetAllImageService } from "../services/GetAllImageService";
import { GetAllProductService } from "../services/GetAllProductService";

export class GetAllProductController {
  async handle(req: Request, res: Response) {
    const serviceProduct = new GetAllProductService();

    const product = await serviceProduct.execute();

    return res.json(product);
  }
}
