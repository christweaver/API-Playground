import { useState } from "react";
import { useEffect } from "react";
let apiKey = process.env.NEXT_PUBLIC_API_KEY;
let getTopics = async () => {
  const res = await fetch("/api/get", {
    cache: "no-store",
    headers: {
      "Content-type": "application/json",
      Authorization: apiKey,
    },
  });
  return res.json(console.log(res));
};

export default function Tables() {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTopics();
        if (data.list) {
          const sortedList = data.list.sort((a, b) => a.id - b.id);
          setList(sortedList);
        } else {
          console.error("Invalid data structure:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  // console.log(list);
  return (
    <div className="space-y-2 mt-8">
      {list.map((item, index) => (
        <div
          key={index}
          className="flex flex-row border-black border-2 p-4 space-x-3 justify-between  items-center"
        >
          <div className="flex flex-col mr-4 px-4 ml-16">
            <h1 className="text-lg font-bold mb-2">Id Number</h1>
            <h2 className="text-base">{item.id}</h2>
          </div>
          <div className="flex flex-col mr-4 px-4">
            <h1 className="text-lg font-bold mb-2">Name</h1>
            <h2 className="text-base">{item.Name}</h2>
          </div>
          <div className="flex flex-col mr-4 px-4">
            <h1 className="text-lg font-bold mb-2">Age</h1>
            <h2 className="text-base">{item.Age}</h2>
          </div>
          <div className="flex flex-col mr-4 px-4">
            <h1 className="text-lg font-bold mb-2">Hometown</h1>
            <h2 className="text-base">{item.Hometown}</h2>
          </div>
          <div className="flex flex-col px-4">
            <h1 className="text-lg font-bold mb-2">Hobby</h1>
            <h2 className="text-base">{item.Hobby}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
