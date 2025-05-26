import { client } from "@/sanity/lib/client";
import Events from "./Events";

export default async function EventsPage() {
    const upcomingEvents = await getUpcomingEvents();
    const pastEvents = await getPastEvents();
    return <Events upcomingEvents={upcomingEvents} pastEvents={pastEvents} />;
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