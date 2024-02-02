import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
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
      <div className="flex flex-col justify-center rounded-3xl h-[15rem] w-[15rem] md:h-[38rem] md:w-[38rem]">
        <Calendar
          className=""
          onChange={
            handleDateChange
            //console.log(returnValue);
          }
          value={date}
          locale="RUS"
          returnValue="range"
          selectRange={true}
        />
        <div className="flex justify-center m-1 md:m-16">
          <Button color="white">
            <Link href={"/authorizations"}>Запланировать работы</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Appointment;
