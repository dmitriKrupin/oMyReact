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
        sessionStorage.setItem('stateCeilingHigh', ceilingHigh)
    }, [ceilingHigh])

    function setHigh(event: any) {
        setCeilingHigh(event.target.innerHTML);
    }

    function getHighFromSessionStorage() {
        let labelForInput = sessionStorage.getItem('stateCeilingHigh');
        if (labelForInput !== null) {
            console.log(sessionStorage.getItem('stateCeilingHigh'));
            //setCeilingHigh(labelForInput);
            return sessionStorage.getItem('stateCeilingHigh');
        } else {
            return '';
        }
    }

    function getLabelOrChooseHigh() {
        return (
            <Select
                label="Выберите высоту потолков в помещении"
                value={getHighFromSessionStorage() || ''}
            >
                {arrayOfCeilingHigh.map(({id, high}) => (
                    <Option
                        key={id}
                        //todo: добавить сохранение состояния при переходе назад или закрытии страницы
                        //todo: добавить уведомление при начале расчета, что после авториации можно сохранять результаты
                        onClick={setHigh}
                    >
                        {high}
                    </Option>
                ))}
            </Select>
        );
    }

    return (
        <div className={'flex flex-col justify-center items-center gap-4'}
        >
            {/*<Select
                label="Выберите высоту потолков в помещении"
            >
                {arrayOfCeilingHigh.map(({id, high}) => (
                    <Option
                        key={id}
                        //todo: добавить сохранение состояния при переходе назад или закрытии страницы
                        //todo: добавить уведомление при начале расчета, что после авториации можно сохранять результаты
                        onClick={setHigh}
                    >
                        {high}
                    </Option>
                ))}
            </Select>*/}
            {getLabelOrChooseHigh()}
        </div>
    )
        ;
}