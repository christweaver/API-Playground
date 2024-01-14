import { useState } from "react";
const apiKey = process.env.API_KEY;

export default function NewItem() {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Hometown, setTown] = useState("");
  const [Hobby, setHobby] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/new", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ Name, Age, Hometown, Hobby }),
    });
    if (res.ok) {
      console.log("yay");
    }
  };

  return (
    <div className="w-full min-h-screen blur-second bg-no-repeat bg-fixed bg-top bg-cover">
      <div className="bg-dimWhite rounded-xl shadow-2xl p-6 max-w-[400px] mx-auto mt-10">
        <h1 className="text-2xl font-poppins font-semibold mb-3 text-black">
          Add new workout
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            name="name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            placeholder="Workout name"
          ></input>
          <input
            name="age"
            value={Age}
            onChange={(e) => setAge(e.target.value)}
            className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            placeholder="Amount of reps age"
          ></input>
          <input
            name="homeTown"
            value={Hometown}
            onChange={(e) => setTown(e.target.value)}
            className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            placeholder="Amount of weight homeTown"
          ></input>
          <input
            name="hobby"
            value={Hobby}
            onChange={(e) => setHobby(e.target.value)}
            className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            placeholder="Amount of set hobby"
          ></input>
          <button
            type="submit"
            className="bg-red-700 text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition duration-300 self-center"
          >
            Add to db
          </button>
        </form>
      </div>
    </div>
  );
}
