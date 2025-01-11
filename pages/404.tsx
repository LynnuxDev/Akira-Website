import $ from 'jquery';
import React, { useEffect } from 'react';
import Script from 'next/script';
import Img from 'next/image';
import Header from '../components/layout/header'

import '@/styles/style.css';
import '@/styles/main.css';

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

      <Header/>
      <div className="Notfound_container___vm_Q">
        <Img style={PaddingBottom} width="500" height="500"src="https://cdn.lynnux.xyz/svg/NotFound.svg" alt="not-found" className="Notfound_not-found-img__st0se" />

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