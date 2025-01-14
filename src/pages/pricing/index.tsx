import Layout from "../../components/layout";
import Head from "next/head";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CctvPage from "../../components/cctv/cctv";
import AccessPage from "@/components/access/access";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

const calculateSystems = [
  {
    id: 0,
    name: "ВИДЕОНАБЛЮДЕНИЕ",
    page: <CctvPage />,
  },
  {
    id: 1,
    name: "КОНТРОЛЬ ДОСТУПА",
    page: <AccessPage />,
  },
];

export default function PricingPage() {
  const [service, setService] = useState(<CctvPage />);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(event: any) {
    let value = event.target.value;
    console.log(value);
    calculateSystems.forEach(({ name, page }) => {
      if (value === name) {
        setService(page);
      }
    });
    setIsOpen(true);
  }

  return (
    <Layout home>
      <Head>
        <title>{"K-12.PRO | Калькулятор стоимости"}</title>
      </Head>
      <div className={"flex flex-col lg:flex-row justify-center"}>
        <>
          {calculateSystems.map(({ name }) => (
            <div className="flex items-center justify-center p-10" key={name}>
              <Button
                value={name}
                color="blue"
                type="button"
                onClick={openModal}
                className=""
              >
                {name}
              </Button>
            </div>
          ))}

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full md:w-[70rem] h-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        <div className="text-right">
                          <button type="button" onClick={closeModal}>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </Dialog.Title>
                      <div className="mt-2">{service}</div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      </div>
    </Layout>
  );
}
