import { PrismaClient } from "@prisma/client";

let prismaClient: PrismaClient | null = null;

//single instance
export const getPrismaClient = (): PrismaClient => {
  if (!prismaClient) {
    prismaClient = new PrismaClient();
    console.log("PrismaClient instance created");
  } else {
    console.log("Reusing existing PrismaClient instance");
  }
  return prismaClient;
};