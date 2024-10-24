import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "@/lib/posts";
import { GetStaticProps } from "next";
import AllPhotoProjects from "@/components/allphotoprojects";
import Constructions from "@/components/constructions";

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
      <div /*className={"main"}*/>
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
            <div className="">
              <AllPhotoProjects />
            </div>
            <div className="">
              <Constructions />
            </div>
          </div>
        </>
      </div>
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
