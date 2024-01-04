-- DropIndex
DROP INDEX "NewItem_Name_key";

-- AlterTable
ALTER TABLE "NewItem" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "NewItem_pkey" PRIMARY KEY ("id");
