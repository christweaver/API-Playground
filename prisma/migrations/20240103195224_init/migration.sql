-- CreateTable
CREATE TABLE "NewItem" (
    "Name" TEXT NOT NULL,
    "Age" TEXT NOT NULL,
    "Hometown" TEXT NOT NULL,
    "Hobby" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "NewItem_Name_key" ON "NewItem"("Name");
