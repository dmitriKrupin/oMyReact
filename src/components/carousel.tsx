import {Carousel, Typography, Button} from "@material-tailwind/react";
import Image from "next/image";
import Img01 from '@/assets/reviews/image-01.jpg';
import Img02 from '@/assets/reviews/image-02.jpeg';


export default function CarouselReviews() {
    return (
        <Carousel>
            <div className="relative h-full w-full">
                <Image src={Img01} alt={'НВС Групп. Отзыв о выполненных работах.'}
                       className="h-full w-full object-cover"></Image>
                <div className="absolute inset-0 bg-black/50">
                    <div>
                        <Typography
                            variant="h3"
                            color="white"
                        >
                            ООО "НВС Групп"
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Button>
                                Посмотреть отзыв
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Все проекты
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <Image src={Img02} alt={'Мы рядом. Отзыв о выполненных работах.'}
                       className="h-full w-full object-cover"></Image>
                <div className="absolute inset-0 bg-black/50">
                    <div>
                        <Typography
                            variant="h3"
                            color="white"
                        >
                            ООО "Мы рядом"
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Button>
                                Посмотреть отзыв
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Все проекты
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </Carousel>
    );
}