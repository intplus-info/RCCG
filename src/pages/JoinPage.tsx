import image from "../assets/Image.svg";
const image2 = "https://i.imgur.com/K38ANvA.png"

import Header from "../components/Header"
import {  NavLink } from "react-router-dom"; // Replace Link with NavLink
import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import Footer from "@/components/footer";
import { Dialog, DialogContent, DialogOverlay, DialogTrigger } from "@/components/ui/dialog";
import FormPage from "./FormPage";




const JoinPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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

        <div  className={` flex items-center justify-between p-4 w-full transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 right-0 z-50 bg-black" : "relative"
        }`}>
        <NavLink to="/">
            <div className="flex items-center">
              <img src={logo} alt="logo" className="w-24 md:w-33" />
            </div>
            </NavLink>

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
               Join Us
              </h1>
              <hr className='w-full h-0,5 text-white opacity-50' />
            </div>
          </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-6 p-4 md:px-[149px] md:py-9 mt-8">
        <h1 className="text-[18px] md:text-[40px] uppercase font-bold text-black">
          Join Us at RCCG Strongtower Stouffville!
        </h1>
        <p className="text-[#0D0D0D99] md:text-lg">
          At RCCG Strongtower Stouffville, we are more than just a church—we are
          a family. Whether you’re new to faith, seeking a spiritual home, or
          looking to grow deeper in your relationship with God, you are welcome
          here. Our doors are open, and our hearts are ready to embrace you.
        </p>
        <img src={image} className="w-full p-4" alt="image" />
        <div className="flex flex-col">
          <p className="md:text-xl font-bold text-black py-3">WHY JOIN US?</p>
          <ul className="p-2 text-lg">
            <li className="text-[#00000099] ml-4 py-2">
              A Warm Community: Experience the love and support of a caring,
              diverse family united by faith. Life-Changing Worship: Encounter
              God’s
            </li>
            <li className="text-[#00000099] ml-4 py-2">
            Life-Changing Worship: Encounter God’s presence through heartfelt worship and powerful teachings rooted in the Word of God.
            </li>
            <li className="text-[#00000099] ml-4 py-2">
            Purpose and Growth: Discover your God-given purpose and grow spiritually through our programs, Bible studies, and fellowship opportunities.
            </li>
            <li className="text-[#00000099] ml-4 py-2">
            Impactful Outreach: Be part of a community that makes a difference, both locally and globally, by sharing hope and transforming lives.
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:mr-25 ">
          <p className="md:text-xl font-bold text-black py-3">
            WHAT TO EXPECT
          </p>
          <p className="md:text-xl text-[#00000099]">
            When you join us, you’ll find a place where:
          </p>
          <ul className="p-2 text-lg ]">
            <li className="text-[#00000099] ml-4 py-2">
            Destinies are Redeemed: No matter your past, there is hope and a future in Christ.
            </li>
            <li className="text-[#00000099] ml-4 py-2">
             Dominion is Restored: Through faith, you can walk in the authority and victory God has prepared for you.
            </li>
            <li className="text-[#00000099] ml-4 py-2">
            You Belong: From the moment you walk in, you’ll feel at home.
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="md:text-xl font-bold text-black py-3">
            HOW TO GET INVOLVED
          </p>
          <div className="px-6 border-l-2 border-[#FF7F00] flex flex-col gap-3">
            <p className="text-[#00000099] text-lg">
              <span className="text-[#161722] font-semibold">Sunday Services :</span>Join us every Sunday for uplifting worship, inspiring messages, and a time of fellowship.
            </p>
            <p className="text-[#00000099] text-lg">
              <span className="text-[#161722] font-semibold">MidWeek Programs :</span>  Dive deeper into the Word and connect with others through our midweek Bible studies and prayer meetings.
              God’s
            </p>
            <p className="text-[#00000099] text-lg">
              <span className="text-[#161722] font-semibold">Volunteer Oppurtunities :</span>{" "}
              Use your gifts and talents to serve in our various ministries and outreach programs.
            </p>
        
            <p className="text-[#00000099] text-lg">
              <span className="text-[#161722] font-semibold">Community Events :</span> Be part of our special events, workshops, and activities designed to strengthen relationships and build community.
            </p>
          </div>
        </div>
        <div>
          <h1 className="md:text-xl font-bold text-black py-3">
            PLAN YOUR VISIT
          </h1>
          <p className="text-[#00000099]">
          We can’t wait to meet you! If you’re visiting for the first time, we’ll make sure you feel right at home. Let us know you’re coming by filling out our <Dialog>
  <DialogTrigger asChild>
    <button className="underline cursor-pointer text-orange-500 ml-1">Contact Form</button>
  </DialogTrigger>
  <DialogContent className="bg-white md:min-w-[800px] max-h-[92vh] overflow-y-auto">
    <FormPage />
  
  </DialogContent>
  <DialogOverlay className="fixed inset-0 bg-white z-50" />

</Dialog> , and we’ll be ready to welcome you with open arms.
          </p>
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

        <div className="flex flex-col gap-3">
          <h1 className="md:text-xl font-bold text-black ">
            STAY CONNECTED
          </h1>
          <p className="text-[#00000099]">
            Follow us on{" "}
            <a
              href="https://www.facebook.com/p/RCCG-StrongTower-Stouffville-100068948463674/"
              className="underline hover:text-black"
              target="_blank"
            >
              Facebook
            </a>{" "}
            for updates, inspiring content, and ways to stay engaged with our
            community.
          </p>
          <p className="text-[#00000099]">
          At RCCG Strongtower Stouffville, we believe that together, we can build a community of faith, hope, and love. Come as you are, and let’s grow together in Christ.
          </p>
          <p className="text-[#00000099] py-4 mb-6">We can’t wait to see you!</p>
        </div>
      </div>
     <Footer />
    </>
  );
};

export default JoinPage;