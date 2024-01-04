"use client";
import Home from "@/pages";
import { useState } from "react";
export default function Edit({ Name, Hometown, Hobby, Age, id }) {
  let [newName, setName] = useState(Name);
  let [newAge, setAge] = useState(Age);
  let [newHobby, setHobby] = useState(Hobby);
  let [newHometown, setHometown] = useState(Hometown);
  let handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ newName, newAge, newHometown, newHobby }),
    });
    if (res.ok) {
      console.log("yay");
    }
  };

  return (
    <div className="pt-44 ">
      <div className="bg-dimWhite z-30 rounded-xl shadow-2xl p-6 w-[400px] mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 ">
          <input
            key={id}
            name="name"
            value={newName}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md py-3 px-4 "
            type="text"
          ></input>
          <input
            key={id}
            name="age"
            value={newAge}
            onChange={(e) => setAge(e.target.value)}
            className="border border-gray-300 rounded-md py-3 px-4 "
            type="text"
          ></input>
          <input
            key={id}
            name="hometown"
            value={newHometown}
            onChange={(e) => setHometown(e.target.value)}
            className="border border-gray-300 rounded-md py-3 px-4 "
            type="text"
          ></input>
          <input
            key={id}
            name="hobby"
            value={newHobby}
            onChange={(e) => setHobby(e.target.value)}
            className="border border-gray-300 rounded-md py-3 px-4 "
            type="text"
          ></input>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
