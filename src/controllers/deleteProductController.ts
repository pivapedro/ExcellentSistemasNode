import { Request, Response } from "express";
import { DeleteImageService } from "../services/DeleteImageService";
import { DeleteProductService } from "../services/DeleteProductService";
import { GetOneProductController } from "./getOneProductController";

export class DeleteProductController {
  async handle(req: Request, res: Response) {
    const { product_id } = req.body;
    const service = new DeleteProductService();
    const serviceImage = new DeleteImageService();
    const product = new GetOneProductController();

    const data = await product.execute(req, res);

    await data?.images?.map(
      async (image) => await serviceImage.execute(String(image.image_id))
    );

    const result = await service.execute(product_id);

    if (result instanceof Error) return res.status(400).json(result.message);

    return res.status(204).end();
  }
}
