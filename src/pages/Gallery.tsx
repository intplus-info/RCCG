import image2 from "../assets/im88.svg";
import Header from "../components/Header"
import { NavLink } from "react-router-dom"; // Replace Link with NavLink
import { useState } from "react";
import image1 from "../assets/pic1.svg";
import image3 from "../assets/pic3.svg";
import image22 from "../assets/pic2.svg";


import image4 from "../assets/pic4.svg";
import logo from "../assets/logo.svg";
import Footer from "@/components/footer";
const Gallery = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
      <>
        <div
      className="flex flex-col"
      style={{
        backgroundImage: `url(${image2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image",
      }}
    >
      <Header />

      <div className="flex items-center justify-between p-4 w-full">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-33" />
        </div>

        <div className="hidden md:flex gap-4 text-white text-sm capitalize cursor-pointer">
          {["home", "join", "sermons", "Events", "Give", "Gallery"].map(
            (link) => (
              <NavLink
                key={link}
                to={`/${link === "home" ? "" : link.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-4 py-1 ${isActive ? "underline" : "hover:underline"}`
                }
              >
                {link}
              </NavLink>
            )
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-3xl"
          >
            ☰
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50 min-h-screen">
    <button
      onClick={() => setIsMobileMenuOpen(false)}
      className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
      aria-label="Close menu"
    >
      ×
    </button>

    <nav className="flex flex-col items-center gap-3 w-full max-w-xs px-4">
      {["home", "join", "sermons", "Events", "Give", "Gallery"].map((link) => (
        <NavLink
          key={link}
          to={`/${link === "home" ? "" : link.toLowerCase()}`}
          onClick={() => setIsMobileMenuOpen(false)}
          className={({ isActive }) =>
            `text-white text-lg py-2 w-full text-center border-b border-white/20 cursor-pointer capitalize transition-all duration-200 ${
              isActive ? "font-bold" : "hover:bg-white/10"
            }`
          }
        >
          {link}
        </NavLink>
      ))}
    </nav>
  </div>
)}
         <div>
          <div className='flex flex-col gap-4 justify-center items-center p-6'>
            <hr className='w-full h-0,5 text-white opacity-50' />
            <h1 className='text-4xl capitalize text-white'>
              {" "}
           Gallery
            </h1>
            <hr className='w-full h-0,5 text-white opacity-50' />
          </div>
        </div>
    </div>
    <div className='flex flex-col justify-center items-center gap-3 p-10'>
      <div className='flex gap-3 items-center'>
        <div className='w-28 bg-gray-400 h-0.5'></div>
        <p className='text-gray-700'>Latest Gallery</p>

        <div className='w-28 bg-gray-400 h-0.5'></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
        <div className='md:col-span-2 grid grid-rows-2 gap-4'>
          <img src={image1} alt='' className='w-full h-full object-cover' />
          <div className='grid grid-cols-2 gap-4'>
            <img src={image22} alt='' className='w-full h-full object-cover' />
            <img src={image3} alt='' className='w-full h-full object-cover' />
          </div>
        </div>
        <div className='hidden md:block h-full'>
          <img src={image4} alt='' className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
     <Footer />
      
     </>
    )
}

export default Gallery