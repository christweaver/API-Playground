import { body, validationResult } from "express-validator";
import handleNotAuthenticated from "@/utils/handleNotAuthenticated";
import isAuthenticated from "@/utils/isAuthenticated";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (!isAuthenticated(req)) handleNotAuthenticated(res);

  if (req.method === "POST") {
    try {
      await validate(req);

      const { Name, Age, Hometown, Hobby } = req.body;

      const item = await prisma.newItem.create({
        data: { Name, Age, Hometown, Hobby },
      });

      return res.status(200).json(item);
    } catch (errors) {
      console.error(errors);
      return res.status(400).json({
        error: {
          msg: "Verify that all variables are complete and adhere to the required string format.",
        },
      });
    }
  } else {
    return res.status(401).json({ message: "Not authorized" });
  }
}

// Validation middleware
const validate = async (req) => {
  await Promise.all([
    body("Name").notEmpty().isString().run(req),
    body("Age").notEmpty().isString().run(req),
    body("Hometown").notEmpty().isString().run(req),
    body("Hobby").notEmpty().isString().run(req),
  ]);

  const error = validationResult(req);

  if (!error.isEmpty()) {
    throw error;
  }
};
