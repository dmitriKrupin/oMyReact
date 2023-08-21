import React from "react";
import { Button, Step, Stepper } from "@material-tailwind/react";
import Head from "next/head";
import FirstStep from "../access/firsStep";
import SecondStep from "../access/secondStep";
import ThirdStep from "../access/thirdStep";
import FourthStep from "../access/fourthStep";
import ResultStep from "../access/resultStep";
import FifthStep from "../access/fifthStep";
import SixthStep from "../access/sixthStep";
import SeventhStep from "../access/seventhStep";

export default function AccessPage() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [stepForOutput, setStepForOutput] = React.useState(<FirstStep />);

  function getPageAccessForStep(event: any) {
    let idOfStep = event.target.id;
    arrayOfIdsForSteps.forEach((element) => {
      if (idOfStep === element.stepForVisible) {
        setActiveStep(element.numberOfStep);
        setStepForOutput(element.stepForOutput);
      }
    });
  }

  const arrayOfIdsForSteps = [
    {
      id: "accessManufacture-id",
      stepForVisible: "firstStep",
      numberOfStep: 0,
      stepForOutput: <FirstStep />,
    },
    {
      id: "entrance-id",
      stepForVisible: "secondStep",
      numberOfStep: 1,
      stepForOutput: <SecondStep />,
    },
    {
      id: "exit-id",
      stepForVisible: "thirdStep",
      numberOfStep: 2,
      stepForOutput: <ThirdStep />,
    },
    {
      id: "controller-id",
      stepForVisible: "fourthStep",
      numberOfStep: 3,
      stepForOutput: <FourthStep />,
    },
    {
      id: "power-id",
      stepForVisible: "fifthStep",
      numberOfStep: 4,
      stepForOutput: <FifthStep />,
    },
    {
      id: "door-id",
      stepForVisible: "sixthStep",
      numberOfStep: 5,
      stepForOutput: <SixthStep />,
    },
    {
      id: "cable-id",
      stepForVisible: "seventhStep",
      numberOfStep: 6,
      stepForOutput: <SeventhStep />,
    },
    {
      id: "result-id",
      stepForVisible: "resultStep",
      numberOfStep: 7,
      stepForOutput: <ResultStep />,
    },
  ];

  function getSubmitOrForwardNameOfButton() {
    //todo: добавить изменение названия кнопки с получиь расчет на СОХРАНИТЬ
    // и добавить уведомление, что черновик сохранен в личном кабинете
    if (isLastStep) {
      return (
        <Button onClick={() => setStepForOutput(<ResultStep />)}>
          СОХРАНИТЬ
        </Button>
      );
    }

    return (
      <Button
        onClick={() => {
          if (!isLastStep) {
            setActiveStep((cur) => cur + 1);
            arrayOfIdsForSteps.forEach((element) => {
              if (activeStep + 1 === element.numberOfStep) {
                setStepForOutput(element.stepForOutput);
              }
            });
          }
        }}
        disabled={isLastStep}
      >
        ВПЕРЕД
      </Button>
    );
  }

  return (
    <div className={"calculator"}>
      <Head>
        <title>{"K-12.PRO | Расчет контроля доступа"}</title>
      </Head>
      <div>
        <div className={"w-full h-full md:h-80 py-4 px-8 p-2"}>
          <div>{stepForOutput}</div>
        </div>

        <Stepper
          className="mt-8"
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          {arrayOfIdsForSteps.map(({ id, stepForVisible, numberOfStep }) => (
            <Step key={id} id={stepForVisible} onClick={getPageAccessForStep}>
              {numberOfStep + 1}
            </Step>
          ))}
        </Stepper>

        <div className="mt-8 flex justify-between">
          <Button
            onClick={() => {
              if (!isFirstStep) {
                setActiveStep((cur) => cur - 1);
                arrayOfIdsForSteps.forEach((element) => {
                  if (activeStep - 1 === element.numberOfStep) {
                    setStepForOutput(element.stepForOutput);
                  }
                });
              }
            }}
            disabled={isFirstStep}
          >
            НАЗАД
          </Button>
          {getSubmitOrForwardNameOfButton()}
        </div>
      </div>
    </div>
  );
}
