import React from "react";
import {
    Card,
    CardBody,
    Input,
    Button,
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Checkbox,
} from "@material-tailwind/react";
import Head from "next/head";

export default function AuthorizationPage() {
    const [type, setType] = React.useState("sighIn");

    return (
        <div className={'authorization'}>
            <Head>
                <title>{'K-12.PRO | Авторизация'}</title>
            </Head>
            <div className={'border-gray-300'}>
                <Card color="transparent" shadow={false}>
                    <CardBody>
                        <Tabs value={type} className="pt-4 overflow-visible">
                            <TabsHeader className="relative z-0">
                                <Tab value="sighIn" onClick={() => setType("sighIn")}>
                                    Войти
                                </Tab>
                                <Tab value="register" onClick={() => setType("register")}>
                                    Зарегистрироваться
                                </Tab>
                            </TabsHeader>
                            <TabsBody
                                className="!overflow-x-hidden "
                                animate={{
                                    initial: {
                                        x: type === "card" ? 400 : -400,
                                    },
                                    mount: {
                                        x: 0,
                                    },
                                    unmount: {
                                        x: type === "card" ? 400 : -400,
                                    },
                                }}
                            >
                                <TabPanel value="sighIn">
                                    <Typography color="gray" className="mt-1 font-normal">
                                        для сохранения результатов расчетов, пожалуйста, войдите в личный кабинет
                                    </Typography>
                                    <form className="mt-8 mb-2">
                                        <div className="mb-4 flex flex-col gap-6">
                                            <Input size="lg" label="Email"/>
                                            <Input type="password" size="lg" label="Password"/>
                                        </div>
                                        <Checkbox
                                            label={
                                                <Typography
                                                    variant="small"
                                                    color="gray"
                                                    className="flex items-center font-normal"
                                                >
                                                    У меня есть тестовый логин и пароль
                                                </Typography>
                                            }
                                            containerProps={{className: "-ml-2.5"}}
                                        />
                                        <Button className="mt-6" fullWidth>
                                            ВОЙТИ
                                        </Button>
                                    </form>
                                </TabPanel>
                                <TabPanel value="register">
                                    <Typography color="gray" className="mt-1 font-normal">
                                        для сохранения результатов расчетов, пожалуйста, зарегистрируйтесь
                                    </Typography>
                                    <form className="mt-8 mb-2">
                                        <div className="mb-4 flex flex-col gap-6">
                                            <Input size="lg" label="Name"/>
                                            <Input size="lg" label="Email"/>
                                            <Input type="password" size="lg" label="Password"/>
                                        </div>
                                        <Checkbox
                                            label={
                                                <Typography
                                                    variant="small"
                                                    color="gray"
                                                    className="flex items-center font-normal"
                                                >
                                                    Я согласен
                                                    <a
                                                        href="#"
                                                        className="font-medium transition-colors hover:text-blue-500"
                                                    >
                                                        &nbsp;Условия использования
                                                    </a>
                                                </Typography>
                                            }
                                            containerProps={{className: "-ml-2.5"}}
                                        />
                                        <Button className="mt-6" fullWidth>
                                            ЗАРЕГИСТРИРОВАТЬСЯ
                                        </Button>
                                    </form>
                                </TabPanel>
                            </TabsBody>
                        </Tabs>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}