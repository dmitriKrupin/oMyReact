import React, { useState } from "react";
import ResultList from "./resultList";

export default function ResultStep() {
  const TABLE_HEAD = [
    {
      number: "№",
      devices: "Всего устройств",
      length: "Длина трасс",
      status: "Статус",
      equipment: "Оборудование и материалы",
      work: "Работы",
      total: "ИТОГО",
      button: "",
    },
  ];

  function getSumOfLength() {
    let lengthAccess = JSON.parse(localStorage.getItem("lengthOfAccess") || "");
    let lengthOfGofra = lengthAccess.lengthOfAccessInfo.lengthOfGofra;
    let lengthOfCabelCanal = lengthAccess.lengthOfAccessInfo.lengthOfCabelCanal;
    let lengthOfShtrob = lengthAccess.lengthOfAccessInfo.lengthOfShtrob;
    let lengthOfLotok = lengthAccess.lengthOfAccessInfo.lengthOfLotok;
    let lengthOfPodvesnoyPotok =
      lengthAccess.lengthOfAccessInfo.lengthOfPodvesnoyPotok;
    return (
      lengthOfGofra +
      lengthOfCabelCanal +
      lengthOfShtrob +
      lengthOfLotok +
      lengthOfPodvesnoyPotok
    );
  }

  function getSumOfDevices() {}

  let resultListFromStorage = [
    {
      id: 0,
      done: true,
      devices: localStorage.getItem("numberOfCameras") || "0",
      length: getSumOfLength(),
      status: "Черновик",
      costOfEquipment: "Оборудование",
      costOfWork: "Работы",
      total: "ИТОГО",
      detailStatus: true,
    },
  ];

  const [resultList, setResultList] = useState(resultListFromStorage);

  function handleChangeTodo(nextTodo: any) {
    setResultList(
      resultList.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTodo(todoId: number) {
    setResultList(resultList.filter((t) => t.id !== todoId));
  }

  return (
    <>
      <ResultList
        TABLE_HEAD={TABLE_HEAD}
        listForResult={resultList}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
