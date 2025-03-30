import image5 from "../assets/image5.svg";
import image6 from "../assets/image6.svg";
import image7 from "../assets/image7.svg";
const Event = () => {
  return (
    <div className='flex h-59 overflow-y-hidden '>
      <div className='w-1/6  bg-orange-400 flex flex-col justify-center items-center'>
        <p className='uppercase text-sm text-white'>UPCOMING</p>
        <p className='uppercase text-2xl text-white'>Events</p>
      </div>
      <div className='w-32 flex-1 bg-white'>
        {" "}
        <img src={image5} alt='image5' className='w-full h-full object-cover' />
        <p className='relative  -mt-18 text-black bg-white p-3 opacity-50 '>
          <span className='flex flex-col justify-center text-gray-400 items-center gap-4'>
            April 30, 2025
            <p className='text-sm font-bold text-black'>
            Relationship With
            </p>
          </span>
        </p>
      </div>
      <div className='w-32 flex-1 bg-white'>
        {" "}
        <img src={image6} alt='image5' className='w-full h-full object-cover' />
        <p className='relative  -mt-18 text-black bg-white p-3 opacity-50 '>
          <span className='flex flex-col justify-center text-gray-400 items-center gap-4'>
            April 30, 2025
            <p className='text-sm font-bold text-black'>
            Abundant Love
            </p>
          </span>
        </p>
      </div>
      <div className='w-32 flex-1 bg-white'>   {" "}
        <img src={image7} alt='image5' className='w-full h-full object-cover' />
        <p className='relative  -mt-18 text-black bg-white p-3 opacity-50 '>
          <span className='flex flex-col justify-center text-gray-400 items-center gap-4'>
            April 30, 2025
            <p className='text-sm font-bold text-black'>
            God is Good
            </p>
          </span>
        </p></div>
    </div>
  );
};

export default Event;
