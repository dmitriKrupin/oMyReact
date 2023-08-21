import { Option, Select, Avatar } from "@material-tailwind/react";
import React, { useEffect } from "react";
import Image from "next/image";

export default function FirstStep() {
  const [accessManufacture, setAccessManufacture] = React.useState("");

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
          ({ id, name, model, manufacture, imageSrc: imageSrc }) => (
            <Option key={id} value={manufacture}>
              <Avatar variant="circular" alt={model} src={imageSrc} />
              {name + " || " + model + " || " + manufacture}
            </Option>
          )
        )}
      </Select>
    </div>
  );
}
