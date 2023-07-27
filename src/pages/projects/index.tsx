import Layout from '../../components/layout';
import Head from 'next/head';
import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
} from '@material-tailwind/react';
import p65 from '../../assets/projects/p-65.jpg'
import d23 from '../../assets/projects/d-23.jpg'
import d25 from '../../assets/projects/d-25.jpg'

const projects = [
    {
        image: {p65}.p65,
        alt: 'Монтаж видеонаблюдения и СКС для ООО "ВИД Покупай"',
        service: 'Видеонаблюдение.',
        adress: 'г. СПб, ул. Парашютная, д. 65'
    },
    {
        image: {d23}.d23,
        alt: 'Монтаж видеонаблюдения и СКС для ООО "ВИД Покупай"',
        service: 'Видеонаблюдение.',
        adress: 'г. СПб, ул. Михаила Дудина, д. 23'
    },
    {
        image: {d25}.d25,
        alt: 'Монтаж видеонаблюдения и СКС для ООО "ВИД Покупай"',
        service: 'Видеонаблюдение.',
        adress: 'г. СПб, ул. Михаила Дудина, д. 25'
    }
]

export default function ProjectsPage() {
    return (
        <Layout home>
            <Head>
                <title>{'K-12.PRO | Выполненные проекты'}</title>
            </Head>

            <div className={'main'}>
                <Card>
                    {projects.map((item) => (
                        <List
                            key={item.image.src}>
                            <ListItem>
                                <ListItemPrefix>
                                    <Avatar variant="circular" alt={item.alt} src={item.image.src}/>
                                </ListItemPrefix>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        {item.service}
                                    </Typography>
                                    <Typography variant="small" color="gray" className=" font-normal">
                                        {item.adress}
                                    </Typography>
                                </div>
                            </ListItem>
                        </List>
                    ))}
                </Card>
            </div>
        </Layout>
    );
}