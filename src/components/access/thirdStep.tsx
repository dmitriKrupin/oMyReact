import { Checkbox, Option, Select, Avatar } from "@material-tailwind/react";
import React, { useEffect } from "react";

export default function ThirdStep() {
  const [exitButton, setExitButton] = React.useState("");

  useEffect(() => {
    let value;
    value = localStorage.getItem("exitButton") || "";
    setExitButton(value);
  }, []);

  const arrayOfButtonExit = [
    {
      id: 0,
      name: "Устройство разблокировки дверей (зеленый корпус)",
      model: "ST-ER105D-GN",
      manufacture: "SMARTEC",
      imageSrc:
        "https://smartec-security.com/upload/iblock/f88/ST-ER105D-GN.jpg",
    },
    {
      id: 1,
      name: "Кнопка выхода (металик, индикация выхода)",
      model: "AT-H805A LED",
      manufacture: "AccordTec",
      imageSrc:
        "https://accordtec.ru/upload/resize_cache/iblock/d0a/el0i3mbhzo691i7g2ickvp0l3a41ixzm/2000_2000_1/0a9a87a7-51cc-11e8-9607-a4bf01347322_be384eba-f3b0-11ec-82bf-000c29832a55.jpg",
    },
    {
      id: 2,
      name: "Кнопка выхода накладная (металик, без индикации)",
      model: "ST-EX142",
      manufacture: "SMARTEC",
      imageSrc: "https://smartec-security.com/upload/iblock/5d9/st-ex142.jpg",
    },
    {
      id: 3,
      name: "Кнопка выхода (пластик, без индикации)",
      model: "HO-02",
      manufacture: "TANTOS",
      imageSrc: "https://tantos.pro/images/cat-items/151/ho-02_1.jpeg",
    },
  ];

  function saveInLocalStorage(value: any) {
    setExitButton(value);
    localStorage.setItem("exitButton", value);
  }

  return (
    <div className={"flex flex-col justify-center gap-4"}>
      <div className="flex flex-row gap-6">
        <Checkbox label="Кнопка выхода" />
        <Select
          label={"Выберите модель кнопки выхода:"}
          value={exitButton}
          onChange={(value) => {
            saveInLocalStorage(value);
          }}
        >
          {arrayOfButtonExit.map(
            ({ id, name, model, manufacture, imageSrc }) => (
              <Option key={id} value={manufacture}>
                <Avatar
                  variant="circular"
                  alt={model}
                  src={imageSrc}
                  size="xs"
                />
                {" " + name + " || " + model + " || " + manufacture}
              </Option>
            )
          )}
        </Select>
      </div>
    </div>
  );
}
