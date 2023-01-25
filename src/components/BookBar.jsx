const BookBar = () => {
  return (
    <section>
      <form>
        <div>
          <label htmlFor="book-bar"></label>
          <select name="book-bar" id="">
            <option value="room">Room</option>
            <option value="meeting">Meetings</option>
            <option value="dining">Dining</option>
            <option value="event">Events</option>
          </select>
        </div>
        <div>
          <input type="date" name="" id="" />
          <input type="date" name="" id="" />
        </div>
        <div>
          <input type="number" name="" id="" />
        </div>
      </form>
    </section>
  );
};

export default BookBar;
