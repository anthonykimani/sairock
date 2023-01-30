
import BookBar from "./BookBar";
import DailySchedule from "./DailySchedule";
import Events from "./Events";
import Navbar from "./Navbar";
import beachPhoto from '/src/images/beach.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    return ( 
        <div>
            <div style={{backgroundImage:`url(${beachPhoto})`}} className="h-screen bg-cover">
                <Navbar />
            </div>
            {/* <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={true} >
                <div>
                    <img src={beachPhoto} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={beachPhoto} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={beachPhoto} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
            <BookBar />
            <DailySchedule />
            <Events />
        </div>
     );
}
 
export default Home;