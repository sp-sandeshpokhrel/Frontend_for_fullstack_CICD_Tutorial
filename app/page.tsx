"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sampledata`).then((res) => {
      res.json().then((data) => {
        setData(data);
        setLoading(false);
      });
    });
  }, []);
  return (
    <div>
      <p>Your Sample Data</p>
      <p>
        {loading
          ? "Fetching..."
          : data.map((dat: { id: string; text: string }) => (
              <p key={dat.id}>{dat.text}</p>
            ))}
      </p>
    </div>
  );
}
