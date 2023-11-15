import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "@/lib/posts";
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={"main"}>
        <>
          <div className="grid grid-cols-2 gap-4 text-center h-96">
            <div className="bg-yellow-300 hover:shadow-2xl">Фото объекта</div>
            <div className="bg-green-300 hover:shadow-2xl">
              Реализовано проектов
            </div>

            <div className="bg-green-300 hover:shadow-2xl">Проектирование</div>
            <div className="bg-yellow-300 hover:shadow-2xl">
              Фото структурных схем
            </div>

            <div className="bg-yellow-300 hover:shadow-2xl">Фото гарантии</div>
            <div className="bg-green-300 hover:shadow-2xl">
              Гарантия на работы
            </div>

            <div className="bg-green-300 hover:shadow-2xl">
              Раннее бронирование
            </div>
            <div className="bg-yellow-300 hover:shadow-2xl">Фото календаря</div>
          </div>
        </>
      </div>
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
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
