'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Wind() {
  const [answer, setAnswer] = useState('');
  const correctAnswer = 'Wind';
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
const router = useRouter();

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      setShowSuccessMessage(true);
      setErrorMessage('')
    } else {
      setErrorMessage('Falsche Antwort. Versuche es erneut');
      setShowSuccessMessage('');
    }
  };

  

  return (
    <>
      <div className='text-center'>
        <p>
          In leisen Flüstertönen steigt eine Stimme empor,
          <br />
          Durch stille Lippen klingen ihre Worte im Chor.
          <br />
          Sie singt von Legenden, vergessen und weit,
          <br />
          Haucht Leben ein, wo Stille gedeiht.
        </p>

        <form onSubmit={handleSubmit}>
        <br />
          <label htmlFor="answer">Antwort</label>
          <br />
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={handleAnswerChange}
            className='text-black'
          />
          <br />
          <br />    
          <button type="submit" className='border border-slate-300'>Submit</button>
        </form>
        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        {showSuccessMessage && <p>Deine Antwort ist Richtig!</p> &&
        <button className='border border-slate-300' onClick={() => router.push("/puzzle4")}>Next</button>}
        <br />
      </div>
    </>
  );
}
