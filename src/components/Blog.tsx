import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <div className='flex flex-col md:flex-row '>
      <div className=' w-full md:w-[600px] md:bg-orange-400 flex  flex-col justify-center  text-center'>
        <p className='uppercase text-sm text-black md:text-white text-[10px]'>Latest</p>
        <p className='uppercase text-sm md:text-lg text-black md:text-white text-[10px]'>Blog</p>
      </div>
      <div className='flex flex-col  gap-2 p-3  bg-[#E4E4E4]'>
        <p className='bg-orange-400 w-42  my-4 text-white p-6'>11 November</p>
        <NavLink to="/blogs">
        <h1 className='text-xl text-black hover:underline '>Crouch Goes Home To Jesus</h1>
        </NavLink>
        <p className='text-gray-500 text-sm'>
        A life of faith celebrated, a legacy of love eternal.
The Christian community mourns the passing of beloved evangelist Paul Crouch, founder of TBN, who dedicated his life to spreading the Gospel worldwide. Friends and family reflect on his unwavering faith, pioneering media ministry, and the joy he brought to millions. Join us in honoring his remarkable journey home to Christ.
        </p>
      </div>
      <div className='flex flex-col  gap-2 p-3  bg-[#E4E4E4]'>
        <p className='bg-orange-400 w-42  my-4 text-white p-6'>10 November</p>
        <NavLink to="/blogs">
        <h1 className='text-xl text-black hover:underline'>Our Most Christian Congress?</h1>
        </NavLink>
        <p className='text-gray-500 text-sm'>
        Examining faith’s role in modern leadership and unity.
        A recent study reveals that the 118th U.S. Congress has a record number of professing Christians—but what does this mean for policy and moral leadership? We analyze how faith influences legislation, bipartisan cooperation, and the challenges of balancing conviction with public service in a divided nation.
        </p>
      </div>
      <div className='flex flex-col  gap-2 p-3  bg-[#E4E4E4]'>
        <p className='bg-orange-400 w-42  my-4 text-white p-6'>9 November</p>
        <NavLink to="/blogs">
        <h1 className='text-xl text-black hover:underline'>Lin: ‘God Is Challenging Me!’</h1>
        </NavLink>
        <p className='text-gray-500 text-sm'>
        A testimony of divine purpose and personal transformation.
        NBA star Jeremy Lin opens up about his spiritual struggles and breakthroughs during a recent interview. From "Linsanity" to overseas missions, he shares how God’s unexpected call led him to prioritize faith over fame—and why he’s now investing in youth discipleship programs across Asia.
        </p>
      </div>
    </div>
  );
};

export default Blog;
