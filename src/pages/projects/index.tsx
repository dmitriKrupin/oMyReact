import Layout from "../../components/layout";
import Head from "next/head";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
  Dialog,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import p65 from "../../assets/projects/p-65.jpg";
import d23 from "../../assets/projects/d-23.jpg";
import d25 from "../../assets/projects/d-25.jpg";
import l60 from "../../assets/projects/l-60.jpg";
import k7 from "../../assets/projects/k-7.jpg";
import t26 from "../../assets/projects/t-26.jpg";
import f7 from "../../assets/projects/f-7.jpg";
import k69 from "../../assets/projects/k-69.jpg";
import z58 from "../../assets/projects/z-58.jpg";
import g47 from "../../assets/projects/g-47.jpg";
import a21 from "../../assets/projects/a-21.jpg";
import a4 from "../../assets/projects/a-4.webp";
import React, { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 0,
    image: { g47 }.g47,
    alt: "Настройка диспетчеризации",
    service: "Диспетчеризация.",
    object: "Гостиница",
    adress: "г. СПб, ул. Гороховая, д. 47",
  },
  {
    id: 1,
    image: { k69 }.k69,
    alt: "Настройка СКУД, РАСЦО, ПВ",
    service: "Контроль доступа, РАСЦО, ПВ.",
    object: "ГБОУ школа № 165",
    adress: "г. СПб, пр. Коммендантский, д. 69",
  },
  {
    id: 2,
    image: { f7 }.f7,
    alt: "Настройка СКУД, СКС, РАСЦО, ПВ",
    service: "Контроль доступа, СКС, РАСЦО, ПВ.",
    object: "СПБ ГБУ СШОР ПО ХОККЕЮ (ДИНАМО-ЮНИОР)",
    adress: "г. СПб, ул. Фаворского, д. 7",
  },
  {
    id: 3,
    image: { z58 }.z58,
    alt: "Настройка РАСЦО, ПВ",
    service: "РАСЦО, ПВ.",
    object: "Лицей №369",
    adress: "г. СПб, пр. Маршала Захарова, д. 58",
  },
  {
    id: 4,
    image: { t26 }.t26,
    alt: "Монтаж видеонаблюдения и СКС",
    service: "Видеонаблюдение.",
    object: "ТРК",
    adress: "г. СПб, ул. Туристская, д. 26",
  },
  {
    id: 5,
    image: { k7 }.k7,
    alt: "Проектирование, монтаж и настройка систем АПС СОУЭ",
    service: "АПС СОУЭ.",
    object: "ТРК",
    adress: "г. СПб, ул. Кокколевская, д. 7",
  },
  {
    id: 6,
    image: { l60 }.l60,
    alt: "Монтаж видеонаблюдения и СКС",
    service: "Видеонаблюдение.",
    object: "Магазин канцтоваров",
    adress: "г. СПб, пр. Луначарского, д. 60",
  },
  {
    id: 7,
    image: { p65 }.p65,
    alt: "Монтаж видеонаблюдения и СКС",
    service: "Видеонаблюдение.",
    object: "Продуктовый магазин",
    adress: "г. СПб, ул. Парашютная, д. 65",
  },
  {
    id: 8,
    image: { d23 }.d23,
    alt: "Монтаж видеонаблюдения и СКС",
    service: "Видеонаблюдение.",
    object: "Продуктовый магазин",
    adress: "г. СПб, ул. Михаила Дудина, д. 23",
  },
  {
    id: 9,
    image: { d25 }.d25,
    alt: "Монтаж видеонаблюдения и СКС",
    service: "Видеонаблюдение.",
    object: "Продуктовый магазин",
    adress: "г. СПб, ул. Михаила Дудина, д. 25",
  },
  {
    id: 10,
    image: { a4 }.a4,
    alt: "Монтаж видеонаблюдения и СКС",
    service: "Видеонаблюдение.",
    object: "Салон красоты",
    adress: "г. СПб, ул. Федора Абрамова, д. 4",
  },
  {
    id: 11,
    image: { a21 }.a21,
    alt: "Монтаж видеонаблюдения и СКС",
    service: "Видеонаблюдение.",
    object: "Салон красоты",
    adress: "г. СПб, ул. Федора Абрамова, д. 21",
  },
];

export default function ProjectsPage() {
  const [open, setOpen] = useState(false);

  const [arrayForCard, setArrayForCard] = React.useState({
    image: { g47 }.g47,
    alt: "",
    service: "",
    object: "",
    adress: "",
  });

  function getInfoForCardInput(event: any) {
    console.log(event?.target.id);
    setOpen(!open);
    let array = projects.find(
      (element) => element.id === Number(event?.target.id)
    );
    setArrayForCard({
      image: array?.image,
      alt: String(array?.alt),
      service: String(array?.service),
      object: String(array?.object),
      adress: String(array?.adress),
    });
  }

  return (
    <Layout home>
      <Head>
        <title>{"K-12.PRO | Выполненные проекты"}</title>
      </Head>

      <div>
        <Card className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {projects.map((item) => (
            <List key={item.image.src}>
              <ListItem>
                <label
                  id={String(item.id)}
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                  onClick={getInfoForCardInput}
                >
                  <ListItemPrefix>
                    <Avatar
                      id={String(item.id)}
                      variant="circular"
                      alt={item.alt}
                      src={item.image.src}
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography
                      id={String(item.id)}
                      variant="h6"
                      color="blue-gray"
                      className="font-bold text-xs lg:text-sm"
                    >
                      {item.service}
                    </Typography>
                    <Typography
                      id={String(item.id)}
                      variant="small"
                      color="gray"
                      className="font-normal text-xs lg:text-sm"
                    >
                      {item.adress}
                    </Typography>
                  </div>
                </label>
              </ListItem>
            </List>
          ))}
        </Card>
      </div>

      <Dialog
        open={open}
        handler={() => setOpen(!open)}
        className="flex justify-center"
        size="sm"
      >
        <Card className="w-96">
          <CardHeader shadow={true} floated={false} className="h-96">
            <Image
              src={arrayForCard.image}
              alt={arrayForCard.alt}
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {arrayForCard.service}
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              {arrayForCard.object}
              <br />
              {arrayForCard.adress}
              <br />
              {arrayForCard.alt}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-500 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              onClick={() => setOpen(!open)}
            >
              ВЕРНУТЬСЯ К ПРОЕКТАМ
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </Layout>
  );
}
