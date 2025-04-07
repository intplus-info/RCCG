import image10 from "../assets/trees.svg";
import Jump from "../assets/jump.svg"
import image from "../assets/cuts.svg"
import frame43 from "../assets/Frame43.svg";
const Sermons = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5  p-13'>
      <div className='flex gap-3 items-center'>
        <div className='w-28 bg-gray-400 h-0.5'></div>
        <p className='text-gray-700'>Latest Sermons</p>

        <div className='w-28 bg-gray-400 h-0.5'></div>
      </div>
      <div className='flex justify-between w-full'>
        <div className='flex gap-4'>
          <img
            src={image10}
            alt=''
            className=' w-[69px] h-[63px] md:w-[211px] md:h-[143px]'
          />
          <div className='flex flex-col  justify-center gap-2'>
            <p className='text-sm md:text-2xl'>Transforming Live, Restoring Hope</p>
            <p className=' text-sm text-gray-600'>
              By <span className='text-orange-400'>Admin</span>, August 8 2025
            </p>
          </div>
        </div>
        <img
          src={frame43}
          alt=''
          className='w-[69px] h-[63px] md:w-[211px] md:h-[143px]'
        />
      </div>
      <div className='flex justify-between w-full'>
        <div className='flex gap-4'>
          <img
            src={Jump}
            alt=''
            className=' w-[69px] h-[63px] md:w-[211px] md:h-[143px]'
          />
          <div className='flex flex-col  justify-center gap-2'>
            <p className='text-sm md:text-2xl'> Put Your Faith Into Action</p>
            <p className=' text-sm text-gray-600'>
              By <span className='text-orange-400'>Admin</span>, August 8 2025
            </p>
          </div>
        </div>
        <img
          src={frame43}
          alt=''
          className='w-[69px] h-[63px] md:w-[211px] md:h-[143px]'
        />
      </div>
      <div className='flex justify-between w-full'>
        <div className='flex gap-4'>
          <img
            src={image}
            alt=''
            className=' w-[69px] h-[63px] md:w-[211px] md:h-[143px]'
          />
          <div className='flex flex-col  justify-center gap-2'>
            <p className='text-sm md:text-2xl'> Put Your Faith Into Action</p>
            <p className=' text-sm text-gray-600'>
              By <span className='text-orange-400'>Admin</span>, August 8 2025
            </p>
          </div>
        </div>
        <img
          src={frame43}
          alt=''
          className='w-[69px] h-[63px] md:w-[211px] md:h-[143px]'
        />
      </div>
    </div>
  );
};

export default Sermons;
