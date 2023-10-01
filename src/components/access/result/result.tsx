import {
  ArrowDownTrayIcon,
  ChevronDownIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import PencilSquareIcon from "@heroicons/react/24/solid/PencilSquareIcon";
import { Collapse, IconButton, Tooltip } from "@material-tailwind/react";
import { useState } from "react";

export default function Result({ result, onChange, onDelete }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function editButton() {
    return (
      <>
        <div className="grid justify-center">
          <IconButton
            className="h-4 md:h-8 w-4 md:w-8"
            variant="text"
            color="blue-gray"
          >
            <ChevronDownIcon
              className={`h-4 md:h-8 w-4 md:w-8 transition-transform lg:block ${
                isMenuOpen ? "rotate-180" : ""
              }`}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            />
          </IconButton>
        </div>
        <div>
          <Collapse className="grid justify-center" open={isMenuOpen}>
            <Tooltip content="Редактировать">
              <button onClick={() => setIsEditing(true)}>
                <PencilSquareIcon
                  title="Редактировать"
                  className="h-4 md:h-8 w-4 md:w-8"
                />
              </button>
            </Tooltip>
            <Tooltip content="Удалить">
              <button onClick={() => onDelete(result.id)}>
                <TrashIcon title="Удалить" className="h-4 md:h-8 w-4 md:w-8" />
              </button>
            </Tooltip>
          </Collapse>
        </div>
      </>
    );
  }

  const [isEditing, setIsEditing] = useState(false);
  let resultContent;
  if (isEditing) {
    resultContent = (
      <>
        <th>{result.id + 1}</th>
        <input
          type="text"
          className="sm:grid col-span-2 lg:col-span-1 p-0"
          value={result.devices}
          onChange={(e) => {
            onChange({
              ...result,
              cameras: e.target.value,
            });
          }}
        />
        <input
          className="sm:grid col-span-2 lg:col-span-1 p-0"
          value={result.length}
          onChange={(e) => {
            onChange({
              ...result,
              length: e.target.value,
            });
          }}
        />
        <th className="hidden sm:grid col-span-2 lg:col-span-1">
          {result.status}
        </th>
        <th className="hidden md:grid col-span-3 lg:col-span-2">
          {result.costOfEquipment}
        </th>
        <th className="hidden md:grid col-span-2 lg:col-span-1">
          {result.costOfWork}
        </th>
        <th className="col-span-2 lg:col-span-1">{result.total}</th>
        <button
          className="grid justify-center"
          onClick={() => setIsEditing(false)}
        >
          <ArrowDownTrayIcon
            title="Сохранить"
            className="h-4 md:h-8 w-4 md:w-8"
          />
        </button>
        <button
          className="grid justify-center"
          onClick={() => setIsEditing(false)}
        >
          <XMarkIcon title="Закрыть" className="h-4 md:h-8 w-4 md:w-8" />
        </button>
      </>
    );
  } else {
    resultContent = (
      <>
        <th>{result.id + 1}</th>
        <th className="col-span-3 lg:col-span-1">{result.devices}</th>
        <th className="col-span-2 lg:col-span-1">{result.length}</th>
        <th className="hidden sm:grid col-span-2 lg:col-span-1">
          {result.status}
        </th>
        <th className="hidden md:grid col-span-3 lg:col-span-2">
          {result.costOfEquipment}
        </th>
        <th className="hidden md:grid col-span-2 lg:col-span-1">
          {result.costOfWork}
        </th>
        <th className="col-span-2 lg:col-span-1">{result.total}</th>
        <button>{editButton()}</button>
        {/*<button onClick={() => setIsEditing(true)}>Edit</button>*/}
      </>
    );
  }
  return (
    <>
      {/*<input
        type="checkbox"
        checked={result.done}
        onChange={(e) => {
          onChange({
            ...result,
            done: e.target.checked,
          });
        }}
    />*/}
      {resultContent}
      {/*<button onClick={() => onDelete(result.id)}>
        <TrashIcon className="h-4 md:h-8 w-4 md:w-8" />
  </button>*/}
    </>
  );
}
