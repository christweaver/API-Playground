import { PrismaClient } from "@prisma/client";
import handleNotAuthenticated from "@/utils/handleNotAuthenticated";
import isAuthenticated from "@/utils/isAuthenticated";
const prisma = new PrismaClient();

export default async function update(req, res) {
  const { id } = req.query;
  const { newName, newAge, newHobby, newHometown } = req.body;
  console.log(id);
  if (!isAuthenticated(req)) handleNotAuthenticated(res);

  if (req.method === "PATCH") {
    const itemId = parseInt(id);
    try {
      const item = await prisma.newItem.update({
        where: {
          id: itemId,
        },
        data: {
          Name: newName,
          Age: newAge,
          Hometown: newHometown,
          Hobby: newHobby,
          id: itemId,
        },
      });
      return res.status(200).json({ item });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}