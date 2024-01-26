import { PrismaClient } from "@prisma/client";
import handleNotAuthenticated from "@/utils/handleNotAuthenticated";
import isAuthenticated from "@/utils/isAuthenticated";
import { body, validationResult } from "express-validator";

const prisma = new PrismaClient();

export default async function update(req, res) {
  const { id } = req.query;
  const { newName, newAge, newHobby, newHometown } = req.body;

  if (!isAuthenticated(req)) {
    return handleNotAuthenticated(res);
  }

  if (req.method === "PATCH") {
    const itemId = parseInt(id);

    try {
      await validate(req);

      const validationErrors = validationResult(req);

      if (!validationErrors.isEmpty()) {
        return res.status(400).json({ errors: validationErrors.array() });
      }
      if (!newName && !newAge && !newHometown && !newHobby) {
        return res.status(400).json({
          error:
            "To update the data you must change the variable you are atempting to update to either newName, newAge, newHometown or newHobby",
        });
      }

      const item = await prisma.newItem.update({
        where: {
          id: itemId,
        },
        data: {
          Name: newName,
          Age: newAge,
          Hometown: newHometown,
          Hobby: newHobby,
        },
      });

      console.log(item);

      return res.status(200).json(item);
    } catch (error) {
      return res.status(400).json({
        error: {
          msg: "Verify that all variables are complete and adhere to the required string format.",
        },
      });
    }
  } else {
    return res.status(405).json({ msg: "Method Not Allowed" });
  }
}

const validate = async (req) => {
  await Promise.all([
    body("newName").optional().notEmpty().isString().run(req),
    body("newAge").optional().notEmpty().isString().run(req),
    body("newHobby").optional().notEmpty().isString().run(req),
    body("newHometown").optional().notEmpty().isString().run(req),
  ]);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw errors;
  }
};
