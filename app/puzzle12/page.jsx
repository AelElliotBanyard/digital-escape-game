'use client'
import React from "react";
import { useState } from 'react';
import { useRouter } from "next/navigation";

const page = () => {
  const result = "WINDRAD";
  const [input, setInput] = useState(''); 
  const router = useRouter()

  const check = (e) => {
    if (input.toUpperCase() === result) {
        alert("Richtig!");
    } else {
        alert("Leider falsch!");
    }
}       

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-10">
      <div className="flex flex-col gap-2 items-center justify-center w-2/5 text-center">
        <h1 className="font-bold text-2xl">Rätsel 12</h1>
        <p>
          Ohne Flügel fliege ich in die Höh'n, Über Berge und Täler, stets am
          Dreh'n. Durch Wind und Sonne, so werde ich angetrieben, Errate mein
          Rätsel, um dein Ziel zu erreichen, zu siegen. Was bin ich?
        </p>
      </div>
      <div className="flex flex-row gap-1 items-center justify-center w-2/5 text-center">
        <p className="font-bold">Hinweis:</p>
        <p>Man kann mich am Himmel sehen.</p>
      </div>
      <input type="text" className="rounded border-white border-2 bg-transparent" value={input} onChange={(e) => setInput(e.target.value)} />
      <button className="border-2 border-green-700 rounded p-2" onClick={check}>Check</button>
      <button className="absolute bottom-40 right-40 border-2 border-white p-2 pl-5 pr-5 text-2xl rounded" onClick={() => router.replace("/")}>End</button>
    </div>
  );
};

export default page;
