import { IconButton, Tooltip } from "@material-tailwind/react";
import React from "react";
import { PencilIcon } from "@heroicons/react/20/solid";

const TABLE_HEAD = [
    "№",
    "Количество камер",
    "Длина трасс",
    "Статус",
    "Оборудование иматериалы",
    "Работы",
    "ИТОГО"
];

function editButton() {
    return (
        <Tooltip content="Редактировать расчет">
            <IconButton variant="text" color="blue-gray">
                <PencilIcon className="h-4 w-4" />
            </IconButton>
        </Tooltip>
    );
}

export default function ResultStep() {
    const TABLE_BODY = [
        {
            id: 1,
            cameras: localStorage.getItem('numberOfCameras') || '0',
            length: getSumOfLength(),
            status: "Черновик",
            costOfEquipment: "Оборудование",
            costOfWork: "Работы",
            total: "ИТОГО",
            button: editButton,
        }
    ];

    function getSumOfLength() {
        let lengthOfGofra = Number(localStorage.getItem('lengthOfGofra'));
        let lengthOfCabelCanal = Number(localStorage.getItem('lengthOfCabelCanal'));
        let lengthOfShtrob = Number(localStorage.getItem('lengthOfShtrob'));
        let lengthOfLotok = Number(localStorage.getItem('lengthOfLotok'));
        let lengthOfPodvesnoyPotok = Number(localStorage.getItem('lengthOfPodvesnoyPotok'));
        return (
            lengthOfGofra + lengthOfCabelCanal + lengthOfShtrob + lengthOfLotok + lengthOfPodvesnoyPotok
        );
    }

    return (
        //todo: добавить готовый результат с указанием стоимостей за работы и необходимые оборудование и материалы
        <div className="result-table">
            <table>
                <thead>
                    <tr>
                        {TABLE_HEAD.map((entry) => (
                            <th key={entry}>
                                {entry}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {TABLE_BODY.map((entry) => (
                        <tr key={entry.id}>
                            <th>{entry.id}</th>
                            <th>{entry.cameras}</th>
                            <th>{entry.length}</th>
                            <th>{entry.status}</th>
                            <th>{entry.costOfEquipment}</th>
                            <th>{entry.costOfWork}</th>
                            <th>{entry.total}</th>
                            <th>{entry.button()}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}