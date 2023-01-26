import beachPhoto from "/src/images/beach.jpg";

const DailySchedule = () => {
  return (
    <section className="h-screen bg-cover bg-blue-600 bg-opacity-25 flex flex-col items-center">
      <h1 className="font-jost text-5xl">Sairock</h1>
      <ul className="flex p-3 font-poppins font-bold ">
        <li className="px-2">Morning</li>
        <li className="px-2">Afternoon</li>
        <li className="px-2">Evening</li>
        <li className="px-2">Late Night</li>
      </ul>
      
    </section>
  );
};

export default DailySchedule;
