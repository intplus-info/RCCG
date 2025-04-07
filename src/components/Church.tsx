import image9 from "../assets/image9.svg"
import image10 from "../assets/10.png"
import image11 from "../assets/image 11.png"


const Church = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5  p-13">
        <div className="flex gap-3 items-center mb-5">
            <div className="w-28 bg-gray-400 h-0.5"></div>
            <p className="text-gray-700 text-sm md:text-lg">About The Church</p>
            <div className="w-28 bg-gray-400 h-0.5"></div>
        </div>
        <div className="flex mt-4 gap-7 flex-col md:flex-row md:gap-[50px]">
            <div className="flex flex-col text-left  gap-[12px]">
                <img src={image9} alt="" />
                <p className="text-xl text-black">Our Community</p>
                <p className="text-gray-500 text-sm">tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationr and strength of God needed for a fulfilled life.
                We also through our community outreach, partnerships and engagements seek to help build a happier society.  our community outreach, partnerships and engagements seek to help build a happiersociety.   </p>
            </div>
            <div className="flex flex-col text-left gap-[12px]">
                <img src={image10} alt="image" />
                <p className="text-xl text-black">Church Mission</p>
                <p className="text-gray-500 text-sm">RCCG Strong Tower,Stouffville is based absolutely on yue word of God - the BIBLE. We believe in the power inherent in Prayers, Worship and Fellowship. We strive to build individuals who are filled with the power and strength of God needed for a fulfilled life.
                We also through our community outreach, partnerships and engagements seek to help build a happier society. </p>
            </div>
            <div className="flex flex-col text-left gap-[12px]">
                <img src={image11} alt="image" />
                <p className="text-xl text-black text-left">Participate With Us</p>
                <p className="text-gray-500 text-sm">tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationr and strength of God needed for a fulfilled life.
                We also through our community outreach, partnerships and engagements seek to help build a happier society.  our community outreach, partnerships and engagements seek to help build a happiersociety.   </p>
            </div>

        </div>

    </div>
  )
}

export default Church