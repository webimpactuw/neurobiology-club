"use client"
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { format } from "date-fns";
import { useState } from "react";

export default function EventCard({ event }) {
  const [isOpen, setIsOpen] = useState(false);
  const localDate = new Date(`${event.date}T12:00:00`);
  const isPastEvent = localDate < new Date();
  
  return (
    <div className="pt-6 pb-6 mx-28 border-b border-black">
      <div className="flex items-left justify-left cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)}>
        <div className="h-12 border-l border-black mr-4"/>
        <div className="font-bold">
          <p className="text-xl text-center">{format(localDate, "d")}</p>
          <p className="text-xs">{event.month}</p>
        </div>
        <div className="ml-6">
          <div className="flex items-center">
            <p className="font-semibold">{event.name}</p>
            <button id={event.type === "Academic" ? "academic-box" : event.type === "Networking" ? "networking-box" : ""}
              className="ml-4">
              {event.type}
            </button>
          </div>
          <p className="text-xs">{event.location} | {event.time}</p>
        </div>
      </div>

      {/* Event Card Body */}
      {isOpen && (
        <div className="flex mt-12">
          {event.image && (
            <Image
              src = {urlFor(event.image).auto("format").url()}
              alt = {event.name}
              width = {375}
              height = {375}
              className="ml-4"/>
          )}
        
          <div className={`${event.image ? "w-1/2 ml-32 items-center text-center" : "ml-12 w-full items-start text-left"} 
            flex flex-col justify-center mt-2`}>
            <div className="mt-2 flex-col items-center text-center">
              <p className="mb-8">{event.description}</p>
              {!isPastEvent && (
                <a href={event.link} target="_blank" id="rsvp">RSVP</a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}