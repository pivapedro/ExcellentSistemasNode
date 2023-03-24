import { getRepository } from "typeorm";
import { Image } from "../entities/Image";

type ImageRequest = {
  fk_product_id: number;
  image_src: string;
};

export class CreateImageService {
  async execute({
    fk_product_id,
    image_src,
  }: ImageRequest): Promise<Error | Image> {
    const repo = getRepository(Image);

    const newImage = repo.create({
      fk_product_id,
      image_src,
    });

    await repo.save(newImage);

    return newImage;
  }
}
