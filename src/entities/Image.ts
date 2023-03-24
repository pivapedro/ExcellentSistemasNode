import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Product } from "./Product";

@Entity("product_images")
export class Image {
  @PrimaryGeneratedColumn("increment")
  image_id: number;

  @Column({
    transformer: {
      to: (value: string) => Buffer?.from(value),
      from: (value: Buffer) => value?.toString(),
    },
  })
  image_src: string;

  @ManyToOne(() => Product, (product) => product.product_id, {
    onDelete: "CASCADE",
    orphanedRowAction: "delete",
  })
  @JoinColumn({ name: "fk_product_id" })
  fk_product_id: number;
}
