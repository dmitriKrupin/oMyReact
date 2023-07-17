import React from "react";
import {Button, Slider, Step, Stepper} from "@material-tailwind/react";
import Head from "next/head";


export default function CctvPage() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);
    const [numberOfCameras, setNumberOfCameras] = React.useState(0);
    const [lengthOfGofra, setLengthOfGofra] = React.useState(0);
    const [lengthOfCabelCanal, setLengthOfCabelCanal] = React.useState(0);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
    let lengthOfCables = Number(lengthOfGofra) + Number(lengthOfCabelCanal);

    function getNumberOfCameras(event: any) {
        setNumberOfCameras(event.target.value);
    }

    function getLengthOfGofra(event: any) {
        setLengthOfGofra(event.target.value);
    }

    function getLengthOfCabelCanal(event: any) {
        setLengthOfCabelCanal(event.target.value);
    }

    return (
        <div className={'calculator'}>
            <Head>
                <title>{'K-12.PRO | Расчет видеонаблюдения'}</title>
            </Head>
            <div className="w-full py-4 px-8">
                <div className={'h-80 w-full'}>
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
                    <div className={'h-8 flex flex-row justify-between'}>
                        <div>Общая длина кабельных трасс:</div>
                        <div className={'text-blue-500 font-bold'}>{lengthOfCables}</div>
                    </div>
                    <div className={'h-8 flex flex-row justify-center items-center'}>
                        <div className={'h-8 basis-1/3'}>
                            В гофрированной трубе 20 мм
                            {lengthOfGofra}
                        </div>
                        <Slider
                            className={'basis-2/3'}
                            min={0}
                            max={315}
                            step={15}
                            onChange={getLengthOfGofra}
                        />
                    </div>
                    <div className={'h-8 flex flex-row justify-center items-center'}>
                        <div className={'h-8 basis-1/3'}>
                            В кабель-канале 40*20 мм
                            {lengthOfCabelCanal}
                        </div>
                        <Slider
                            className={'basis-2/3'}
                            min={0}
                            max={315}
                            step={15}
                            onChange={getLengthOfCabelCanal}
                        />
                    </div>
                </div>
                <Stepper
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)}
                >
                    <Step onClick={() => setActiveStep(0)}>1</Step>
                    <Step onClick={() => setActiveStep(1)}>2</Step>
                    <Step onClick={() => setActiveStep(2)}>3</Step>
                    <Step onClick={() => setActiveStep(3)}>4</Step>
                </Stepper>
                <div className="mt-16 flex justify-between">
                    <Button onClick={handlePrev} disabled={isFirstStep}>
                        НАЗАД
                    </Button>
                    <Button onClick={handleNext} disabled={isLastStep}>
                        ВПЕРЕД
                    </Button>
                </div>
            </div>
        </div>
    );
}