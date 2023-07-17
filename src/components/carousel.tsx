import {Carousel, Typography} from "@material-tailwind/react";
import Image from "next/image";
import Img01 from '@/assets/reviews/image-01.jpg';
import Img02 from '@/assets/reviews/image-02.jpg';
import Img03 from '@/assets/reviews/image-03.jpg';
import Link from "next/link";

const reviews = [
    {
        name: 'ООО "НВС Групп"',
        description: 'Турникеты PERCO, шлагбаум CAME, Контроль доступа на оборудовании БОЛИД, ' +
            'Серверное оборудование на базе Элтекс, Структурированная кабельная сеть, ' +
            'Региональная автоматизированная система централизованного оповещения (РАСЦО) ' +
            'на базе УКБ СГС-22-МЕ 600, Проводное радиовещание на основе оборудования РТС-2000',
        image: {Img01}.Img01,
        alt: 'НВС Групп. Отзыв о выполненных работах.'
    },
    {
        name: 'ООО "Мы рядом"',
        description: 'Серверное оборудование на базе MikroTik, Cтруктурированная кабельная сеть, ' +
            'Цифровое и аналоговое видеонаблюдение на базе оборудования Dahua Technology и RVI',
        image: {Img02}.Img02,
        alt: 'Мы рядом. Отзыв о выполненных работах.'
    },
    {
        name: 'ООО "ВИД Покупай"',
        description: 'Серверное оборудование на базе ZyXEL, Cтруктурированная кабельная сеть, ' +
            'Цифровое и аналоговое видеонаблюдение на базе оборудования Dahua Technology и RVI',
        image: {Img03}.Img03,
        alt: 'ВИД Покупай. Отзыв о выполненных работах.'
    },
]

export default function CarouselReviews() {
    return (
        <Carousel>
            {reviews.map((item) => (
                <div
                    key={item.name}>
                    <div className="relative h-full w-full">
                        <Image src={item.image} alt={item.alt} className="rounded-3xl max-h-[38rem]"></Image>
                        <div className="absolute inset-0 bg-black/50 rounded-3xl">
                            <div className={'absolute text-center inset-x-0 bottom-10'}>
                                <Typography
                                    variant="h8"
                                    color="white"
                                    className={'text-left mx-16 mb-10'}>
                                    <div className={'font-extrabold'}>{item.name}</div>
                                    {item.description}
                                </Typography>
                                <div className="flex justify-left ml-16 mb-6">
                                    <button className={'btn-secondary'}>
                                        <Link href={'/projects'}>Все проекты</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}