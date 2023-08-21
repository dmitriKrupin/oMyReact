import {Option, Select} from '@material-tailwind/react';
import React, {useEffect} from 'react';

export default function FirstStep() {
    const [accessManufacture, setAccessManufacture] = React.useState('');

    useEffect(() => {
        let value
        value = localStorage.getItem('accessManufacture') || ""
        setAccessManufacture(value)
    }, [])

    /*
    Контроллер со встроенным считывателем сетевой RS-485	Matrix-II Net	Iron Logic	
    Контроллер со встроенным считывателем сетевой RS-485	CL211.3	PERCo	
    Контроллер сетевой RS-485	С-2000-2	НПВ Болид	
    Контроллер сетевой Ethernet	CT/L04.2	PERCo	
    Контроллер сетевой RS-485	Gate-8000	Равелин	
    */

    const arrayOfAccessManufacture = [
        {
            id: 0,
            name: 'Контроллер со встроенным считывателем сетевой RS-485',
            model: 'Matrix-II Net',
            manufacture: 'Iron Logic',
            readers: 'EM-Marin',
            interface: 'Dallas Touch Memory'
        },
        {
            id: 1,
            name: 'Контроллер со встроенным считывателем сетевой RS-485',
            model: 'CL211.3',
            manufacture: 'PERCo',
            readers: 'EM-Marin || HID ProxCard II',
            interface: 'RS-485 (PERCo)'
        },
        {
            id: 2,
            name: 'Контроллер сетевой RS-485',
            model: 'С-2000-2',
            manufacture: 'НПВ Болид',
            readers: 'в зависимости от считывателя',
            interface: 'Touch Memory || Wiegand'
        },
        {
            id: 3,
            name: 'Контроллер сетевой Ethernet',
            model: 'CT/L04.2',
            manufacture: 'PERCo',
            readers: 'в зависимости от считывателя',
            interface: 'RS-485 (PERCo) || Weigand'
        },
        {
            id: 4,
            name: 'Контроллер сетевой RS-485',
            model: 'Gate-8000',
            manufacture: 'Равелин',
            readers: 'в зависимости от считывателя',
            interface: 'Wiegand 26/48'
        }
    ]

    function saveInLocalStorage(value: any) {
        setAccessManufacture(value)
        localStorage.setItem('accessManufacture', value)
    }

    return (
        <div className={'flex flex-col justify-center items-center gap-4'}>
            <Select
                label={"Выберите модель контроллера:"}
                value={accessManufacture}
                onChange={(value) => {
                    saveInLocalStorage(value)
                }}
            >
                {arrayOfAccessManufacture.map(({id, name, model, manufacture}) => (
                    <Option
                        key={id}
                        value={manufacture}
                    >
                        {name + " || " + model + " || " + manufacture}
                    </Option>
                ))}
            </Select>
        </div>
    );
}