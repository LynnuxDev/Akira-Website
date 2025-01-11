import $ from 'jquery';
import Script from 'next/script';
import React, { useEffect } from 'react';
import Head from 'next/head'
import Footer from '../components/layout/footer';
import NavBar from '../components/layout/header';
import '@/styles/style.css';
import '@/styles/main.css';
import '@/styles/terms.css';

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
      <div>
        <div>
          <NavBar/>
          <main className="main">
            <h3>Last updated: Aug 22, 2024</h3>
            <br/>
            <h3>Introduction</h3>
            <p>
              Akira Bot (hereafter referred to as &quot;Akira&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy of its users. This privacy policy explains what information we collect, how we use it, and your rights regarding your information.
            </p>

            <h3>Information Collection and Use</h3>
            <p>
              When you use Akira, we may collect and process the following information about you:
            </p>
            <ul>
              <li>User information (e.g. user ID, username, avatar)</li>
              <li>Server information (e.g. server ID, server name, server invites)</li>
              <li>Usage data (e.g. commands used, time stamps)</li>
            </ul>
            <p>
              This information is used to provide and improve the services offered by Akira. We may also use this information to communicate with you, such as to respond to your requests or to send you notifications.
            </p>
            <p>
              When an error occurs, Akira may ask if you&apos;d like to send the error data to our developers. This data may include details about the command that caused the error, your user ID, and relevant server information. Sending this data is entirely optional and requires your explicit consent. The information will only be used to diagnose and fix the issue.
            </p>

            <h3>Data Storage</h3>
            <p>
              The information collected by Akira is stored on secure servers located in Germany. We take appropriate security measures to protect your information against unauthorized access, loss, or disclosure.
            </p>

            <h3>Data Retention</h3>
            <p>
              We will retain your information for as long as necessary to provide the services offered by Akira or as required by law. After this period, your information will be deleted.
            </p>

            <h3>Third-Party Services</h3>
            <p>
              Akira may use third-party services to provide certain services, such as hosting and data storage. These third-party services may collect and process your information on our behalf. We take appropriate measures to ensure that these third-party services
              protect your privacy and comply with applicable laws.
            </p>

            <h3>Your Rights</h3>
            <p>
              You have the right to access, rectify, and delete your information, as well as the right to limit its processing and to object to its processing. You also have the right to data portability. If you wish to exercise any of these rights, please contact
              us by using the &quot;akira contact&quot; command or contacting @Dark-LYNN#6568 on Discord.
            </p>

            <h3>Changes to this Privacy Policy</h3>
            <p>
              We may make changes to this privacy policy from time to time. If we make significant changes, we will notify you through the Discord server where Akira is used or through another appropriate means.<br/>By continuing to use Akira, you accept the terms of this
              privacy policy and future updates to it.
            </p>
          </main>
          <Footer/>
        </div>
      </div>
    </>
  );
}
export default Commands;