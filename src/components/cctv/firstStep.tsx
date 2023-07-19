import {Option, Select} from "@material-tailwind/react";
import React from "react";

export default function FirstStep() {
    return (
        <div className={'h-8 flex flex-row justify-center items-center'}
        >
            <Select label="Выберите производителя оборудования">
                <Option>DAHUA</Option>
                <Option>HiWatch</Option>
                <Option>Не имеет значения</Option>
            </Select>
        </div>
    );
}