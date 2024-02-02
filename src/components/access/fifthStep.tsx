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

export default function FifthStep() {
  const [power, setPower] = useState({
    powerInfo: {
      id: "",
      name: "",
      material: "",
      model: "",
      manufacture: "",
      interface: "",
      imageSrc: "",
      price: "",
    },
    high: "",
  });

  const [open, setOpen] = React.useState(false);

  const [arrayForCard, setArrayForCard] = React.useState({
    id: "",
    name: "",
    material: "",
    model: "",
    manufacture: "",
    interface: "",
    imageSrc: "",
    price: "",
  });

  const arrayOfPower = [
    {
      id: 0,
      name: "Источник бесперебойного питания",
      material: "Пластиковый",
      model: "ББП-5.1 ПК",
      manufacture: "J-Power",
      interface: "не поддерживается",
      imageSrc:
        "https://images.cdn.tetravaal.org/iblock/b13/b13b429f34d1aec30d290b52c0b72bdd/668d7fc8_b651_11e2_589c_e79895fa54c9_668d7ff0_b651_11e2_589c_e79895fa54c9.jpeg",
      price: "1 595",
    },
    {
      id: 1,
      name: "Источник питания резервированный",
      material: "Металлический корпус",
      model: "РИП-12 исп.56",
      interface: "RS-485 ИСО ОРИОН",
      manufacture: "Болид",
      imageSrc:
        "https://www.tinko.ru/upload/iblock/dc4/f9ph85f1sip0ep0liitf1qktza3xaeba.png",
      price: "12 373",
    },
    {
      id: 2,
      name: "Источник питания резервированный",
      material: "Металлический корпус",
      model: "РИП-12 исп.60",
      interface: "RS-485 Modbus RTU",
      manufacture: "Болид",
      imageSrc:
        "https://www.tinko.ru/upload/iblock/33c/o4dzdsyg16rwcdunzod65dxmtl5rgifl.jpeg",
      price: "9 048",
    },
    {
      id: 3,
      name: "Источник питания резервированный",
      material: "Металлический корпус",
      model: "РИП-12 исп.17",
      interface: "Не поддерживается",
      manufacture: "Болид",
      imageSrc: "https://bolid.ru/files/369/562/rip_12_17_thumb7.png",
      price: "9 838",
    },
  ];

  const arrayOfAccessHigh = [
    { id: 0, high: "до 3-х метров" },
    { id: 1, high: "от 3-х до 5-ти метров" },
    { id: 2, high: "от 5-ти до 9-ти метров" },
  ];

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
      array = arrayOfPower.find((element) => element.model === infoFromEvent);
    }
    if (tag === "findById") {
      array = arrayOfPower.find(
        (element) => element.id === Number(infoFromEvent)
      );
    }
    setArrayForCard({
      id: String(array?.id),
      name: String(array?.name),
      material: String(array?.material),
      model: String(array?.model),
      manufacture: String(array?.manufacture),
      interface: String(array?.interface),
      imageSrc: String(array?.imageSrc),
      price: String(array?.price),
    });
  }

  function powerChange(value: any) {
    setPower({
      ...power,
      powerInfo: {
        ...power.powerInfo,
        model: value,
      },
    });
    localStorage.setItem(
      "power",
      JSON.stringify({
        ...power,
        powerInfo: {
          ...power.powerInfo,
          model: value,
        },
      })
    );
  }

  function highChange(value: any) {
    setPower({
      ...power,
      high: value,
    });
    localStorage.setItem(
      "power",
      JSON.stringify({
        ...power,
        high: value,
      })
    );
  }

  useEffect(() => {
    let value;
    try {
      value = JSON.parse(localStorage.getItem("power") || "");
      setPower(value);
    } catch (error: any) {
      console.log(error);
    }
  }, []);

  return (
    <div className={"flex flex-col justify-center items-center gap-4 w-full"}>
      <Select
        label={"Выберите модель блока питания:"}
        value={power.powerInfo.model}
        onChange={(value) => powerChange(value)}
        color="blue"
      >
        {arrayOfPower.map(({ id, model, name, manufacture, imageSrc }) => (
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

      <Select
        label={"Выберите высоту установки блока питания:"}
        value={power.high}
        onChange={(value) => highChange(value)}
        color="blue"
      >
        {arrayOfAccessHigh.map(({ id, high }) => (
          <Option
            key={id}
            value={high}
            className="group/item flex flex-row justify-between items-center"
          >
            {" " + high}
          </Option>
        ))}
      </Select>
    </div>
  );
}
