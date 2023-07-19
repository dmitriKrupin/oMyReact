import React from 'react';
import {Slider, Switch} from '@material-tailwind/react';

export default function ThirdStep() {
    const [lengthOfGofra, setLengthOfGofra] = React.useState(0);
    const [lengthOfCabelCanal, setLengthOfCabelCanal] = React.useState(0);
    const [lengthOfShtrob, setLengthOfShtrob] = React.useState(0);
    const [lengthOfLotok, setLengthOfLotok] = React.useState(0);
    const [lengthOfPodvesnoyPotok, setLengthOfPodvesnoyPotok] = React.useState(0);

    function getLengthOfGofra(event: any) {
        setLengthOfGofra(event.target.value);
    }

    function getLengthOfCabelCanal(event: any) {
        setLengthOfCabelCanal(event.target.value);
    }

    function getLengthOfShtrob(event: any) {
        setLengthOfShtrob(event.target.value);
    }

    function getLengthOfLotok(event: any) {
        setLengthOfLotok(event.target.value);
    }

    function getLengthOfPodvesnoyPotok(event: any) {
        setLengthOfPodvesnoyPotok(event.target.value);
    }

    let lengthOfCables =
        Number(lengthOfGofra) +
        Number(lengthOfCabelCanal) +
        Number(lengthOfShtrob) +
        Number(lengthOfLotok) +
        Number(lengthOfPodvesnoyPotok);

    const arrayOfCctvMetrics = [
        {
            label: 'В гофрированной трубе 20 мм:',
            idOfSwitch: 'gofra-on',
            lengthOfLabel: lengthOfGofra,
            getLengthOfLabel: getLengthOfGofra
        },
        {
            label: 'В кабель-канале 40*20 мм:',
            idOfSwitch: 'cabelCanal-on',
            lengthOfLabel: lengthOfCabelCanal,
            getLengthOfLabel: getLengthOfCabelCanal
        },
        {
            label: 'Необходимо проштробить шириной 20 мм и глубиной 20 мм:',
            idOfSwitch: 'shtroba-on',
            lengthOfLabel: lengthOfShtrob,
            getLengthOfLabel: getLengthOfShtrob
        },
        {
            label: 'Проложить в существующем металлическом лотке:',
            idOfSwitch: 'lotok-on',
            lengthOfLabel: lengthOfLotok,
            getLengthOfLabel: getLengthOfLotok
        },
        {
            label: 'Проложить за существующим подвесным потолком типа Armstrong:',
            idOfSwitch: 'podvesnoyPotok-on',
            lengthOfLabel: lengthOfPodvesnoyPotok,
            getLengthOfLabel: getLengthOfPodvesnoyPotok
        }
    ]

    return (
        <div className={'h-full flex flex-col'}>
            <div className={'flex flex-row justify-between font-bold'}>
                <div>Общая длина трасс:</div>
                <div className={'text-blue-500 font-bold'}>{lengthOfCables}</div>
            </div>
            {arrayOfCctvMetrics.map(({label, lengthOfLabel, idOfSwitch, getLengthOfLabel}) => (
                    <div className={'h-full flex flex-col md:flex-row justify-around items-center gap-2'}
                         key={label}
                    >
                        <div className={'flex flex-col md:flex-row basis-1/2 gap-2 justify-start w-full'}>
                            <div className={'flex flex-row gap-2 w-full'}>
                                <Switch
                                    id={idOfSwitch}
                                    ripple={true}
                                />
                                <div className={'font-light text-sm md:text-base'}>
                                    {label}
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-row items-center basis-1/2 gap-4 w-full'}>
                            <div className={'w-5'}>
                                {lengthOfLabel}
                            </div>
                            <div className={'w-full'}>
                                <Slider
                                    min={0}
                                    max={315}
                                    step={15}
                                    onChange={getLengthOfLabel}
                                />
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}