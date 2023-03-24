import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Image } from "./Image";

@Entity("product")
export class Product {
  @PrimaryGeneratedColumn("increment")
  product_id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  value: number;

  @Column()
  current_inventory: number;

  @OneToMany(() => Image, (image) => image.fk_product_id, {
    cascade: ["remove"],
  })
  @JoinColumn({ name: "product_id" })
  images: Image[];
}
