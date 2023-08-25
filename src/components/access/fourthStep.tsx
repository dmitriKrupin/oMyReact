import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Dialog,
  DialogBody,
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
    manufacture: "",
    hold: "",
    sensore: "",
    imageSrc: "",
    price: "",
  });

  const arrayOfLocks = [
    {
      id: "0",
      name: "Замок электромеханический накладной",
      typeOfDoor: "универсальный",
      typeOfLock: "накладной",
      color: "матовый серый",
      model: "JL-11P",
      manufacture: "J-Lock ",
      hold: "удержание защелкой",
      sensore: "нет",
      imageSrc:
        "https://www.tinko.ru/upload/resize_cache/iblock/4f2/300_300_140cd750bba9870f18aada2478b24840a/ry68cgylr1azggcggo6rnh0aiar6nheo.jpeg",
      price: "",
    },
    {
      id: "1",
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
    },
    {
      id: "2",
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
    },
    {
      id: "3",
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
    },
    {
      id: "4",
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

  return (
    <>
      <div
        className={"grid grid-rows-4 md:grid-rows-6 grid-flow-col gap-4 p-0"}
      >
        <Typography
          color="blue-gray"
          className="font-medium flex flex-row items-center justify-center"
        >
          Выберите тип двери:
          <Checkbox
            label="Деревянная"
            //checked={accessEntranceGroup.statuses.readerCheckbox}
            //onChange={readerCheckboxChange}
          />
          <Checkbox
            label="Железная"
            //checked={accessEntranceGroup.statuses.readerCheckbox}
            //onChange={readerCheckboxChange}
          />
          <Checkbox
            label="Стеклянная"
            //checked={accessEntranceGroup.statuses.readerCheckbox}
            //onChange={readerCheckboxChange}
          />
        </Typography>

        <Typography
          color="blue-gray"
          className="font-medium flex flex-row items-center justify-center"
        >
          Тип замка:
          <Checkbox
            label="Электромеханический"
            //checked={accessEntranceGroup.statuses.readerCheckbox}
            //onChange={readerCheckboxChange}
          />
          <Checkbox
            label="Электромагнитный"
            //checked={accessEntranceGroup.statuses.readerCheckbox}
            //onChange={readerCheckboxChange}
          />
        </Typography>

        <Typography
          color="blue-gray"
          className="font-medium flex flex-row items-center justify-center"
        >
          Способ установки:
          <Checkbox
            label="Врезной"
            //checked={accessEntranceGroup.statuses.readerCheckbox}
            //onChange={readerCheckboxChange}
          />
          <Checkbox
            label="Накладной"
            //checked={accessEntranceGroup.statuses.readerCheckbox}
            //onChange={readerCheckboxChange}
          />
        </Typography>

        <Typography
          color="blue-gray"
          className="font-medium flex flex-row items-center justify-center"
        >
          Масса удержания замка:
          <Checkbox
            label="Деревянная"
            //checked={accessEntranceGroup.statuses.readerCheckbox}
            //onChange={readerCheckboxChange}
          />
          <Checkbox
            label="Железная"
            //checked={accessEntranceGroup.statuses.readerCheckbox}
            //onChange={readerCheckboxChange}
          />
          <Checkbox
            label="Стеклянная"
            //checked={accessEntranceGroup.statuses.readerCheckbox}
            //onChange={readerCheckboxChange}
          />
        </Typography>

        <Typography
          color="blue-gray"
          className="font-medium flex flex-row items-center justify-center"
        >
          Замок со встроенным датчиком Холла и положения двери или без:
          <Checkbox
            label="Деревянная"
            //checked={accessEntranceGroup.statuses.readerCheckbox}
            //onChange={readerCheckboxChange}
          />
          <Checkbox
            label="Железная"
            //checked={accessEntranceGroup.statuses.readerCheckbox}
            //onChange={readerCheckboxChange}
          />
          <Checkbox
            label="Стеклянная"
            //checked={accessEntranceGroup.statuses.readerCheckbox}
            //onChange={readerCheckboxChange}
          />
        </Typography>

        <div className="flex flex-col gap-6">
          <Select
            label={"Выберите модель замка:"}
            //value={accessEntranceGroup.data.reader}
            //onChange={(value) => readerChange(value)}
            //disabled={!accessEntranceGroup.statuses.readerCheckbox}
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
                  //onClick={openDetailByAvatar}
                />
                {" " + name + " " + model + " " + manufacture}
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
                      //onClick={openDetailById}
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

          <Dialog open={open} handler={() => setOpen(!open)}>
            <DialogBody divider className="flex justify-center">
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
                    Поддерживаемые интерфейсы контроллеров:{" "}
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
            </DialogBody>
          </Dialog>
        </div>
      </div>
    </>
  );
}
