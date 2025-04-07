import image2 from "../assets/im88.svg";
import Header from "../components/Header"
import { Link, NavLink } from "react-router-dom"; // Replace Link with NavLink
import { useState } from "react";
import logo from "../assets/logo.svg";
import Footer from "@/components/footer";
const GivePage = () => {
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
             Giving
              </h1>
              <hr className='w-full h-0,5 text-white opacity-50' />
            </div>
          </div>
      </div>
      <div className="flex flex-col text-center  gap-4 p-6 md:p-20">
      <p className="text-[#00000099] text-lg md:text-2xl">Welcome to RCCG Strongtower Stouffville, a thriving Christian community rooted in faith, love, and the transformative power of God’s Word. At the heart of our mission is Jesus Christ, and we are passionate about building a strong, united community that reflects His love and grace. Together, we strive to create a space where lives are touched, destinies are redeemed, and dominion is restored</p>
      <p className="text-[#00000099] text-lg md:text-2xl">Our vision goes beyond the walls of the church—we are committed to fostering a sense of belonging and purpose, where every individual feels valued and empowered. Through fellowship, worship, and the teaching of God’s Word, we aim to inspire positive change in our community and beyond. Here, you’ll find a family that supports, encourages, and walks alongside you in your spiritual journe</p>
      <p className="text-[#00000099] text-lg md:text-2xl">As we grow together, our focus remains on preparing the Church for the glorious return of our Lord Jesus Christ. We envision a community where people from all nations and walks of life come together to lift His name in praise and worship.</p>
      <p className="text-[#00000099] text-lg md:text-2xl">As we grow together, our focus remains on preparing the Church for the glorious return of our Lord Jesus Christ. We envision a community where people from all nations and walks of life come together to lift His name in praise and worship.</p>
      <p className="text-[#00000099] text-lg md:text-2xl">As we grow together, our focus remains on preparing the Church for the glorious return of our Lord Jesus Christ. We envision a community where people from all nations and walks of life come together to lift His name in praise and worship.</p>
      
        </div>
        <div className="max-w-[700px] mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold text-[#666666] text-left mb-4">Select type of donation</h2>

  {/* Dropdown for donation type */}
  <label className="block mb-2 font-medium text-[#666666]">Type</label>
  <select
    className="w-full   p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-[#666666]"
  >
    <option value="Offering">Offering</option>
    <option  value="Tithe">Tithe</option>
    <option value="Thanksgiving">Thanksgiving</option>
    <option value="First Offering">First Offering</option>
  </select>

  {/* Amount input */}
  <label className="block mb-2 font-medium text-[#666666]">Amount (CAD)</label>
  <input
    type="number"
    min="5"
    placeholder="5"
    className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
  />

  {/* Action buttons */}
  <div className="flex justify-between">
    <button
      type="reset"
      className="px-10 py-3 bg-white text-orange-500 rounded border border-orange-500  hover:opacity-60"
    >
      Clear
    </button>
    <Link to="/pay">
    <button
      type="submit"
      className="px-10 py-3 bg-orange-500 text-white rounded hover:opacity-60 cursor-pointer"
    >
      Next
    </button>
    </Link>
  </div>
</div>

      <Footer />
       </>
      )
}

export default GivePage