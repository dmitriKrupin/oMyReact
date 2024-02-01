import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";

export default function Calendar() {
  return (
    <>
      <div className="flex justify-center">
        <iframe
          className="w-[15rem] md:w-[38rem] h-[15rem] md:h-[34rem]"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FMoscow&mode=MONTH&showTitle=0&showCalendars=0&showTz=0&showPrint=0&src=cnUucnVzc2lhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E67C73"
          //style="border-width:0"
          //width="580"
          //height="608"
          //frameborder="0"
          //scrolling="no"
        ></iframe>
      </div>
      <div className="flex justify-center m-1 md:m-3">
        <Button color="white">
          <Link href={"/projects"}>Запланировать работы</Link>
        </Button>
      </div>
    </>
  );
}
