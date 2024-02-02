import { Option, Select } from "@material-tailwind/react";
import React, { useEffect } from "react";

export default function SecondStep() {
  const [manufacture, setManufacture] = React.useState("");

  const arrayOfManufactures = [
    {
      id: 0,
      manufacture: "DAHUA",
    },
    {
      id: 1,
      manufacture: "HiWatch",
    },
    {
      id: 2,
      manufacture: "Не имеет значения",
    },
  ];

  useEffect(() => {
    let value;
    value = localStorage.getItem("manufacture") || "";
    setManufacture(value);
  }, []);

  function saveInLocalStorage(value: any) {
    setManufacture(value);
    localStorage.setItem("manufacture", value);
  }

  return (
    <div className={"flex flex-col justify-center items-center w-full gap-4"}>
      <Select
        label="Выберите производителя оборудования:"
        value={manufacture}
        onChange={(value) => {
          saveInLocalStorage(value);
        }}
      >
        {arrayOfManufactures.map(({ id, manufacture }) => (
          <Option key={id} value={manufacture}>
            {manufacture}
          </Option>
        ))}
      </Select>
    </div>
  );
}
