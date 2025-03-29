const TImer = () => {
    const date = new Date();
    const day = date.getDay()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
  return (
    <div className=' p-8  items-center justify-evenly gap-2 bg-[#5E5E5E] md:flex md:flex-row text-sm'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <p className='text-2xl text-white'>Relationship With God</p>
        <div className='w-84 h-0.5 bg-[#FF7F00]'></div>
        <p className='text-gray-300'>April 30, 2025</p>
      </div>
      <div className='flex gap-4'>
        <div className='flex flex-col items-center justify-center gap-3 '>
          <p className='text-[#FF7F00] text-2xl'>{day}</p>
          <p className='text-sm md:text-2xl  bg-[#FFFFFF33] text-gray-300 px-3'>Days</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-3 '>
          <p className='text-[#FF7F00] text-2xl'>{hours}</p>
          <p className='text-sm md:text-2xl bg-[#FFFFFF33] text-gray-300 px-3'>Hours</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-3 '>
          <p className='text-[#FF7F00] text-2xl'>{minutes}</p>
          <p className='text-sm md:text-2xl  bg-[#FFFFFF33] text-gray-300 px-3'>Minutes</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-3 '>
          <p className='text-[#FF7F00] text-2xl'>{seconds}</p>
          <p className='text-sm md:text-2xl  bg-[#FFFFFF33] text-gray-300 px-3'>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default TImer;
