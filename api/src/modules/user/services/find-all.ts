import { PrismaClient } from ".prisma/client";

const findAllUsers = (prisma: PrismaClient) => {
  return prisma.user.findMany();
};

export { findAllUsers };
