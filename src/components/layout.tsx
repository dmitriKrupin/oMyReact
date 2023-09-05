import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../pages/navigation';
import React from 'react';
import Footer from './footer'

export const siteTitle = 'K-12.PRO | Видеонаблюдение и контроль доступа'

export default function Layout({
                                   children,
                                   home
                               }: {
    children: React.ReactNode
    home?: boolean
}) {
    return (
        <div className={'container'}>
            <Head>
                <link rel="icon" href="/calculator.png"/>
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
            <header className={'header'}>
                {home ? (
                    <>
                        <Navigation/>
                    </>
                ) : (
                    <>
                        <Navigation/>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={'backToHome'}>
                    <Link href="/" className={'btn-primary'}>← На главную страницу</Link>
                </div>
            )}
            <Footer/>
        </div>
    )
}