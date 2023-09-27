import { ChevronDownIcon, TrashIcon } from "@heroicons/react/24/solid";
import PencilSquareIcon from "@heroicons/react/24/solid/PencilSquareIcon";
import { Collapse, IconButton, Tooltip } from "@material-tailwind/react";
import React from "react";

const TABLE_HEAD = [
  {
    number: "№",
    cameras: "Количество устройств",
    length: "Длина трасс",
    status: "Статус",
    equipment: "Оборудование и материалы",
    work: "Работы",
    total: "ИТОГО",
    button: "   ",
  },
];

export default function ResultStep() {
  const TABLE_BODY = [
    {
      id: 0,
      cameras: localStorage.getItem("numberOfCameras") || "0",
      length: getSumOfLength(),
      status: "Черновик",
      costOfEquipment: "Оборудование",
      costOfWork: "Работы",
      total: "ИТОГО",
      button: editButton,
    },
    {
      id: 1,
      cameras: localStorage.getItem("numberOfCameras") || "0",
      length: getSumOfLength(),
      status: "Черновик",
      costOfEquipment: "Оборудование",
      costOfWork: "Работы",
      total: "ИТОГО",
      button: editButton,
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

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  function toggleOpen(id: number) {
    let array = TABLE_BODY.find((element) => element.id === Number(id));
    console.log(array);
    if (id === array?.id) {
      setOpen((cur) => !cur);
      setIsMenuOpen((cur) => !cur);
    }
  }

  function editButton(id: number) {
    return (
      <>
        <div className="grid justify-center">
          <IconButton
            className="h-4 md:h-8 w-4 md:w-8"
            variant="text"
            color="blue-gray"
          >
            <ChevronDownIcon
              className={`h-4 md:h-8 w-4 md:w-8 transition-transform lg:block 
            ${isMenuOpen ? "rotate-180" : ""}`}
              onClick={() => toggleOpen(id)}
            />
          </IconButton>
        </div>
        <div className="grid justify-center">
          <Collapse open={open}>
            <Tooltip content="Редактировать">
              <PencilSquareIcon className="h-4 md:h-8 w-4 md:w-8" />
            </Tooltip>
            <Tooltip content="Удалить">
              <TrashIcon className="h-4 md:h-8 w-4 md:w-8" />
            </Tooltip>
          </Collapse>
        </div>
      </>
    );
  }

  return (
    //todo: добавить готовый результат с указанием стоимостей за работы и необходимые оборудование и материалы
    <div className="result-table">
      <table className="rounded">
        <thead>
          {TABLE_HEAD.map((entry) => (
            <tr
              key={entry.number}
              className="grid 
              grid-cols-9 sm:grid-cols-11 md:grid-cols-16 lg:grid-cols-9
              text-xs sm:text-sm md:text-base
              gap-2"
            >
              <th>{entry.number}</th>
              <th className="col-span-3 lg:col-span-1">{entry.cameras}</th>
              <th className="col-span-2 lg:col-span-1">{entry.length}</th>
              <th className="hidden sm:grid col-span-2 lg:col-span-1">
                {entry.status}
              </th>
              <th className="hidden md:grid col-span-3 lg:col-span-2">
                {entry.equipment}
              </th>
              <th className="hidden md:grid col-span-2 lg:col-span-1">
                {entry.work}
              </th>
              <th className="col-span-2 lg:col-span-1">{entry.total}</th>
              <th>{entry.button}</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {TABLE_BODY.map((entry) => (
            <tr
              key={entry.id}
              className="grid
              grid-cols-9 sm:grid-cols-11 md:grid-cols-16 lg:grid-cols-9
              text-xs sm:text-sm md:text-base
              gap-2 items-center"
            >
              <th>{entry.id}</th>
              <th className="col-span-3 lg:col-span-1">{entry.cameras}</th>
              <th className="col-span-2 lg:col-span-1">{entry.length}</th>
              <th className="hidden sm:grid col-span-2 lg:col-span-1">
                {entry.status}
              </th>
              <th className="hidden md:grid col-span-3 lg:col-span-2">
                {entry.costOfEquipment}
              </th>
              <th className="hidden md:grid col-span-2 lg:col-span-1">
                {entry.costOfWork}
              </th>
              <th className="col-span-2 lg:col-span-1">{entry.total}</th>
              <th>{entry.button(entry.id)}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
