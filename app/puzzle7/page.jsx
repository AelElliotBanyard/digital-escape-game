'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Puzzle7() {
  const [value, setValue] = useState('');
  const [showHint, setShowHint] = useState(false);
  const router = useRouter();

  const checkAnswer = (event) => {
    event.preventDefault();
    if (value.toLowerCase() === 'taschenlampe') {
      alert('Correct answer!');
      router.push('/puzzle8');
    } else {
      alert('Wrong answer, please try again.');
    }
  };

  const goToNextPuzzle = () => {
    router.push('/puzzle8');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Rätsel 7</h1>
      <p className="mb-8">
        In der Dunkelheit leuchte ich hell,<br/>
        An Wänden und Decken bin ich zur Stell.<br/>
        Ich erschaffe Bilder und Botschaften klar,<br/>
        Folge mir, um herauszufinden, wo du bist, ja?<br/><br/>
        Was bin ich?<br/><br/>
      </p>
      <button onClick={() => setShowHint(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Zeige Hinweis</button>
      {showHint && <p>Hinweis: Ich bin oft in dunklen Räumen zu finden und benötige Strom, um zu funktionieren.</p>}
      <Image 
        src="/flashlight.jpg" 
        alt="Flashlight"
        width={500} 
        height={300} 
      />
      <form onSubmit={checkAnswer} className="mt-8">
        <input 
          type="text" 
          className="border rounded px-4 py-2 w-64" 
          placeholder="Deine Antwort"
          value={value} 
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Submit</button>
      </form>
      <button onClick={goToNextPuzzle} className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">nächstes Rätsel</button>
    </div>
  );
}