import { useEffect, useState } from "react";

// Your events
const events = [
  {
    date: "sundays",
    time: "10:00 AM EST",
    text: "Sunday Services (Every Sunday)",
  },
  {
    date: "mondays,wednesdays,fridays",
    time: "8:00 AM EST",
    text: "Morning Mercy Prayer Meeting",
  },
  {
    date: "last saturday",
    time: "5:00 PM EST",
    text: "ICUTL- I Cry Unto The Lord",
  },
  {
    date: "2nd tuesday",
    time: "7:00 PM EST",
    text: "Leadership Meeting",
  },
];

// Mapping days to JS date indexes
const dayMap: Record<string, number> = {
  sunday: 0,
  sundays: 0,
  monday: 1,
  mondays: 1,
  tuesday: 2,
  tuesdays: 2,
  wednesday: 3,
  wednesdays: 3,
  thursday: 4,
  thursdays: 4,
  friday: 5,
  fridays: 5,
  saturday: 6,
  saturdays: 6,
};

// Get next Date object for a regular weekday/time
const getNextOccurrence = (dayIndex: number, time: string): Date => {
  const [hourStr, minuteStrWithMeridiem] = time.split(":");
  const [minuteStr, meridiem] = minuteStrWithMeridiem.split(" ")[0];
  let hour = parseInt(hourStr);
  const minutes = parseInt(minuteStr);

  // Handle 12-hour format conversion to 24-hour
  if (meridiem.toLowerCase() === "pm" && hour < 12) hour += 12;
  if (meridiem.toLowerCase() === "am" && hour === 12) hour = 0;

  const now = new Date();
  const result = new Date(now);
  result.setHours(hour, minutes, 0, 0);

  const currentDay = now.getDay();
  let daysUntilNext = (dayIndex - currentDay + 7) % 7;

  if (daysUntilNext === 0 && result <= now) {
    daysUntilNext = 7;
  }

  result.setDate(now.getDate() + daysUntilNext);
  return result;
};

// Get next occurrence of a special date pattern (like "last Saturday")
const getNextSpecialOccurrence = (pattern: string, time: string): Date => {
  const [position, day] = pattern.toLowerCase().split(" ");
  const dayIndex = dayMap[day] || dayMap[day + "s"]; // Handle both singular and plural

  if (dayIndex === undefined) {
    console.error(`Invalid day: ${day}`);
    return new Date(); // Return current date as fallback
  }

  // Parse the time
  const [hourStr, minuteStrWithMeridiem] = time.split(":");
  const [minuteStr, meridiem] = minuteStrWithMeridiem.split(" ")[0];
  let hour = parseInt(hourStr);
  const minutes = parseInt(minuteStr);

  // Handle 12-hour format conversion to 24-hour
  if (meridiem.toLowerCase() === "pm" && hour < 12) hour += 12;
  if (meridiem.toLowerCase() === "am" && hour === 12) hour = 0;

  const now = new Date();
  const result = new Date(now);

  // Set time regardless of the date
  result.setHours(hour, minutes, 0, 0);

  // Handle "last X" pattern
  if (position === "last") {
    // Start with the first day of next month
    result.setDate(1);
    result.setMonth(result.getMonth() + 1);

    // Go back to the last day of current month
    result.setDate(0);

    // Find the last occurrence of the specified day in this month
    while (result.getDay() !== dayIndex) {
      result.setDate(result.getDate() - 1);
    }

    // If this date has already passed this month, move to next month
    if (result < now) {
      result.setMonth(result.getMonth() + 2); // Move to first day of month after next
      result.setDate(0); // Go back to last day of next month

      // Find the last occurrence of the specified day
      while (result.getDay() !== dayIndex) {
        result.setDate(result.getDate() - 1);
      }
    }
  }
  // Handle ordinal patterns like "1st", "2nd", "3rd", "4th" Tuesday
  else if (
    [
      "1st",
      "2nd",
      "3rd",
      "4th",
      "5th",
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
    ].includes(position)
  ) {
    // Convert text ordinals to numbers
    let occurrence = 0;
    if (position === "1st" || position === "first") occurrence = 1;
    else if (position === "2nd" || position === "second") occurrence = 2;
    else if (position === "3rd" || position === "third") occurrence = 3;
    else if (position === "4th" || position === "fourth") occurrence = 4;
    else if (position === "5th" || position === "fifth") occurrence = 5;
    else occurrence = parseInt(position);

    // Start with the first day of current month
    result.setDate(1);

    // Find the first occurrence of this day in the month
    while (result.getDay() !== dayIndex) {
      result.setDate(result.getDate() + 1);
    }

    // Add weeks to get to the right occurrence
    result.setDate(result.getDate() + (occurrence - 1) * 7);

    // If this date has already passed this month, move to next month
    if (result < now) {
      result.setMonth(result.getMonth() + 1);
      result.setDate(1);

      // Find the first occurrence in next month
      while (result.getDay() !== dayIndex) {
        result.setDate(result.getDate() + 1);
      }

      // Add weeks for the desired occurrence
      result.setDate(result.getDate() + (occurrence - 1) * 7);
    }
  }

  return result;
};

const getAllUpcomingDates = () => {
  const now = new Date();
  const upcomingDates = [];

  for (const event of events) {
    const datePatterns = event.date
      .split(",")
      .map((d) => d.trim().toLowerCase());

    for (const pattern of datePatterns) {
      let eventDate;

      // Check if it's a special pattern
      if (pattern.includes(" ")) {
        // Handle patterns like "last saturday" or "2nd tuesday"
        eventDate = getNextSpecialOccurrence(pattern, event.time);
      } else {
        // Handle regular weekday patterns
        const dayIndex = dayMap[pattern];
        if (dayIndex !== undefined) {
          eventDate = getNextOccurrence(dayIndex, event.time);
        } else {
          console.error(`Unknown date pattern: ${pattern}`);
          continue;
        }
      }

      upcomingDates.push({
        eventDate,
        text: event.text,
      });
    }
  }

  return upcomingDates
    .filter(({ eventDate }) => eventDate > now)
    .sort((a, b) => +a.eventDate - +b.eventDate);
};

const Timer = () => {
  const [currentEvent, setCurrentEvent] = useState(
    () => getAllUpcomingDates()[0]
  );
  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeLeft(currentEvent?.eventDate)
  );

  function calculateTimeLeft(targetDate: Date) {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeLeft(currentEvent.eventDate);
      setTimeLeft(remaining);

      if (
        remaining.days === 0 &&
        remaining.hours === 0 &&
        remaining.minutes === 0 &&
        remaining.seconds === 0
      ) {
        const nextEvents = getAllUpcomingDates();
        setCurrentEvent(nextEvents[0]);
        setTimeLeft(calculateTimeLeft(nextEvents[0]?.eventDate));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentEvent]);

  return (
    <div className='p-14 items-center justify-evenly gap-2 bg-[#5E5E5E] md:flex md:flex-row text-sm'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <p className='text-2xl text-white'>{currentEvent?.text}</p>
        <div className='w-full h-0.5 bg-orange-500'></div>
        <p className='text-gray-300 md:text-lg'>
          {" "}
          {currentEvent?.eventDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <div className='flex gap-4'>
        <div className='flex flex-col items-center justify-center gap-3'>
          <p className='text-orange-500 text-2xl'>{timeLeft.days}</p>
          <p className='text-sm md:text-2xl bg-opacity-20 bg-[#FFFFFF33] text-gray-300 px-3'>
            Days
          </p>
        </div>
        <div className='flex flex-col items-center justify-center gap-3'>
          <p className='text-orange-500 text-2xl'>{timeLeft.hours}</p>
          <p className='text-sm md:text-2xl bg-opacity-20 bg-[#FFFFFF33] text-gray-300 px-3'>
            Hours
          </p>
        </div>
        <div className='flex flex-col items-center justify-center gap-3'>
          <p className='text-orange-500 text-2xl'>{timeLeft.minutes}</p>
          <p className='text-sm md:text-2xl bg-opacity-20 bg-[#FFFFFF33] text-gray-300 px-3'>
            Minutes
          </p>
        </div>
        <div className='flex flex-col items-center justify-center gap-3'>
          <p className='text-orange-500 text-2xl'>{timeLeft.seconds}</p>
          <p className='text-sm md:text-2xl bg-opacity-20 bg-[#FFFFFF33] text-gray-300 px-3'>
            Seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
