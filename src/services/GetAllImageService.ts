import { getRepository } from "typeorm";
import { Image } from "../entities/Image";

export class GetAllImageService {
  async execute() {
    const repo = getRepository(Image);

    const image = await repo.find();

    return image;
  }
}
