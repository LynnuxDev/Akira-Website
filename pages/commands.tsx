import $ from 'jquery';
import Script from 'next/script';
import React, { useEffect } from 'react';
import Footer from '../components/layout/footer';
import NavBar from '../components/layout/header';
import CommandList from '../components/ui/commands'
import '@/styles/style.css';
import '@/styles/main.css';

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
  const mainPadding: React.CSSProperties = {margin: '1em 2em 1em 2em'}

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
      <Script src="/assets/javascript/commands.js"/>
      {/* Google tag */}
      <div>
        <div>
          <NavBar active="Commands"/>
          <div className="main" style={mainPadding}>
            <CommandList/>
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
}
export default Commands;