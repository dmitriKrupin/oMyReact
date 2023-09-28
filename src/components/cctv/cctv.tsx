import React from "react";
import { Button, Step, Stepper } from "@material-tailwind/react";
import Head from "next/head";
import SecondStep from "./secondStep";
import ThirdStep from "./thirdStep";
import FourthStep from "./fourthStep";
import FirstStep from "./firstStep";
import ResultStep from "@/components/cctv/result/resultStep";

export default function CctvPage() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [stepForOutput, setStepForOutput] = React.useState(<FirstStep />);

  function getPageCctvForStep(event: any) {
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
      id: "ceilingHigh-id",
      stepForVisible: "firstStep",
      numberOfStep: 0,
      stepForOutput: <FirstStep />,
    },
    {
      id: "manufacture-id",
      stepForVisible: "secondStep",
      numberOfStep: 1,
      stepForOutput: <SecondStep />,
    },
    {
      id: "countOfCameras-id",
      stepForVisible: "thirdStep",
      numberOfStep: 2,
      stepForOutput: <ThirdStep />,
    },
    {
      id: "countOfCables-id",
      stepForVisible: "fourthStep",
      numberOfStep: 3,
      stepForOutput: <FourthStep />,
    },
    {
      id: "result-id",
      stepForVisible: "resultStep",
      numberOfStep: 4,
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
        <title>{"K-12.PRO | Расчет видеонаблюдения"}</title>
      </Head>
      <div>
        <div className={"w-full h-full py-4 px-0 p-2"}>
          <div>{stepForOutput}</div>
        </div>

        <Stepper
          className="mt-8"
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          {arrayOfIdsForSteps.map(({ id, stepForVisible, numberOfStep }) => (
            <Step
              key={id}
              id={stepForVisible}
              onClick={getPageCctvForStep}
              className="w-7 md:w-10 h-7 md:h-10"
            >
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
