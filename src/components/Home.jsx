
import Navbar from "./Navbar";
import beachPhoto from '/src/images/beach.jpg';

const Home = () => {
    return ( 
        <div style={{backgroundImage:`url(${beachPhoto})`}} className="h-screen bg-cover">
            <Navbar />
        </div>
     );
}
 
export default Home;