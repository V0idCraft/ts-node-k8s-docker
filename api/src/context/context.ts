import { Prisma, PrismaClient } from "@prisma/client";
import { IContext } from "./IContext";

const clientConfig: Prisma.PrismaClientOptions = {
  //log: ["error"],
};

const prisma = new PrismaClient(clientConfig);

const context: IContext = {
  prisma: prisma,
};

export { context };
