import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { Name, Age, Hometown, Hobby } = req.body;
      const item = await prisma.newItem.create({
        data: { Name, Age, Hometown, Hobby },
      });
      return res.status(200).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
