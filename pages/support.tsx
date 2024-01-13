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
  useEffect(() => {
    const discordServerInviteLink = 'https://discord.gg/TUqZTutDUz';

    if (typeof window !== 'undefined') {
      sessionStorage.setItem('previousPage', window.location.href);
      window.open(discordServerInviteLink, '_blank');
      window.location.replace(document.referrer);
    }
  }, []);

  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YSD2Q72W1H" />
      <Script id="gtag" dangerouslySetInnerHTML={{ __html: gtagScript }} />

      <Head>
        {/* Main */}
        <title>Akira - Discord Bot</title>
        {/* ... other head elements ... */}
      </Head>
      <NavBar active="Home" />
    </>
  );
};

export default DiscordRedirect;
