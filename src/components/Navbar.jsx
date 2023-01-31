import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log("clicked");
    setShowMenu(!showMenu);
  };

  return (
    <div className=" p-2">
      <div className="flex justify-around items-center text-white">
        <div className="min-w-[200px] w-[100%] lg:w-[20%] ml-0 md:ml-10">
          <h2 className="font-jost text-3xl font-bold">Sairock</h2>
          <h4 className="font-poppins">Beach Hotel & Spa</h4>
        </div>
        <div className="block md:hidden">
          <i class="bx bx-menu bx-md text-white" onClick={toggleMenu}></i>
        </div>

        <div
          className="absolute top-0 md:block bg-blue-900 p-5 md:p-0 min-w-[200px] w-[100%] min-h-[800px] h-[100%]  "
          style={showMenu ? { display: "block" } : { display: "none" }}
        >
          <i class="bx bx-x bx-md text-white" onClick={toggleMenu}></i>
          <ul className=" flex flex-col md:flex-row justify-around font-work text-base md:text-xl text-white font-extrabold w-auto ">
            <Link to={"/"}>
              <li className="my-2 mx-2 w-[100%] min-w-[100px] ">Home</li>
            </Link>
            <Link to={"/accomodations"}>
              <li className="my-2 mx-2 w-[100%] min-w-[100px] ">
                Accomodations
              </li>
            </Link>
            <Link to={"/dining"}>
              <li className="my-2 mx-1 w-[100%] min-w-[100px] "> Dining</li>
            </Link>
            <Link to={"/meetings"}>
              <li className="my-2 mx-2 w-[100%] min-w-[100px] ">
                Meetings & Events
              </li>
            </Link>
            <Link to={"/contact"}>
              <li className="my-2 mx-2 w-[100%] min-w-[100px] ">Contact Us</li>
            </Link>
          </ul>
        </div>

        <div className="hidden md:block">
          <ul className=" flex flex-col md:flex-row justify-around font-work text-base md:text-xl text-white font-extrabold w-auto">
            <Link to={"/"}>
              <li className="mx-2 w-[100%] min-w-[100px] ">Home</li>
            </Link>
            <Link to={"/accomodations"}>
              <li className="mx-2 w-[100%] min-w-[100px] ">Accomodations</li>
            </Link>
            <Link to={"/dining"}>
              <li className="mx-2 w-[100%] min-w-[100px] ">Dining</li>
            </Link>
            <Link to={"/meetings"}>
              <li className="mx-2 w-[100%] min-w-[100px] ">
                Meetings & Events
              </li>
            </Link>
            <Link to={"/contact"}>
              <li className="mx-2 w-[100%] min-w-[100px] ">Contact Us</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
