'use client'
import { useState } from "react";

export default function(){
  const [clue, setClue] = useState('');
  const [showSolution, setShowSolution] = useState(false);

  const handleClueChange = (event) => {
    setClue(event.target.value);
  };

  const checkSolution = () => {
    if (clue.toLowerCase() === 'schatten') {
      setShowSolution(true);
    }
  };
    return(
        <div>
            <h1>Escape-Room Rätsel 2</h1>
      <p>Willkommen im zweiten Raum. Um zu entkommen, musst du das Rätsel lösen.</p>
      <br/>
      {!showSolution ? (
        <div>
          <p>Finde das richtige Wort und tippe es hier ein:</p>
          <input type="text" value={clue} onChange={handleClueChange} />
          <button onClick={checkSolution}>Überprüfen</button>
        </div>
      ) : (
        <div>
          <p>Herzlichen Glückwunsch! Du hast das Rätsel gelöst!</p>
          <p>Die Tür öffnet sich und du gehst in den Raum 3.</p>
        </div>
      )}
        </div>
    )
}