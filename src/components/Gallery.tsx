import image1 from "../assets/pic1.svg"
import image2 from "../assets/pic2.svg"
import image3 from "../assets/pic3.svg"
import image4 from "../assets/pic4.svg"



const Gallery = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 p-10'>
      <div className='flex gap-3 items-center'>
        <div className='w-28 bg-gray-400 h-0.5'></div>
        <p className='text-gray-700 text-sm'>Latest Gallery</p>
        <div className='w-28 bg-gray-400 h-0.5'></div>
      </div>
      <div className="md:flex gap-9  ">
        <div className=" flex-col gap-4">
            <img src={image1} alt="" className=""/>
            <div className="flex gap-4 mt-9">
            <img src={image2} alt="" className="w-1/2" />
            <img src={image3} alt="" className="  w-[220px] md:w-1/2  object-cover" />
            </div>
        </div>
        <div className="  w-1/4 ">
        <img src={image4} alt="" className="hidden md:block h-[620px] object-cover" />
            
        </div>

      </div>
    </div>
  );
};

export default Gallery;
