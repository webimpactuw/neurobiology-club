import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { format } from "date-fns";

export default function EventCard({ event }) {
  return (
    <div>
      <div>
        <p>{event.date}</p>
        <div>
          <p>{event.name}</p>
          <p>{event.location}</p>
          <p>{event.time}</p>
        </div>
        <p>{event.type}</p>
      </div>

      <div>
        <Image
          src = {urlFor(event.image).auto("format").url()}
          alt = {event.name}
          width = {220}
          height = {220}
          id=""
        />
        
        <div>
          <p>{event.description}</p>
          <button>{event.link}</button>
        </div>
      </div>
    </div>
  );
}

// need need a conditional to check to see if date has already passed
  // if date has passed move to past events and remove button
// implement dropdowns as well