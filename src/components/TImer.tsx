import { useState, useEffect } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date('April 30, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='p-14 items-center justify-evenly gap-2 bg-[#5E5E5E] md:flex md:flex-row text-sm'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <p className='text-2xl text-white'>Relationship With God</p>
        <div className='w-84 h-0.5 bg-[#FF7F00]'></div>
        <p className='text-gray-300'>April 30, 2025</p>
      </div>
      <div className='flex gap-4 '>
        <div className='flex flex-col items-center justify-center gap-3'>
          <p className='text-[#FF7F00] text-2xl'>{timeLeft.days}</p>
          <p className='text-sm md:text-2xl bg-[#FFFFFF33] text-gray-300 px-3'>Days</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-3'>
          <p className='text-[#FF7F00] text-2xl'>{timeLeft.hours}</p>
          <p className='text-sm md:text-2xl bg-[#FFFFFF33] text-gray-300 px-3'>Hours</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-3'>
          <p className='text-[#FF7F00] text-2xl'>{timeLeft.minutes}</p>
          <p className='text-sm md:text-2xl bg-[#FFFFFF33] text-gray-300 px-3'>Minutes</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-3'>
          <p className='text-[#FF7F00] text-2xl'>{timeLeft.seconds}</p>
          <p className='text-sm md:text-2xl bg-[#FFFFFF33] text-gray-300 px-3'>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;