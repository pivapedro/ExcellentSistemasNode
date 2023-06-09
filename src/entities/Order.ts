import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { OrderProducts } from "./OrderProducts";

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn("increment")
  order_id: number;

  @Column()
  client: string;

  @OneToMany(() => OrderProducts, (order) => order.order_id, {
    cascade: ["remove"],
  })
  @JoinColumn({ name: "order_id" })
  products: OrderProducts[];
}
