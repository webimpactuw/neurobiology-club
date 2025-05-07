import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { client } from "@/sanity/lib/client";
import EventCard from "./components/EventCard";

export default async function Events() {
    const events = await getEvents();

    return (
        <div>
            <Header />
            <div className="flex items-left justify-left">
                <div className="ml-32">
                    <div className="flex items-center justify-end w-full pt-32">
                        <p id="big-text">E</p> 
                        <p id="big-text">V</p>
                        <p id="big-text">E</p>
                        <p id="big-text">N</p>
                        <p id="big-text">T</p>
                        <p id="big-text">S</p>
                    </div>
                </div>
            </div>
            <p id="event-headers" className="ml-32 mt-16">UPCOMING EVENTS</p>
            <div>
                {events.map((event) => (
                    <EventCard key = {event.name} event = {event}/>
                ))}
            </div>
            <Footer/>
        </div> 
    )
};

async function getEvents() {
    const query = `*[_type == "events"] {
        date,
        name,
        location,
        time,
        type,
        image,
        description,
        link,
    }`;

    const event = await client.fetch(query);
    return event;
}