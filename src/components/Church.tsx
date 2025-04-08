import image9 from "../assets/image9.svg";
import image10 from "../assets/10.png";
import image11 from "../assets/image 11.png";

const Church = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5  p-13'>
      <div className='flex gap-3 items-center mb-5'>
        <div className='w-9 md:w-28 bg-gray-400 h-0.5'></div>
        <p className='text-gray-700 text-[10px] md:text-lg'>About The Church</p>
        <div className='w-9 md:w-28 bg-gray-400 h-0.5'></div>
      </div>
      <div className='flex mt-4 gap-7 flex-col md:flex-row md:gap-[40px] w-full'>
        <div className='flex flex-col text-left  gap-[12px] md:w-[2100px]'>
          <img src={image9} alt='' />
          <p className='text-xl text-black'>Our Community</p>
          <p className='text-gray-500 text-sm'>
            At RCCG Strong Tower, we are more than a congregation—we are a
            family united by faith and purpose. Our community is built on the
            foundation of God’s love, fostering connections that uplift and
            empower. Through outreach programs, strategic partnerships, and
            meaningful engagements, we strive to create a happier, healthier
            society. Whether you’re seeking spiritual growth, fellowship, or a
            way to give back, you’ll find a welcoming home here. Together, we
            embody the strength of God to transform lives and communities.
          </p>
        </div>
        <div className='flex flex-col text-left gap-[12px] md:w-[2100px]'>
          <img src={image10} alt='image' />
          <p className='text-xl text-black'>Church Mission</p>
          <p className='text-gray-500 text-sm'>
            RCCG Strong Tower,Stouffville is based absolutely on the word of God
            - the BIBLE. We believe in the power inherent in Prayers, Worship
            and Fellowship. We strive to build individuals who are filled with
            the power and strength of God needed for a fulfilled life. We also
            through our community outreach, partnerships and engagements seek to
            help build a happier society.{" "}
          </p>
        </div>
        <div className='flex flex-col text-left gap-[12px] md:w-[2100px]'>
          <img src={image11} alt='image' />
          <p className='text-xl text-black text-left'>Participate With Us</p>
          <p className='text-gray-500 text-sm'>
            Join us in making a difference! At RCCG Strong Tower, there are
            countless ways to get involved: Volunteer: Share your time and
            talents through our outreach initiatives. Worship & Prayer:
            Strengthen your spirit in our dynamic services and prayer
            gatherings. Partnerships: Collaborate with us to support local and
            global missions. Fellowship: Connect with others in small groups and
            community events.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Church;
