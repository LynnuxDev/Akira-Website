import React, { useEffect } from 'react';
import Script from 'next/script';
import Head from 'next/head';
import NavBar from '../components/layout/header';
import '@/styles/style.css';
import '@/styles/test.css';
import '@/styles/guilds.css';
import Footer from '@/components/layout/footer';


const DiscordRedirect = () => {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YSD2Q72W1H" />

      <NavBar/>

      <Footer/>
    </>
  );
};

export default DiscordRedirect;
