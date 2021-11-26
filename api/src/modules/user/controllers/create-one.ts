import { Request, Response } from "express";
import { createOneUser } from "../services";

const createOneController = async (req: Request, res: Response) => {
  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    return res.status(400).json({
      message: "Invalid inputs.",
    });
  }

  try {
    const user = await createOneUser(req.context.prisma, {
      firstName,
      lastName,
    });
    return res.status(200).json({
      status: "OK",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "NOTOK",
      error,
    });
  }
};

export { createOneController };
