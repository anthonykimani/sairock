
import BookBar from "./BookBar";
import DailySchedule from "./DailySchedule";
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
        </div>
     );
}
 
export default Home;