import { Router } from "express";
import { findAllController } from "../controllers";

const findAllUsersRoute = Router();

findAllUsersRoute.get("/all",findAllController);

export { findAllUsersRoute };
