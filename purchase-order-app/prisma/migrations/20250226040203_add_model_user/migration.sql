-- CreateEnum
CREATE TYPE "RoleUser" AS ENUM ('STAFF', 'MANAGER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "RoleUser" NOT NULL DEFAULT 'STAFF',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
