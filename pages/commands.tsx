import $ from 'jquery';
import Script from 'next/script';
import React, { useEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/layout/footer';
import CommandList from '../components/ui/commands'
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

  
const Commands = () => {
    const headerPadding: React.CSSProperties = {marginBottom: '2.5%'}
    const mainPadding: React.CSSProperties = {margin: '1em 2em 1em 2em'}

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
            <Head>
                {/* Main */}
                <title>Akira - Commands - Discord Bot</title>
                <link rel="shortcut icon" href="/assets/images/favicon.ico" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/assets/images/android-chrome-192x192.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/assets/images/android-chrome-512x512.png" />

                {/* Meta tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                {/* Linking tags */}
                <Script src="/assets/javascript/commands.js"/>
                <link rel="stylesheet" href="/assets/css/style.css"/>
                <link rel="stylesheet" href="/assets/css/main.chunk.css"/>

                {/* Google tag */}
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YSD2Q72W1H" />
                <Script dangerouslySetInnerHTML={{ __html: gtagScript }} />

                {/* Discord tag */}
                <meta property="og:url" content="https://akira.lynnux.xyz/commands/"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Akira - Commands."/>
                <meta property="og:description" content="Looking for a comprehensive list of commands for Akira? You found it, you'll find all the information you need to use Akira to her fullest potential. From moderation to reaction-roles, and our Commands page makes it easy to find the features you're looking for. Akira's Commands page is an essential resource for getting the most out of our bot."/>
                <meta property="og:image" content="https://cdn.lynnux.xyz/images/AkiraAvatar.png"/>
                <meta name="theme-color" content="#f47fff"/>
            </Head>
            <header style={headerPadding}>
                <nav className=" navbar nav-bar " role="navigation " aria-label="main navigation ">
                    <div className="navbar-brand ">
                        <a className="navbar-item " href="./">
                            <p className="nav-name ">Akira</p>
                        </a>
                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar-unfold">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div className="navbar-menu " id="navbar-unfold ">
                        <div className="navbar-end ">
                            <a className="navbar-item " href="../"><i className="nav-icons fas fa-home nav-fa"></i>Home</a>
                            <a className="navbar-item nav-active" href="../commands "><i className="nav-icons fas fa-terminal nav-fa "></i>Commands</a>
                            <a className="navbar-item " href="https://documentation.lynnux.xyz/ "><i className="nav-icons fas fa-book-open nav-fa "></i>Documentation</a>
                            <a className="navbar-item " href="../permissions "><i className="nav-icons fas fa-check nav-fa "></i>Permissions</a>
                            <a className="navbar-item " href="../support " target="_blank "><i className="nav-icons fab fa-discord nav-fa "></i>Support</a>
                            <a className="navbar-item last-item " href="../invite " target="_blank "><i className="nav-icons fas fa-plus nav-fa "></i>Invite</a>
                        </div>
                    </div>
                </nav>
            </header>         
            <div className="main" style={mainPadding}>
                <CommandList/>
            </div>  
            <Footer/>
        </>
    );
}
export default Commands;

/*
⣿⡟⠙⠛⠋⠩⠭⣉⡛⢛⠫⠭⠄⠒⠄⠄⠄⠈⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⡇⠄⠄⠄⠄⣠⠖⠋⣀⡤⠄⠒⠄⠄⠄⠄⠄⠄⠄⠄⠄⣈⡭⠭⠄⠄⠄⠉⠙
⣿⡇⠄⠄⢀⣞⣡⠴⠚⠁⠄⠄⢀⠠⠄⠄⠄⠄⠄⠄⠄⠉⠄⠄⠄⠄⠄⠄⠄⠄
⣿⡇⠄⡴⠁⡜⣵⢗⢀⠄⢠⡔⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⣿⡇⡜⠄⡜⠄⠄⠄⠉⣠⠋⠠⠄⢀⡄⠄⠄⣠⣆⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸
⣿⠸⠄⡼⠄⠄⠄⠄⢰⠁⠄⠄⠄⠈⣀⣠⣬⣭⣛⠄⠁⠄⡄⠄⠄⠄⠄⠄⢀⣿
⣏⠄⢀⠁⠄⠄⠄⠄⠇⢀⣠⣴⣶⣿⣿⣿⣿⣿⣿⡇⠄⠄⡇⠄⠄⠄⠄⢀⣾⣿
⣿⣸⠈⠄⠄⠰⠾⠴⢾⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⢁⣾⢀⠁⠄⠄⠄⢠⢸⣿⣿
⣿⣿⣆⠄⠆⠄⣦⣶⣦⣌⣿⣿⣿⣿⣷⣋⣀⣈⠙⠛⡛⠌⠄⠄⠄⠄⢸⢸⣿⣿
⣿⣿⣿⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠈⠄⠄⠄⠄⠄⠈⢸⣿⣿
⣿⣿⣿⠄⠄⠄⠘⣿⣿⣿⡆⢀⣈⣉⢉⣿⣿⣯⣄⡄⠄⠄⠄⠄⠄⠄⠄⠈⣿⣿
⣿⣿⡟⡜⠄⠄⠄⠄⠙⠿⣿⣧⣽⣍⣾⣿⠿⠛⠁⠄⠄⠄⠄⠄⠄⠄⠄⠃⢿⣿
⣿⡿⠰⠄⠄⠄⠄⠄⠄⠄⠄⠈⠉⠩⠔⠒⠉⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠐⠘⣿
⣿⠃⠃⠄⠄⠄⠄⠄⠄⣀⢀⠄⠄⡀⡀⢀⣤⣴⣤⣤⣀⣀⠄⠄⠄⠄⠄⠄⠁⢹⠀
⣿⣿⣿⠏⠉⠉⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⠀⠀⢀⣿⣿⣿⠿⠿⢿⠿⠿⢿⠿⠿⠿⠿⠿⣿⣿⠿⠿⠿⠿⠿⣿⣿⣿
⣿⣿⡟⠀⠀⣸⣿⣿⡏⠀⠀⣿⠀⠀⣸⠀⠀⠀⠀⠀⢸⡿⠀⠀⠀⠀⠀⣹⣿⣿⣿⣿
⣿⣿⡇⠀⠀⠛⠛⠛⡇⠀⠀⠇⠀⠀⡟⠀⠀⡞⠀⠀⠼⠇⠀⠀⡇⠀⠀⢿⣿⣿⣿⣿
⣿⣿⡃⠀⠀⠀⠀⢠⡇⠀⠀⠀⠀⢀⣇⣀⣀⣧⡀⠀⣀⣀⣀⣠⣆⠀⠀⣸⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠈⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⣤⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
*/