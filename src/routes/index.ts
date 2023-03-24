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

/* 
routes
  .route("/platforms/:id")
  .get(new GetOnePlatformsController().handle)
  .put(new UpdatePlatformsController().handle)
  .delete(new DeletePlatformsController().handle);

routes
  .route("/games")
  .get(new GetAllGamesController().handle)
  .post(new CreateGameController().handle);

routes
  .route("/games/:id")
  .get(new GetOneGameController().handle)
  .put(new UpdateGameController().handle)
  .delete(new DeleteGameController().handle);
   */
export { routes };
