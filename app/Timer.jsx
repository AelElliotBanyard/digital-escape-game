'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Timer() {
  const [time, setTime] = useState(null);
  const [countdown, setCountdown] = useState(false);
  const router = useRouter();

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
    <div>
      {time !== null && <p>Time remaining: {time} seconds</p>}
      <button onClick={startCountdown}>Start countdown</button>
    </div>
  );
}

export default Timer;
