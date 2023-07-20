import {Option, Select} from '@material-tailwind/react';
import React from 'react';

export default function SecondStep() {
    return (
        <div className={'flex flex-col justify-center items-center gap-4'}
        >
            <Select label="Выберите производителя оборудования">
                <Option>DAHUA</Option>
                <Option>HiWatch</Option>
                <Option>Не имеет значения</Option>
            </Select>
        </div>
    );
}