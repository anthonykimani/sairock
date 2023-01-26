const BookBar = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-3xl font-poppins my-5">Book Rooms, Conference Halls, Beach Fronts from the comfort of your phone</h1>
      <form className="flex justify-around items-center h-[100px] p-2">
        <div className="flex flex-col">
          <select name="book-bar" id="" className="w-[300px] p-3 border border-[#cbd5e1] rounded-md font-poppins">
            <option value="room">Room</option>
            <option value="meeting">Meetings</option>
            <option value="dining">Dining</option>
            <option value="event">Events</option>
          </select>
        </div>
        <div>
          <input type="date" name="" id="" className="w-[300px] p-3 border border-[#cbd5e1] rounded-md font-poppins" />
          <input type="date" name="" id="" className="w-[300px] p-3 border border-[#cbd5e1] rounded-md font-poppins" />
        </div>
        <div>
          <input type="number" name="" id="" placeholder="Number of persons.." className="w-[300px] p-3 border border-[#cbd5e1] rounded-md font-poppins" />
        </div>
      </form>
    </section>
  );
};

export default BookBar;
