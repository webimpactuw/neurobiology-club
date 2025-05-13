"use client"
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { format } from "date-fns";
import { useState } from "react";

export default function EventCard({ event }) {
  const [isOpen, setIsOpen] = useState(false);
  const localDate = new Date(`${event.date}T12:00:00`);
  return (
    <div className="pt-8 ml-36">
      {/* Event Card Header */}
      <div className="flex items-left justify-left cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)}>
        <div className="font-bold">
          <p className="text-xl">{format(localDate, "d")}</p>
          <p className="text-xs">{event.month}</p>
        </div>
        <div className="ml-8">
          <div className="flex items-center">
            <p className="font-semibold">{event.name}</p>
            <button className="ml-4" id="academic-box"> {event.type}</button>
          </div>
          <p className="text-xs">{event.location} | {event.time}</p>
        </div>
      </div>

      {/* Event Card Body */}
      {isOpen && (
        <div className="flex mt-12">
          <Image
            src = {urlFor(event.image).auto("format").url()}
            alt = {event.name}
            width = {450}
            height = {450}
            id="border-2 border-black"
          />
        
          <div className="mt-2 ml-32 flex-col items-center">
            <p className="mb-8">{event.description}</p>
            <button href={event.link} target="_blank" id="rsvp">RSVP</button>
          </div>
        </div>
      )}
    </div>
  );
}

// need need a conditional to check to see if date has already passed
  // if date has passed move to past events and remove button
// implement dropdowns as well