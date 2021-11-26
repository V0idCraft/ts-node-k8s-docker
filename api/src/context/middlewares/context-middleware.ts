import { Request, Response, NextFunction } from "express";
import { context } from "../context";

const useContextMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.context = context;

  next();
};

export { useContextMiddleware };
