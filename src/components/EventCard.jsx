import beachPhoto from '/src/images/beach.jpg';

const EventCard = () => {
    return ( 
        <section className='border-2 border-gray-400 p-3 w-[320px] flex flex-col items-center font-poppins'>
            <img src={beachPhoto} alt="" className='w-[300px] h-[350px] object-cover ' />
            <h4 className=' p-3'>A Day Beside the Beach</h4>
            <div className='flex font-bold'>
                <button className='border border-blue-500 rounded-md text-blue-500 py-3 px-5 '>Learn More</button>
                <button className='bg-blue-500 rounded-md text-white  py-3 px-5 mx-2'>Book Now</button>
            </div>
        </section>
     ); 
}
 
export default EventCard;