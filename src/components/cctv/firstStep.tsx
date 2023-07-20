import {Option, Select} from '@material-tailwind/react';
import React, {useEffect} from 'react';

export default function FirstStep() {
    const [ceilingHigh, setCeilingHigh] = React.useState('');

    const arrayOfCeilingHigh = [
        {
            id: 0,
            high: 'до 3-х метров'
        },
        {
            id: 1,
            high: 'от 3-х до 5-ти метров'
        },
        {
            id: 2,
            high: 'более 5-ти метров'
        },
    ]

    useEffect(() => {
        console.log(sessionStorage.getItem('stateCeilingHigh'))
        sessionStorage.setItem('stateCeilingHigh', ceilingHigh)
    }, [ceilingHigh])

    function setHigh(event: any) {
        setCeilingHigh(event.target.innerHTML);
    }

    return (
        <div className={'flex flex-col justify-center items-center gap-4'}
        >
            <Select
                label="Выберите высоту потолков в помещении"
            >
                {arrayOfCeilingHigh.map(({id, high}) => (
                    <Option
                        key={id}
                        //todo: добавить сохранение состояния при переходе назад или закрытии страницы
                        //todo: добавить уведомление при начале расчета, что после авториации можно сохранять результаты
                        //onClick={() => setCeilingHigh(high)}
                        onClick={setHigh}
                    >
                        {high}
                    </Option>
                ))}
            </Select>
        </div>
    )
        ;
}