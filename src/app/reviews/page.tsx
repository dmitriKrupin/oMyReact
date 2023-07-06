import RootLayout from "@/app/layout";
import Head from "next/head";

export default function Reviews() {
    return (
        <RootLayout>
            <Head>
                <title>{"reviews"}</title>
            </Head>
            <article>
                <div>ЗДЕСЬ БУДУТ ОТЗЫВЫ НА МОИ РАБОТЫ!</div>
            </article>
        </RootLayout>
    )
}