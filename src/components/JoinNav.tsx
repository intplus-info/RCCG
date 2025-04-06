import image from "../assets/Image.svg";
const JoinNav = () => {
  return (
    <div className='flex flex-col  justify-center items-center gap-6 p-4 md:px-[112px] md:py-9 mt-8'>
      <h1 className="md:text-[44px] uppercase font-bold text-black">Join Us at RCCG Strongtower Stouffville!</h1>
      <p className="text-[#0D0D0D99] md:text-xl">
        At RCCG Strongtower Stouffville, we are more than just a church—we are a
        family. Whether you’re new to faith, seeking a spiritual home, or
        looking to grow deeper in your relationship with God, you are welcome
        here. Our doors are open, and our hearts are ready to embrace you.
      </p>
      <img src={image} className='w-full p-4' alt='image' />
      <div className='flex flex-col '>
        <p className="md:text-xl font-bold text-black py-3">WHY JOIN US?</p>
        <ul className="p-2">
        <li className="text-[#00000099] ml-4 py-2">
          A Warm Community: Experience the love and support of a caring, diverse
          family united by faith. Life-Changing Worship: Encounter God’s{" "}
        </li>
        <li className="text-[#00000099] ml-4 py-2">
          A Warm Community: Experience the love and support of a caring, diverse
          family united by faith. Life-Changing Worship: Encounter God’s{" "}
        </li>
        <li className="text-[#00000099] ml-4 py-2">
          the Word of God. Purpose and Growth: Discover your God-given purpose
          and grow spiritually through our programs, Bible studies, and
          fellowship opportunities. Impactful Outreach: Be part of a community
        </li>
        </ul>
      
      </div>
      <div className='flex flex-col'>
        <p className="md:text-xl font-bold text-black py-3">WHAT TO EXPECT </p>
        <p className="md:text-xl text-[#00000099]">When you join us, you’ll find a place where:</p>
        <ul className="p-2">
        <li className="text-[#00000099] ml-4 py-2">
          A Warm Community: Experience the love and support of a caring, diverse
          family united by faith. Life-Changing Worship: Encounter God’s{" "}
        </li>
        <li className="text-[#00000099] ml-4 py-2">
          A Warm Community: Experience the love and support of a caring, diverse
          family united by faith. Life-Changing Worship: Encounter God’s{" "}
        </li>
        <li className="text-[#00000099] ml-4 py-2">
          the Word of God. Purpose and Growth: Discover your God-given purpose
          and grow spiritually through our programs, Bible studies, and
          fellowship opportunities. Impactful Outreach: Be part of a community
        </li>
        </ul>
      </div>
      <div className='flex flex-col'>
        <p className="md:text-xl font-bold text-black py-3">HOW TO GET INVOLVED </p>
        <div className="px-6 border-l-2 border-[#FF7F00] flex flex-col gap-3">
            <p className="text-[#00000099]"> <span className="text-black font-bold">Sunday Services :</span> A Warm Community: Experience the love and support of a caring, diverse
            family united by faith. Life-Changing Worship: Encounter God’s{" "}</p>
            <p className="text-[#00000099]"><span className="text-black font-bold">Sunday Services :</span> A Warm Community: Experience the love and support of a caring, diverse
            family united by faith. Life-Changing Worship: Encounter God’s{" "}</p>
            <p className="text-[#00000099]"><span className="text-black font-bold">Sunday Services :</span> the Word of God. Purpose and Growth: Discover your God-given purpose
          and grow spiritually through our programs, Bible studies, and
          fellowship opportunities. Impactful Outreach: Be part of a community</p>
        </div>
    
      </div>
      <div>
        <h1 className="md:text-xl font-bold text-black py-3">PLAN YOUR VISIT</h1>
        <p className="text-[#00000099]">We can’t wait to meet you! If you’re visiting for the first time, we’ll make sure you feel right at home. Let us know you’re coming by filling out our Connect Form, and we’ll be ready to welcome you with open arms.</p>
      </div>
     
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2868.0053634977294!2d-79.28903042530736!3d44.041944627203605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d52e01333db359%3A0xb99fc5ea13a350eb!2s5592%20Aurora%20Rd%2C%20Whitchurch-Stouffville%2C%20ON%20L4A%203K2%2C%20Canada!5e0!3m2!1sen!2sng!4v1743790077956!5m2!1sen!2sngg" 
        width="900"
        height="550"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>
       <div className="flex flex-col gap-4">
        <h1 className="md:text-xl font-bold text-black py-3">STAY CONNECTED</h1>
        <p className="text-[#00000099]">Follow us on <a href="https://www.facebook.com/p/RCCG-StrongTower-Stouffville-100068948463674/" className="underline hover:text-black" target="_blank">Facebook</a>  for updates, inspiring content, and ways to stay engaged with our community.</p>
        <p className="text-[#00000099]">We can’t wait to meet you! If you’re visiting for the first time, we’ll make sure you feel right at home. Let us know you’re coming by filling out our Connect Form, and we’ll be ready to welcome you with open arms.</p>
        <p className="text-[#00000099]">We can’t wait to see you!</p>
      </div>
    </div>
  );
};

export default JoinNav;
