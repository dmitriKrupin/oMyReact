import {Checkbox, Option, Select} from '@material-tailwind/react';
import React, {useEffect} from 'react';

export default function SecondStep() {
    const [accessEntrance, setAccessEntrance] = React.useState('');

    useEffect(() => {
        let value
        value = localStorage.getItem('accessEntrance') || ""
        setAccessEntrance(value)
    }, [])

    const arrayOfAccessReader = [
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
        setAccessEntrance(value)
        localStorage.setItem('accessEntrance', value)
    }

    //todo: составить спецификацию оборудования, которая будет соответствовать отмеченным параметрам
    // или исходя из готовой спецификации сделать такой калькулятор, который подбирал бы оборудование для этой спецификации
    return (
        <div className={'flex flex-col justify-center items-center gap-4'}>
            <div className='flex flex-row gap-6'>
                <Checkbox 
                    label='Считыватель'
                />
                <Select
                    label={"Выберите модель считывателя:"}
                    value={accessEntrance}
                    onChange={(value) => {
                        saveInLocalStorage(value)
                    }}
                >
                    {arrayOfAccessReader.map(({id, manufacture}) => (
                        <Option
                            key={id}
                            value={manufacture}
                        >
                            {manufacture}
                        </Option>
                    ))}
                </Select>
            </div>

            <div className='flex flex-row gap-6'>
                <Checkbox 
                    label='Кнопка вызова'
                />
                <Select
                    label={"Выберите модель вызывной панели:"}
                    value={accessEntrance}
                    onChange={(value) => {
                        saveInLocalStorage(value)
                    }}
                >
                    {arrayOfAccessReader.map(({id, manufacture}) => (
                        <Option
                            key={id}
                            value={manufacture}
                        >
                            {manufacture}
                        </Option>
                    ))}
                </Select>
            </div>

            <div className='flex flex-row gap-6'>
                <Checkbox 
                    label='Кодонаборная панель'
                />
                <Select
                    label={"Выберите модель кодонаборной панели:"}
                    value={accessEntrance}
                    onChange={(value) => {
                        saveInLocalStorage(value)
                    }}
                >
                    {arrayOfAccessReader.map(({id, manufacture}) => (
                        <Option
                            key={id}
                            value={manufacture}
                        >
                            {manufacture}
                        </Option>
                    ))}
                </Select>
            </div>

            <div className='flex flex-row gap-6'>
                <Checkbox 
                    label='Биометрическая панель'
                />
                <Select
                    label={"Выберите модель биометрической панели:"}
                    value={accessEntrance}
                    onChange={(value) => {
                        saveInLocalStorage(value)
                    }}
                >
                    {arrayOfAccessReader.map(({id, manufacture}) => (
                        <Option
                            key={id}
                            value={manufacture}
                        >
                            {manufacture}
                        </Option>
                    ))}
                </Select>
            </div>
        </div>
    );
}