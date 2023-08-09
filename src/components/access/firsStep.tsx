import {Option, Select} from '@material-tailwind/react';
import React, {useEffect} from 'react';

export default function FirstStep() {
    const [accessManufacture, setAccessManufacture] = React.useState('');

    useEffect(() => {
        let value
        value = localStorage.getItem('accessManufacture') || ""
        setAccessManufacture(value)
    }, [])

    const arrayOfAccessManufacture = [
        {
            id: 0,
            manufacture: 'IRON LOGIC'
        },
        {
            id: 1,
            manufacture: 'НПО БОЛИД'
        },
        {
            id: 2,
            manufacture: 'PERCO'
        },
        {
            id: 3,
            manufacture: 'Не имеет значения'
        },
    ]

    function saveInLocalStorage(value: any) {
        setAccessManufacture(value)
        localStorage.setItem('accessManufacture', value)
    }

    return (
        <div className={'flex flex-col justify-center items-center gap-4'}>
            <Select
                label={"Выберите производителя контроллера:"}
                value={accessManufacture}
                onChange={(value) => {
                    saveInLocalStorage(value)
                }}
            >
                {arrayOfAccessManufacture.map(({id, manufacture}) => (
                    <Option
                        key={id}
                        value={manufacture}
                    >
                        {manufacture}
                    </Option>
                ))}
            </Select>
        </div>
    );
}