
import BookBar from "./BookBar";
import Navbar from "./Navbar";
import beachPhoto from '/src/images/beach.jpg';

const Home = () => {
    return ( 
        <div>
            <div style={{backgroundImage:`url(${beachPhoto})`}} className="h-screen bg-cover">
                <Navbar />
            </div>
            <BookBar />
        </div>
     );
}
 
export default Home;