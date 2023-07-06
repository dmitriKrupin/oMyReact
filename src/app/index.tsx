import Head from 'next/head'
import RootLayout, {siteTitle} from './layout'
import utilStyles from '../styles/utils.module.css'
import './globals.css'

export default function Home() {
    return (
        <RootLayout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this in{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    <div>
                        Пример кнопки из tailwindCSS
                        <br/>
                        <button type="submit"
                                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                            Это кнопка пример из Tailwind
                        </button>
                    </div>
                </ul>
            </section>
        </RootLayout>
    )
}
