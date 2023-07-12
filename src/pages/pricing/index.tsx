import Layout from "@/components/layout";
import Head from "next/head";
import React, {Fragment, useState} from "react";
import {Button} from "@material-tailwind/react";
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
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <Layout>
            <Head>
                <title>{'K-12.PRO | Калькулятор стоимости'}</title>
            </Head>
            <div className={'main'}>
                <div className={'text-center'}>Выберите систему для расчета:</div>
                <div className={'flex justify-center'}>
                    {calculateSystems.map((item) => (
                        <Button
                            onClick={openModal}
                            key={item.name}
                        >
                            {item.name}
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
                                        {/*Заблюривание фона для меню вызова калькулятора*/}
                                        <div className="rounded-3xl fixed inset-16 backdrop-blur"/>
                                    </Transition.Child>

                                    <div>
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel>
                                                {item.page}
                                                <div className="mt-4">
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                        onClick={closeModal}
                                                    >
                                                        ПОЛУЧИТЬ РАСЧЕТ
                                                    </button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </Dialog>
                            </Transition>
                        </Button>
                    ))}
                </div>

            </div>
        </Layout>
    );
}
