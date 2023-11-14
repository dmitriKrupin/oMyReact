import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate: any) => {
    // Здесь вы можете обработать выбранную дату
    console.log("Выбранная дата:", newDate);
    setDate(newDate);
  };

  return (
    <>
      <div className="flex justify-center">Календарь записи на работы</div>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <Calendar
          className="row-span-3"
          onChange={handleDateChange}
          value={date}
          locale="RUS"
        />
        <Button className="col-span-2" color="blue">
          ОСТАВИТЬ ЗАЯВКУ
        </Button>
      </div>
    </>
  );
};

export default Appointment;
