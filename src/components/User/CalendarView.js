import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarView() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <h1>Calendar View</h1>
      <Calendar value={selectedDate} onChange={setSelectedDate} />
      <p>Selected Date: {selectedDate.toDateString()}</p>
    </div>
  );
}

export default CalendarView;
