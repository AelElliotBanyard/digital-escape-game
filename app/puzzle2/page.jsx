'use client'
import { useState, useEffect } from 'react';

export default function EscapeRoom2() {
  const [clue, setClue] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [clientLoaded, setClientLoaded] = useState(false);

  useEffect(() => {
    setClientLoaded(true);
  }, []);

  const handleClueChange = (event) => {
    setClue(event.target.value);
  };

  const checkSolution = () => {
    if (clue.toLowerCase() === 'schatten') {
      setShowSolution(true);
    }
  };

  const redirectUser = () => {
    window.location.href = '/puzzle3';
  };

  return (
    <div>
      <h1>Escape-Room Rätsel 2</h1>
      <p>Willkommen im zweiten Raum. Um zu entkommen, musst du das Rätsel lösen.</p>
      <br />
      {!showSolution ? (
        <div>
          <p>Finde das richtige Wort und tippe es hier ein:</p>
          <input type="text" value={clue} onChange={handleClueChange} />
          <button onClick={checkSolution}>Überprüfen</button>
        </div>
      ) : (
        <div>
          <p>Herzlichen Glückwunsch! Du hast das Rätsel gelöst!</p>
          {clientLoaded && (
            <button onClick={redirectUser}>Zum Raum 3</button>
          )}
        </div>
      )}
    </div>
  );
}