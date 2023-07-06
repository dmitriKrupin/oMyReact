import RootLayout from "@/app/layout";
import Head from "next/head";

export default function Contacts() {
    return (
        <RootLayout>
            <Head>
                <title>{"contacts"}</title>
            </Head>
            <article>
                <div>ЗДЕСЬ БУДУТ КОНТАКТЫ!</div>
            </article>
        </RootLayout>
    )
}