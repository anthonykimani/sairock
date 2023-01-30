import Schedule from "./Schedule";
import beachPhoto from "/src/images/beach.jpg";

const DailySchedule = () => {
  return (
    <div className=" bg-blue-600 bg-opacity-10">
      <section className="bg-cover  flex flex-col items-center justify-center h-auto ">
        <h1 className="font-jost text-5xl">Sairock</h1>
        <ul className="flex p-3 font-poppins font-bold ">
          <li className="px-2">Morning</li>
          <li className="px-2">Afternoon</li>
          <li className="px-2">Evening</li>
          <li className="px-2">Late Night</li>
        </ul>
        <div className="flex flex-col flex-wrap sm:flex-row justify-around items-center mt-10 ">
          <Schedule />
          <Schedule />
          <Schedule />
          <Schedule />
        </div>
      </section>
    </div>
  );
};

export default DailySchedule;
