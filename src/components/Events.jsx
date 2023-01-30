import EventCard from "./EventCard";

const Events = () => {
    return ( 
        <section>
            <div className="flex justify-around items-center overflow-x-scroll">
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </section>
     );
}
 
export default Events;