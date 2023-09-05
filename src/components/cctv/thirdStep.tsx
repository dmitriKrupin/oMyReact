import React, {useEffect} from 'react';
import {Slider} from '@material-tailwind/react';

export default function ThirdStep() {
    const [numberOfCameras, setNumberOfCameras] = React.useState(0);

    useEffect(() => {
        let value;
        value = localStorage.getItem('numberOfCameras') || '0';
        setNumberOfCameras(parseInt(value));
    }, [])

    function saveInLocalStorage(event: any) {
        let numberOfCameras = event.target.valueAsNumber;
        setNumberOfCameras(numberOfCameras);
        localStorage.setItem('numberOfCameras', numberOfCameras);
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
                    max={100}
                    step={1}
                    //todo: поправить полоску индикации, чтобы она отображала правильную индикацию, если значений меньше 100
                    defaultValue={numberOfCameras}
                    value={numberOfCameras}
                    onChange={saveInLocalStorage}
                />
            </div>
        </div>
    );
}