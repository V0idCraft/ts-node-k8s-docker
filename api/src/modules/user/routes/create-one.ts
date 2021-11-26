import { Router } from "express";
import { createOneController } from "../controllers";

const createOneRoute = Router();

createOneRoute.post("/create",createOneController);

export { createOneRoute };
