import {
  Option,
  Dialog,
  Avatar,
  Card,
  Typography,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  Select,
  Checkbox,
} from "@material-tailwind/react";
import React, { useEffect } from "react";

export default function ThirdStep() {
  const [exitButtonsGroup, setExitButtonsGroup] = React.useState({
    data: {
      simpleButton: "",
      reader: "",
      greenButton: "",
    },
    statuses: {
      simpleButtonCheckbox: false,
      readerCheckbox: false,
      greenButtonCheckbox: false,
    },
  });

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    let value;
    try {
      value = JSON.parse(localStorage.getItem("exitButtonsGroup") || "");
      setExitButtonsGroup(value);
    } catch (error: any) {
      console.log(error);
    }
  }, []);

  const [arrayForCard, setArrayForCard] = React.useState({
    id: "",
    name: "",
    model: "",
    manufacture: "",
    imageSrc: "",
    price: "",
  });

  const arrayOfUsualyButtonExit = [
    {
      id: 0,
      name: "Кнопка выхода (металик, индикация выхода)",
      model: "AT-H805A LED",
      manufacture: "AccordTec",
      imageSrc:
        "https://www.tinko.ru/upload/resize_cache/iblock/30d/300_300_140cd750bba9870f18aada2478b24840a/0e1m4xlewhrrz9hb6i4jeqhu6o0bzrwx.jpeg",
      price: "630",
    },
    {
      id: 1,
      name: "Кнопка выхода накладная (металик, без индикации)",
      model: "ST-EX142",
      manufacture: "SMARTEC",
      imageSrc:
        "https://www.tinko.ru/upload/resize_cache/iblock/235/300_300_140cd750bba9870f18aada2478b24840a/t7qf1yxs27nc1d63mi8tzjlhv62okg1n.jpeg",
      price: "459",
    },
    {
      id: 2,
      name: "Кнопка выхода (пластик, без индикации)",
      model: "HO-02",
      manufacture: "TANTOS",
      imageSrc: "https://tantos.pro/images/cat-items/151/ho-02_1.jpeg",
      price: "114",
    },
    {
      id: 3,
      name: "Кнопка выхода (бронзовая, индикация)",
      model: "Exit 300М",
      manufacture: "VIZIT",
      imageSrc:
        "https://images.cdn.tetravaal.org/iblock/485/48508b080eaf9df7cd7988985df71f38/17427ac0_27ad_11e0_2e96_47a27ee4c014_46c85795_dbb1_11ea_a842_7cd30a2bddbd.jpeg",
      price: "920",
    },
    /*{
      id: 4,
      name: "Считыватель из предыдущего шага: ",
      model: getJsonFromPreviousStep()["data"].reader,
      manufacture: getJsonFromPreviousStep()["data"].manufacture,
      imageSrc: "https://tantos.pro/images/cat-items/151/ho-02_1.jpeg",
      price: "114",
    },*/
  ];

  const arrayOfAccessReader = [
    {
      id: 0,
      name: "Считыватель (белый)",
      model: "Matrix-II",
      readers: "EM-Marin",
      interface: "Dallas Touch Memory",
      manufacture: "Iron Logic",
      imageSrc:
        "https://shop.ironlogic.ru/sites/default/files/imagecache/product/mII.png",
      price: "2 290",
    },
    {
      id: 1,
      name: "Считыватель (белый)",
      model: "ST-PR011EM-WT",
      readers: "EM-Marin",
      interface: "Wiegand 26",
      manufacture: "SMARTEC",
      imageSrc:
        "https://smartec-security.com/upload/iblock/2a5/ST-PR011EM-WT.jpg",
      price: "990",
    },
    {
      id: 2,
      name: "Считыватель накладной антивандальный",
      model: "CP-Z2L",
      readers: "EM-Marin",
      interface: "Dallas Touch Memory || Wiegand 26",
      manufacture: "Iron Logic",
      imageSrc:
        "https://ironlogic.ru/il.nsf/img/ru_cpz2ln.jpg/$FILE/cpz2ln.jpg",
      price: "1 649",
    },
    {
      id: 3,
      name: "Считыватель (серый)",
      model: "Proxy-2МА",
      readers: "MIFARE || EM-Marin || HID ProxCard II",
      interface:
        "Wiegand-26/37/44 || Dallas Touch Memory || RS-232 || ABA TRACK II",
      manufacture: "НПВ Болид",
      imageSrc: "https://bolid.ru/files/341/532/c2_proxy_thumb1_0.jpeg",
      price: "6 989",
    },
    {
      id: 4,
      name: "Считыватель (черная рамка)",
      model: "Proxy-3MA",
      readers: "MIFARE || EM-Marin || HID ProxCard II",
      interface:
        "Wiegand-26/37/44 || Dallas Touch Memory || RS-232 || ABA TRACK II",
      manufacture: "НПВ Болид",
      imageSrc:
        "https://bolid.ru/files/341/532/Proxy_3M_Proxy_3MA_aktiven_thumb3.png",
      price: "10 265",
    },
    {
      id: 5,
      name: "Считыватель (белый)",
      model: "PERCo-IR13G",
      readers: "EM-Marin || HID ProxCard II",
      interface: "RS-485 (PERCo) || Wiegand-26/34/42/58",
      manufacture: "PERCo",
      imageSrc:
        "https://www.perco.ru/images/products/readers/IR19/IR19G.v2.jpg",
      price: "9 140",
    },
  ];

  const arrayOfGreenButtonExit = [
    {
      id: 0,
      name: "Устройство разблокировки двери с восстанавливаемой вставкой",
      model: "ST-ER105D-GN",
      manufacture: "SMARTEC",
      imageSrc:
        "https://smartec-security.com/upload/iblock/f88/ST-ER105D-GN.jpg",
      price: "776",
    },
    {
      id: 1,
      name: "Устройство дистанционного управления электроконтактное",
      model: "УДП 513-3М исп.01",
      manufacture: "Болид",
      imageSrc:
        "https://www.tinko.ru/upload/resize_cache/iblock/58d/300_300_140cd750bba9870f18aada2478b24840a/d93p8wq575j1dkcp61b4jg7u2d4godoi.jpeg",
      price: "779",
    },
    {
      id: 2,
      name: "Устройство разблокировки двери с восстанавливаемой вставкой",
      model: "ST-ER115",
      manufacture: "SMARTEC",
      imageSrc:
        "https://www.tinko.ru/upload/resize_cache/iblock/363/300_300_140cd750bba9870f18aada2478b24840a/rit3c6pw9ny6wnze9apeto9fk7oeitx2.jpg",
      price: "1 038",
    },
    {
      id: 3,
      name: "Устройство разблокировки двери АВАРИЙНЫЙ ВЫХОД (зелёный)",
      model: "УДП 513-10",
      manufacture: "Рубеж",
      imageSrc:
        "https://www.tinko.ru/upload/resize_cache/iblock/f40/300_300_140cd750bba9870f18aada2478b24840a/yd1rbvz17vanyfd221fakzawqg2g959d.jpeg",
      price: "537",
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
      array = arrayOfUsualyButtonExit.find(
        (element) => element.model === infoFromEvent
      );
    }
    if (tag === "findById") {
      array = arrayOfUsualyButtonExit.find(
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

  function simpleButtonChange(value: any) {
    setExitButtonsGroup({
      ...exitButtonsGroup,
      data: {
        ...exitButtonsGroup.data,
        simpleButton: value,
      },
    });
    localStorage.setItem(
      "exitButtonsGroup",
      JSON.stringify({
        ...exitButtonsGroup,
        data: {
          ...exitButtonsGroup.data,
          simpleButton: value,
        },
      })
    );
  }

  function simpleButtonCheckboxChange(event: any) {
    {
      setExitButtonsGroup({
        ...exitButtonsGroup,
        statuses: {
          ...exitButtonsGroup.statuses,
          simpleButtonCheckbox: event.target.checked,
        },
      });
      localStorage.setItem(
        "exitButtonsGroup",
        JSON.stringify({
          ...exitButtonsGroup,
          statuses: {
            ...exitButtonsGroup.statuses,
            simpleButtonCheckbox: event.target.checked,
          },
        })
      );
    }
  }

  function readerChange(value: any) {
    setExitButtonsGroup({
      ...exitButtonsGroup,
      data: {
        ...exitButtonsGroup.data,
        reader: value,
      },
    });
    localStorage.setItem(
      "exitButtonsGroup",
      JSON.stringify({
        ...exitButtonsGroup,
        data: {
          ...exitButtonsGroup.data,
          reader: value,
        },
      })
    );
  }

  function readerCheckboxChange(event: any) {
    {
      setExitButtonsGroup({
        ...exitButtonsGroup,
        statuses: {
          ...exitButtonsGroup.statuses,
          readerCheckbox: event.target.checked,
        },
      });
      localStorage.setItem(
        "exitButtonsGroup",
        JSON.stringify({
          ...exitButtonsGroup,
          statuses: {
            ...exitButtonsGroup.statuses,
            readerCheckbox: event.target.checked,
          },
        })
      );
    }
  }

  function greenButtonChange(value: any) {
    setExitButtonsGroup({
      ...exitButtonsGroup,
      data: {
        ...exitButtonsGroup.data,
        greenButton: value,
      },
    });
    localStorage.setItem(
      "exitButtonsGroup",
      JSON.stringify({
        ...exitButtonsGroup,
        data: {
          ...exitButtonsGroup.data,
          greenButton: value,
        },
      })
    );
  }

  function greenButtonCheckboxChange(event: any) {
    {
      setExitButtonsGroup({
        ...exitButtonsGroup,
        statuses: {
          ...exitButtonsGroup.statuses,
          greenButtonCheckbox: event.target.checked,
        },
      });
      localStorage.setItem(
        "exitButtonsGroup",
        JSON.stringify({
          ...exitButtonsGroup,
          statuses: {
            ...exitButtonsGroup.statuses,
            greenButtonCheckbox: event.target.checked,
          },
        })
      );
    }
  }

  return (
    <div
      className={
        "grid grid-rows-3 md:grid-rows-3 grid-flow-col gap-4 items-center text-center w-full"
      }
    >
      <div className="grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-4">
        <Checkbox
          label="Кнопка выход"
          checked={exitButtonsGroup.statuses.simpleButtonCheckbox}
          onChange={simpleButtonCheckboxChange}
        />
        <Select
          label={"Выберите модель кнопки выход:"}
          value={exitButtonsGroup.data.simpleButton}
          onChange={(value) => simpleButtonChange(value)}
          disabled={!exitButtonsGroup.statuses.simpleButtonCheckbox}
          color="blue"
        >
          {arrayOfUsualyButtonExit.map(
            ({ id, model, imageSrc, manufacture }) => (
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
            )
          )}
        </Select>
      </div>

      <div className="grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-4">
        <Checkbox
          label="Считыватель"
          checked={exitButtonsGroup.statuses.readerCheckbox}
          onChange={readerCheckboxChange}
        />
        <Select
          label={"Выберите модель считывателя:"}
          value={exitButtonsGroup.data.reader}
          onChange={(value) => readerChange(value)}
          disabled={!exitButtonsGroup.statuses.readerCheckbox}
          color="blue"
        >
          {arrayOfAccessReader.map(({ id, model, imageSrc, manufacture }) => (
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
      </div>

      <div className="grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-4">
        <Checkbox
          label="Разблокировать двери при пожаре"
          checked={exitButtonsGroup.statuses.greenButtonCheckbox}
          onChange={greenButtonCheckboxChange}
        />
        <Select
          label={"Выберите модель кнопки выход:"}
          value={exitButtonsGroup.data.greenButton}
          onChange={(value) => greenButtonChange(value)}
          disabled={!exitButtonsGroup.statuses.greenButtonCheckbox}
          color="blue"
        >
          {arrayOfGreenButtonExit.map(
            ({ id, model, imageSrc, manufacture }) => (
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
            )
          )}
        </Select>
      </div>

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
    </div>
  );
}
