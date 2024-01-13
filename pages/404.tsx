import $ from 'jquery';
import React, { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Img from 'next/image';

import '../public/assets/css/style.css';
import '../public/assets/css/main.css';

const Custom404 = () => {
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
            <header>
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
                            <a className="navbar-item " href="../commands "><i className="nav-icons fas fa-terminal nav-fa "></i>Commands</a>
                            <a className="navbar-item " href="https://documentation.lynnux.xyz/ "><i className="nav-icons fas fa-book-open nav-fa "></i>Documentation</a>
                            <a className="navbar-item " href="../permissions "><i className="nav-icons fas fa-check nav-fa "></i>Permissions</a>
                            <a className="navbar-item " href="../support " target="_blank "><i className="nav-icons fab fa-discord nav-fa "></i>Support</a>
                            <a className="navbar-item last-item " href="../invite " target="_blank "><i className="nav-icons fas fa-plus nav-fa "></i>Invite</a>
                        </div>
                    </div>
                </nav>
            </header>           
            <div className="Notfound_container___vm_Q">
                <Img width="500" height="500"src="https://cdn.lynnux.xyz/assets/svg/NotFound.svg" alt="not-found" className="Notfound_not-found-img__st0se" />

                <h4 className="background-color: transparent;">
                    The page you&aposre looking for can&apost be found.
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