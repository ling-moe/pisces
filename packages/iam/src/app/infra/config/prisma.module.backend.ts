// eslint-disable-next-line @nx/enforce-module-boundaries
import { Prisma, PrismaClient } from "../../../../../../dist/prisma/iam";
import { createPrismaService } from "@pisces/backend";

export const PrismaService = createPrismaService<Prisma.ModelName, typeof PrismaClient>(PrismaClient, Prisma);

export type PrismaService = InstanceType<typeof PrismaService>;

// eslint-disable-next-line @nx/enforce-module-boundaries
export * from "../../../../../../dist/prisma/iam";
