import EventCard from "./EventCard";

const Events = () => {
    return ( 
        <section>
            <div className="flex justify-around ">
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </section>
     );
}
 
export default Events;