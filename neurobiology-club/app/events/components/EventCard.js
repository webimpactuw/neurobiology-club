import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { format } from "date-fns";

export default function EventCard({ event }) {
  return (
    <div className="border">
      <div className="flex items-center justify-center">
        <div className="font-bold">
          {/* day is 28 month is 18 */}
          <p>{format(new Date(event.date), "d")}</p>
          <p>{format(new Date(event.date), "m")}</p>
        </div>
        <div>
          {/* will need to implement a conditional for the event type styling */}
          <div className="flex items-center">
            <p>{event.name}</p>
            <button id="academic"> {event.type}</button>
          </div>
          <p className="text-[12]">{event.location} | {event.time}</p>
        </div>
      </div>

      <div>
        <Image
          src = {urlFor(event.image).auto("format").url()}
          alt = {event.name}
          width = {220}
          height = {220}
          id="border"
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