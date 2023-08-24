import {
  Checkbox,
  DialogBody,
  Dialog,
  Avatar,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { data } from "autoprefixer";
import React, { useEffect } from "react";

export default function ThirdStep() {
  const [exitButton, setExitButton] = React.useState("");
  const [exitButtonsGroup, setExitButtonsGroup] = React.useState({
    data: {
      simpleButton: "",
      greenButton: "",
    },
    statuses: {
      readerCheckbox: false,
      buttonEntranceCheckbox: false,
      videoMonitorCheckbox: false,
      codePanelCheckbox: false,
      bioPanelCheckbox: false,
    },
  });

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    let value;
    value = localStorage.getItem("exitButtonsGroup") || "";
    setExitButton(value);
  }, []);

  const [arrayForCard, setArrayForCard] = React.useState({
    id: "",
    name: "",
    model: "",
    manufacture: "",
    imageSrc: "",
    price: "",
  });

  const arrayOfButtonExit = [
    {
      id: 0,
      name: "Устройство разблокировки дверей (зеленый корпус)",
      model: "ST-ER105D-GN",
      manufacture: "SMARTEC",
      imageSrc:
        "https://smartec-security.com/upload/iblock/f88/ST-ER105D-GN.jpg",
      price: "776",
    },
    {
      id: 1,
      name: "Кнопка выхода (металик, индикация выхода)",
      model: "AT-H805A LED",
      manufacture: "AccordTec",
      imageSrc:
        "https://accordtec.ru/upload/resize_cache/iblock/d0a/el0i3mbhzo691i7g2ickvp0l3a41ixzm/2000_2000_1/0a9a87a7-51cc-11e8-9607-a4bf01347322_be384eba-f3b0-11ec-82bf-000c29832a55.jpg",
      price: "630",
    },
    {
      id: 2,
      name: "Кнопка выхода накладная (металик, без индикации)",
      model: "ST-EX142",
      manufacture: "SMARTEC",
      imageSrc: "https://smartec-security.com/upload/iblock/5d9/st-ex142.jpg",
      price: "459",
    },
    {
      id: 3,
      name: "Кнопка выхода (пластик, без индикации)",
      model: "HO-02",
      manufacture: "TANTOS",
      imageSrc: "https://tantos.pro/images/cat-items/151/ho-02_1.jpeg",
      price: "114",
    },
    {
      id: 4,
      name: "Считыватель из предыдущего шага: ",
      model: getJsonFromPreviousStep()["data"].reader,
      manufacture: getJsonFromPreviousStep()["data"].manufacture,
      imageSrc: "https://tantos.pro/images/cat-items/151/ho-02_1.jpeg",
      price: "114",
    },
  ];

  function getJsonFromPreviousStep(): string | any {
    let value;
    try {
      value = JSON.parse(localStorage.getItem("accessEntranceGroup") || "");
      return value;
    } catch (error: any) {
      console.log(error);
    }
  }

  function saveInLocalStorage(value: any) {
    console.log(value);
    setExitButton(value);
    localStorage.setItem("exitButtonsGroup", value);
  }

  function openDetailByAvatar(event: any) {
    console.log(event);
    let model = event.target.alt;
    getInfoForCardInput("findByAvatar", model);
    setOpen(!open);
  }

  function openDetailById(event: any) {
    console.log(event);
    let id = event.target.id;
    getInfoForCardInput("findById", id);
    setOpen(!open);
  }

  function getInfoForCardInput(tag: string, infoFromEvent: string) {
    let array;
    if (tag === "findByAvatar") {
      array = arrayOfButtonExit.find(
        (element) => element.model === infoFromEvent
      );
    }
    if (tag === "findById") {
      array = arrayOfButtonExit.find(
        (element) => element.id === Number(infoFromEvent)
      );
    }
    setArrayForCard({
      id: String(array?.id),
      name: String(array?.name),
      model: String(array?.model),
      manufacture: String(array?.manufacture),
      imageSrc: String(array?.imageSrc),
      price: String(array?.price),
    });
  }

  return (
    <div className={"flex flex-col justify-center gap-4"}>
      <Card>
        <List>
          {arrayOfButtonExit.map(({ id, name, model, imageSrc }) => (
            <ListItem key={id}>
              <label
                //htmlFor={String(id)}
                className="group/item flex flex-row items-center cursor-pointer w-full"
                onChange={(value) => {
                  saveInLocalStorage(value);
                }}
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id={String(id)}
                    //checked={true}
                    ripple={false}
                    //className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  />
                </ListItemPrefix>
                <div className="w-full flex justify-between items-center">
                  <Avatar
                    variant="circular"
                    alt={model}
                    src={imageSrc}
                    size="xs"
                    onClick={openDetailByAvatar}
                  />
                  {" " + name + " " + model}
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
                </div>
              </label>
            </ListItem>
          ))}
        </List>
      </Card>

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
