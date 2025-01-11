import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    const footerStyle: React.CSSProperties = {
        textAlign: 'center',
      };
    const fixBottom: React.CSSProperties = {
        width: '100%',
        marginTop: '2.5%',
        padding: '10px',
    }
    
  return (
    <footer style={fixBottom} className="footer">
        <nav className="navigation-footer ">
            <div className="section-entry ">
                <h3>Akira Bot</h3>
                <Link passHref legacyBehavior href="https://discord.gg/TUqZTutDUz">
                    <a data-preload-link="true" data-preload-link-activated="true ">Support Server</a>
                </Link>
                <Link passHref legacyBehavior href="/commands">
                    <a data-preload-link="true" data-preload-link-activated="true ">Commands</a>
                </Link>
                <Link passHref legacyBehavior href="/donate">
                    <a data-preload-link="true" data-preload-link-activated="true ">Premium</a>
                </Link>
                <Link passHref legacyBehavior href="/status">
                    <a data-preload-link="true" data-preload-link-activated="true ">Status</a>
                </Link>
                <Link passHref legacyBehavior href="/vote">
                    <a data-preload-link="true" data-preload-link-activated="true ">Vote</a>
                </Link>
            </div>
            <div className="section-entry ">
                <h3>About us</h3>
                <Link passHref legacyBehavior href="/blog">
                    <a>Dev notes</a>
                </Link>
                <Link passHref legacyBehavior href="/contact">
                    <a>Contact Us</a>
                </Link>
                <Link passHref legacyBehavior href="/staff">
                    <a>Our Team</a>
                </Link>
                <Link passHref legacyBehavior href="/staff">
                    <a>ToDo List</a>
                </Link>
            </div>
            <div className="section-entry ">
                <h3>Resources</h3>
                <Link passHref legacyBehavior href="/terms">
                <a>Terms of Service</a>
                </Link>
                <Link passHref legacyBehavior href="/policy">
                    <a>Privacy Policy</a>
                </Link>
            </div>
        </nav>
        <p style={footerStyle}>Akira 2023 — All rights reserved</p>
    </footer>
  );
};

export default Footer;
