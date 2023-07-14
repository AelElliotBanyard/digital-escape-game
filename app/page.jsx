"use client";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="font-bold text-4xl mb-10">Escape Room</h1>
      <div className="flex flex-col gap-2">
        <button className="border-2 border-white p-3" onClick={() => router.replace('/puzzle1')}>Puzzle1</button>
        <button className="border-2 border-white p-3" onClick={() => router.replace('/puzzle2')}>Puzzle 2</button>
        <button className="border-2 border-white p-3" onClick={() => router.replace('/puzzle3')}>Puzzle 3</button>
        <button className="border-2 border-white p-3" onClick={() => router.replace('/puzzle4')}>Puzzle 4</button>
        <button className="border-2 border-white p-3" onClick={() => router.replace('/puzzle5')}>Puzzle 5</button>
        <button className="border-2 border-white p-3" onClick={() => router.replace('/puzzle6')}>Puzzle 6</button>
        <button className="border-2 border-white p-3" onClick={() => router.replace('/puzzle7')}>Puzzle 7</button>
        <button className="border-2 border-white p-3" onClick={() => router.replace('/puzzle8')}>Puzzle 8</button>
        <button className="border-2 border-white p-3" onClick={() => router.replace('/puzzle9')}>Puzzle 9</button>
        <button className="border-2 border-white p-3" onClick={() => router.replace('/puzzle10')}>Puzzle 10</button>
        <button className="border-2 border-white p-3" onClick={() => router.replace('/puzzle11')}>Puzzle 11</button>
        <button className="border-2 border-white p-3" onClick={() => router.replace('/puzzle12')}>Puzzle 12</button>
      </div>
    </div>
  );
};

export default page;