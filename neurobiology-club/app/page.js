import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            <div className="flex items-center justify-center">
                <div className="ml-8">
                    <div className="flex items-center">
                        <p id="big-text">N</p>
                        <p id="big-text">E</p>
                        <p id="big-text">U</p>
                        <p id="big-text">R</p>
                        <p id="big-text">O</p>
                    </div>
                    <div className="flex items-center">
                        <p id="big-text">B</p>
                        <p id="big-text">I</p>
                        <p id="big-text">O</p>
                        <p id="big-text">L</p>
                        <p id="big-text">O</p>
                        <p id="big-text">G</p>
                        <p id="big-text">Y</p>
                    </div>
                    <div className="flex items-center">
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
                <div className="justify-left ml-[142px]">
                    <button id="who-we-are" className="mt-16"> WHO WE ARE</button>
                    <p></p>
                </div>
                <div >
                    <p id="club-description">
                        THE NEUROBIOLOGY CLUB AT THE UNIVERSITY OF WASHINGTON SUPPORTS UNDERGRADUATE STUDENTS INTERESTED IN THE LIFE SCIENCES BY
                        OFFERING A WIDE RANGE OF RESOURCES TO HELP THEM GET MORE
                        INVOLVED IN THE NEUROBIOLOGY COMMUNITY.
                    </p>
                    <p id="club-description">
                        WE ALSO AIM TO FOSTER MEANINGFUL CONNECTIONS AMONG STUDENTS WITH SHARED INTERESTS BY HOSTING SOCIAL EVENTS THROUGHOUT THE YEAR.
                    </p>
                    <p id="club-description">                          
                        OUR PAST EVENTS INCLUDE NEUROSCIENCE MAJOR Q&A SESSIONS, RESEARCH INVOLVEMENT WORKSHOPS, AND PRE-HEALTH OR CAREER PANELS. WE'RE ALWAYS OPEN TO NEW IDEAS FROM OUR MEMBERS AND LOVE HEARING YOUR SUGGESTIONS!
                    </p>
                </div>
                <div>
                    <p id="our-mission">OUR MISSION</p>
                </div>

                <div className="flex items-center justify-center">
                    <Image
                        src = "/brain-logo.svg"
                        alt = "old neurobiology club logo"
                        width = {220}
                        height = {220}
                        id=""
                    />
                </div>
            </div>

            <div className="flex items-center">
                <div>
                    {/* events */}
                </div>
                <div>
                    {/* photo slideshows */}
                </div>
            </div>
            <Footer/>
        </div> 
    );
}