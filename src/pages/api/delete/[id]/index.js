import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;
  console.log(id);
  if (!id) res.status(400).json({ error: "Bad Request" });

  if (req.method === "DELETE") {
    const itemId = parseInt(id);
    try {
      await prisma.newItem.delete({
        where: {
          id: itemId,
        },
      });
      return res.status(200).json({ message: "Deleted" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
