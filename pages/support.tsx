import React, { useEffect } from 'react';
import Script from 'next/script';
import Head from 'next/head';
import NavBar from '../components/layout/header';
import '../public/assets/css/style.css';
import '../public/assets/css/test.css';
import '../public/assets/css/guilds.css';

const gtagScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YSD2Q72W1H');
`;

const DiscordRedirect = () => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = gtagScript;
    document.head.appendChild(script);

  useEffect(() => {
    const discordServerInviteLink = 'https://discord.gg/TUqZTutDUz';
    
    sessionStorage.setItem('previousPage', window.location.href);

    window.open(discordServerInviteLink, '_blank');

    window.location.replace(document.referrer);
  }, []);

  return (
    <div>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YSD2Q72W1H"/>
            <Script id="gtag" dangerouslySetInnerHTML={{ __html: gtagScript }} />

            <Head>
                {/* Main */}
                <title>Akira - Discord Bot</title>
                <link rel="shortcut icon" href="/assets/images/favicon.ico" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/assets/images/android-chrome-192x192.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/assets/images/android-chrome-512x512.png" />

                {/* Meta tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                
                {/* Discord tag */}
                <meta property="og:url" content="https://akira.lynnux.xyz/support"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Akira - Support Server."/>
                <meta property="og:description" content="Your All-in-One Discord Bot for Utility, Moderation, Logging, Economy, Automation, and More! Power up your server with Akira's versatility."/>
                <meta property="og:image" content="https://cdn.lynnux.xyz/images/AkiraAvatar.png"/>
                <meta name="theme-color" content="#f47fff"/>
            </Head>
            <NavBar active="Home"/>

    </div>
  );
};

export default DiscordRedirect;
