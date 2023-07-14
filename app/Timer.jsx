'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function Timer() {
  const [time, setTime] = useState(null);
  const [countdown, setCountdown] = useState(false);
  const router = useRouter();

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}min ${seconds < 10 ? '0' : ''}${seconds}s`;
  };
  
  useEffect(() => {
    let timerId;
    if(countdown && time > 0){
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    else if(time === 0){
      router.push('/failed');
    }

    return () => {
      clearInterval(timerId);
    };
  }, [time, countdown]);

  const startCountdown = () => {
    setTime(900);
    setCountdown(true);
  };



  return (
    <div className="">
      {time !== null && <p className="text-4xl mb-4">Time remaining: {formatTime(time)}</p>}
      <button className={`px-4 py-2 font-bold text-white rounded ${countdown ? 'bg-gray-500 cursor-default' : 'bg-blue-500 hover:bg-blue-700'}`} 
              onClick={startCountdown} 
              disabled={countdown}>
        Start countdown
      </button>
    </div>
  );
}

export default Timer;
