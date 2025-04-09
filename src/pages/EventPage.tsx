import { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "@/components/Header";
import logo from "../assets/logo.svg";
import Footer from "@/components/footer";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import FormPage from "./FormPage";

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
const header = "https://i.imgur.com/K38ANvA.png";

const EventContent: Event[] = [
  {
    image: book1,
    title: "Sunday Services (Every Sunday)",
    day: "Every",
    month: "Sunday",
    time: "10:00 EST",
    content:
      "Join us Sundays for powerful worship, Bible-based teaching, and real community. Experience God's presence and find your purpose with us!",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis ligula pellentesque nisi tristique porta. Vestibulum eget nisi est. Vivamus pharetra mattis ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc eget nisl vel nisl pellentesque semper sed quis tellus. Integer euismod consequat ipsum eget congue. Aliquam sit amet ipsum ornare, aliquam arcu eu, eleifend ante. Vestibulum iaculis finibus quam, quis vestibulum ligula blandit ut. Suspendisse sit amet dolor vitae lectus posuere vestibulum. Fusce a est dui.",
    end: "August 31 @10:00 :00 EST",
    venue: "Ballantrae Community Center 5592 Aurora Rd Whitchurch Stouffville.",
    phone: "+1 647-695 5700",
    email: " welcome@rccgstouffville.org",
  },
  {
    image: "https://i.imgur.com/J6Y8BJ6.png",
    title: "Morning Mercy Prayer meeting ",
    day: "Every",
    month: "MWF",
    time: "8:00 EST",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis ligula pellentesque nisi tristique porta. Vestibulum eget nisi est. Vivamus pharetra mattis ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc eget nisl vel nisl pellentesque semper sed quis tellus. Integer euismod consequat ipsum eget congue. Aliquam sit amet ipsum ornare, aliquam arcu eu, eleifend ante. Vestibulum iaculis finibus quam, quis vestibulum ligula blandit ut. Suspendisse sit amet dolor vitae lectus posuere vestibulum. Fusce a est dui.",
    content:
      "Every Mondays, Wednesdays, and Fridays",
    start: " 5:30am -6:00am EST",
    end: " Mondays, Wednesdays, and Fridays  6:00am @8:00 EST",
    venue: "Ballantrae Community Center 5592 Aurora Rd Whitchurch Stouffville.",
    phone: "+1 647-695 5700",
    email: " welcome@rccgstouffville.org",
  },
  {
    image: "https://i.imgur.com/p0slYXK.png",
    title: "ICUTL- I Cry Unto The Lord ",
    day: "Every Last",
    month: "Saturday",
    time: "7:00am EST",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis ligula pellentesque nisi tristique porta. Vestibulum eget nisi est. Vivamus pharetra mattis ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc eget nisl vel nisl pellentesque semper sed quis tellus. Integer euismod consequat ipsum eget congue. Aliquam sit amet ipsum ornare, aliquam arcu eu, eleifend ante. Vestibulum iaculis finibus quam, quis vestibulum ligula blandit ut. Suspendisse sit amet dolor vitae lectus posuere vestibulum. Fusce a est dui.",
    content:
      "Every Last Saturdays of the Month",
    start: "5:30am -6:00am EST.",
    end: "August 31 @8:00 EST",
    venue: "Ballantrae Community Center 5592 Aurora Rd Whitchurch Stouffville.",
    phone: "+1 647-695 5700",
    email: " welcome@rccgstouffville.org",
  },
  {
    image: "https://i.imgur.com/ymgu8Ue.png",
    title: "Digging Deep",
    day: "Every2nd&4th",
    month: "Tuesdays",
    time: "19:00 EST",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    start: "19:00 EST",
    end: "August 31 @8:00 EST",
    venue: "Ballantrae Community Center 5592 Aurora Rd Whitchurch Stouffville.",
    phone: "+1 647-695 5700",
    email: " welcome@rccgstouffville.org",
  },
  {
    image: "https://i.imgur.com/fugsnLc.png",
    title: "Digging Deep",
    day: "Every Last",
    month: "Saturday",
    time: "19:00 EST",
    content:
      "Every 3rd Thursday of the Month",
    start: "19:00 EST",
    end: "August 31 @8:00 EST",
    venue: "Ballantrae Community Center 5592 Aurora Rd Whitchurch Stouffville.",
    phone: "+1 647-695 5700",
    email: " welcome@rccgstouffville.org",
  },
];

const Events = ({ events, onClick }: EventsProps) => {
  return (
    <div
      className="flex flex-col md:flex-row gap-4 w-4/4 cursor-pointer px-6 hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
    >
      <div className="flex flex-col w-full">
        <div className="flex w-full h-48 md:h-64">
          <img 
            src={events.image} 
            alt={events.title} 
            className="w-3/4 object-cover h-full" 
          />
          <span className="flex flex-col bg-[#FF7F00] w-1/4 items-center justify-center p-2 h-full">
            <p className="text-lg md:text-lg font-normal text-white">{events.day}</p>
            <p className="text-xs md:text-3xl font-bold text-white">{events.month}</p>
            <p className="text-sm md:text-xl text-white">{events.time}</p>
          </span>
        </div>
        <div className="flex flex-col w-full justify-center bg-[#F2F2F2] p-4">
          <p className="text-black font-normal text-lg md:text-xl">{events.title}</p>
          <p className="text-xs md:text-sm text-gray-500">{events.content}</p>
          <p className="text-xs md:text-sm text-gray-500 mt-4">{events.start}</p>
        </div>
      </div>
    </div>
  );
};

// Create a new EventDetail component to show in the modal

const EventPage = () => {
  const [selectedEventIndex, setSelectedEventIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleEventClick = (index: number) => {
    setSelectedEventIndex(index);
    setIsModalOpen(true);
  };

  const selectedEvent = selectedEventIndex !== null ? EventContent[selectedEventIndex] : null;

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
          <div className="flex flex-col gap-4 justify-center items-center p-6">
            <hr className="w-full h-0.5 text-white opacity-50" />
            <h1 className="text-xl md:text-4xl capitalize text-white">
              Our Events
            </h1>
            <hr className="w-full h-0.5 text-white opacity-50" />
          </div>
        </div>
      </div>
      
      <div className="flex justify-center px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 py-8 md:py-12 mt-5 w-full">
          {EventContent.map((event, index) => (
            <Events
              key={index}
              events={event}
              onClick={() => handleEventClick(index)}
            />
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-white md:min-w-[800px] max-h-[92vh] overflow-y-auto">
          {selectedEvent && (
            <FormPage
            />
          )}
        </DialogContent>
        <DialogOverlay className="fixed inset-0 bg-white z-50" />
      </Dialog>

      <Footer />
    </section>
  );
};

export default EventPage;