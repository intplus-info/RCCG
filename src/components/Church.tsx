import image9 from "../assets/image9.svg"
import image10 from "../assets/10.png"
import image11 from "../assets/image 11.png"


const Church = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5  p-13">
        <div className="flex gap-3 items-center">
            <div className="w-28 bg-gray-400 h-0.5"></div>
            <p className="text-gray-700">About The Church</p>
            <div className="w-28 bg-gray-400 h-0.5"></div>
        </div>
        <div className="flex gap-6 flex-col md:flex-row md:gap-[48px]">
            <div className="flex flex-col items-center justify-center gap-[12px]">
                <img src={image9} alt="" />
                <p className="text-xl text-black">Our Community</p>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-[12px]">
                <img src={image10} alt="image" />
                <p className="text-xl text-black">Our Community</p>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-[12px]">
                <img src={image11} alt="image" />
                <p className="text-xl text-black">Church Mission</p>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>

        </div>

    </div>
  )
}

export default Church