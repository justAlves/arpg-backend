/*
  Warnings:

  - Added the required column `characterId` to the `skills` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "characters" DROP CONSTRAINT "characters_skillId_fkey";

-- AlterTable
ALTER TABLE "skills" ADD COLUMN     "characterId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "skills" ADD CONSTRAINT "skills_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
