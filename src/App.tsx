import  { useEffect, useState } from 'react';
import image1 from "./assets/ii.svg";
import image2 from "./assets/im.svg";
import logo from "./assets/logo.svg";
import sermonimg from "./assets/im88.svg"
import Event from "./components/Event";
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
import Header from './components/Header';
const App = () => {
  const [activeLink, setActiveLink] = useState<string>('home');
  const [homeOpen, setHomeOpen] = useState<boolean>(true);
  const [sermonOpen, setSermonOpen] = useState<boolean>(false);
  const [joinOpen, setjoinOpen] = useState<boolean>(false);

  const handleLinkClick = (link: string) => {

    
    setActiveLink(link);
    setHomeOpen(link === 'home');
    setSermonOpen(link === 'sermons');
    setjoinOpen(link === 'join');
   
  };


  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  // Array of background images
  const backgroundImages = [image1, image2];

  useEffect(() => {
    if (!api) return;
    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <>
    <div
    className=' flex flex-col px-8'
    style={{
      backgroundImage: `url(${homeOpen ? backgroundImages[currentSlide]  : sermonimg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "background-image ",
    }}
  > <Header />
  <div className='flex justify-between'>
  <img src={logo} alt='logo' className='hidden md:block w-33' />
      <div className={`flex justify-between gap-4 text-white text-0.5 cursor-pointer `}>
        {['home', 'join', 'sermons','Events','Give','Gallery'].map((link) => (
          <p
            key={link}
            onClick={() => handleLinkClick(link)}
            className={`w-9 text-0.5 capitalize px-7 py-1 ${activeLink === link ? 'underline' : ''}`}
          >
            {link}
          </p>

        ))}

      </div>  
      </div>

 {homeOpen && <main className='flex-grow relative '>
          <Carousel setApi={setApi} className='relative h-screen'>
            <CarouselContent className='h-full'>
              <CarouselItem className='h-full'>
                <div className='relative z-20 flex items-center justify-center h-full mt-20 text-white'>
                  <div className='text-center px-4'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                      Welcome to RCCG StrongTower Stouffville
                    </h1>
                    <p className='text-xl md:text-2xl mb-8'>
                      A Place of Worship, Growth, and Community
                    </p>
                    <div className='space-x-4'>
                      <button
                        className='bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition'
                        aria-label='Join our community'
                      >
                        Join Us
                      </button>
                      <button
                        className='border border-white px-6 py-3 rounded-full hover:bg-white/20 transition'
                        aria-label='Learn more about us'
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                {/* Removed the dark overlay div */}
                <div className='relative z-20 flex items-center justify-center h-full text-white'>
                  <div className='text-center px-4'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                      Second Slide
                    </h1>
                    <p className='text-xl md:text-2xl mb-8'>
                      More Information About Our Church
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className='absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 text-white p-2 rounded-full hover:bg-black/70' />
            <CarouselNext className='absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 text-white p-2 rounded-full hover:bg-black/70' />
          </Carousel>
        </main>}




      
    </div>
    {homeOpen && (
      <>
 <Event />
 <TImer />
 <Church />
 <Sermons />
 <Blog />
 <Gallery />
 <Footer />
 </>
    )
    
    }
    {sermonOpen && <h1>sermon</h1> }
{joinOpen && <h1>join</h1> }
    </>
  );
};



export default App;
