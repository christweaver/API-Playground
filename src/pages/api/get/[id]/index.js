import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function get(req, res) {
  const { id } = req.query;
  if (req.method === "GET") {
    const itemId = parseInt(id);

    try {
      let item = await prisma.newItem.findUnique({
        where: {
          id: itemId,
        },
      });
      return res.status(200).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
