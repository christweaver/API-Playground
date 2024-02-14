import { PrismaClient } from "@prisma/client";
import handleNotAuthenticated from "@/utils/handleNotAuthenticated";
import isAuthenticated from "@/utils/isAuthenticated";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;
  if (!isAuthenticated(req)) handleNotAuthenticated(res);

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
      return res.status(400).json({ error: "No matching ID" });
    }
  }
}
