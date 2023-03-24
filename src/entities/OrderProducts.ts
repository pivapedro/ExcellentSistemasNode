import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity("orders_product")
export class OrderProducts {
  @PrimaryGeneratedColumn("increment")
  product_sales_id: number;

  @ManyToOne(() => Order, (order) => order.order_id, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "order_id" })
  order_id: number;

  @Column()
  quantity: number;

  @Column()
  value: number;
  @ManyToOne(() => Product, (product) => product.name, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "fk_product_id" })
  name: string;

  @ManyToOne(() => Product, (product) => product.product_id, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "fk_product_id" })
  fk_product_id: number;
}
