import React, { useEffect, useState } from "react";
import { Checkbox, Slider } from "@material-tailwind/react";

export default function SixthStep() {
  const [lengthOfAccess, setLengthOfAccess] = useState({
    lengthOfAccessInfo: {
      lengthOfGofra: "",
      lengthOfCabelCanal: "",
      lengthOfShtrob: "",
      lengthOfLotok: "",
      lengthOfPodvesnoyPotok: "",
    },
  });

  function lengthOfAccessChange(value: any, teg: String) {
    console.log(value + " " + teg);

    /*setPower({
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
    );*/
  }

  const [lengthOfGofra, setLengthOfGofra] = React.useState(0);
  const [lengthOfCabelCanal, setLengthOfCabelCanal] = React.useState(0);
  const [lengthOfShtrob, setLengthOfShtrob] = React.useState(0);
  const [lengthOfLotok, setLengthOfLotok] = React.useState(0);
  const [lengthOfPodvesnoyPotok, setLengthOfPodvesnoyPotok] = React.useState(0);

  const arrayOfLengthResults = [
    {
      name: "lengthOfGofra",
      value: lengthOfGofra,
      function: setLengthOfGofra,
      label: "В гофрированной трубе 20 мм:",
      idOfSwitch: "gofra-on",
      getLengthOfLabel: saveInLocalStorage,
    },
    {
      name: "lengthOfCabelCanal",
      value: lengthOfCabelCanal,
      function: setLengthOfCabelCanal,
      label: "В кабель-канале 40*20 мм:",
      idOfSwitch: "cabelCanal-on",
      getLengthOfLabel: saveInLocalStorage,
    },
    {
      name: "lengthOfShtrob",
      value: lengthOfShtrob,
      function: setLengthOfShtrob,
      label: "Необходимо проштробить шириной 20 мм и глубиной 20 мм:",
      idOfSwitch: "shtroba-on",
      getLengthOfLabel: saveInLocalStorage,
    },
    {
      name: "lengthOfLotok",
      value: lengthOfLotok,
      function: setLengthOfLotok,
      label: "Проложить в существующем металлическом лотке:",
      idOfSwitch: "lotok-on",
      getLengthOfLabel: saveInLocalStorage,
    },
    {
      name: "lengthOfPodvesnoyPotok",
      value: lengthOfPodvesnoyPotok,
      function: setLengthOfPodvesnoyPotok,
      label: "Проложить за существующим подвесным потолком типа Armstrong:",
      idOfSwitch: "podvesnoyPotok-on",
      getLengthOfLabel: saveInLocalStorage,
    },
  ];

  useEffect(() => {
    for (let i = 0; i < arrayOfLengthResults.length; i++) {
      let value;
      value = localStorage.getItem(arrayOfLengthResults[i].name) || "0";
      arrayOfLengthResults[i].value = parseInt(value);
      arrayOfLengthResults[i].function(parseInt(value));
    }
  });

  let sumLengthOfCables =
    Number(lengthOfGofra) +
    Number(lengthOfCabelCanal) +
    Number(lengthOfShtrob) +
    Number(lengthOfLotok) +
    Number(lengthOfPodvesnoyPotok);

  function saveInLocalStorage(event: any, name: string) {
    let value = event.target.value;
    arrayOfLengthResults.map((entry) => {
      if (entry.name === name) {
        entry.function(value);
        localStorage.setItem(entry.name, value);
      }
    });
  }

  return (
    <div className={"h-full flex flex-col"}>
      <div className={"flex flex-row justify-between font-bold"}>
        <div>Общая длина трасс:</div>
        <div className={"text-blue-500 font-bold"}>{sumLengthOfCables}</div>
      </div>
      {arrayOfLengthResults.map((entry) => (
        <div
          className={
            "h-full flex flex-col md:flex-row justify-around items-center gap-2"
          }
          key={entry.label}
        >
          <div
            className={
              "flex flex-col md:flex-row basis-1/2 gap-2 justify-start w-full"
            }
          >
            <div className={"flex flex-row items-center gap-2 w-full"}>
              <Checkbox
                //todo: добавить активацию после активации ползунка длины
                id={entry.idOfSwitch}
              />
              <div className={"font-light text-sm md:text-base text-left"}>
                {entry.label}
              </div>
            </div>
          </div>
          <div className={"flex flex-row items-center basis-1/2 gap-4 w-full"}>
            <div className={"w-5"}>{entry.value}</div>
            <div className={"w-full"}>
              <Slider
                min={0}
                max={100}
                step={10}
                //todo: поправить полоску индикации, чтобы она отображала правильную индикацию, если значений больше 100
                defaultValue={entry.value}
                value={entry.value}
                onChange={(event) => {
                  entry.getLengthOfLabel(event, entry.name);
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
