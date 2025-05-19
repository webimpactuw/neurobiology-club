"use client"
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";
import SmallEvent from "./components/SmallEvent";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

export default async function Home() {
    const events = await getEvents();

    return (
        <div>
            <Header />
            <div className="ml-[142px] flex items-center">
                <div className="flex flex-col">
                    <div className="flex">
                        <p id="big-text">N</p>
                        <p id="big-text">E</p>
                        <p id="big-text">U</p>
                        <p id="big-text">R</p>
                        <p id="big-text">O</p>
                    </div>
                    <div className="flex">
                        <p id="big-text">B</p>
                        <p id="big-text">I</p>
                        <p id="big-text">O</p>
                        <p id="big-text">L</p>
                        <p id="big-text">O</p>
                        <p id="big-text">G</p>
                        <p id="big-text">Y</p>
                    </div>
                    <div className="flex">
                        <p id="big-text">C</p>
                        <p id="big-text">L</p>
                        <p id="big-text">U</p>
                        <p id="big-text">B</p>
                    </div> 
                </div>
                <Image src = "/Neuron-home.png"
                    alt = "Neuron"
                    width = {550}
                    height = {550}
                    className = ""
                />
            </div>
            
            <div className="bg-gradient-to-t from-[#F3FF99] to-[#F4F3F2]">
                <div className="justify-left ml-[142px] pb-4">
                    <button className="font-extrabold mt-16" id="blue-box"> WHO WE ARE</button>
                </div>

                <div id="club-description">
                    <p>THE NEUROBIOLOGY CLUB AT THE UNIVERSITY OF WASHINGTON SUPPORTS</p>
                    <p>UNDERGRADUATE STUDENTS INTERESTED IN THE LIFE SCIENCES BY</p>
                    <p>OFFERING A WIDE RANGE OF RESOURCES TO HELP THEM GET MORE</p>
                    <p>INVOLVED IN THE NEUROBIOLOGY COMMUNITY.</p>
                    <br></br>
                    <p>WE ALSO AIM TO FOSTER MEANINGFUL CONNECTIONS AMONG STUDENTS</p>
                    <p>WITH SHARED INTERESTS BY HOSTING SOCIAL EVENTS THROUGHOUT THE</p> 
                    <p>YEAR.</p>
                    <br></br>
                    <p> OUR PAST EVENTS INCLUDE NEUROSCIENCE MAJOR Q&A SESSIONS,</p>
                    <p>RESEARCH INVOLVEMENT WORKSHOPS, AND PRE-HEALTH OR CAREER</p> 
                    <p>PANELS. WE'RE ALWAYS OPEN TO NEW IDEAS FROM OUR MEMBERS AND</p> 
                    <p>LOVE HEARING YOUR SUGGESTIONS!</p> 
                </div>

                <div className="flex items-center justify-center pt-16">
                    <button className="font-extrabold" id="blue-box">OUR MISSION</button>
                </div>

                <div className="flex items-center justify-center">
                    <Image
                        src = "/brain-logo.png"
                        alt = "old neurobiology club logo"
                        width = {200}
                        height = {200}
                        className="pt-16 pb-16"
                    />
                </div>

                <div id="small-description">
                    <p>The <b>NEUROBIOLOGY CLUB</b> at the University of Washington brings together students</p>
                    <p>interested in neuroscience and related STEM fields.</p>
                    <p>Our mission is to build a collabortive community that shares knowledge, supports academic</p>
                    <p>growth, and connects members with research, career, and networking opportunities.</p>
                </div>
            </div>

            <div className="flex items-start pb-12">
                <div>
                    <div className="flex items-center mx-28 border-b border-black pb-6">
                        <p className="font-extrabold" id="blue-header-home">UPCOMING EVENTS</p>  
                        <Link href="/events" className="ml-48 mt-6">Go to the Events Page</Link>
                    </div>
                    
                    <div>
                        {events.map((event) => (
                            <SmallEvent key={event.name} event={event} />
                        ))}
                    </div>
                </div>
                <div className="mt-12">
                   <ImageCarousel /> 
                </div>
                
            </div>
            <Footer/>
        </div> 
    );
}

async function getEvents() {
    const query = `*[_type == "events" && date >= now()] | order(date asc) [0...4] {
        date,
        month,
        name,
        location,
        time,
        type,
        link,
    }`;

    const event = await client.fetch(query);
    return event;
}