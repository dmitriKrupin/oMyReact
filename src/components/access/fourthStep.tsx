import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dialog,
  Select,
  Option,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

export default function FourthStep() {
  const [lock, setLock] = useState({
    lockInfo: {
      id: "",
      name: "",
      model: "",
      manufacture: "",
      hold: "",
      sensore: "",
      imageSrc: "",
      price: "",
    },
    statuses: {
      /*<li>Тип двери: деревянная офисная, железная входная</li>
      <li>Электромеханический или электромагнитный</li>
      <li>Врезной или накладной</li>
      <li>Масса удержания замка</li>
      <li>Замок со встроенным датчиком Холла и положения двери или без</li>*/
      typeOfDoor: "",
      typeOfLock: "",
      mortiseOrInvoice: "",
      hold: "",
      sensores: "",
    },
  });
  const [open, setOpen] = React.useState(false);
  const [arrayForCard, setArrayForCard] = React.useState({
    id: "",
    name: "",
    model: "",
    typeOfDoor: "",
    typeOfLock: "",
    color: "",
    manufacture: "",
    hold: "",
    sensore: "",
    imageSrc: "",
    price: "",
  });

  const arrayOfLocks = [
    {
      id: 0,
      name: "Замок электромеханический накладной",
      typeOfDoor: "универсальный",
      typeOfLock: "накладной",
      color: "матовый серый",
      model: "JL-11P",
      manufacture: "J-Lock ",
      hold: "не определена",
      sensore: "нет",
      imageSrc:
        "https://www.tinko.ru/upload/resize_cache/iblock/4f2/300_300_140cd750bba9870f18aada2478b24840a/ry68cgylr1azggcggo6rnh0aiar6nheo.jpeg",
      price: "1 590",
    },
    {
      id: 1,
      name: "Замок электромагнитный накладной",
      model: "SL-200",
      typeOfDoor: "внутренняя",
      typeOfLock: "накладной",
      color: "серебро",
      manufacture: "Soca",
      hold: "300 кг",
      sensore: "да",
      imageSrc:
        "https://www.telecamera.ru/upload/iblock/7a1/e0109678_8e1f_11e7_8277_606dc75d3bf0_0c0c1b33_93af_11e7_8277_606dc75d3bf0.jpeg",
      price: "4 074",
    },
    {
      id: 2,
      name: "Замок электромеханический врезной",
      model: "SL-100M",
      typeOfDoor: "внутренняя",
      typeOfLock: "врезной",
      color: "серебро",
      manufacture: "Soca",
      hold: "1200 кг",
      sensore: "да",
      imageSrc:
        "https://www.telecamera.ru/upload/iblock/8c5/11f1bcb3_8e58_11e7_8277_606dc75d3bf0_56c26236_9f72_11e7_8278_606dc75d3bf0.jpeg",
      price: "4 515",
    },
    {
      id: 3,
      name: "Замок электромагнитный накладной",
      model: "ST-EL180ML",
      typeOfDoor: "внутренняя",
      typeOfLock: "накладной",
      color: "серебро",
      manufacture: "SMARTEC",
      hold: "180 кг",
      sensore: "да",
      imageSrc:
        "https://images.cdn.tetravaal.org/iblock/9da/9daca70f420eec1972e44ac15ecf4e4f/453109de_fc73_11e4_f79a_93ca107c9c45_453109f2_fc73_11e4_f79a_93ca107c9c45.jpeg",
      price: "2 259",
    },
    {
      id: 4,
      name: "Электромагнитный замок накладной",
      model: "ML-350ALN",
      typeOfDoor: "уличная",
      typeOfLock: "накладной",
      color: "серебро",
      manufacture: "ACCORDTEC",
      hold: "350 кг",
      sensore: "да",
      imageSrc:
        "https://images.cdn.tetravaal.org/iblock/d77/d77bc5276b03e1e72d8447eaa66d644f/ed5951ff_e25f_11ec_a867_7cd30a2bddbd_98850c1c_e293_11ec_a867_7cd30a2bddbd.jpeg",
      price: "3 519",
    },
  ];

  useEffect(() => {
    let value;
    try {
      value = JSON.parse(localStorage.getItem("lock") || "");
      setLock(value);
    } catch (error: any) {
      console.log(error);
    }
  }, []);

  function openDetailById(event: any) {
    let id = event.target.id;
    getInfoForCardInput("findById", id);
    setOpen(!open);
  }

  function openDetailByAvatar(event: any) {
    let model = event.target.alt;
    getInfoForCardInput("findByAvatar", model);
    setOpen(!open);
  }

  function getInfoForCardInput(tag: string, infoFromEvent: string) {
    let array;
    if (tag === "findByAvatar") {
      array = arrayOfLocks.find((element) => element.model === infoFromEvent);
    }
    if (tag === "findById") {
      array = arrayOfLocks.find(
        (element) => element.id === Number(infoFromEvent)
      );
    }
    setArrayForCard({
      id: String(array?.id),
      name: String(array?.name),
      model: String(array?.model),
      typeOfDoor: String(array?.typeOfDoor),
      typeOfLock: String(array?.typeOfLock),
      color: String(array?.color),
      manufacture: String(array?.manufacture),
      hold: String(array?.hold),
      sensore: String(array?.sensore),
      imageSrc: String(array?.imageSrc),
      price: String(array?.price),
    });
  }

  function lockChange(value: any) {
    setLock({
      ...lock,
      lockInfo: {
        ...lock.lockInfo,
        model: value,
      },
    });
    localStorage.setItem(
      "lock",
      JSON.stringify({
        ...lock,
        lockInfo: {
          ...lock.lockInfo,
          model: value,
        },
      })
    );
  }

  return (
    <>
      <div className="flex flex-col gap-6 w-full">
        <Select
          label={"Выберите модель замка:"}
          value={lock.lockInfo.model}
          onChange={(value) => lockChange(value)}
          color="blue"
        >
          {arrayOfLocks.map(({ id, model, name, manufacture, imageSrc }) => (
            <Option
              key={id}
              value={model}
              className="group/item flex flex-row justify-between items-center"
            >
              <Avatar
                variant="circular"
                alt={model}
                src={imageSrc}
                size="xs"
                onClick={openDetailByAvatar}
              />
              {" " + model + " " + manufacture}
              <span className="group/edit invisible hover:bg-slate-200 group-hover/item:visible">
                <button className="group-hover/edit:text-blue-500 font-bold align-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    id={String(id)}
                    onClick={openDetailById}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      id={String(id)}
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                </button>
              </span>
            </Option>
          ))}
        </Select>

        <Dialog
          open={open}
          handler={() => setOpen(!open)}
          className="flex justify-center"
          size="sm"
        >
          <Card className="w-96">
            <CardHeader shadow={true} floated={false} className="h-96">
              <img
                src={arrayForCard.imageSrc}
                alt={arrayForCard.model}
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  {arrayForCard.model}
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  ₽ {arrayForCard.price}.00
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                {arrayForCard.name} {arrayForCard.manufacture}{" "}
                {arrayForCard.color} Сила удержания: {arrayForCard.hold} Тип
                замка: {arrayForCard.typeOfLock} Датчик холла и состояния двери:{" "}
                {arrayForCard.sensore}{" "}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-500 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                onClick={() => setOpen(!open)}
              >
                ВЕРНУТЬСЯ К ВЫБОРУ
              </Button>
            </CardFooter>
          </Card>
        </Dialog>
      </div>
    </>
  );
}
