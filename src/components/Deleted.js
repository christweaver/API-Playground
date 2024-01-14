const apiKey = process.env.API_KEY;

export default function Deleted({ id }) {
  const goodbye = async function () {
    try {
      const res = await fetch(`/api/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      });
      if (!res.ok) {
        throw new Error("Failed to delete the item");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <button onClick={goodbye} className="text-[2px] text-white">
        Delete
      </button>
    </>
  );
}
