const Navbar = () => {
  return (
    <section className="border">
      <nav className="flex justify-between items-center">
        <div className="pl-4">
          <h2 className="font-jost text-2xl">Sairock</h2>
          <h4 className="font-poppins">Beach Hotel & Spa</h4>
        </div>
        <ul className="flex font-poppins font-bold">
          <li className="px-3">Accomodations</li>
          <li className="px-3">Dining</li>
          <li className="px-3">Meetings & Events</li>
        </ul>
        <div>
          <h4>Weather</h4>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
