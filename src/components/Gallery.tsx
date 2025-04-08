

const galer1 = "https://i.imgur.com/Ya3Lmzj.png";
const galer2 = "https://i.imgur.com/D96ELh9.png";
const galer3 = "https://i.imgur.com/gx5dXn0.png";
const galer4 = "https://i.imgur.com/aWnFidA.png";


const Gallery = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 p-10'>
      <div className='flex gap-3 items-center'>
        <div className='w-9 md:w-28 bg-gray-400 h-0.5'></div>
        <p className='text-gray-700 text-[10px] md:text-lg'>Latest Gallery</p>

        <div className='w-9 md:w-28 bg-gray-400 h-0.5'></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
        <div className='md:col-span-2 grid grid-rows-2 gap-4'>
          <img src={galer1} alt='' className='w-full h-full object-cover' />
          <div className='grid grid-cols-2 gap-4'>
            <img src={galer4} alt='' className='w-full h-full object-cover' />
            <img src={galer3} alt='' className='w-full h-full object-cover' />
          </div>
        </div>
        <div className='hidden md:block h-full'>
          <img src={galer2} alt='' className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
