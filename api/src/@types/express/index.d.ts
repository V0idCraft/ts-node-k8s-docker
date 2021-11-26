import { IContext } from "../../context";
import * as express from "express"
declare global {
  namespace Express {
    interface Request {
      context: IContext;
    }
  }
}
