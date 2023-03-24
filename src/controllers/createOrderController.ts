import { Request, Response } from "express";
import { OrderProducts } from "../entities/OrderProducts";
import {
  CreateOrderProductsService,
  OrderProductsRequest,
} from "../services/CreateOrderProductService";
import { CreateOrderService } from "../services/CreateOrderService";

type BodyRequest = {
  client: string;
  products: OrderProductsRequest[];
};
export class CreateOrderController {
  async handle(req: Request, res: Response) {
    const { client, products }: BodyRequest = req.body;

    const service = new CreateOrderService();
    const serviceProduct = new CreateOrderProductsService();
    const result = await service.execute({
      client,
    });

    if (result instanceof Error) return res.status(400).json(result.message);

    if (result.order_id && products.length) {
      const productsResult = products.map(async (product) => {
        const data = await serviceProduct.execute({
          ...product,
          order_id: result.order_id,
        });
        return data;
      });
    }

    return res.json(result);
  }
}
