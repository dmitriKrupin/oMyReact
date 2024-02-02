import { Option, Select } from "@material-tailwind/react";
import React, { useEffect } from "react";

export default function FirstStep() {
  const [ceilingHigh, setCeilingHigh] = React.useState("");

  useEffect(() => {
    let value;
    value = localStorage.getItem("highOfCeiling") || "";
    setCeilingHigh(value);
  }, []);

  const arrayOfCeilingHigh = [
    {
      id: 0,
      high: "до 3-х метров",
    },
    {
      id: 1,
      high: "от 3-х до 5-ти метров",
    },
    {
      id: 2,
      high: "от 5-ти до 9-ти метров",
    },
    {
      id: 3,
      high: "более 9-ти метров",
    },
  ];

  function saveInLocalStorage(value: any) {
    setCeilingHigh(value);
    localStorage.setItem("highOfCeiling", value);
  }

  return (
    <div className={"flex flex-col justify-center w-full items-center gap-4"}>
      <Select
        label={"Выберите высоту потолков в помещении:"}
        value={ceilingHigh}
        onChange={(value) => {
          saveInLocalStorage(value);
        }}
      >
        {arrayOfCeilingHigh.map(({ id, high }) => (
          <Option key={id} value={high}>
            {high}
          </Option>
        ))}
      </Select>
    </div>
  );
}
