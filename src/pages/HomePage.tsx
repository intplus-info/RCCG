import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import image1 from "../assets/ii.svg";
import image2 from "../assets/im.svg";
import logo from "../assets/logo.svg";
import image5 from "../assets/image5.svg";
import image6 from "../assets/image6.svg";
import image7 from "../assets/image7.svg";
import TImer from "../components/TImer";
import Church from "../components/Church";
import Sermons from "../components/Sermons";
import Blog from "../components/Blog";
import Gallery from "../components/Gallery"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Header from "../components/Header";
import Footer from "@/components/footer";


const Homepage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const backgroundImages = [image1, image2];

  const events = [
    {
      image: image5,
      date: "April 30, 2025",
      title: "Relationship With",
      link: "/events",
      text: "5Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      image: image6,
      date: "April 30, 2025",
      title: "Abundant Love",
      link: "/events",
      text: "5Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      image: image7,
      date: "April 30, 2025",
      title: "God is Good",
      link: "/events",
      text: "5Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
  ];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 10000);

    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };
    api.on("select", handleSelect);

    return () => {
      clearInterval(interval);
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <>
    <div
      className="flex flex-col"
      style={{
        backgroundImage: `url(${backgroundImages[currentSlide]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image",
      }}
    >
      <Header />

      <div className="flex items-center justify-between p-4 w-full">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="hidden md:block w-33" />
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
            className="absolute top-4 right-4 text-white text-3xl md:text-4xl focus:outline-none"
            aria-label="Close menu"
          >
            ×
          </button>

          <nav className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-md px-4">
            {["home", "join", "sermons", "Events", "Give", "Gallery"].map(
              (link) => (
                <NavLink
                  key={link}
                  to={`/${link === "home" ? "" : link.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-white text-xl md:text-2xl py-2 cursor-pointer capitalize transition-all duration-200 ${
                      isActive ? "underline" : "hover:text-gray-200"
                    }`
                  }
                >
                  {link}
                </NavLink>
              )
            )}
          </nav>
        </div>
      )}

      <main className="flex-grow relative h-[712px]">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="relative h-[732px]"
        >
          <CarouselContent className="h-full">
            <CarouselItem className="h-full">
              <div className="flex items-center justify-center mt-64 gap-6 h-full text-white">
                <div className="text-center">
                  <h1 className="text-4xl font-normal mb-4">Welcome to</h1>
                  <p className="text-5xl font-bold mb-5">
                    RCCG StrongTower Stouffville
                  </p>
                  <p className="text-xl md:text-2xl mb-8">
                    A Place of Worship, Growth, and Community
                  </p>
                  <div className="space-x-4">
                    <NavLink to="/join">
                    <button className="bg-white text-black px-6 py-3 rounded-full cursor-pointer">
                      Join Us
                    </button>
                    </NavLink>
                    <NavLink to="/join">
                    <button className="border border-white px-6 py-3 rounded-full cursor-pointer">
                      Learn More
                    </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="h-full">
              <div className="flex items-center justify-center mt-74 gap-6 h-full text-white">
                <div className="text-center">
                  <h1 className="text-4xl md:text-4xl font-bold mb-4">
                    Transforming lives
                  </h1>
                  <p className="text-6xl font-bold md:text-7xl mb-8">
                    Restoring Hope
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 p-2 rounded-full" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 p-2 rounded-full" />
        </Carousel>
      </main>
    </div>

    <div className="flex h-59 overflow-y-hidden">
      <div className="w-1/6 bg-orange-400 flex flex-col justify-center p-7">
        <p className="uppercase text-sm text-white">UPCOMING</p>
        <p className="uppercase text-sm md:text-4xl font-small text-white">
          Events
        </p>
      </div>

      {events.map((event, index) => (
  <div
    key={index}
    className="w-32 flex-1 h-full bg-white relative group"
    onMouseEnter={() => setHoveredIndex(index)}
    onMouseLeave={() => setHoveredIndex(null)}
  >
    <img
      src={event.image}
      alt="event"
      className="w-full h-full object-cover"
    />
    <div
      className={`absolute inset-0 bg-white flex flex-col justify-center text-white gap-4 p-4 transition-opacity duration-[2000ms] ${
        hoveredIndex === index ? "opacity-70" : "opacity-0"
      }`}
    >
      <span className="text-xl text-[#0D0D0D99] font-bold">
        {event.date}
      </span>
      <p className="text-xl md:text-2xl text-black font-bold">
        {event.title}
      </p>
      <p className="text-sm md:text-xl text-[#0D0D0D99] font-light">
        {event.text}
      </p>
      <NavLink
        to="/events"
        className="text-sm underline cursor-pointer text-[#0D0D0D99]"
      >
        Learn More....
      </NavLink>
    </div>
    <p
      className={`absolute bottom-0 left-0 right-0 bg-white/80 text-black p-4 transition-opacity duration-[3000ms] ${
        hoveredIndex === index ? "opacity-0" : "opacity-100"
      }`}
    >
      <span className="flex flex-col justify-center text-gray-400 gap-2">
        {event.date}
        <span className="text-sm md:text-lg font-small text-black">
          {event.title}
        </span>
      </span>
    </p>
  </div>
))}
    </div>

    <TImer />
    <Church />
    <Sermons />
    <Blog />
    <Gallery />

    <Footer />
  </>
  );
};

export default Homepage;