const BookBar = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-2xl font-work my-5">Book Rooms, Conference Halls, Beach Fronts from the comfort of your phone</h1>
      <form className="flex flex-col sm:flex-row justify-around items-center h-auto p-2">
        <div className="flex flex-col">
          <select name="book-bar" id="" className="w-[200px] p-3 border border-[#cbd5e1] rounded-md font-poppins">
            <option value="room">Room</option>
            <option value="meeting">Meetings</option>
            <option value="dining">Dining</option>
            <option value="event">Events</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row ">
          <input type="date" name="" id="" className="w-[200px] p-3 border border-[#cbd5e1] rounded-md font-poppins" />
          <input type="date" name="" id="" className="w-[200px] p-3 border border-[#cbd5e1] rounded-md font-poppins" />
        </div>
        <div>
          <input type="number" name="" id="" placeholder="Number of persons.." className="w-[200px] p-3 border border-[#cbd5e1] rounded-md font-poppins" />
        </div>
      </form>
    </section>
  );
};

export default BookBar;
