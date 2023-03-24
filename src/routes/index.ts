import { Router } from "express";
import { GetAllProductController } from "../controllers/getAllProductsController";
import { CreateProductController } from "../controllers/createProductController";
import { GetOneProductController } from "../controllers/getOneProductController";
import { DeleteProductController } from "../controllers/deleteProductController";
import { UpdateProductController } from "../controllers/updateProductController";

const routes = Router();

routes.route("/products").get(new GetAllProductController().handle);

routes
  .route("/product")
  .put(new UpdateProductController().handle)
  .post(new CreateProductController().handle)
  .get(new GetOneProductController().handle)
  .delete(new DeleteProductController().handle);

export { routes };
