import Layout from "@/components/layout";
import Head from "next/head";
import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
} from "@material-tailwind/react";
import p65 from '@/assets/projects/p-65.jpg'
import d23 from '@/assets/projects/d-23.jpg'
import d25 from '@/assets/projects/d-25.jpg'


export default function ProjectsPage() {
    return (
        <Layout>
            <Head>
                <title>{'K-12.PRO | Выполненные проекты'}</title>
            </Head>

            <div className={'main'}>
                <Card className="w-96">
                    <List>
                        <ListItem>
                            <ListItemPrefix>
                                {/*<Image alt="Парашютная 65" src={p65}/>*/}
                                <Avatar variant="circular" alt="alexander" src={p65.src}/>
                            </ListItemPrefix>
                            <div>
                                <Typography variant=" h6" color=" blue-gray">
                                    Видеонаблюдение.
                                </Typography>
                                <Typography variant=" small" color=" gray" className=" font-normal">
                                    г. СПб, ул. Парашютная, д. 65
                                </Typography>
                            </div>
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <Avatar variant="circular" alt=" alexander" src={d23.src}/>
                            </ListItemPrefix>
                            <div>
                                <Typography variant=" h6" color=" blue-gray">
                                    Видеонаблюдение
                                </Typography>
                                <Typography variant=" small" color=" gray" className=" font-normal">
                                    г. СПб, ул. Михаила Дудина, д. 23
                                </Typography>
                            </div>
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <Avatar variant="circular" alt=" emma" src={d25.src}/>
                            </ListItemPrefix>
                            <div>
                                <Typography variant=" h6" color=" blue-gray">
                                    Видеонаблюдение
                                </Typography>
                                <Typography variant=" small" color=" gray" className=" font-normal">
                                    г. СПб, ул. Михаила Дудина, д. 25
                                </Typography>
                            </div>
                        </ListItem>
                    </List>
                </Card>
            </div>
        </Layout>
    );
}