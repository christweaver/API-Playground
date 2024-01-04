import React, { useEffect, useState } from "react";
import Edit from "@/components/Edit";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function update(req, res) {
  const { id } = req.query;
  const { newName, newAge, newHobby, newHometown } = req.body;
  console.log(id);

  if (req.method === "PATCH") {
    const itemId = parseInt(id);
    try {
      await prisma.newItem.update({
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
      return res.status(200).json({ message: "Updated" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  const { name, weight, reps, sets } = topic;
}
