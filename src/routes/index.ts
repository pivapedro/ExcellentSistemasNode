import { Router } from "express";

import { GetAllProductController } from "../controllers/getAllProductsController";
import { CreateProductController } from "../controllers/createProductController";
import { GetOneProductController } from "../controllers/getOneProductController";
import { DeleteProductController } from "../controllers/deleteProductController";
import { UpdateProductController } from "../controllers/updateProductController";

import { CreateOrderController } from "../controllers/createOrderController";
import { UpdateOrderController } from "../controllers/updateOrderController";
import { GetOneOrderController } from "../controllers/getOneOrderController";
import { DeleteOrderController } from "../controllers/deleteOrderController";
import { GetAllOrderController } from "../controllers/getAllOrderController";
import { DeleteOrderProductsController } from "../controllers/deleteOrderProductController";

const routes = Router();

routes.route("/products").get(new GetAllProductController().handle);

routes
  .route("/product")
  .put(new UpdateProductController().handle)
  .post(new CreateProductController().handle)
  .get(new GetOneProductController().handle)
  .delete(new DeleteProductController().handle);

routes.route("/orders").get(new GetAllOrderController().handle);

routes
  .route("/order")
  .get(new GetOneOrderController().handle)
  .post(new CreateOrderController().handle)
  .put(new UpdateOrderController().handle)
  .delete(new DeleteOrderController().handle);

routes
  .route("/order/product")
  .delete(new DeleteOrderProductsController().handle);

export { routes };
