import Layout from "@/components/layout";
import Head from "next/head";

export default function ProjectsPage() {
  return (
    <Layout home>
      <Head>
        <title>{"K-12.PRO | База знаний"}</title>
      </Head>
      <div className={"main"}>
        <>
          <div className="grid grid-cols-6 gap-4 text-center h-96">
            <div>АПС</div>
            <div>СОУЭ</div>
            <div>АППЗ</div>
            <div>СОТ</div>
            <div>СКУД</div>
            <div>ОС</div>
          </div>
        </>
      </div>
    </Layout>
  );
}
