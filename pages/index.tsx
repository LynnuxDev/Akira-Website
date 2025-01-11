import $ from 'jquery';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Footer from '../components/layout/footer';
import NavBar from '../components/layout/header';
import BotStats from '../components/ui/BotStats';
import Previews from '../components/ui/previews';
import Guilds from '../components/ui/guilds';
import { Guild } from '../components/ui/guildTypes';

import '@/styles/style.css';
import '@/styles/test.css';
import '@/styles/guilds.css';

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

const Index = () => {
  const Zindex4: React.CSSProperties = {zIndex:4}
  const Text1: React.CSSProperties = {margin: 'auto',color:'#fff', fontSize: 'xx-large'}

  const [guilds, setGuilds] = useState<Guild[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.lynnux.xyz/guilds');
        const data = await response.json();
        setGuilds(data.body);
      } catch (error) {
        console.error('Error fetching guilds:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setupBurger();

    const script = document.createElement('script');
    script.type = 'text/javascript';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);


    return (
        <>
            <div>
                <div>
                    <NavBar active="Home"/>
                    <section className="banner ">
                        <div className="sec01 ">
                          <h1 className="text1 ">Akira</h1>
                          <h2>Unleash the power of efficiency with Akira, your all-in-one Discord solution.</h2>
                        </div>
                        <div className="banner-buttons ">
                            <a href="./commands/ ">
                              <button><span>Commands</span>
                              <svg viewBox="-5 -5 110 110 " preserveAspectRatio="none " aria-hidden="true">
                                <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0 "></path>
                              </svg>
                              </button>
                            </a>
                            <a href="./status ">
                              <button><span> Status </span>
                              <svg viewBox="-5 -5 110 110 " preserveAspectRatio="none " aria-hidden="true">
                                <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0 "></path>
                              </svg>
                              </button>
                            </a>
                            <a href="./invite/ ">
                                <button><span>Invite Akira</span>
                                <svg viewBox="-5 -5 110 110 " preserveAspectRatio="none " aria-hidden="true">
                                    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0 "></path>
                                </svg>
                                </button>
                            </a>
                        </div>
                        <div className="overlay">

                        </div>
                    </section>
                    <main>
                        <div id="text-stats " style={Zindex4}>
                            <div className="flex items-center w-full relative ">
                                <div className="w-full flex items-center ">
                                    <p className="font-bold ml-3 text-light-500 truncate" style={Text1}>Statisics</p>
                                </div>
                            </div>
                        </div>
                        <BotStats/>
                        <div id="text-feature " style={Zindex4}>
                            <div className="flex items-center w-full relative ">
                                <div className="w-full flex items-center ">
                                    <p className="mt-3 font-bold ml-3 text-light-500 truncate " style={Text1}>Features</p>
                                </div>
                            </div>
                        </div>
                        <Previews/>
                        <div id="text-stats " style={Zindex4}>
                            <div className="flex items-center w-full relative ">
                                <div className="w-full flex items-center ">
                                    <p className="mt-3 font-bold ml-3 text-light-500 truncate " style={Text1}>Featured guilds</p>
                                </div>
                            </div>
                        </div>
                            {/*<Guilds/>*/}
                        <Footer/>
                    </main>
                </div>
            </div>
        </>
    );
}
export default Index;

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