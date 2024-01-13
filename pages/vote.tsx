import '../public/assets/css/vote.css';
import '../public/assets/css/style.css';

import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Head from 'next/head';
import Footer from '../components/layout/footer';
import NavBar from '../components/layout/header';


const gtagScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YSD2Q72W1H');
`;

const setupBurger = () => {
    const $burger = $(".navbar-burger");
    const $menu = $(".navbar-menu");
  
    $burger.click(function () {
      $burger.toggleClass("is-active");
      $menu.toggleClass("is-active");
    });
  
    return () => {
      $burger.off('click');
    };
};

const Vote = () => {
    useEffect(() => {
        setupBurger();
    
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = gtagScript;
        document.head.appendChild(script);
    
        return () => {
          document.head.removeChild(script);
        };
      }, []);

      return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YSD2Q72W1H"/>
            <Script id="gtag" dangerouslySetInnerHTML={{ __html: gtagScript }} />
            <Head>
                {/* Main */}
                <title>Akira - Vote list</title>
                <link rel="shortcut icon" href="/assets/images/favicon.ico" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/assets/images/android-chrome-192x192.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/assets/images/android-chrome-512x512.png" />

                {/* Meta tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                
                {/* Discord tag */}
                <meta property="og:url" content="https://akira.lynnux.xyz/vote"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Akira - Vote Page."/>
                <meta property="og:description" content="Show your support for Akira by voting on various platforms! Your votes help us grow and improve. Vote now and unlock exclusive perks for our dedicated community."/>
                <meta property="og:image" content="https://cdn.lynnux.xyz/images/AkiraAvatar.png"/>
                <meta name="theme-color" content="#f47fff"/>
            </Head>
            <main>
                <div className='bg-counter'></div>
                <NavBar/>
                <div className="columns is-flex-wrap-wrap is-vcentered">
                    <div className="column is-full-mobile is-full-tablet is-full-desktop is-hidden-widescreen">
                        <section className="hero">
                            <div className="hero-body">
                                <p className="title is-1 is-spaced">Vote for me on these Bot Lists!</p>
                                <p className="subtitle">Thank you in advance, this helps bump up the bot and get the word out!</p>
                            </div>
                        </section>
                    </div>
                    <div className="column">
                        <section className="hero">
                            <div className="hero-body">
                                <div className="tile flex-grid is-justify-content-left">
                                    <div className="tile flex-item-container">
                                        <a href="https://discordservices.net/bot/738057910923296839" target="_blank">
                                            <article className="tile is-child notification is-danger">
                                                <p className="title">Discord Services</p>
                                            </article>
                                        </a>
                                    </div>
                                    <div className="tile flex-item-container">
                                        <a href="https://voidbots.net/bot/738057910923296839/vote" target="_blank">
                                            <article className="tile is-child notification is-link">
                                                <p className="title">Void Bots</p>
                                            </article>
                                        </a>
                                    </div>
                                    <div className="tile flex-item-container">
                                        <a href="https://infinitybots.gg/bot/738057910923296839/vote" target="_blank">
                                            <article className="tile is-child notification is-link">
                                                <p className="title">Infinity Bots</p>
                                            </article>
                                        </a>
                                    </div>
                                    <div className="tile flex-item-container">
                                        <a href="https://top.gg/bot/738057910923296839/vote" target="_blank">
                                            <article className="tile is-child notification is-link">
                                                <p className="title">Top.gg</p>
                                            </article>
                                        </a>
                                    </div>
                                    <div className="tile flex-item-container">
                                        <a href="https://discordbotlist.com/bots/akira-8248/upvote" target="_blank">
                                            <article className="tile is-child notification is-link">
                                                <p className="title">DiscordBotList</p>
                                            </article>
                                        </a>
                                    </div>
                                    <div className="tile flex-item-container">
                                        <a href="https://diffcord.com/bots/738057910923296839/vote" target="_blank">
                                            <article className="tile is-child notification is-link">
                                                <p className="title">diffcord.com</p>
                                            </article>
                                        </a>
                                    </div>
                                    <div className="tile flex-item-container">
                                        <a href="https://discords.com/bots/bot/738057910923296839/vote" target="_blank">
                                            <article className="tile is-child notification is-link">
                                                <p className="title">discords.com</p>
                                            </article>
                                        </a>
                                    </div>
                                    <div className="tile flex-item-container">
                                        <a href="https://discord.com/application-directory/738057910923296839" target="_blank">
                                            <article className="tile is-child notification is-link">
                                                <p className="title">Discord Discovery</p>
                                            </article>
                                        </a>
                                    </div>
                                    <div className="tile flex-item-container">
                                        <a href="https://topcord.xyz/bot/738057910923296839" target="_blank">
                                            <article className="tile is-child notification is-link">
                                                <p className="title">Topcord</p>
                                            </article>
                                        </a>
                                    </div>
                                    <div className="tile flex-item-container">
                                        <a href="https://disforge.com/vote/3181-akira" target="_blank">
                                            <article className="tile is-child notification is-link">
                                                <p className="title">Disforge</p>
                                            </article>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="column is-hidden-touch is-two-fifths-widescreen is-two-fifths-fullhd">
                        <section className="hero">
                            <div className="hero-body">
                                <p className="title is-1 is-spaced">Vote for me on these Bot Lists!</p>
                                <p className="subtitle">Thank you in advance, this helps bump up the bot and get the word out!</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}
export default Vote;
