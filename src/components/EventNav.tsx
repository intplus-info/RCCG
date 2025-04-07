import { useState } from "react";
import image6 from "../assets/image6.svg";

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

const EventContent: Event[] = [
  {
    image: image6,
    title: "Relationship with God",
    day: "32",
    month: "May",
    time: "8:00 EST",

    content:
      "Hi Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis ligula pellentesque nisi tristique porta. Vestibulum eget nisi est. Vivamus pharetra mattis ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc eget nisl vel nisl pellentesque semper sed quis tellus. Integer euismod consequat ipsum eget congue. Aliquam sit amet ipsum ornare, aliquam arcu eu, eleifend ante. Vestibulum iaculis finibus quam, quis vestibulum ligula blandit ut. Suspendisse sit amet dolor vitae lectus posuere vestibulum. Fusce a est dui.",
    start: "August 31 @8:00 EST",
    end: "August 31 @8:00 EST",
    venue: "5592 Aurora Rd, Whitchurch-Stouffville, ON, Canada",
    phone: "+1 825 806 9862",
    email: "info@StrongTowerStouffville.com",
  },
  {
    image: image6,
    title: "Relationship with us",
    day: "30",
    month: "May",
    time: "8:00 EST",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis ligula pellentesque nisi tristique porta. Vestibulum eget nisi est. Vivamus pharetra mattis ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc eget nisl vel nisl pellentesque semper sed quis tellus. Integer euismod consequat ipsum eget congue. Aliquam sit amet ipsum ornare, aliquam arcu eu, eleifend ante. Vestibulum iaculis finibus quam, quis vestibulum ligula blandit ut. Suspendisse sit amet dolor vitae lectus posuere vestibulum. Fusce a est dui.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    start: "August 31 @8:00 EST",
    end: "August 31 @8:00 EST",
    venue: "5592 Aurora Rd, Whitchurch-Stouffville, ON, Canada",
    phone: "+1 825 806 9862",
    email: "info@StrongTowerStouffville.com",
  },
  {
    image: image6,
    title: "Relationship with God",
    day: "30",
    month: "May",
    time: "8:00 EST",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis ligula pellentesque nisi tristique porta. Vestibulum eget nisi est. Vivamus pharetra mattis ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc eget nisl vel nisl pellentesque semper sed quis tellus. Integer euismod consequat ipsum eget congue. Aliquam sit amet ipsum ornare, aliquam arcu eu, eleifend ante. Vestibulum iaculis finibus quam, quis vestibulum ligula blandit ut. Suspendisse sit amet dolor vitae lectus posuere vestibulum. Fusce a est dui.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    start: "August 31 @8:00 EST",
    end: "August 31 @8:00 EST",
    venue: "5592 Aurora Rd, Whitchurch-Stouffville, ON, Canada",
    phone: "+1 825 806 9862",
    email: "info@StrongTowerStouffville.com",
  },
  {
    image: image6,
    title: "Relationship with Heaven",
    day: "30",
    month: "May",
    time: "8:00 EST",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    start: "sep 31 @8:00 EST",
    end: "August 31 @8:00 EST",
    venue: "5592 Aurora Rd, Whitchurch-Stouffville, ON, Canada",
    phone: "+1 825 806 9862",
    email: "info@StrongTowerStouffville.com",
  },
];

const Events = ({ events, onClick }: EventsProps) => {
  return (
    <div
      className='flex flex-col md:flex-row gap-10 cursor-pointer'
      onClick={onClick}
    >
      <div className='flex flex-col'>
        <div className='flex w-[440.350px]'>
          <img src={events.image} alt='image' className='w-[274.5px]' />
          <span className='flex flex-col bg-[#FF7F00] w-[165px] items-center justify-center'>
            <p className='text-3xl font-bold text-white'>{events.day}</p>
            <p className='text-3xl font-light text-white'>{events.month}</p>
            <p className='text-xl text-white'>{events.time}</p>
          </span>
        </div>
        <div className='flex flex-col w-[440.350px] justify-center bg-[#F2F2F2] p-4'>
          <p className='text-black font-normal text-xl'>{events.title}</p>
          <p className='text-sm text-gray-500'>{events.content}</p>
        </div>
      </div>
    </div>
  );
};
interface SelectedEventProps {
  selectedEventTitle: string | null;
  setSelectedEventTitle: (title: string | null) => void;
}
const EventNav = ({setSelectedEventTitle}:SelectedEventProps) => {
  const [eventsOpen, setEventOpen] = useState<number | null>(null);

  const handleEventClick = (index: number) => {
    setSelectedEventTitle(EventContent[index].title);
    setEventOpen(index === eventsOpen ? null : index);
  };

  const selectedEvent = eventsOpen !== null ? EventContent[eventsOpen] : null;

  return (
    <section>
      {eventsOpen === null ? (
        <div className='flex justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16 p-12 mt-5'>
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
        <section className='flex flex-col md:flex-row  justify-center  min-h-[70vh] gap-4 p-8'>
          <div className='max-w-2xl w-full  p-6 '>
            <img
              src={selectedEvent?.image}
              alt='event'
              className='w-full h-auto rounded-md mb-4'
            />
            <p className='text-[#0D0D0D99] '>{selectedEvent?.contents}</p>

            <div className='text-sm text-gray-600 space-y-2 flex flex-col justify-center gap-6 p-8'>
              <div className='flex gap-8'>
                <p className="flex flex-col text-[#0D0D0DCC]">
                  <span >Start:</span> {selectedEvent?.start}
                </p>
                <p className="flex flex-col text-[#0D0D0DCC]">
                  <span >End:</span> {selectedEvent?.end}
                </p>
              </div>

              <p className="flex flex-col text-[#0D0D0DCC]">
                <span >Venue:</span> {selectedEvent?.venue}
              </p>
              <p className="flex flex-col text-[#0D0D0DCC]">
                <span>Phone:</span> {selectedEvent?.phone}
              </p>
              <p className="flex flex-col text-[#0D0D0DCC]">
                <span>Email:</span> {selectedEvent?.email}
              </p>
            </div>
          </div>
          <div className="mt-3 " >
            <p className="text-lg mb-3">other Events</p>
            <div className="flex cursor-pointer "  onClick={() => setEventOpen(null)}>
              <div className="flex flex-col justify-center items-center w-[71px]">
                <div className="items-center text-center bg-[#FF7F00] p-3  text-white">11</div>
                <div className="items-center text-sm border px-2">Nov</div>
              
              </div>
              <div className="flex flex-col">
                  <p className="text-[#FF7F00]">Abudant loves</p>
                  <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing ...</p>
                </div>
            </div>
            <div className="flex py-4 cursor-pointer" onClick={() => setEventOpen(null)}>
              <div className="flex flex-col justify-center items-center w-[71px]">
                <div className="items-center text-center bg-[#FF7F00] p-3  text-white">11</div>
                <div className="items-center text-sm border px-2">Nov</div>
              
              </div>
              <div className="flex flex-col">
                  <p className="text-[#FF7F00]">Abudant love</p>
                  <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing ...</p>
                </div>
            </div>
            <div className="flex py-4 cursor-pointer" onClick={() => setEventOpen(null)}>
              <div className="flex flex-col justify-center items-center w-[71px]">
                <div className="items-center text-center bg-[#FF7F00] p-3  text-white">11</div>
                <div className="items-center text-sm border px-2">Nov</div>
              
              </div>
              <div className="flex flex-col">
                  <p className="text-[#FF7F00]">Abudant love</p>
                  <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing ...</p>
                </div>
            </div>


          
          </div>
        </section>
      )}
    </section>
  );
};

export default EventNav;
