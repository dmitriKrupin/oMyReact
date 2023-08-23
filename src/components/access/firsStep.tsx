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
} from "@material-tailwind/react";
import React, { useEffect } from "react";

export default function FirstStep() {
  const [accessController, setAccessController] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [arrayForCard, setArrayForCard] = React.useState({
    id: "",
    name: "",
    model: "",
    manufacture: "",
    readers: "",
    interface: "",
    imageSrc: "",
    price: "",
  });

  useEffect(() => {
    let value;
    value = localStorage.getItem("accessController") || "";
    setAccessController(value);
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
      price: "3 590",
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
      price: "10 054",
    },
    {
      id: 2,
      name: "Контроллер сетевой RS-485",
      model: "С-2000-2",
      manufacture: "НПВ Болид",
      readers: "в зависимости от считывателя",
      interface: "Touch Memory || Wiegand",
      imageSrc: "https://bolid.ru/files/341/532/S2000_2_n.krel_thumb7.png",
      price: "5 507",
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
      price: "29 312",
    },
    {
      id: 4,
      name: "Контроллер сетевой RS-485",
      model: "Gate-8000",
      manufacture: "Равелин",
      readers: "в зависимости от считывателя",
      interface: "Wiegand 26/48",
      imageSrc: "http://skd-gate.ru/images/cms/data/gate/gate-8000_sm.png",
      price: "9 320",
    },
  ];

  function saveInLocalStorage(value: any) {
    setAccessController(value);
    localStorage.setItem("accessController", value);
  }

  function openDetailByAvatar(event: any) {
    let model = event.target.alt;
    getInfoForCardInput("findByAvatar", model);
    setOpen(!open);
  }

  function openDetailById(event: any) {
    let id = event.target.id;
    getInfoForCardInput("findById", id);
    setOpen(!open);
  }

  function getInfoForCardInput(tag: string, infoFromEvent: string) {
    let array;
    if (tag === "findByAvatar") {
      array = arrayOfAccessManufacture.find(
        (element) => element.model === infoFromEvent
      );
    }
    if (tag === "findById") {
      array = arrayOfAccessManufacture.find(
        (element) => element.id === Number(infoFromEvent)
      );
    }
    setArrayForCard({
      id: String(array?.id),
      name: String(array?.name),
      model: String(array?.model),
      manufacture: String(array?.manufacture),
      readers: String(array?.readers),
      interface: String(array?.interface),
      imageSrc: String(array?.imageSrc),
      price: String(array?.price),
    });
  }

  return (
    <div className={"flex flex-col justify-center items-center gap-4"}>
      <Select
        label={"Выберите модель контроллера:"}
        value={accessController}
        onChange={(value) => {
          saveInLocalStorage(value);
        }}
      >
        {arrayOfAccessManufacture.map(
          ({ id, name, model, manufacture, imageSrc }) => (
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
              {" " + name + " " + model + " " + manufacture}
              <span className="group/edit invisible hover:bg-slate-200 group-hover/item:visible">
                <button
                  className="group-hover/edit:text-blue-500 font-bold align-middle"
                  value={id}
                  onClick={openDetailById}
                >
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
          )
        )}
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
                {arrayForCard.name} {arrayForCard.manufacture}
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
  );
}
