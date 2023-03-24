import { Request, Response } from "express";
import { CreateImageService } from "../services/CreateImageService";
import { CreateProductService } from "../services/CreateProductService";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const {
      name,
      description,
      value,
      current_inventory,
      product_id,
      image_src,
    } = req.body;

    const service = new CreateProductService();
    const serviceImage = new CreateImageService();
    const result = await service.execute({
      name,
      description,
      value,
      current_inventory,
      product_id,
    });

    if (result instanceof Error) return res.status(400).json(result.message);

    if (image_src) {
      const imageResult = await serviceImage.execute({
        fk_product_id: result.product_id,
        image_src,
      });
      return res.json({ ...result, imagens: [imageResult] });
    }

    return res.json(result);
  }
}
