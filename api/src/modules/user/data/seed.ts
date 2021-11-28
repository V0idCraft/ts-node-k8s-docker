import { PrismaClient, User, Prisma } from "@prisma/client";

import { loadUsers } from "./fixtures";

export type UserMapper = (
  data: Prisma.UserCreateInput
) => Prisma.UserCreateInput;

const defaultMapper: UserMapper = (data) => data;

export const seedUsers = (mapData: UserMapper = defaultMapper) => async (
  prisma: PrismaClient
): Promise<User[]> => {
  const users = await loadUsers();
  return await Promise.all(
    users.map((user) => {
      const data = mapData(user as Prisma.UserCreateInput);

      return prisma.user.upsert({
        where: {
          id: data.id,
        },
        create: data,
        update: data,
      });
    })
  );
};
