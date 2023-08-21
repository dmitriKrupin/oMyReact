import {Checkbox, Option, Select} from '@material-tailwind/react';
import React, {useEffect} from 'react';

export default function ThirdStep() {
    const [exitButton, setExitButton] = React.useState('');

    useEffect(() => {
        let value
        value = localStorage.getItem('exitButton') || ""
        setExitButton(value)
    }, [])

    const arrayOfButtonExit = [
        {
            id: 0,
            name: 'Устройство разблокировки дверей (зеленый корпус)',
            model: 'ST-ER105D-GN',
            manufacture: 'SMARTEC'
        },
        {
            id: 1,
            name: 'Кнопка выхода (металик, индикация выхода)',
            model: 'AT-H805A LED',
            manufacture: 'AccordTec'
        },
        {
            id: 2,
            name: 'Кнопка выхода накладная (металик, без индикации)',
            model: 'ST-EX142',
            manufacture: 'SMARTEC'
        },
        {
            id: 3,
            name: 'Кнопка выхода (пластик, без индикации)',
            model: 'HO-02',
            manufacture: 'TANTOS'
        }
    ]

    function saveInLocalStorage(value: any) {
        setExitButton(value)
        localStorage.setItem('exitButton', value)
    }

    return(
        <div className={'flex flex-col justify-center gap-4'}>
            <div className='flex flex-row gap-6'>
                <Checkbox 
                    label='Кнопка выхода'
                />
                <Select
                    label={"Выберите модель кнопки выхода:"}
                    value={exitButton}
                    onChange={(value) => {
                        saveInLocalStorage(value)
                    }}
                >
                    {arrayOfButtonExit.map(({id, name, model, manufacture}) => (
                        <Option
                            key={id}
                            value={manufacture}
                        >
                            {name + " || " + model + " || " + manufacture}
                        </Option>
                    ))}
                </Select>
            </div>
        </div>
    );
}