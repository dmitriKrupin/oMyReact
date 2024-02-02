import React from "react";
import { Button, Step, Stepper } from "@material-tailwind/react";
import Head from "next/head";
import SecondStep from "./secondStep";
import ThirdStep from "./thirdStep";
import FourthStep from "./fourthStep";
import FirstStep from "./firstStep";
import ResultStep from "@/components/cctv/result/resultStep";
import Appointment from "../appointment";
import AuthorizationPage from "@/pages/authorizations";

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
      id: "appointment-id",
      stepForVisible: "appointmentStep",
      numberOfStep: 4,
      stepForOutput: <Appointment />,
    },
    {
      id: "result-id",
      stepForVisible: "resultStep",
      numberOfStep: 5,
      stepForOutput: <ResultStep />,
    },
  ];

  function getSubmitOrForwardNameOfButton() {
    //todo: добавить изменение названия кнопки с получиь расчет на СОХРАНИТЬ
    // и добавить уведомление, что черновик сохранен в личном кабинете
    if (activeStep + 1 === 5) {
      return (
        <Button
          size="sm"
          color="blue"
          value="Выбрать время"
          onClick={() => {
            setActiveStep((cur) => cur + 1);
            setStepForOutput(<ResultStep />);
          }}
        >
          Выбрать время
        </Button>
      );
    }

    if (isLastStep && activeStep + 1 == 6) {
      console.log();
      return (
        <Button
          size="sm"
          color="blue"
          value="Сохранить"
          onClick={() => {
            setStepForOutput(<AuthorizationPage />);
          }}
        >
          Сохранить
        </Button>
      );
    }

    return (
      <Button
        color="blue"
        size="sm"
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
          <div className="flex flex-col justify-center items-center">
            {stepForOutput}
          </div>
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
            color="blue"
            size="sm"
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
