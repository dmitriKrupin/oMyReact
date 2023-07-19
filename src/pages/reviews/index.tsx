import Layout from '../../components/layout';
import Head from 'next/head';
import CarouselReviews from '../../components/carousel';

export default function ReviewsPage() {
    return (
        <Layout home>
            <Head>
                <title>{'K-12.PRO | Отзывы'}</title>
            </Head>
            <div className={'main'}>
                <CarouselReviews/>
            </div>
        </Layout>
    );
}