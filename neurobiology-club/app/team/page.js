import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { client } from "@/sanity/lib/client";
import PeopleCard from "./components/PeopleCard";

export default async function Team() {
    const people = await getPeople();

    return (
        <div>
            <Header />
            <div className="flex items-center justify-center">
                <Image src = "/neuron-team.svg"
                    alt = "Neuron"
                    width = {550}
                    height = {550}
                    className = "hidden md:block"
                />
                <div className="ml-0 md:ml-8">
                    <div className="flex items-center justify-center md:justify-end w-full pt-0 md:pt-32">
                       <p id="big-text">M</p> 
                       <p id="big-text">E</p>
                       <p id="big-text">E</p>
                       <p id="big-text">T</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-end w-full">
                        <div className="flex justify-center md:justify-end">
                            <p id="big-text">T</p>
                            <p id="big-text">H</p>
                            <p id="big-text">E</p>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <p id="big-text">T</p>
                            <p id="big-text">E</p>
                            <p id="big-text">A</p>
                            <p id="big-text">M</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "pb-14 flex items-center justify-center hidden md:flex">
               <button className="font-extrabold "id="yellow-box">BOARD MEMBERS</button> 
            </div>
            
            <div className="min-h-screen grid place-items-center pt-5 mt-10 md:mt-0">
                <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-x-4 md:gap-x-36 gap-y-8 md:gap-y-24">
                    {people.map((person) => (
                        <PeopleCard key = {person.name} person = {person}/>
                    ))}
                </div>
            </div>
            <Footer/>
        </div> 
    )
};

async function getPeople() {
    const query = `*[_type == "people"] | order(order asc) {
        image, 
        name,
        role,
        order,
    }`;

  const person = await client.fetch(query);
  return person;
}