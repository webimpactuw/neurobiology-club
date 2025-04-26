import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function PeopleCard({ person }) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src = {urlFor(person.image).auto("format").url()}
        alt = {person.name}
        width = {220}
        height = {220}
        id="circle"
        />
      <div>
        <p id="name">{person.name}</p>
        <p id="role">{person.role}</p>
      </div>
    </div>
  )
}