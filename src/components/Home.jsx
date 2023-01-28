
import BookBar from "./BookBar";
import DailySchedule from "./DailySchedule";
import Events from "./Events";
import Navbar from "./Navbar";
import beachPhoto from '/src/images/beach.jpg';

const Home = () => {
    return ( 
        <div>
            <div style={{backgroundImage:`url(${beachPhoto})`}} className="h-screen bg-cover">
                <Navbar />
            </div>
            <BookBar />
            <DailySchedule />
            <Events />
        </div>
     );
}
 
export default Home;