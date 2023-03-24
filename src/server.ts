import "reflect-metadata";
import express from "express";
import "./database";
import { routes } from "./routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(3000, () => console.log("\u{1F525} Server is running"));
