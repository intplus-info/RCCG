import image5 from "../assets/image5.svg";
import image6 from "../assets/image6.svg";
import image7 from "../assets/image7.svg";
import { useState } from "react";

const Event = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const events = [
    { image: image5, date: "April 30, 2025", title: "Relationship With", link: "#",text:"come and worship at our center and pray in one spirit" },
    { image: image6, date: "April 30, 2025", title: "Abundant Love", link: "#",text:"come and worship at our center and pray in one spirit" },
    { image: image7, date: "April 30, 2025", title: "God is Good", link: "#" ,text:"come and worship at our center and pray in one spirit"},
  ];

  return (
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
              <p className="text-xl font-bold">{event.title}</p>
              <p className="text-xl font-sm text-center">{event.text}</p>
              <a href={event.link} className="text-sm underline">Learn More</a>
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
  );
};

export default Event;
