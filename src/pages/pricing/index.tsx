import Layout from "@/components/layout";
import Head from "next/head";
import React, {Fragment, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import CctvPage from "@/components/cctv";
import AccessPage from "@/components/access";

const calculateSystems = [
    {
        name: 'ВИДЕОНАБЛЮДЕНИЕ',
        page: <CctvPage/>
    },
    {
        name: 'КОНТРОЛЬ ДОСТУПА',
        page: <AccessPage/>
    }
]

export default function PricingPage() {

    const [service, setService] = useState(<CctvPage/>);
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal(event: any) {
        let innerHtml = event.target.innerHTML;
        calculateSystems.forEach(({name, page}) => {
            if (innerHtml === name) {
                setService(page)
            }
        })
        setIsOpen(true)
    }

    return (
        <Layout>
            <Head>
                <title>{'K-12.PRO | Калькулятор стоимости'}</title>
            </Head>
            <div className={'flex flex-row justify-center'}>
                <>
                    {calculateSystems.map((
                        {name}) => (
                        <div
                            className="flex items-center justify-center p-10"
                            key={name}
                        >
                            <button
                                type="button"
                                onClick={openModal}
                                className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            >
                                {name}
                            </button>
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
                                <div className="fixed inset-0 bg-black bg-opacity-25"/>
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
                                        <Dialog.Panel
                                            className="w-full h-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg font-medium leading-6 text-gray-900"
                                            >
                                                <div className="text-right">
                                                    <button
                                                        type="button"
                                                        onClick={closeModal}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                             viewBox="0 0 24 24" stroke-width="1.5"
                                                             stroke="currentColor"
                                                             className="w-6 h-6"
                                                             onClick={closeModal}
                                                        >
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  d="M6 18L18 6M6 6l12 12"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                {service}
                                            </div>
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
