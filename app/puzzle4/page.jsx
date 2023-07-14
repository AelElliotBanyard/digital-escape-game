"use client"
import { useState } from 'react';
import { useRouter } from "next/navigation";

const PianoRiddlePage = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const correctAnswer = 'Klavier';
  const [isSolved, setIsSolved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.toLowerCase() === correctAnswer.toLowerCase()) {
      setIsSolved(true);
      
    } else {
      alert('Falsch!');
      setInputValue('');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Rätsel: Was bin ich?</h1>
      <p style={{ fontSize: '16px', marginBottom: '5px' }}>In einem Raum voller Töne stehe ich stolz,</p>
      <p style={{ fontSize: '16px', marginBottom: '5px' }}>Meine Tasten sind mein Sprachrohr, mein Stolz.</p>
      <p style={{ fontSize: '16px', marginBottom: '5px' }}>Mit sanften Händen und einem musikalischen Blick,</p>
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>Entfessele meine Melodien, das ist mein Trick.</p>

      {!isSolved ? (
        <form style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit}>
          <label>
            Gib das richtige Wort ein:
            <input
              style={{ color: 'black', margin: "10px"}}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>
          <button style={{ marginTop: '10px', border: "3px solid fuchsia" }} type="submit">Einreichen</button>
        </form>
      ) : (
        <div>
        <p style={{ color: 'green', fontSize: '16px', marginTop: '20px' }}>
          In einer Lichtung entdeckt ihr ein prächtiges Klavier,
          <br /> das von überwachsenem Moos umgeben ist. Durch das Spielen einer Melodie öffnet
          <br /> sich ein geheimer Durchgang, der noch tiefer in den Wald führt.
        </p>
        <button onClick={() => router.push('/puzzle5') }>zum nächsten Rätsel</button>
        </div>
        
      )}
    </div>
  );
};

export default PianoRiddlePage;
