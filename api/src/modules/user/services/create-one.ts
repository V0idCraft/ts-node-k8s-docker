import { Prisma, PrismaClient } from ".prisma/client";

const createOneUser = async (prisma: PrismaClient, data: Prisma.UserCreateInput) => {
  return await prisma.user.create({
    data: data,
  });
};

export { createOneUser };
