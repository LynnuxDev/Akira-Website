import $ from 'jquery';
import React, { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Img from 'next/image';
import Header from '../components/layout/header'

import '../public/assets/css/style.css';
import '../public/assets/css/main.css';

const Custom404 = () => {
    const PaddingBottom: React.CSSProperties = {paddingBottom: "1rem"}

    useEffect(() => {
        const $burger = $(".navbar-burger");
        const $menu = $(".navbar-menu");
    
        $burger.click(function () {
          $burger.toggleClass("is-active");
          $menu.toggleClass("is-active");
        });
    
        return () => {
          $burger.off('click');
        };
      }, []);
    
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YSD2Q72W1H"/>

            <Head>
                {/* Main */}
                <title>404 - Page Not Found</title>
                <link rel="shortcut icon" href="/assets/images/favicon.ico" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/assets/images/android-chrome-192x192.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/assets/images/android-chrome-512x512.png" />

                {/* Meta tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            {/* Your HTML content goes here */}
            <Header/>
            <div className="Notfound_container___vm_Q">
                <Img style={PaddingBottom} width="500" height="500"src="https://cdn.lynnux.xyz/assets/svg/NotFound.svg" alt="not-found" className="Notfound_not-found-img__st0se" />

                <h4 className="background-color: transparent;" style={PaddingBottom}>
                    The page you{"'"}re looking for can{"'"}t be found.
                </h4>
                <button onClick={() => window.location.href='/'} className="Notfound_not-found-button__M59dr">Home</button>
            </div>

            <Script src="https://code.jquery.com/jquery-3.6.0.min.js"/>
        </>
    );
}

export default Custom404;

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