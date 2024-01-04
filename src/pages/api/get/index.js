import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function get(req, res) {
  if (req.method === "GET") {
    try {
      let list = await prisma.newItem.findMany();
      return res.status(200).json({ list });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
