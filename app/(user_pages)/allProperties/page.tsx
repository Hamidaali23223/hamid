import React from "react";

const page = async () => {
  const response = await fetch("http://localhost:3000/api/submit");
  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }
  const data = await response.json();
  const result = data.data;

  return (
    <div>
      <h1>All properties list</h1>
      {result.map((res: any) => (
        <>
          <pre>{JSON.stringify(res)}</pre>
          <h1>{res.PropertyType}</h1>
        </>
      ))}
    </div>
  );
};

export default page;
