import React from "react";
import {Button, Step, Stepper} from "@material-tailwind/react";
import Head from "next/head";
import FirstStep from "@/components/cctv/firstStep";
import SecondStep from "@/components/cctv/secondStep";
import ThirdStep from "@/components/cctv/thirdStep";

export default function CctvPage() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);
    const [divForInput, setDivForInput] = React.useState(<FirstStep/>);

    function getPageCctvForStep(event: any) {
        let idOfStep = event.target.id;
        arrayOfIdsForSteps.forEach((element) => {
            if (idOfStep === element.stepForVisible) {
                setActiveStep(element.numberOfStep);
                setDivForInput(element.divForInput);
            }
        })
    }

    /*function firstDiv() {
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
    }*/

    /*function secondDiv() {
        const [numberOfCameras, setNumberOfCameras] = React.useState(0);

        function getNumberOfCameras(event: any) {
            setNumberOfCameras(event.target.value);
        }

        return (
            <div className={'pt-4'}>
                <div className={'h-8 flex flex-row justify-between'}>
                    <div>Количество камер:</div>
                    <div className={'text-blue-500 font-bold'}>{numberOfCameras}</div>
                </div>
                <div className={'h-8 flex flex-row justify-center items-center'}>
                    <Slider
                        min={0}
                        max={32}
                        step={1}
                        onChange={getNumberOfCameras}
                    />
                </div>
            </div>
        );
    }*/

    /*function thirdDiv() {
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
            <div className={'h-8 flex flex-col'}>
                <div className={'h-8 flex flex-row justify-between'}>
                    <div>Общая длина кабельных трасс:</div>
                    <div className={'text-blue-500 font-bold'}>{lengthOfCables}</div>
                </div>
                {arrayOfCctvMetrics.map(({label, lengthOfLabel, idOfSwitch, getLengthOfLabel}) => (
                        <div className={'h-8 flex flex-row justify-around items-center gap-2'}
                             key={label}
                        >

                            <div className={'basis-1/2'}>
                                <Switch
                                    id={idOfSwitch}
                                    label={label}
                                    ripple={true}
                                />
                            </div>
                            <div className={'flex flex-row items-center basis-1/2 gap-2'}>
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
    }*/

    const arrayOfIdsForSteps = [
        {
            id: 'manufacture-id',
            stepForVisible: 'firstStep.tsx',
            numberOfStep: 0,
            divForInput: <FirstStep/>
        },
        {
            id: 'countOfCameras-id',
            stepForVisible: 'secondStep',
            numberOfStep: 1,
            divForInput: <SecondStep/>
        },
        {
            id: 'countOfCables-id',
            stepForVisible: 'thirdStep',
            numberOfStep: 2,
            divForInput: <ThirdStep/>
        }
    ]

    return (
        <div className={'calculator'}>
            <Head>
                <title>{'K-12.PRO | Расчет видеонаблюдения'}</title>
            </Head>
            <div>
                <div className={'w-full h-[28rem] md:h-80 py-4 px-8 p-2'}>
                    <div>
                        {divForInput}
                    </div>
                </div>

                <Stepper
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)}
                >
                    {arrayOfIdsForSteps.map(({id, stepForVisible, numberOfStep}) => (
                        <Step
                            key={id}
                            id={stepForVisible}
                            onClick={getPageCctvForStep}
                        >
                            {numberOfStep + 1}
                        </Step>
                    ))}
                </Stepper>

                <div className="mt-16 flex justify-between">
                    <Button
                        onClick={() => {
                            if (!isFirstStep) {
                                setActiveStep((cur) => cur - 1)
                                arrayOfIdsForSteps.forEach((element) => {
                                    if (activeStep - 1 === element.numberOfStep) {
                                        setDivForInput(element.divForInput)
                                    }
                                })
                            }
                        }}
                        disabled={isFirstStep}
                    >
                        НАЗАД
                    </Button>
                    <Button
                        onClick={() => {
                            if (!isLastStep) {
                                setActiveStep((cur) => cur + 1)
                                arrayOfIdsForSteps.forEach((element) => {
                                    if (activeStep + 1 === element.numberOfStep) {
                                        setDivForInput(element.divForInput)
                                    }
                                })
                            }
                        }}
                        disabled={isLastStep}
                    >
                        ВПЕРЕД
                    </Button>
                </div>
            </div>
        </div>
    );
}