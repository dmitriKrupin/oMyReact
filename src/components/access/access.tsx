import React from "react";
import { Button, Step, Stepper, Typography } from "@material-tailwind/react";
import Head from "next/head";
import FirstStep from "../access/firsStep";
import SecondStep from "../access/secondStep";
import ThirdStep from "../access/thirdStep";
import FourthStep from "../access/fourthStep";
import ResultStep from "./result/resultStep";
import FifthStep from "../access/fifthStep";
import SixthStep from "../access/sixthStep";
import Appointment from "../appointment";
import AuthorizationPage from "@/pages/authorizations";

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
      id: "controller-id",
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
      id: "door-id",
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
      id: "cable-id",
      stepForVisible: "sixthStep",
      numberOfStep: 5,
      stepForOutput: <SixthStep />,
    },
    {
      id: "appointment-id",
      stepForVisible: "appointmentStep",
      numberOfStep: 6,
      stepForOutput: <Appointment />,
    },
    {
      id: "result-id",
      stepForVisible: "resultStep",
      numberOfStep: 7,
      stepForOutput: <ResultStep />,
    },
  ];

  function getSubmitOrForwardNameOfButton() {
    if (activeStep + 1 === 7) {
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

    if (isLastStep && activeStep + 1 == 8) {
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
        value="Вперед"
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
        Вперед
      </Button>
    );
  }

  return (
    <div className={"calculator"}>
      <Head>
        <title>{"K-12.PRO | Расчет контроля доступа"}</title>
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
          isLastStep={(value) => {
            setIsLastStep(value);
          }}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          {arrayOfIdsForSteps.map(({ id, stepForVisible, numberOfStep }) => (
            <Step
              key={id}
              id={stepForVisible}
              onClick={getPageAccessForStep}
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
            value="Назад"
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
            Назад
          </Button>

          {getSubmitOrForwardNameOfButton()}
        </div>
      </div>
    </div>
  );
}
