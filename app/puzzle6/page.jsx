'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function page() {
  const [answer, setAnswer] = useState('');
  const [text, setText] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const checkAnswer = () => {
    if (answer.toLowerCase() === 'katze') {
      setIsCorrect(true);
      setText('Richtig');
    } else {
      setIsCorrect(false);
      setText('Falsch');
    }
  };
  const handleButtonClick = () => {
    checkAnswer();
  };

  return(
    <div>
      <p className="text-center w-1/2 m-56">
        Mit goldenen Augen und einem leisen Schnurren,
        Bin ich ein Jäger in der Dunkelheit verborgen.
        Meine Zähne sind scharf, meine Krallen geschärft,
        Errate mein Rätsel, um weiterzukommen auf deinem Weg.
        Welches Tier bin ich?
      </p>
        <input type="text" className="border-solid border-black border-2" onChange={(e) => setAnswer(e.target.value)}/>
        <input type="submit" value="Absenden" onClick={handleButtonClick} className='rounded-full bg-blue-500 p-2 hover:bg-blue-700 text-white'/>
      {isCorrect && (
      <p className="text-center mt-4">
        {text}
      <br/>
      <Link href="/puzzle7">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Weiter
        </button>
      </Link>
      </p>
      )}
      {!isCorrect && (
        <p className="text-center mt-4">
          {text}
        </p>
      )}
    </div>
  );
}
