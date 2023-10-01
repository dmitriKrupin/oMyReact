import React, { useState } from "react";
import ResultList from "./resultList";

export default function ResultStep() {
  const TABLE_HEAD = [
    {
      number: "№",
      cameras: "Количество камер",
      length: "Длина трасс",
      status: "Статус",
      equipment: "Оборудование и материалы",
      work: "Работы",
      total: "ИТОГО",
      button: "",
    },
  ];

  function getSumOfLength() {
    let lengthOfGofra = Number(localStorage.getItem("lengthOfGofra"));
    let lengthOfCabelCanal = Number(localStorage.getItem("lengthOfCabelCanal"));
    let lengthOfShtrob = Number(localStorage.getItem("lengthOfShtrob"));
    let lengthOfLotok = Number(localStorage.getItem("lengthOfLotok"));
    let lengthOfPodvesnoyPotok = Number(
      localStorage.getItem("lengthOfPodvesnoyPotok")
    );
    return (
      lengthOfGofra +
      lengthOfCabelCanal +
      lengthOfShtrob +
      lengthOfLotok +
      lengthOfPodvesnoyPotok
    );
  }

  let resultListFromStorage = [
    {
      id: 0,
      done: true,
      cameras: localStorage.getItem("numberOfCameras") || "0",
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
