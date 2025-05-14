import Header from "../components/Header";
import Footer from "../components/Footer";
import { client } from "@/sanity/lib/client";
import EventCard from "./components/EventCard";

export default async function Events() {
    const upcoming = await getUpcomingEvents();
    const past = await getPastEvents();

    return (
        <div className="">
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
            <div>
               <p id="event-header" className="font-extrabold ml-32 mt-16 border-b border-black">UPCOMING EVENTS</p>
               <div className="flex items-center pl-32 pt-4">
                    <button id="academic">Academic</button>
                    <button className="ml-4"id="networking">Networking</button>
               </div>
                <div>
                    {upcoming.map((event) => (
                        <EventCard key = {event.name} event = {event}/>
                    ))}
                </div> 
            </div>
            

            <p id="event-header" className="font-extrabold ml-32 mt-16 border-b border-black">PAST EVENTS</p>
            <div className="flex items-center pl-32 pt-4">
                <button id="academic">Academic</button>
                <button className="ml-4"id="networking">Networking</button>
            </div>
            <div>
                {past.map((event) => (
                    <EventCard key = {event.name} event = {event}/>
                ))}
            </div> 
            <Footer/>
        </div> 
    )
};

// make two queries, one for upcoming and one for past
async function getUpcomingEvents() {
    const query = `*[_type == "events" && date >= now()] | order(date asc) {
        date,
        month,
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

async function getPastEvents() {
    const query = `*[_type == "events" && date < now()] | order(date desc) {
        date,
        month,
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