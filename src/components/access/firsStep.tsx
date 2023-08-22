import {
  Option,
  Select,
  Avatar,
  Dialog,
  DialogBody,
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
  CardFooter,
  IconButton,
} from "@material-tailwind/react";
import React, { useEffect } from "react";

export default function FirstStep() {
  const [accessManufacture, setAccessManufacture] = React.useState("");
  const [arrayForCard, setArrayForCard] = React.useState({
    id: "",
    name: "",
    model: "",
    manufacture: "",
    readers: "",
    interface: "",
    imageSrc: "",
  });

  useEffect(() => {
    let value;
    value = localStorage.getItem("accessManufacture") || "";
    setAccessManufacture(value);
  }, []);

  const arrayOfAccessManufacture = [
    {
      id: 0,
      name: "Контроллер со встроенным считывателем сетевой RS-485",
      model: "Matrix-II Net",
      manufacture: "Iron Logic",
      readers: "EM-Marin",
      interface: "Dallas Touch Memory",
      imageSrc:
        "https://ironlogic.ru/il_new.nsf/img/ru_matrixii.jpg/$FILE/matrixii.jpg",
    },
    {
      id: 1,
      name: "Контроллер со встроенным считывателем сетевой RS-485",
      model: "CL211.3",
      manufacture: "PERCo",
      readers: "EM-Marin || HID ProxCard II",
      interface: "RS-485 (PERCo)",
      imageSrc:
        "https://www.perco.ru/images/products/readers/IR19/IR19G.v2.jpg",
    },
    {
      id: 2,
      name: "Контроллер сетевой RS-485",
      model: "С-2000-2",
      manufacture: "НПВ Болид",
      readers: "в зависимости от считывателя",
      interface: "Touch Memory || Wiegand",
      imageSrc: "https://bolid.ru/files/341/532/S2000_2_n.krel_thumb7.png",
    },
    {
      id: 3,
      name: "Контроллер сетевой Ethernet",
      model: "CT/L04.2",
      manufacture: "PERCo",
      readers: "в зависимости от считывателя",
      interface: "RS-485 (PERCo) || Weigand",
      imageSrc:
        "https://www.perco.ru/images/products/controllers/ctl04.2_page.jpg",
    },
    {
      id: 4,
      name: "Контроллер сетевой RS-485",
      model: "Gate-8000",
      manufacture: "Равелин",
      readers: "в зависимости от считывателя",
      interface: "Wiegand 26/48",
      imageSrc: "http://skd-gate.ru/images/cms/data/gate/gate-8000_sm.png",
    },
  ];

  function saveInLocalStorage(value: any) {
    setAccessManufacture(value);
    localStorage.setItem("accessManufacture", value);
  }

  const [open, setOpen] = React.useState(false);

  function openDetail(event: any) {
    let id = event.target.value;
    getInfoForCardInput(id);
    setOpen(!open);
  }

  function getInfoForCardInput(id: number) {
    let array = arrayOfAccessManufacture.find(
      (element) => element.id === Number(id)
    );
    setArrayForCard({
      id: String(array?.id),
      name: String(array?.name),
      model: String(array?.model),
      manufacture: String(array?.manufacture),
      readers: String(array?.readers),
      interface: String(array?.interface),
      imageSrc: String(array?.imageSrc),
    });
  }

  return (
    <div className={"flex flex-col justify-center items-center gap-4"}>
      <Select
        label={"Выберите модель контроллера:"}
        value={accessManufacture}
        onChange={(value) => {
          saveInLocalStorage(value);
        }}
      >
        {arrayOfAccessManufacture.map(
          ({ id, name, model, manufacture, imageSrc }) => (
            <Option
              key={id}
              value={manufacture}
              className="group/item flex flex-row justify-between items-center"
            >
              <Avatar variant="circular" alt={model} src={imageSrc} size="xs" />
              {" " + name + " || " + model + " || " + manufacture}
              <span className="group/edit invisible hover:bg-slate-200 group-hover/item:visible">
                <button
                  value={id}
                  onClick={openDetail}
                  className="group-hover/edit:text-blue-500 font-bold"
                >
                  ПОДРОБНЕЕ
                </button>
              </span>
            </Option>
          )
        )}
      </Select>

      <Dialog open={open} handler={() => setOpen(!open)}>
        <IconButton
          color="blue-gray"
          size="sm"
          variant="text"
          onClick={() => setOpen(!open)}
          className="items-right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
        <DialogBody divider className="flex justify-center">
          <Card className="w-96">
            <CardHeader shadow={false} floated={false} className="h-96">
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
                  $95.00
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                {arrayForCard.name}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-500 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                ВЫБРАТЬ
              </Button>
            </CardFooter>
          </Card>
        </DialogBody>
      </Dialog>
    </div>
  );
}
