import React from "react";
import { Button, Step, Stepper, Typography } from "@material-tailwind/react";
import Head from "next/head";
import FirstStep from "../access/firsStep";
import SecondStep from "../access/secondStep";
import ThirdStep from "../access/thirdStep";
import FourthStep from "../access/fourthStep";
import ResultStep from "../access/resultStep";
import FifthStep from "../access/fifthStep";
import SixthStep from "../access/sixthStep";

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
      id: "result-id",
      stepForVisible: "resultStep",
      numberOfStep: 6,
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

  const STEPPER = () => (
    <Stepper
      className="mt-8"
      activeStep={activeStep}
      isLastStep={(value) => {
        console.log("STEPPER " + activeStep);
        setIsLastStep(value);
      }}
      isFirstStep={(value) => setIsFirstStep(value)}
    >
      {arrayOfIdsForSteps.map(({ id, stepForVisible, numberOfStep }) => (
        <Step key={id} id={stepForVisible} onClick={getPageAccessForStep}>
          {numberOfStep + 1}
        </Step>
      ))}
    </Stepper>
  );

  const PAGINATION = () => (
    <div className="flex justify-center">
      <Typography color="gray" className="font-normal">
        <strong className="text-blue-500 rounded-full">{activeStep + 1}</strong>{" "}
        - <strong className="text-blue-500">{arrayOfIdsForSteps.length}</strong>
      </Typography>
    </div>
  );

  const [paginationOrStepper, setPaginationOrStepper] = React.useState(STEPPER);

  const changePagination = () => {
    console.log(activeStep);
    if (window.innerWidth > 768) {
      setPaginationOrStepper(STEPPER);
    } else {
      setPaginationOrStepper(PAGINATION);
    }
  };

  React.useEffect(() => {
    const onResize = () => changePagination();

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return (
    <div className={"calculator"}>
      <Head>
        <title>{"K-12.PRO | Расчет контроля доступа"}</title>
      </Head>
      <div>
        <div className={"w-full h-full md:h-80 py-4 px-8 p-2"}>
          <div>{stepForOutput}</div>
        </div>

        {paginationOrStepper}

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
