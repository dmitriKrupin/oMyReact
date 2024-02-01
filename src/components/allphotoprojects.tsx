import { Button, Carousel, Typography } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import Img01 from "@/assets/projects/k-7.jpg";
import Img02 from "@/assets/projects/g-47.jpg";
import Img03 from "@/assets/projects/t-26.jpg";
import Img04 from "@/assets/projects/f-7.jpg";
import Img05 from "@/assets/projects/k-69.jpg";
import Img06 from "@/assets/projects/l-60.jpg";
import Img07 from "@/assets/projects/z-58.jpg";
import Img08 from "@/assets/projects/a-21.jpg";
import Mono from "@/assets/projects/l-56.jpg";

const reviews = [
  {
    name: "В.О. 11 Линия 56",
    image: { Mono }.Mono,
    alt: "СКУД Домофония",
    description:
      "Контроль доступа НВП БОЛИД ИСО ОРИОН. Домофония Eltis-5000. Монтаж и пуско-наладочные работы.",
  },
  {
    name: "Кокколевская 7",
    image: { Img01 }.Img01,
    alt: "АПС СОУЭ АППЗ СОТ СКС",
    description:
      "Противопожарная система НВП БОЛИД ИСО ОРИОН. Видеонаблюдение HiWatch. Проектирование слаботочных систем. Монтаж и пуско-наладочные работы.",
  },
  {
    name: "Гороховая 47",
    image: { Img02 }.Img02,
    alt: "АСДУ",
    description:
      "Диспетчеризация инженерных систем СДК Кристалл совместно с MasterSCADA 3.X RT32. Пуско-наладочные работы.",
  },
  {
    name: "Туристская 26",
    image: { Img03 }.Img03,
    alt: "АПС СОУЭ АППЗ РАСЦО РФ СОТ",
    description:
      "Противопожарная и охранная система НВП БОЛИД ИСО ОРИОН. Видеонаблюдение Hikvision. Диспетчеризация инженерных систем СДК Кристалл. Проектирование слаботочных систем. Монтаж и пуско-наладочные работы.",
  },
  {
    name: "Фаворского 7",
    image: { Img04 }.Img04,
    alt: "СКУД СКС РАСЦО РФ",
    description:
      "Контроль доступа НВП БОЛИД ИСО ОРИОН. Турникеты PERCO. Шлагбаум CAME. Радиофикация РТС-2000. Система РАСЦО ГОЧС УКБ СГС-22-МЕ. Монтаж и пуско-наладочные работы.",
  },
  {
    name: "Комендантский 69",
    image: { Img05 }.Img05,
    alt: "СКУД РАСЦО РФ",
    description:
      "Контроль доступа НВП БОЛИД ИСО ОРИОН. Турникеты PERCO. Радиофикация РТС-2000. Система РАСЦО ГОЧС УКБ СГС-22-МЕ. Монтаж и пуско-наладочные работы.",
  },
  {
    name: "Луначарского 60",
    image: { Img06 }.Img06,
    alt: "СОТ СКС",
    description:
      "Видеонаблюдение Dahua. Проектирование слаботочных систем. Монтаж и пуско-наладочные работы.",
  },
  {
    name: "Маршала Захарова 58",
    image: { Img07 }.Img07,
    alt: "РАСЦО РФ",
    description:
      "Радиофикация РТС-2000. Система РАСЦО ГОЧС УКБ СГС-22-МЕ. Монтаж и пуско-наладочные работы.",
  },
  {
    name: "Абрамова 21",
    image: { Img08 }.Img08,
    alt: "СОТ СКС",
    description:
      "Видеонаблюдение Dahua. Проектирование слаботочных систем. Монтаж и пуско-наладочные работы.",
  },
];
export default function AllPhotoProjects() {
  return (
    <Carousel loop={true}>
      {reviews.map((item) => (
        <div key={item.name} className="flex justify-center">
          <div className="relative h-[15rem] w-[15rem] md:h-[38rem] md:w-[38rem]">
            <Image
              src={item.image}
              alt={item.alt}
              className="rounded-3xl max-h-[38rem] h-[15rem] w-[15rem] md:h-[38rem] md:w-[38rem]"
            ></Image>
            <div className="absolute inset-0 bg-black/50 rounded-3xl">
              <div className={"absolute text-center inset-x-0 bottom-10"}>
                <Typography
                  variant="h6"
                  color="white"
                  className={"text-center md:text-left m-0 md:m-16"}
                >
                  <div className="text-md md:text-2xl">{item.name}</div>
                  <br></br>
                  <div className="text-xs md:text-xl">{item.alt}</div>
                  <br></br>
                  <div className={"text-xs md:text-base hidden md:flex"}>
                    {item.description}
                  </div>
                </Typography>
                <div className="flex justify-center m-1 md:m-16">
                  <Button color="white">
                    <Link href={"/pricing"}>Заказать работы</Link>
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
