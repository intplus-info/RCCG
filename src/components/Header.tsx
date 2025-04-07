import location from "../assets/location.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="py-5 flex flex-col gap-6 ">
    <nav className='flex justify-between  bg-transparent px-5'>
      <div className='flex gap-4'>
        <img src={location} alt='location' className='w-4 ' />
        <p className='text-sm sm:text-0.5 font-small  text-dark font-light text-white'>
          5592 Aurora Rd, Whitchurch-Stouffville, ON, Canada
        </p>
      </div>
      <div className='flex items-center gap-4'>
        <a
          href='https://www.google.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon
            icon={faSearch}
            className='h-5 w-5 cursor-pointer text-white '
          />
        </a>
        <div className='h-4 w-px bg-gray-600'></div>
        <a
          href='https://www.facebook.com/p/RCCG-StrongTower-Stouffville-100068948463674/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            className='h-5 w-5 cursor-pointer text-white'
          />
        </a>
        <div className='h-4 w-px bg-gray-600'></div>

        <a
          href='https://www.twitter.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className='h-5 w-5 cursor-pointer text-white'
          />
        </a>
        <div className='h-4 w-px bg-gray-600'></div>

        <a
          href='https://www.youtube.com/@rccgstrongtowerstouffville3164'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon
            icon={faYoutube}
            className='h-5 w-5 cursor-pointer text-white'
          />
        </a>
        <div className='h-4 w-px bg-gray-600'></div>

        <a
          href='https://www.instagram.com/rccg_strongtower/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className='h-5 w-5 cursor-pointer text-white'
          />
        </a>
      </div>
    </nav>
    <hr className="w-full h-0.5  bg-gray-600 opacity-40"/>

    </div>
  );
};

export default Header;
