import { Prisma, PrismaClient } from "../prisma/client";
import { createPrismaService } from "@pisces/backend";

export const PrismaService = createPrismaService<Prisma.ModelName, typeof PrismaClient>(PrismaClient, Prisma);

export type PrismaService = InstanceType<typeof PrismaService>;
