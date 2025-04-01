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
import Footer from "./components/Footer";

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

const App = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
    const events = [
      { image: image5, date: "April 30, 2025", title: "Relationship With", link: "#",text:"come and worship at our center and pray in one spirit" },
      { image: image6, date: "April 30, 2025", title: "Abundant Love", link: "#",text:"come and worship at our center and pray in one spirit" },
      { image: image7, date: "April 30, 2025", title: "God is Good", link: "#" ,text:"come and worship at our center and pray in one spirit"},
    ];
  const [activeLink, setActiveLink] = useState<string>("home");
  const [homeOpen, setHomeOpen] = useState<boolean>(true);
  const [sermonOpen, setSermonOpen] = useState<boolean>(false);
  const [joinOpen, setJoinOpen] = useState<boolean>(false);
  const [eventsOpen, setEventsOpen] = useState<boolean>(false);
  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);
  const [giveOpen, setGiveOpen] = useState<boolean>(false);

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
        className='flex flex-col '
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

        <div className='flex justify-between'>

          <img src={logo} alt='logo' className='hidden md:block w-33' />
          <div className='flex gap-4 text-white text-sm cursor-pointer'>
            {["home", "join", "sermons", "Events", "Give", "Gallery"].map(
              (link) => (
                <p
                  key={link}
                  onClick={() => handleLinkClick(link)}
                  className={`px-4 py-1 ${
                    activeLink === link ? "underline" : ""
                  }`}
                >
                  {link}
                </p>
              )
            )}
          </div>
        </div>

        {homeOpen && (
          <main className='flex-grow relative h-[832px]'>
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className='relative h-[832px]'
            >
              <CarouselContent className='h-full'>
                <CarouselItem className='h-full'>
                  <div className='flex items-center justify-center mt-74 gap-6 h-full text-white'>
                    <div className='text-center'>
                      <h1 className='text-4xl  font-normal mb-4'>
                        Welcome to 
                      </h1>
                      <p className="text-7xl  font-bold mb-5">RCCG StrongTower Stouffville</p>
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
      </div>

      {homeOpen && (
        <>
         <div className="flex h-59 overflow-y-hidden">
      <div className="w-1/6 bg-orange-400 flex flex-col justify-center items-center">
        <p className="uppercase text-sm text-white">UPCOMING</p>
        <p className="uppercase text-2xl text-white">Events</p>
      </div>

      {events.map((event, index) => (
        <div
          key={index}
          className="w-32 flex-1 bg-white relative group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img src={event.image} alt="event" className="w-full h-full object-cover" />

          {hoveredIndex === index && (
            <div className="absolute inset-0 bg-gray-500/80 flex flex-col justify-center items-center text-white gap-4 p-4">
              <span className="text-lg font-bold">{event.date}</span>
              <p className="text-sm md:text:xl font-bold">{event.title}</p>
              <p className="text-sm md:text:xl font-sm text-center">{event.text}</p>
              <a onClick={() => handleLinkClick("Events")} className="text-sm underline cursor-pointer">Learn More</a>
            </div>
          )}

          {hoveredIndex !== index && (
            <p className="absolute bottom-0 left-0 right-0 bg-white/80 text-black p-3">
              <span className="flex flex-col justify-center text-gray-400 items-center gap-4">
                {event.date}
                <p className="text-sm font-bold text-black">{event.title}</p>
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
      {sermonOpen && <Sermons />}
      {eventsOpen && <EventNav />}
      {joinOpen && <JoinNav />}
      {galleryOpen && <Gallery />}
      {giveOpen && <Giving />}
      <Footer />
    </>
  );
};

export default App;
