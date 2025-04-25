import Header from "../components/Header";
import Footer from "../components/Footer";
import { client } from "@/sanity/lib/client";
import PeopleCard from "./components/PeopleCard";

export default async function Team() {
    const people = await getPeople();

    return (
        <div>
            <Header />
            <div className = "pb-16 w-64">
               <p id="board-members">BOARD MEMBERS</p> 
            </div>
            
            <div className="min-h-screen grid place-items-center pt-5">
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-x-36 gap-y-24">
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