/*
  Warnings:

  - You are about to drop the column `description` on the `Contest` table. All the data in the column will be lost.
  - You are about to drop the column `endTime` on the `Contest` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Contest` table. All the data in the column will be lost.
  - You are about to drop the `Leaderboard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Problem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Submission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserContests` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `createdById` to the `Contest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Contest` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Dificulty" AS ENUM ('Easy', 'Medium', 'Hard');

-- DropForeignKey
ALTER TABLE "Leaderboard" DROP CONSTRAINT "Leaderboard_contestId_fkey";

-- DropForeignKey
ALTER TABLE "Leaderboard" DROP CONSTRAINT "Leaderboard_userId_fkey";

-- DropForeignKey
ALTER TABLE "Problem" DROP CONSTRAINT "Problem_contestId_fkey";

-- DropForeignKey
ALTER TABLE "Submission" DROP CONSTRAINT "Submission_problemId_fkey";

-- DropForeignKey
ALTER TABLE "Submission" DROP CONSTRAINT "Submission_userId_fkey";

-- DropForeignKey
ALTER TABLE "_UserContests" DROP CONSTRAINT "_UserContests_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserContests" DROP CONSTRAINT "_UserContests_B_fkey";

-- AlterTable
ALTER TABLE "Contest" DROP COLUMN "description",
DROP COLUMN "endTime",
DROP COLUMN "name",
ADD COLUMN     "createdById" TEXT NOT NULL,
ADD COLUMN     "duration" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Leaderboard";

-- DropTable
DROP TABLE "Problem";

-- DropTable
DROP TABLE "Submission";

-- DropTable
DROP TABLE "_UserContests";

-- CreateTable
CREATE TABLE "_ContestToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ContestToUser_AB_unique" ON "_ContestToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ContestToUser_B_index" ON "_ContestToUser"("B");

-- AddForeignKey
ALTER TABLE "Contest" ADD CONSTRAINT "Contest_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContestToUser" ADD CONSTRAINT "_ContestToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Contest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContestToUser" ADD CONSTRAINT "_ContestToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
