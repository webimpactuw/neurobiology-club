"use client"
import { format } from "date-fns";

export default function SmallEvent({ event }) {
  const localDate = new Date(`${event.date}T12:00:00`);
  
  return (
    <div className="pt-6 pb-6 mx-4 md:mx-28 border-b border-black">
      <div className="flex flex-col md:flex-row items-start md:items-left justify-left cursor-pointer">
        <div className="flex items-center mb-3 md:mb-0">
          <div className="h-8 md:h-12 border-l border-black mr-3 md:mr-4"/>
          <div className="font-bold">
            <p className="text-lg md:text-xl">{format(localDate, "d")}</p>
            <p className="text-xs">{event.month}</p>
          </div>
        </div>
        <div className="flex-1 ml-0 md:ml-6 md:mr-16">
          <div className="flex flex-col md:flex-row md:items-center mb-2 md:mb-0">
            <p className="font-semibold text-sm md:text-base mb-1 md:mb-0">{event.name}</p>
            <button id={event.type === "Academic" ? "academic-box" : event.type === "Networking" ? "networking-box" : ""}
              className="self-start md:self-auto md:ml-6 text-xs">
              {event.type}
            </button>
          </div>
          <p className="text-xs text-gray-600">{event.location} | {event.time}</p>
        </div>
        <div className="flex flex-row md:flex-col items-center mt-3 md:mt-0">
          <a href={event.link} target="_blank" id="rsvp-home" className="text-xs md:text-sm">RSVP</a>
          <p className="underline text-xs ml-4 md:ml-0 md:mt-1">View Events page for details</p>
        </div>
      </div>
    </div>
  );
}