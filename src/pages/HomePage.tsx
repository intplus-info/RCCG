import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import TImer from "../components/TImer";
import Church from "../components/Church";
import Sermons from "../components/Sermons";
import Blog from "../components/Blog";
import Gallery from "../components/Gallery";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import Header from "../components/Header";
import Footer from "@/components/footer";

const firstBackgound = "https://i.imgur.com/GZHb8nT.png";
const secondback = "https://i.imgur.com/UXNy8WO.png";
const thirdBack = "https://i.imgur.com/BzIQqS9.png";
const fourtBackground = "https://i.imgur.com/p51lT9A.png";
const book1 = "https://i.imgur.com/FJNZUFp.png";

const Homepage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [textVisible, setTextVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const backgroundImages = [
    firstBackgound,
    secondback,
    thirdBack,
    fourtBackground,
  ];

  const events = [
    {
      image: book1,
      date: "Every Sunday 10:00 EST",
      title: "Sunday Services (Every Sunday)",
      link: "/events",
      text: "Join us Sundays for powerful worship, Bible-based teaching, and real community. Experience God's presence and find your purpose with us!",
    },
    {
      image: "https://i.imgur.com/J6Y8BJ6.png",
      date: "Every MWF 8:00 EST",
      title: "Morning Mercy Prayer meeting ",
      link: "/events",
      text: "Every Mondays, Wednesdays, and Fridays",
    },
    {
      image: "https://i.imgur.com/p0slYXK.png",
      date: "Every Last Saturday 7:00am EST",
      title: "ICUTL- I Cry Unto The Lord",
      link: "/events",
      text: "Every Mondays, Wednesdays, and Fridays",
    },
  ];

  useEffect(() => {
    if (!api) return;

    // Listen for slide changes
    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [api]);

  // Add animation trigger after component mounts
  useEffect(() => {
    // Short timeout to ensure animation starts after render
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Determine if content should be visible (hide when on slide 3 which is the fourth image)
  const shouldShowContent = currentSlide !== 3;

  return (
    <>
      <div className='flex flex-col relative min-h-screen'>
        {/* Fixed position background carousel */}
        <div className='absolute inset-0 z-0 overflow-hidden'>
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              containScroll: false,
            }}
            className='h-full w-full'
          >
            <CarouselContent className='h-full'>
              {backgroundImages.map((image, index) => (
                <CarouselItem key={index} className='w-full h-[800px]'>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className='h-full w-full object-cover'
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Content overlay */}
        <div
          className={`relative z-10 flex flex-col min-h-screen ${
            textVisible && shouldShowContent ? "bg-black/40" : ""
          }`}
        >
          <Header />

          <div  className={` flex items-center justify-between p-4 w-full transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 right-0 z-50 bg-black" : "relative"
        }`}>
            <NavLink to='/'>
              <div className='flex items-center'>
                <img src={logo} alt='logo' className='w-24 md:w-33' />
              </div>
            </NavLink>
            <div className='hidden md:flex gap-4 text-white text-sm capitalize cursor-pointer'>
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
            <div className='fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50 min-h-screen'>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className='absolute top-4 right-4 text-white text-2xl focus:outline-none'
                aria-label='Close menu'
              >
                ×
              </button>

              <nav className='flex flex-col items-center gap-3 w-full max-w-xs px-4'>
                {["home", "join", "sermons", "Events", "Give", "Gallery"].map(
                  (link) => (
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
                  )
                )}
              </nav>
            </div>
          )}

          <main className='flex-grow flex items-center justify-center h-[50vh] md:h-[70vh] lg:h-[80vh]'>
            <div className='flex items-center justify-center h-full text-white mt-22 md:mt-13 px-4'>
              <div
                className={`text-center transition-opacity duration-500 ${
                  shouldShowContent ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Animated text elements */}
                <h1
                  className={`text-lg md:text-4xl font-normal mb-2 md:mb-4 transition-all duration-1000 ease-out ${
                    textVisible && shouldShowContent
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-10"
                  }`}
                >
                  Welcome to
                </h1>
                <p
                  className={`text-xl md:text-5xl font-bold mb-3 md:mb-5 transition-all duration-1000 delay-300 ease-out ${
                    textVisible && shouldShowContent
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-10"
                  }`}
                >
                  RCCG StrongTower Stouffville
                </p>
                <p
                  className={`text-base md:text-2xl mb-4 md:mb-8 transition-all duration-1000 delay-500 ease-out ${
                    textVisible && shouldShowContent
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-10"
                  }`}
                >
                  A Place of Worship, Growth, and Community
                </p>
                <div
                  className={`space-x-2 md:space-x-4 transition-all duration-1000 delay-700 ease-out ${
                    textVisible && shouldShowContent
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <NavLink to='/join'>
                    <button className='bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full cursor-pointer text-sm md:text-base'>
                      Join Us
                    </button>
                  </NavLink>
                  <NavLink to='/events'>
                    <button className='border border-white px-4 py-2 md:px-6 md:py-3 rounded-full cursor-pointer text-sm md:text-base'>
                      Learn More
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className='flex flex-col md:flex-row h-auto md:h-64 overflow-hidden'>
        <div className='w-full md:w-1/6 bg-orange-400 flex flex-col justify-center p-4 md:p-7'>
          <p className='uppercase text-sm text-white'>UPCOMING</p>
          <p className='uppercase text-2xl md:text-4xl font-small text-white'>
            Events
          </p>
        </div>

        <div className='flex flex-col md:flex-row flex-grow'>
          {events.map((event, index) => (
            <div
              key={index}
              className='w-full md:flex-1 h-64 md:h-full bg-white relative group overflow-hidden'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={event.image}
                alt={event.title}
                className='w-full h-full object-cover transition-transform duration-700 ease-in-out'
                style={{
                  transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                }}
              />
              <div
                className={`absolute inset-0 bg-white flex flex-col justify-center text-white gap-2 md:gap-4 p-4 transition-all duration-700 ease-in-out ${
                  hoveredIndex === index
                    ? "opacity-80 transform translate-y-0"
                    : "opacity-0 transform translate-y-full"
                }`}
              >
                <span className='text-base md:text-xl text-[#0D0D0D99] font-bold'>
                  {event.date}
                </span>
                <p className='text-xl md:text-xl text-black font-bold'>
                  {event.title}
                </p>
                <p className='text-sm md:text-base text-[#0D0D0D99] font-light'>
                  {event.text}
                </p>
                <NavLink
                  to='/events'
                  className='text-sm underline cursor-pointer text-[#0D0D0D99] hover:text-black transition-colors duration-300'
                >
                  Learn More....
                </NavLink>
              </div>
              <div
                className={`absolute bottom-0 left-0 right-0 bg-white/80 text-black p-3 md:p-4 transition-all duration-700 ease-in-out ${
                  hoveredIndex === index
                    ? "transform translate-y-full"
                    : "transform translate-y-0"
                }`}
              >
                <span className='flex flex-col justify-center text-gray-400 gap-1 md:gap-2'>
                  {event.date}
                  <span className='text-sm md:text-lg font-small text-black'>
                    {event.title}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
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
