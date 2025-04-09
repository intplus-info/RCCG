import { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "@/components/Header";
import logo from "../assets/logo.svg";
import Footer from "@/components/footer";

interface Event {
  image: string;
  title: string;
  day: string;
  month: string;
  time: string;
  content: string;
  contents?: string;
  start?: string;
  end?: string;
  venue?: string;
  phone?: string;
  email?: string;
}

interface EventsProps {
  events: Event;
  onClick: () => void;
}
const book1 = "https://i.imgur.com/FJNZUFp.png";
const book2 ="https://i.imgur.com/kJFx9fz.png";
const header = "https://i.imgur.com/K38ANvA.png"
const EventContent: Event[] = [
  {
    image: book1,
    title: "Sunday Services (Every Sunday)",
    day: "Every",
    month: "Sunday",
    time: "10:00 EST",

    content:
      "Hi Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis ligula pellentesque nisi tristique porta. Vestibulum eget nisi est. Vivamus pharetra mattis ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc eget nisl vel nisl pellentesque semper sed quis tellus. Integer euismod consequat ipsum eget congue. Aliquam sit amet ipsum ornare, aliquam arcu eu, eleifend ante. Vestibulum iaculis finibus quam, quis vestibulum ligula blandit ut. Suspendisse sit amet dolor vitae lectus posuere vestibulum. Fusce a est dui.",
    start: "August 31 @10:00 :00 EST",
    end: "August 31 @10:00 :00 EST",
    venue: "Ballantrae Community Center 5592 Aurora Rd Whitchurch Stouffville.",
    phone: "+1 647-695 5700",
    email: " welcome@rccgstouffville.org",
  },
  {
    image: book2,
    title: "Morning Mercy Prayer meeting ",
    day: "Every",
    month: "Monday",
    time: "8:00 EST",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis ligula pellentesque nisi tristique porta. Vestibulum eget nisi est. Vivamus pharetra mattis ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc eget nisl vel nisl pellentesque semper sed quis tellus. Integer euismod consequat ipsum eget congue. Aliquam sit amet ipsum ornare, aliquam arcu eu, eleifend ante. Vestibulum iaculis finibus quam, quis vestibulum ligula blandit ut. Suspendisse sit amet dolor vitae lectus posuere vestibulum. Fusce a est dui.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    start: " Mondays, Wednesdays, and Fridays  5:30am EST",
    end: " Mondays, Wednesdays, and Fridays  6:00am @8:00 EST",
    venue: "Ballantrae Community Center 5592 Aurora Rd Whitchurch Stouffville.",
    phone: "+1 647-695 5700",
    email: " welcome@rccgstouffville.org",
  },
  {
    image: book1,
    title: "ICUTL- I Cry Unto The Lord ",
    day: "Every",
    month: "last saturday",
    time: "7:00am EST",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis ligula pellentesque nisi tristique porta. Vestibulum eget nisi est. Vivamus pharetra mattis ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc eget nisl vel nisl pellentesque semper sed quis tellus. Integer euismod consequat ipsum eget congue. Aliquam sit amet ipsum ornare, aliquam arcu eu, eleifend ante. Vestibulum iaculis finibus quam, quis vestibulum ligula blandit ut. Suspendisse sit amet dolor vitae lectus posuere vestibulum. Fusce a est dui.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    start: "August 31 @8:00 EST",
    end: "August 31 @8:00 EST",
    venue: "Ballantrae Community Center 5592 Aurora Rd Whitchurch Stouffville.",
    phone: "+1 647-695 5700",
    email: " welcome@rccgstouffville.org",
  },
  {
    image: book2,
    title: "Digging Deep",
    day: "Every",
    month: "2nd and 4th",
    time: "Tuesdays",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    start: "sep 31 @8:00 EST",
    end: "August 31 @8:00 EST",
    venue: "Ballantrae Community Center 5592 Aurora Rd Whitchurch Stouffville.",
    phone: "+1 647-695 5700",
    email: " welcome@rccgstouffville.org",
  },
];

const Events = ({ events, onClick }: EventsProps) => {
  return (
    <div
      className='flex flex-col md:flex-row gap-4 cursor-pointer w-full'
      onClick={onClick}
    >
      <div className='flex flex-col w-full'>
        <div className='flex w-full'>
          {/* Made image responsive */}
          <img src={events.image} alt='image' className='w-3/4 object-cover' />
          <span className='flex flex-col bg-[#FF7F00] w-1/4 items-center justify-center p-2'>
            <p className='text-lg md:text-3xl font-bold text-white'>{events.day}</p>
            <p className='text-xs md:text-lg font-light text-white'>{events.month}</p>
            <p className='text-sm md:text-xl text-white'>{events.time}</p>
          </span>
        </div>
        <div className='flex flex-col w-full justify-center bg-[#F2F2F2] p-4'>
          <p className='text-black font-normal text-lg md:text-xl'>{events.title}</p>
          <p className='text-xs md:text-sm text-gray-500'>{events.content}</p>
        </div>
      </div>
    </div>
  );
};

const EventPage = () => {
  const [eventsOpen, setEventOpen] = useState<number | null>(null);
  const [SelectedEventTitle, setSelectedEventTitle] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleEventClick = (index: number) => {
    setSelectedEventTitle(EventContent[index].title);
    setEventOpen(index === eventsOpen ? null : index);
  };

  const selectedEvent = eventsOpen !== null ? EventContent[eventsOpen] : null;

  return (
    <section className="overflow-x-hidden">
      <div
        className="flex flex-col"
        style={{
          backgroundImage: `url(${header})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image",
        }}
      >
        <Header />

        <div className="flex items-center justify-between p-4 w-full">
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
            <hr className='w-full h-0.5 text-white opacity-50' />
            <h1 className='text-xl md:text-4xl capitalize text-white'>
              {SelectedEventTitle || "Our Events"}
            </h1>
            <hr className='w-full h-0.5 text-white opacity-50' />
          </div>
        </div>
      </div>
      
      {eventsOpen === null ? (
        <div className='flex justify-center px-4 md:px-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-8 md:py-12 mt-5 w-full'>
            {EventContent.map((event, index) => (
              <Events
                key={index}
                events={event}
                onClick={() => handleEventClick(index)}
              />
            ))}
          </div>
        </div>
      ) : (
        <section className='flex flex-col lg:flex-row justify-center gap-6 p-4 md:p-6 max-w-6xl mx-auto'>
          <div className='w-full lg:w-2/3'>
            <img
              src={selectedEvent?.image}
              alt='event'
              className='w-full h-auto rounded-md mb-4'
            />
            <p className='text-[#0D0D0D99] mb-4 text-sm md:text-base'>{selectedEvent?.contents}</p>

            <div className='text-xs md:text-sm text-gray-700 space-y-4'>
              <div className='flex flex-col md:flex-row gap-6'>
                <div>
                  <p className='font-medium'>Start:</p>
                  <p>{selectedEvent?.start}</p>
                </div>
                <div>
                  <p className='font-medium'>End:</p>
                  <p>{selectedEvent?.end}</p>
                </div>
              </div>

              <div>
                <p className='font-medium'>Venue:</p>
                <p className="break-words">{selectedEvent?.venue}</p>
              </div>

              <div>
                <p className='font-medium'>Phone:</p>
                <p>{selectedEvent?.phone}</p>
              </div>

              <div>
                <p className='font-medium'>Email:</p>
                <p className="break-words">{selectedEvent?.email}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 lg:mt-0 lg:w-1/3">
            <p className="text-lg mb-3 font-medium">Other Events</p>
            <div className="flex cursor-pointer mb-4" onClick={() => setEventOpen(null)}>
              <div className="flex flex-col justify-center items-center w-16 md:w-20">
                <div className="items-center text-center bg-[#FF7F00] py-2 px-3 text-white">11</div>
                <div className="items-center text-xs md:text-sm border px-2">Nov</div>
              </div>
              <div className="flex flex-col ml-2">
                <p className="text-[#FF7F00] text-sm md:text-base">Abundant Love</p>
                <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing ...</p>
              </div>
            </div>
            
            <div className="flex cursor-pointer mb-4" onClick={() => setEventOpen(null)}>
              <div className="flex flex-col justify-center items-center w-16 md:w-20">
                <div className="items-center text-center bg-[#FF7F00] py-2 px-3 text-white">11</div>
                <div className="items-center text-xs md:text-sm border px-2">Nov</div>
              </div>
              <div className="flex flex-col ml-2">
                <p className="text-[#FF7F00] text-sm md:text-base">Abundant Love</p>
                <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing ...</p>
              </div>
            </div>
            
            <div className="flex cursor-pointer" onClick={() => setEventOpen(null)}>
              <div className="flex flex-col justify-center items-center w-16 md:w-20">
                <div className="items-center text-center bg-[#FF7F00] py-2 px-3 text-white">11</div>
                <div className="items-center text-xs md:text-sm border px-2">Nov</div>
              </div>
              <div className="flex flex-col ml-2">
                <p className="text-[#FF7F00] text-sm md:text-base">Abundant Love</p>
                <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing ...</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </section>
  );
};

export default EventPage;