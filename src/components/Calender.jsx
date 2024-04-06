import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ onSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onSelect(date);
  };

  return (
    <div>
      <h2>Select Date</h2>
      <DatePicker selected={selectedDate} onChange={handleDateChange} inline dropdownMode='select' />
    </div>
  );
};

export default Calendar;



