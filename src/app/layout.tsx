import React, {Suspense} from "react";
import Nav from "@/app/nav";
import Link from "next/link";
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import './globals.css'
import Head from "next/head";

const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

export default function RootLayout({
                                       children,
                                       home
                                   }: {
    children: React.ReactNode
    home?: boolean | undefined
}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <body className="h-full">
                        <Suspense>
                            <Nav/>
                        </Suspense>
                        </body>
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <body className="h-full">
                        <Suspense>
                            <Nav/>
                        </Suspense>
                        </body>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <a href="/"
                          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Вернуться на главную страницу</a>
                </div>
            )}
        </div>
    )
}


/*import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import './globals.css'

const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({
    children,
        home
}: {
    children: React.ReactNode
    home ? : boolean
}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/profile.jpg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt={name}
                            />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/"
                          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Вернуться на главную страницу</Link>
                </div>
            )}
        </div>
    )
}*/

/*import './globals.css'
import {
    Inter
} from 'next/font/google'
import Nav from './nav';
import Link from "next/link";
import Head from "next/head";
import React from "react";

const inter = Inter({
    subsets: ['latin']
})
const siteTitle = 'Калькулятор видеонаблюдения и контроля доступа'
// @ts-ignore
export default function RootLayout({
    children, home
}: {
    children: React.ReactNode
    home ? : boolean
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Head>
            <link rel="icon" href="/favicon.ico"/>
            <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
            />
            <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle}/>
            <meta name="twitter:card" content="summary_large_image"/>
        </Head>
        <header>
            {home ? (
                <Nav/>
            ) : (
                <Nav/>
            )}
        </header>
        <main>{children}</main>
        {!home && (
            <div>
                ТЕСТОВАЯ НАДПИСЬ: ДОЛЖНО ОТОБРАЖАТЬСЯ ВЕЗДЕ КРОМЕ ГЛАВНОЙ СТРАНИЦЫ
                <Link href="/">← Back to home</Link>
            </div>
        )}
        </body>
        </html>
    )
}*/