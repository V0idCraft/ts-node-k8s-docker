import { PrismaClient,Prisma } from "@prisma/client";
import { seedUsers } from "../src/modules/user/data";

const prismaConfig: Prisma.PrismaClientOptions = {
  log: ["info", "warn"],
};
const prisma = new PrismaClient(prismaConfig);

async function main(): Promise<void> {
  await seedUsers()(prisma);
}

void main().finally(() => {
  void prisma.$disconnect();
});
