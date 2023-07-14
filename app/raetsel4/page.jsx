"use client"
import { useState } from 'react';

const PianoRiddlePage = () => {
  const [inputValue, setInputValue] = useState('');
  const correctAnswer = 'Klavier';
  const [isSolved, setIsSolved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.toLowerCase() === correctAnswer.toLowerCase()) {
      setIsSolved(true);
    } else {
      alert('falsch!');
      setInputValue('');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <h1>Rätsel: Was bin ich?</h1>
      <p>In einem Raum voller Töne stehe ich stolz,</p>
      <p>Meine Tasten sind mein Sprachrohr, mein Stolz.</p>
      <p>Mit sanften Händen und einem musikalischen Blick,</p>
      <p>Entfessele meine Melodien, das ist mein Trick.</p>

      {!isSolved ? (
        <form onSubmit={handleSubmit}>
          <label>
            Gib das richtige Wort ein:
            <input
              style={{ color: 'black' }}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>
          <button type="submit">Einreichen</button>
        </form>
      ) : (
        <p style={{ color: 'green' }}>
          In einer Lichtung entdeckt ihr ein prächtiges Klavier,
          <br /> das von überwachsenem Moos umgeben ist. Durch das Spielen einer Melodie öffnet
          <br /> sich ein geheimer Durchgang, der noch tiefer in den Wald führt.
        </p>
      )}
    </div>
  );
};

export default PianoRiddlePage;
