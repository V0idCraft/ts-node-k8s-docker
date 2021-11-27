import { Request, Response } from "express";
import { findAllUsers } from "../services";

const findAllController = async (req: Request, res: Response) => {
  const users = await findAllUsers(req.context.prisma);

  return res.status(200).json({
    status: "OK",
    data: users,
  });
};

export { findAllController };
