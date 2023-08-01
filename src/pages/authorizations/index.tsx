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
    //const [userName, setUserName] = React.useState('');
    //const [email, setEmail] = React.useState('');
    //const [password, setPassword] = React.useState('');
    const [userData, setUserData] = React.useState({ userName: '', email: '', password: '', error: '' })

    async function registerNewUser(event: any) {
        event.preventDefault;

        setUserData({
            ...userData,
            error: ''
        })

        try {
            const {userName, email, password} = userData
            const response = await fetch('http://localhost:8888/register', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({userName, email, password})
            })
            if (response.status === 200) {
                const { jwt_token, jwt_token_expiry } = await response.json()
                console.log(response.body);
                //await login({ jwt_token, jwt_token_expiry })
              } else {
                console.log('Login failed.')
                let error = new Error(response.statusText)
                //error.response = response
                throw error
              }
        } catch(error) {
            console.error(
                'You have an error in your code or there are Network issues.',
                error
            )
            /*const { response } = error
            setUserData(
                Object.assign({}, userData, {
                error: response ? response.statusText : error.message
                })
            )*/
        }
    }

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
                                    <form 
                                        className="mt-8 mb-2"
                                    >
                                        <div className="mb-4 flex flex-col gap-6">
                                            <Input size="lg" label="Name"
                                                id='userName'
                                                name='userName'
                                                value={userData.userName}
                                                onChange={(e)=>
                                                    setUserData({
                                                        ...userData,
                                                        userName: e.target.value
                                                    })
                                                }/>
                                            <Input size="lg" label="Email"
                                                id='email'
                                                name='email'
                                                value={userData.email}
                                                onChange={(e)=>
                                                    setUserData({
                                                        ...userData,
                                                        email: e.target.value
                                                    })
                                                }/>
                                            <Input type="password" size="lg" label="Password"
                                                id='password'
                                                name='password'
                                                value={userData.password}
                                                onChange={(e)=>
                                                    setUserData({
                                                        ...userData,
                                                        password: e.target.value
                                                    })
                                                }/>
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
                                        <Button 
                                            className="mt-6" fullWidth
                                            onClick={registerNewUser}
                                        >
                                            ЗАРЕГИСТРИРОВАТЬСЯ
                                        </Button>
                                        {userData.error && <p className='error'>Error: {userData.error}</p>}
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