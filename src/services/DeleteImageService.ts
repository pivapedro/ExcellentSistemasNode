import { getRepository } from "typeorm";
import { Image } from "../entities/Image";

export class DeleteImageService {
  async execute(image_id: string) {
    const repo = getRepository(Image);

    if (!(await repo.findOne(Number(image_id))))
      return new Error("Image does not exists!");

    return repo.delete(Number(image_id));
  }
}
