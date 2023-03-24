import { Request, Response } from "express";
import { CreateImageService } from "../services/CreateImageService";
import { UpdateProductService } from "../services/UpdateProductService";

export class UpdateProductController {
  async handle(req: Request, res: Response) {
    const {
      name,
      description,
      value,
      product_id,
      current_inventory,
      image_src,
    } = req.body;

    const service = new UpdateProductService();
    const serviceImage = new CreateImageService();

    const result = await service.execute({
      product_id,
      name,
      description,
      value,
      current_inventory,
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
