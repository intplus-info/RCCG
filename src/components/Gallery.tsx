import image1 from "../assets/pic1.svg";
import image2 from "../assets/pic2.svg";
import image3 from "../assets/pic3.svg";
import image4 from "../assets/pic4.svg";

const Gallery = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 p-10'>
      <div className='flex gap-3 items-center'>
        <div className='w-28 bg-gray-400 h-0.5'></div>
        <p className='text-gray-700 '>Latest Gallery</p>

        <div className='w-28 bg-gray-400 h-0.5'></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
        <div className='md:col-span-2 grid grid-rows-2 gap-4'>
          <img src={image1} alt='' className='w-full h-full object-cover' />
          <div className='grid grid-cols-2 gap-4'>
            <img src={image2} alt='' className='w-full h-full object-cover' />
            <img src={image3} alt='' className='w-full h-full object-cover' />
          </div>
        </div>
        <div className='hidden md:block h-full'>
          <img src={image4} alt='' className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
