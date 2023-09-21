import React, { useEffect, useState } from "react";
import { Checkbox, Slider } from "@material-tailwind/react";

export default function SixthStep() {
  const [lengthOfAccess, setLengthOfAccess] = useState({
    lengthOfAccessInfo: {
      lengthOfGofra: 0,
      lengthOfCabelCanal: 0,
      lengthOfShtrob: 0,
      lengthOfLotok: 0,
      lengthOfPodvesnoyPotok: 0,
    },
  });

  useEffect(() => {
    let value;
    try {
      value = JSON.parse(localStorage.getItem("lengthOfAccess") || "");
      setLengthOfAccess(value);
    } catch (error: any) {
      console.log(error);
    }
  }, []);

  const arrayOfLengthResults = [
    {
      name: "lengthOfGofra",
      value: lengthOfAccess.lengthOfAccessInfo.lengthOfGofra,
      label: "В гофрированной трубе 20 мм:",
      idOfSwitch: "gofra-on",
    },
    {
      name: "lengthOfCabelCanal",
      value: lengthOfAccess.lengthOfAccessInfo.lengthOfCabelCanal,
      label: "В кабель-канале 40*20 мм:",
      idOfSwitch: "cabelCanal-on",
    },
    {
      name: "lengthOfShtrob",
      value: lengthOfAccess.lengthOfAccessInfo.lengthOfShtrob,
      label: "Необходимо проштробить шириной 20 мм и глубиной 20 мм:",
      idOfSwitch: "shtroba-on",
    },
    {
      name: "lengthOfLotok",
      value: lengthOfAccess.lengthOfAccessInfo.lengthOfLotok,
      label: "Проложить в существующем металлическом лотке:",
      idOfSwitch: "lotok-on",
    },
    {
      name: "lengthOfPodvesnoyPotok",
      value: lengthOfAccess.lengthOfAccessInfo.lengthOfPodvesnoyPotok,
      label: "Проложить за существующим подвесным потолком типа Armstrong:",
      idOfSwitch: "podvesnoyPotok-on",
    },
  ];

  //todo:переделать метод с циклом для уменьшения кода
  function saveInLocalStorage(event: any, name: string) {
    let value = Number(event.target.value);
    if (name === "lengthOfGofra") {
      setLengthOfAccess({
        ...lengthOfAccess,
        lengthOfAccessInfo: {
          ...lengthOfAccess.lengthOfAccessInfo,
          lengthOfGofra: value,
        },
      });
      localStorage.setItem(
        "lengthOfAccess",
        JSON.stringify({
          ...lengthOfAccess,
          lengthOfAccessInfo: {
            ...lengthOfAccess.lengthOfAccessInfo,
            lengthOfGofra: value,
          },
        })
      );
    }
    if (name === "lengthOfCabelCanal") {
      setLengthOfAccess({
        ...lengthOfAccess,
        lengthOfAccessInfo: {
          ...lengthOfAccess.lengthOfAccessInfo,
          lengthOfCabelCanal: value,
        },
      });
      localStorage.setItem(
        "lengthOfAccess",
        JSON.stringify({
          ...lengthOfAccess,
          lengthOfAccessInfo: {
            ...lengthOfAccess.lengthOfAccessInfo,
            lengthOfCabelCanal: value,
          },
        })
      );
    }
    if (name === "lengthOfShtrob") {
      setLengthOfAccess({
        ...lengthOfAccess,
        lengthOfAccessInfo: {
          ...lengthOfAccess.lengthOfAccessInfo,
          lengthOfShtrob: value,
        },
      });
      localStorage.setItem(
        "lengthOfAccess",
        JSON.stringify({
          ...lengthOfAccess,
          lengthOfAccessInfo: {
            ...lengthOfAccess.lengthOfAccessInfo,
            lengthOfShtrob: value,
          },
        })
      );
    }
    if (name === "lengthOfLotok") {
      setLengthOfAccess({
        ...lengthOfAccess,
        lengthOfAccessInfo: {
          ...lengthOfAccess.lengthOfAccessInfo,
          lengthOfLotok: value,
        },
      });
      localStorage.setItem(
        "lengthOfAccess",
        JSON.stringify({
          ...lengthOfAccess,
          lengthOfAccessInfo: {
            ...lengthOfAccess.lengthOfAccessInfo,
            lengthOfLotok: value,
          },
        })
      );
    }
    if (name === "lengthOfPodvesnoyPotok") {
      setLengthOfAccess({
        ...lengthOfAccess,
        lengthOfAccessInfo: {
          ...lengthOfAccess.lengthOfAccessInfo,
          lengthOfPodvesnoyPotok: value,
        },
      });
      localStorage.setItem(
        "lengthOfAccess",
        JSON.stringify({
          ...lengthOfAccess,
          lengthOfAccessInfo: {
            ...lengthOfAccess.lengthOfAccessInfo,
            lengthOfPodvesnoyPotok: value,
          },
        })
      );
    }
  }

  let sum =
    Number(lengthOfAccess.lengthOfAccessInfo.lengthOfGofra) +
    Number(lengthOfAccess.lengthOfAccessInfo.lengthOfCabelCanal) +
    Number(lengthOfAccess.lengthOfAccessInfo.lengthOfShtrob) +
    Number(lengthOfAccess.lengthOfAccessInfo.lengthOfLotok) +
    Number(lengthOfAccess.lengthOfAccessInfo.lengthOfPodvesnoyPotok);

  return (
    <div className={"h-full flex flex-col"}>
      <div className={"flex flex-row justify-between font-bold"}>
        <div>Общая длина трасс:</div>
        <div className={"text-blue-500 font-bold"}>{sum}</div>
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
                  saveInLocalStorage(event, entry.name);
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
