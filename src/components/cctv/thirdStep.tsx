import React from 'react';
import {Slider} from '@material-tailwind/react';

export default function ThirdStep() {
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
                    defaultValue={0}
                    onChange={getNumberOfCameras}
                />
            </div>
        </div>
    );
}