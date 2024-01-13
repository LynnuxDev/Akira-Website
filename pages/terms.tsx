import $ from 'jquery';
import Script from 'next/script';
import React, { useEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/layout/footer';
import NavBar from '../components/layout/header';
import CommandList from '../components/ui/commands'
import '../public/assets/css/style.css';
import '../public/assets/css/main.css';
import '../public/assets/css/terms.css';


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
            <Script src="/assets/javascript/commands.js"/>
            {/* Google tag */}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YSD2Q72W1H" />
            <Script id="gtag" dangerouslySetInnerHTML={{ __html: gtagScript }} />

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

                {/* Discord tag */}
                <meta property="og:url" content="https://akira.lynnux.xyz/commands/"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Akira - Commands."/>
                <meta property="og:description" content="Looking for a comprehensive list of commands for Akira? You found it, you'll find all the information you need to use Akira to her fullest potential. From moderation to reaction-roles, and our Commands page makes it easy to find the features you're looking for. Akira's Commands page is an essential resource for getting the most out of our bot."/>
                <meta property="og:image" content="https://cdn.lynnux.xyz/images/AkiraAvatar.png"/>
                <meta name="theme-color" content="#f47fff"/>
            </Head>
            <div>
                <div>
                    <NavBar/>
                    <main className="main">
                        <h3>Introduction</h3>
                        <p>By using Akira, you agree to the following terms of service. These terms govern your use of the bot and any services we may offer through it.</p>
                        <h3>Use of the Bot</h3>
                        <p>Akira is intended for personal and non-commercial use. You may not use the bot for any illegal or unauthorized purpose. We reserve the right to terminate your use of the bot at any time if you violate these terms.</p>
                        <h3>User-Generated Content</h3>
                        <p>By using the Discord Bot, you may provide us with content such as messages, comments, and other materials. You grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use any content you provide through the bot.</p>
                        <h3>Modification of the Bot and these Terms</h3>
                        <p>We reserve the right to modify Akira or these terms of service at any time. Your continued use of the bot after any changes indicates your acceptance of the new terms. It is your responsibility to regularly check these terms for any updates.
                        </p>
                        <h3>Disclaimer of Warranties</h3>
                        <p>The Discord Bot is provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, expressed or implied, as to the operation of the bot or the information, content, materials, or products included on the bot.</p>
                        <h3>Limitation of Liability</h3>
                        <p>In no event shall we be liable for any damages arising from the use of the Discord Bot. This includes, but is not limited to, indirect, incidental, special, punitive, and consequential damages.</p>
                        <h3>Contact Us</h3>
                        <p>If you have any questions about these terms of service, please contact us by using the "akira contact" command or contacting @dark_lynn on Discord.</p>
                    </main>
                    <Footer/>
                </div>
            </div>
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