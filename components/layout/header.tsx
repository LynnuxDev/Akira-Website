import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

import "../../public/assets/css/navbar.css"

interface NavBarProps {
    active?: string;
  }
  
  const NavBar: React.FC<NavBarProps> = ({ active }) => {
    const router = useRouter();
  
    const isItemActive = (itemName: string) => {
      return active === itemName ? 'nav-active' : '';
    };

    return (
    <>    
    <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
        />
    </Head>
    <header>
        <nav className="navbar nav-bar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link legacyBehavior href="/" passHref>
                <a className="navbar-item">
                    <p className="nav-name">Akira</p>
                </a>
            </Link>
            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbar-unfold"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu" id="navbar-unfold">
            <div className="navbar-end">
                <Link passHref legacyBehavior href="/">
                    <a className={`navbar-item ${isItemActive('Home')}`}>
                        <i className="nav-icons fas fa-home nav-fa"></i>Home
                    </a>
                </Link>
                <Link passHref legacyBehavior href="/commands">
                    <a className={`navbar-item ${isItemActive('Commands')}`}>
                        <i className="nav-icons fas fa-terminal nav-fa"></i>Commands
                    </a>
                </Link>
                <Link passHref legacyBehavior href="https://documentation.lynnux.xyz">
                    <a className={`navbar-item ${isItemActive('Documentation')}`}>
                        <i className="nav-icons fas fa-book-open nav-fa"></i>Documentation
                    </a>
                </Link>
                <Link passHref legacyBehavior href="/Permissions">
                    <a className={`navbar-item ${isItemActive('Permissions')}`}>
                        <i className="nav-icons fas fa-check nav-fa"></i>Permissions
                    </a>
                </Link>
                <Link passHref legacyBehavior href="https://discord.gg/TUqZTutDUz">
                    <a className={`navbar-item ${isItemActive('Support')}`}>
                        <i className="nav-icons fab fa-discord nav-fa"></i>Support
                    </a>
                </Link>
                <Link passHref legacyBehavior href="https://discord.com/oauth2/authorize?client_id=738057910923296839&scope=bot+applications.commands&permissions=4294307799">
                    <a className={`navbar-item last-item ${isItemActive('Invite')}`}>
                        <i className="nav-icons fas fa-plus nav-fa"></i>Invite
                    </a>
                </Link>
            </div>
          </div>
        </nav>
      </header>
      </>
    );
};
  
export default NavBar;