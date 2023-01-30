const Navbar = () => {
  return (
    <section className="text-white">
      <nav className="flex justify-between items-center">
        <div className="pl-4 py-2">
          <h2 className="font-jost text-3xl font-bold">Sairock</h2>
          <h4 className="font-poppins">Beach Hotel & Spa</h4>
        </div>

        <ul className="flex md:hidden flex-col font-poppins font-bold">
          <li className="px-3">Accomodations</li>
          <li className="px-3">Dining</li>
          <li className="px-3">Meetings & Events</li>
        </ul>

        <ul className="hidden md:flex font-poppins font-bold">
          <li className="px-3">Accomodations</li>
          <li className="px-3">Dining</li>
          <li className="px-3">Meetings & Events</li>
        </ul>

        <div className="hidden md:flex">
          <h4>Weather</h4>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
