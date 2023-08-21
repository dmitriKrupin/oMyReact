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
            name: 'Считыватель (белый)',
            model: 'Matrix-II',
            readers: 'EM-Marin',
            interface: 'Dallas Touch Memory',
            manufacture: 'Iron Logic'
        },
        {
            id: 1,
            name: 'Считыватель (белый)',
            model: 'ST-PR011EM-WT',
            readers: 'EM-Marin',
            interface: 'Wiegand 26',
            manufacture: 'SMARTEC'
        },
        {
            id: 2,
            name: 'Считыватель накладной антивандальный',
            model: 'CP-Z2L',
            readers: 'EM-Marin',
            interface: 'Dallas Touch Memory || Wiegand 26',
            manufacture: 'Iron Logic'
        },
        {
            id: 3,
            name: 'Считыватель (серый)',
            model: 'Proxy-2МА',
            readers: 'MIFARE || EM-Marin || HID ProxCard II',
            interface: 'Wiegand-26/37/44 || Dallas Touch Memory || RS-232 || ABA TRACK II',
            manufacture: 'НПВ Болид'
        },
        {
            id: 4,
            name: 'Считыватель (черная рамка)',
            model: 'Proxy-3MA',
            readers: 'MIFARE || EM-Marin || HID ProxCard II',
            interface: 'Wiegand-26/37/44 || Dallas Touch Memory || RS-232 || ABA TRACK II',
            manufacture: 'НПВ Болид'
        },
        {
            id: 5,
            name: 'Считыватель (белый)',
            model: 'PERCo-IR13G	',
            readers: 'EM-Marin || HID ProxCard II',
            interface: 'RS-485 (PERCo) || Wiegand-26/34/42/58',
            manufacture: 'PERCo'
        },
    ]

    const arrayOfButtonEntrance = [
        {
            id: 0,
            name: 'Вызывная видеопанель (серая) AHD 1080p',
            model: 'iPanel 2 WG EM HD',
            readers: 'EM-Marin',
            interface: 'Wiegand 26',
            manufacture: 'Tantos'
        },
        {
            id: 1,
            name: 'Вызывная видеопанель (серая) 1000 ТВЛ',
            model: 'CTV-D3002EM S',
            readers: 'EM-Marin',
            interface: 'Wiegand 26',
            manufacture: 'CTV'
        },
        {
            id: 2,
            name: 'Вызывная панель IP-видеодомофона (черно-серая) 2 Mp',
            model: 'DS-KV6113-PE1',
            readers: 'Mifare',
            interface: 'Только с видеодомофоном',
            manufacture: 'Hikvision'
        },
        {
            id: 3,
            name: 'Вызывная панель IP-видеодомофона (черно-серая) 2 Mp',
            model: 'DS-KV6103-PE1(С)',
            readers: 'Без считывателя',
            interface: 'Только с видеодомофоном',
            manufacture: 'Hikvision'
        },
        {
            id: 4,
            name: 'Будет только считыватель. Без вызывной панели.',
            model: '',
            readers: '',
            interface: '',
            manufacture: ''
        }
    ]

    const arrayOfVideoMonitor = [
        {
            id: 0,
            name: 'Монитор видеодомофона (белая)',
            model: 'Amelie',
            manufacture: 'Tantos'
        },
        {
            id: 1,
            name: 'Монитор видеодомофона (серый)',
            model: 'CTV-M1703 S',
            manufacture: 'CTV'
        },
        {
            id: 2,
            name: 'Монитор IP-домофона (черно-черый)',
            model: 'DS-KH6320-TE1',
            manufacture: 'Hikvision'
        }
    ]


    const arrayOfCodePanel = [
        {
            id: 0,
            name: '',
            model: '',
            manufacture: ''
        },
        {
            id: 1,
            name: '',
            model: '',
            manufacture: ''
        },
        {
            id: 2,
            name: '',
            model: '',
            manufacture: ''
        },
        {
            id: 3,
            name: '',
            model: '',
            manufacture: ''
        }
    ]

    const arrayOfBioPanel = [
        {
            id: 0,
            name: '',
            model: '',
            manufacture: ''
        },
        {
            id: 1,
            name: '',
            model: '',
            manufacture: ''
        },
        {
            id: 2,
            name: '',
            model: '',
            manufacture: ''
        },
        {
            id: 3,
            name: '',
            model: '',
            manufacture: ''
        }
    ]

    function saveInLocalStorage(value: any) {
        setAccessEntrance(value)
        localStorage.setItem('accessEntrance', value)
    }

    //todo: составить спецификацию оборудования, которая будет соответствовать отмеченным параметрам
    // или исходя из готовой спецификации сделать такой калькулятор, который подбирал бы оборудование для этой спецификации
    return (
        <div className={'flex flex-col justify-center gap-4'}>
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
                    {arrayOfAccessReader.map(({id, name, model, manufacture}) => (
                        <Option
                            key={id}
                            value={manufacture}
                        >
                            {name + " || " + model + " || " + manufacture}
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
                    {arrayOfButtonEntrance.map(({id, name: buttonExit}) => (
                        <Option
                            key={id}
                            value={buttonExit}
                        >
                            {buttonExit}
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
                    {arrayOfCodePanel.map(({id, manufacture}) => (
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
                    {arrayOfBioPanel.map(({id, manufacture}) => (
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