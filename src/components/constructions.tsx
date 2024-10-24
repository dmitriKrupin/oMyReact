import { Carousel, Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
import k7_1 from "@/assets/constructions/k-7_1.jpg";
import k7_2 from "@/assets/constructions/k-7_2.jpg";
import k7_3 from "@/assets/constructions/k-7_3.jpg";
import Image from "next/image";

const examples = [
  {
    name: "Проектирование",
    image: { k7_1 }.k7_1,
    alt: "АПС СОУЭ АППЗ",
    description: "Структурная схема.",
  },
  {
    name: "Проектирование",
    image: { k7_2 }.k7_2,
    alt: "АПС СОУЭ АППЗ",
    description: "Схема расположения оборудования и кабельных трасс.",
  },
  {
    name: "Проектирование",
    image: { k7_3 }.k7_3,
    alt: "АПС СОУЭ АППЗ",
    description: "Кабельный журнал.",
  },
];

export default function Constructions() {
  return (
    <Carousel loop={true}>
      {examples.map((item) => (
        <div key={item.name} className="flex justify-center">
          <div className="relative h-[15rem] w-[15rem] md:h-[38rem] md:w-[38rem]">
            <Image
              src={item.image}
              alt={item.alt}
              className="rounded-3xl max-h-[38rem] h-[15rem] w-[15rem] md:h-[38rem] md:w-[38rem]"
            ></Image>
            <div className="absolute inset-0 bg-black/50 rounded-3xl">
              <div className={"grid grid-rows-3"}>
                
                <Typography
                  variant="h6"
                  color="white"
                  className={"row-span-2 text-center md:text-left m-5 md:m-16"}
                >
                  <div className="text-md md:text-2xl">{item.name}</div>
                  <br></br>
                  <div className="text-xs md:text-xl">{item.alt}</div>
                  <br></br>
                  <div className={"text-xs md:text-base hidden md:flex"}>
                    {item.description}
                  </div>
                </Typography>

                <div className='m-1 md:m-16'>
                  <Button color="white">
                    <Link href={"/pricing"}>Заказать проект</Link>
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
