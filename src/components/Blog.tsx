const Blog = () => {
  return (
    <div className='flex flex-col md:flex-row '>
      <div className=' w-full md:w-[600px] bg-orange-400 flex  flex-col justify-center  text-center'>
        <p className='uppercase text-sm text-white'>Latest</p>
        <p className='uppercase text-5xl text-white'>Blog</p>
      </div>
      <div className='flex flex-col  gap-2 p-3  bg-[#E4E4E4]'>
        <p className='bg-orange-400 w-42  my-4 text-white p-6'>11 November</p>
        <h1 className='text-xl text-black'>Crouch Goes Home To Jesus</h1>
        <p className='text-gray-500 text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
      </div>
      <div className='flex flex-col  gap-2 p-3  bg-[#E4E4E4]'>
        <p className='bg-orange-400 w-42  my-4 text-white p-6'>11 November</p>
        <h1 className='text-xl text-black'>Crouch Goes Home To Jesus</h1>
        <p className='text-gray-500 text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
      </div>
      <div className='flex flex-col  gap-2 p-3  bg-[#E4E4E4]'>
        <p className='bg-orange-400 w-42  my-4 text-white p-6'>11 November</p>
        <h1 className='text-xl text-black'>Crouch Goes Home To Jesus</h1>
        <p className='text-gray-500 text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
      </div>
    </div>
  );
};

export default Blog;
