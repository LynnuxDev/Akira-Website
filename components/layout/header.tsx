import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import '../../public/assets/css/navbar.css';

interface NavBarProps {
    active?: string;
  }
  
  const NavBar: React.FC<NavBarProps> = ({ active }) => {
    const router = useRouter();
  
    const isItemActive = (itemName: string) => {
      return active === itemName ? 'nav-active' : '';
    };
  
    return (
      <header>
        <nav className="navbar nav-bar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link legacyBehavior href="/">
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
                <Link legacyBehavior href="/">
                    <a className={`navbar-item ${isItemActive('Home')}`}>
                        <i className="nav-icons fas fa-home nav-fa"></i>Home
                    </a>
                </Link>
                <Link legacyBehavior href="/commands">
                    <a className={`navbar-item ${isItemActive('Commands')}`}>
                        <i className="nav-icons fas fa-terminal nav-fa"></i>Commands
                    </a>
                </Link>
                <Link legacyBehavior href="https://documentation.lynnux.xyz">
                    <a className={`navbar-item ${isItemActive('Documentation')}`}>
                        <i className="nav-icons fas fa-book-open nav-fa"></i>Documentation
                    </a>
                </Link>
                <Link legacyBehavior href="/Permissions">
                    <a className={`navbar-item ${isItemActive('Permissions')}`}>
                        <i className="nav-icons fas fa-check nav-fa"></i>Permissions
                    </a>
                </Link>
                <Link legacyBehavior href="/Support">
                    <a className={`navbar-item ${isItemActive('Support')}`}>
                        <i className="nav-icons fab fa-discord nav-fa"></i>Support
                    </a>
                </Link>
                <Link legacyBehavior href="/Invite">
                    <a className={`navbar-item last-item ${isItemActive('Invite')}`}>
                        <i className="nav-icons fas fa-plus nav-fa"></i>Invite
                    </a>
                </Link>
            </div>
          </div>
        </nav>
      </header>
    );
};
  
export default NavBar;
  

/*
<header>
<nav className=" navbar nav-bar " role="navigation " aria-label="main navigation ">
    <div className="navbar-brand ">
        <a className="navbar-item " href="./ ">
            <p className="nav-name ">Akira</p>
        </a><a role="button " className="navbar-burger burger " aria-label="menu " aria-expanded="false" data-target="navbar-unfold"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span></a></div>
    <div className="navbar-menu " id="navbar-unfold ">
        <div className="navbar-end ">
            <a className="navbar-item nav-active" href="/ "><i className="nav-icons fas fa-home nav-fa "></i>Home</a>
            <a className="navbar-item " href="./commands "><i className="nav-icons fas fa-terminal nav-fa "></i>Commands</a>
            <a className="navbar-item " href="https://documentation.lynnux.xyz/ "><i className="nav-icons fas fa-book-open nav-fa "></i>Documentation</a>
            <a className="navbar-item " href="./permissions "><i className="nav-icons fas fa-check nav-fa "></i>Permissions</a>
            <a className="navbar-item " href="./support " target="_blank "><i className="nav-icons fab fa-discord nav-fa "></i>Support</a>
            <a className="navbar-item last-item " href="./invite " target="_blank "><i className="nav-icons fas fa-plus nav-fa "></i>Invite</a>
        </div>
    </div>
</nav>
</header> */