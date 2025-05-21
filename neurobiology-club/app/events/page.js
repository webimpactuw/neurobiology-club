"use client"
import Header from "../components/Header";
import Footer from "../components/Footer";
import { client } from "@/sanity/lib/client";
import EventCard from "./components/EventCard";
import { useState, useEffect } from "react";

export default function Events() {
    const [upcoming, setUpcoming] = useState([]);
    const [filterUpcoming, setFilterUpcoming] = useState(null);

    const [past, setPast] = useState([]);
    const [pastPage, setPastPage] = useState([0]);
    const [filterPast, setFilterPast] = useState(null);
    const eventsPerPage = 4;
    const filteredPast = filterPast ? past.filter((event) => event.type === filterPast) : past;
  
    const paginatedPast = filteredPast.slice(pastPage * eventsPerPage, (pastPage + 1) * eventsPerPage);

    const totalPages = Math.ceil(filteredPast.length / eventsPerPage);

    useEffect(() => {
        async function fetchEvents() {
            const upcomingEvents = await getUpcomingEvents();
            const pastEvents = await getPastEvents();
            setUpcoming(upcomingEvents);
            setPast(pastEvents);
        }

        fetchEvents();
    }, []);

    const filteredUpcoming = filterUpcoming ? upcoming.filter((event) => event.type === filterUpcoming) : upcoming;

    const toggleFilterUpcoming = (type, currentFilter, setFilter) => {
        setFilter(currentFilter === type ? null : type);
    };

    const toggleFilterPast = (type, currentFilter, setFilter) => {
        setFilter(currentFilter === type ? null : type);
    };

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
               <p id="event-header" className="font-extrabold mx-28 mt-16 border-b border-black">UPCOMING EVENTS</p>
               <div className="flex items-center pl-32 pt-4">
                    <button
                        onClick={() => toggleFilterUpcoming("Academic", filterUpcoming, setFilterUpcoming)}
                        className={`px-4 py-2 border ${filterUpcoming === "Academic" ? "academic-active" : "academic"}`}>
                        Academic
                    </button>
                    <button
                        onClick={() => toggleFilterUpcoming("Networking", filterUpcoming, setFilterUpcoming)}
                        className={`ml-4 px-4 py-2 border ${filterUpcoming === "Networking" ? "networking-active" : "networking"}`}>
                        Networking
                    </button>
               </div>
                <div>
                {filteredUpcoming.length === 0 ? (<p id="no-events">There are currently no upcoming events!</p>) : 
                    (filteredUpcoming.map((event) => (
                        <EventCard key={event.name} event={event} />
                        ))
                    )}
                </div>
            </div>
            
            <p id="event-header" className="font-extrabold mx-28 mt-24 border-b border-black">PAST EVENTS</p>
            <div className="flex items-center pl-32 pt-4">
                <button
                    onClick={() => toggleFilterPast("Academic", filterPast, setFilterPast)}
                    className={`px-4 py-2 border ${filterPast === "Academic" ? "academic-active" : "academic"}`}>
                    Academic
                </button>
                <button
                    onClick={() => toggleFilterPast("Networking", filterPast, setFilterPast)}
                    className={`ml-4 px-4 py-2 border ${filterPast === "Networking" ? "networking-active" : "networking"}`}>
                    Networking
                </button>
            </div>
            <div>
                {paginatedPast.map((event) => (
                    <EventCard key = {event.name} event = {event}/>
                ))}
            </div>

            {/* Pagination */}
            {/* <div className="flex justify-center items-center gap-6 mt-6">
                <button
                    onClick={() => setPastPage((prev) => Math.max(prev - 1, 0))}
                    disabled={pastPage === 0}
                    className={`px-4 py-2 border ${
                    pastPage === 0 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    Previous
                </button>

                <span className="text-sm font-medium text-gray-700">
                    Page {pastPage + 1} of {totalPages}
                </span>

                <button
                    onClick={() =>
                    setPastPage((prev) =>
                        (prev + 1) * eventsPerPage < filteredPast.length ? prev + 1 : prev
                    )
                    }
                    disabled={(pastPage + 1) * eventsPerPage >= filteredPast.length}
                    className={`px-4 py-2 border ${
                    (pastPage + 1) * eventsPerPage >= filteredPast.length
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                >
                    Next
                </button>
            </div> */}
            <Footer/>
        </div> 
    )
};

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
    }`;

    const event = await client.fetch(query);
    return event;
}