import { Carousel, Typography } from "@material-tailwind/react";
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

const reviews = [
  {
    name: "Кокколевская 7",
    image: { Img01 }.Img01,
    alt: "АПС СОУЭ АППЗ СОТ СКС",
  },
  {
    name: "Гороховая 47",
    image: { Img02 }.Img02,
    alt: "АСДУ",
  },
  {
    name: "Туристская 26",
    image: { Img03 }.Img03,
    alt: "СОТ СКС",
  },
  {
    name: "Фаворского 7",
    image: { Img04 }.Img04,
    alt: "СКУД СКС РАСЦО РФ",
  },
  {
    name: "Комендантский 69",
    image: { Img05 }.Img05,
    alt: "СКУД РАСЦО РФ",
  },
  {
    name: "Луначарского 60",
    image: { Img06 }.Img06,
    alt: "СОТ СКС",
  },
  {
    name: "Маршала Захарова 58",
    image: { Img07 }.Img07,
    alt: "РАСЦО РФ",
  },
  {
    name: "Абрамова 21",
    image: { Img08 }.Img08,
    alt: "СОТ СКС",
  },
];
export default function AllPhotoProjects() {
  return (
    <Carousel loop={true}>
      {reviews.map((item) => (
        <div key={item.name}>
          <Image
            src={item.image}
            alt={item.alt}
            fill={true}
            className="rounded-3xl max-h-[38rem] h-56"
            placeholder="blur"
          ></Image>
          <div className="absolute inset-0 bg-black/50 rounded-3xl">
            <div className={"absolute text-center inset-x-0 bottom-10"}>
              <div className="flex justify-center">
                <button className={"btn-secondary"}>
                  <Link href={"/projects"}>{item.name}</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
