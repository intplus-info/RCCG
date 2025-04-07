import { useEffect, useState } from "react";
import image1 from "./assets/ii.svg";
import image2 from "./assets/im.svg";
import logo from "./assets/logo.svg";
import sermonimg from "./assets/im88.svg";
import image5 from "./assets/image5.svg";
import image6 from "./assets/image6.svg";
import image7 from "./assets/image7.svg";
import TImer from "./components/TImer";
import Church from "./components/Church";
import Sermons from "./components/Sermons";
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import Header from "./components/Header";
import EventNav from "./components/EventNav";
import JoinNav from "./components/JoinNav";
import Giving from "./components/Giving";
import SermonsNav from "./components/SermonsNav";

const App = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const events = [
    {
      image: image5,
      date: "April 30, 2025",
      title: "Relationship With",
      link: "#",
      text: "5Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      image: image6,
      date: "April 30, 2025",
      title: "Abundant Love",
      link: "#",
      text: "5Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      image: image7,
      date: "April 30, 2025",
      title: "God is Good",
      link: "#",
      text: "5Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
  ];
  const [activeLink, setActiveLink] = useState<string>("home");
  const [homeOpen, setHomeOpen] = useState<boolean>(true);
  const [sermonOpen, setSermonOpen] = useState<boolean>(false);
  const [joinOpen, setJoinOpen] = useState<boolean>(false);
  const [eventsOpen, setEventsOpen] = useState<boolean>(false);
  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);
  const [giveOpen, setGiveOpen] = useState<boolean>(false);
  const [selectedSermonTitle, setSelectedSermonTitle] = useState<string | null>(
    null
  );
  const [SelectedEventTitle, setSelectedEventTitle] = useState<string | null>(
    null
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setHomeOpen(link === "home");
    setSermonOpen(link === "sermons");
    setJoinOpen(link === "join");
    setEventsOpen(link === "Events");
    setGalleryOpen(link === "Gallery");
    setGiveOpen(link === "Give");
  };

  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const backgroundImages = [image1, image2];

  // Autoplay Effect
  useEffect(() => {
    if (!api) return;

    // Move to the next slide every 2 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 10000);

    // Sync slide index on selection
    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };
    api.on("select", handleSelect);

    // Cleanup on component unmount
    return () => {
      clearInterval(interval);
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <>
      <div
        className='flex flex-col  '
        style={{
          backgroundImage: `url(${
            homeOpen ? backgroundImages[currentSlide] : sermonimg
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image ",
        }}
      >
        <Header />

        <div className='flex items-center justify-between p-4 w-full'>
  {/* Left section: Logo */}
  <div className='flex items-center'>
    <img src={logo} alt='logo' className='hidden md:block w-33' />
  </div>

  {/* Desktop Menu */}
  <div className='hidden md:flex gap-4 text-white text-sm capitalize cursor-pointer'>
    {["home", "join", "sermons", "Events", "Give", "Gallery"].map((link) => (
      <p
        key={link}
        onClick={() => handleLinkClick(link)}
        className={`px-4 py-1 ${activeLink === link ? "underline" : ""}`}
      >
        {link}
      </p>
    ))}
  </div>

  {/* Mobile Menu Button */}
  <div className='md:hidden'>
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className='text-white text-3xl'
    >
      ☰
    </button>
  </div>
</div>



        {isMobileMenuOpen && (
  <div className='fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50'>
    <button
      onClick={() => setIsMobileMenuOpen(false)}
      className='absolute top-5 right-5 text-white text-4xl'
    >
      &times;
    </button>

    {["home", "join", "sermons", "Events", "Give", "Gallery"].map((link) => (
      <p
        key={link}
        onClick={() => {
          handleLinkClick(link);
          setIsMobileMenuOpen(false); // Close modal after click
        }}
        className={`text-white text-2xl py-4 cursor-pointer ${
          activeLink === link ? "underline" : ""
        }`}
      >
        {link}
      </p>
    ))}
  </div>
)}


        {homeOpen && (
          <main className='flex-grow relative h-[712px]'>
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className='relative h-[732px]'
            >
              <CarouselContent className='h-full'>
                <CarouselItem className='h-full'>
                  <div className='flex items-center justify-center mt-64 gap-6 h-full text-white'>
                    <div className='text-center'>
                      <h1 className='text-4xl  font-normal mb-4'>Welcome to</h1>
                      <p className='text-5xl  font-bold mb-5'>
                        RCCG StrongTower Stouffville
                      </p>
                      <p className='text-xl md:text-2xl mb-8'>
                        A Place of Worship, Growth, and Community
                      </p>
                      <div className='space-x-4'>
                        <button className='bg-white text-black px-6 py-3 rounded-full'>
                          Join Us
                        </button>
                        <button className='border border-white px-6 py-3 rounded-full'>
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className='h-full'>
                  <div className='flex items-center justify-center mt-74 gap-6 h-full text-white'>
                    <div className='text-center'>
                      <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                        Transforming lives
                      </h1>
                      <p className='text-6xl font-bold md:text-2xl mb-8'>
                        Restoring Hope
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>

              <CarouselPrevious className='absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 p-2 rounded-full' />
              <CarouselNext className='absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 p-2 rounded-full' />
            </Carousel>
          </main>
        )}
        {joinOpen && (
          <div>
            <div className='flex flex-col gap-4 justify-center items-center p-6'>
              <hr className='w-full h-0,5 text-white opacity-50' />
              <h1 className='text-4xl capitalize text-white'>join us</h1>
              <hr className='w-full h-0,5 text-white opacity-50' />
            </div>
          </div>
        )}
        {eventsOpen && (
          <div>
            <div className='flex flex-col gap-4 justify-center items-center p-6'>
              <hr className='w-full h-0,5 text-white opacity-50' />
              <h1 className='text-4xl capitalize text-white'>
                {" "}
                {SelectedEventTitle || "Our Sermons"}{" "}
              </h1>
              <hr className='w-full h-0,5 text-white opacity-50' />
            </div>
          </div>
        )}
        {sermonOpen && (
          <div>
            <div className='flex flex-col gap-4 justify-center items-center p-6'>
              <hr className='w-full h-0,5 text-white opacity-50' />
              <h1 className='text-4xl capitalize text-white'>
                {" "}
                {selectedSermonTitle || "Our Sermons"}{" "}
              </h1>
              <hr className='w-full h-0,5 text-white opacity-50' />
            </div>
          </div>
        )}
      </div>

      {homeOpen && (
        <>
          <div className='flex h-59 overflow-y-hidden'>
            <div className='w-1/6 bg-orange-400 flex flex-col justify-center p-7'>
              <p className='uppercase text-sm text-white'>UPCOMING</p>
              <p className='uppercase text-sm md:text-4xl font-small text-white '>Events</p>
            </div>

            {events.map((event, index) => (
              <div
                key={index}
                className='w-32 flex-1 h-full bg-white relative group'
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={event.image}
                  alt='event'
                  className='w-full h-full object-cover'
                />

                {hoveredIndex === index && (
                  <div className='absolute inset-0 bg-white opacity-70 flex flex-col justify-center  text-white gap-4 p-4'>
                    <span className='text-xl text-[#0D0D0D99]  font-bold'>
                      {event.date}
                    </span>
                    <p className='text-xl md:text:2xl text-black font-bold'>
                      {event.title}
                    </p>
                    <p className='text-sm  md:text:xl text-[#0D0D0D99] font-light '>
                      {event.text}
                    </p>
                    <a
                      onClick={() => handleLinkClick("Events")}
                      className='text-sm underline cursor-pointer text-[#0D0D0D99]'
                    >
                      Learn More....
                    </a>
                  </div>
                )}

                {hoveredIndex !== index && (
                  <p className='absolute bottom-0 left-0 right-0 bg-white/80 text-black p-4'>
                    <span className='flex flex-col justify-center text-gray-400  gap-2'>
                      {event.date}
                      <p className='text-sm  md:text:lg font-small text-black'>
                        {event.title}
                      </p>
                    </span>
                  </p>
                )}
              </div>
            ))}
          </div>
          <TImer />
          <Church />
          <Sermons />
          <Blog />
          <Gallery />
        </>
      )}
      {sermonOpen && (
        <SermonsNav
          selectedSermonTitle={selectedSermonTitle}
          setSelectedSermonTitle={setSelectedSermonTitle}
        />
      )}
      {eventsOpen && (
        <EventNav
          selectedEventTitle={SelectedEventTitle}
          setSelectedEventTitle={setSelectedEventTitle}
        />
      )}
      {joinOpen && <JoinNav />}
      {galleryOpen && <Gallery />}
      {giveOpen && <Giving />}
      <div className='flex justify-between bg-black p-8 text-white text-sm'>
        <div>
          <p>&#169;2025 RCCG StrongTower Stouffville</p>
        </div>
        <div className='flex gap-3'>
          {["home", "join", "sermons", "Events", "Give", "Gallery"].map(
            (link) => (
              <p
                key={link}
                onClick={() => handleLinkClick(link)}
                className={`px-4 py-1 capitalize cursor-pointer`}
              >
                {link}
              </p>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default App;
