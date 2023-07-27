import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import {getSortedPostsData} from '@/lib/posts'
import {GetStaticProps} from 'next'

export default function Home({
                                 allPostsData
                             }: {
    allPostsData: {
        date: string
        title: string
        id: string
    }[]
}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>



            {/*<div className={'main'}>
                <section className={'headingMd'}>
                    <p>
                        (This is a sample website - you’ll be building a site like this in{' '}
                        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                    </p>
                </section>
                <section className={`headingMd padding1px`}>
                    <h2 className={'headingLg'}>Blog</h2>
                    <ul className={'list'}>
                        {allPostsData.map(({id, date, title}) => (
                            <li className={'listItem'} key={id}>
                                <Link href={`/posts/${id}`}>{title}</Link>
                                <br/>
                                <small className={'lightText'}>
                                    <Date dateString={date}/>
                                </small>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>*/}
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}