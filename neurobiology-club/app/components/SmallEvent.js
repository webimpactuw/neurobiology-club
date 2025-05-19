"use client"
import { format } from "date-fns";

export default function SmallEvent({ event }) {
  const localDate = new Date(`${event.date}T12:00:00`);
  
  return (
    <div className="pt-8 pb-8 mx-28 border-b border-black">
      <div className="flex items-left justify-left cursor-pointer mx-4">
        <div className="font-bold">
          <p className="text-xl">{format(localDate, "d")}</p>
          <p className="text-xs">{event.month}</p>
        </div>
        <div className="ml-6 mr-12">
          <div className="flex items-center">
            <p className="font-semibold">{event.name}</p>
            <button id={event.type === "Academic" ? "academic-box" : event.type === "Networking" ? "networking-box" : ""}
              className="ml-4">
              {event.type}
            </button>
          </div>
          <p className="text-xs">{event.location} | {event.time}</p>
        </div>
        <div className="flex flex-col items-center">
          <a href={event.link} target="_blank" id="rsvp-home">RSVP</a>
          <p href={"/events"} className="underline text-xs">View Events page for details</p>
        </div>
      </div>
    </div>
  );
}