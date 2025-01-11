import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/style.css';

function App({ Component, pageProps }: AppProps) {
    const pathname = pageProps.__NEXT_DATA__?.page || '/';
    const pageTitle = pathname.charAt(1).toUpperCase() + pathname.slice(2) || 'Home';
    const title = `${pageTitle} | Akira`;
    const canonical = `https://akira.lynnux.xyz${pathname}`;
    const is404Page = pathname === '/404';
    const isHomePage = pathname === '/';
    const mainDescription = ""

  return (
    <>
      <Head>

        <title>{title}</title>
        <meta property="og:title" content={title} />
        <link rel="canonical" href={canonical} />
        <meta property="og:site_name" content={canonical} />
        <meta property="og:description" content={mainDescription} />
        <meta name="description" content={mainDescription} />

        {/* Discord Embed */}
        <meta property="og:site_name" content="https://akira.lynnux.xyz/" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={mainDescription} />
        <meta property="og:image" content="./assets/images/favicon.ico"/>
        <meta property="og:image:secure_url" content="https://lynnux.xyz/assets/images/favicon.ico"/>
        <meta name="theme-color" content="#ff47ff" />

        {/* 404.tsx Only */}
        {is404Page && <meta name="robots" content="noindex" />}
        {isHomePage && <meta name="robots" content="index, follow" />}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;