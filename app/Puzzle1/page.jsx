"use client"    
import { useState } from 'react';

const Page = () => {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = () => {
    if (answer.toLowerCase() === 'spiegel') {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleButtonClick = () => {
    checkAnswer();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Rätsel 1</h1>
      <p className="text-center mb-2">In diesem Wald existiert ein Tor,</p>
      <p className="text-center mb-2">Doch unsichtbar bleibt es immer vor.</p>
      <p className="text-center mb-2">Schlüssel öffnen es nicht, denn es kennt kein Schloss,</p>
      <p className="text-center mb-4">Ein Tor zu anderen Welten, versteckt im Felsen groß.</p>
      
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="mb-4 p-2 bg-gray-200 text-gray-800"
      />
      
      <button onClick={handleButtonClick} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Antwort überprüfen
      </button>

      {isCorrect && (
        <p className="text-center mt-4">
          Richtige Antwort! Du kannst fortfahren.
          <br />
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            NEXT
          </button>
        </p>
      )}
      {!isCorrect && answer !== '' && (
        <p className="text-center mt-4">Falsche Antwort. Bitte versuche es erneut.</p>
      )}
    </div>
  );
};

export default Page;
