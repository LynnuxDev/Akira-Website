import React from 'react';

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
                <a href="../support " data-preload-link="true " data-preload-link-activated="true ">Support Server</a>
                <a href="../commands " data-preload-link="true " data-preload-link-activated="true ">Commands</a>
                <a href="../donate "data-preload-link="true " data-preload-link-activated="true ">Premium</a>
                <a href="../status "data-preload-link="true " data-preload-link-activated="true ">Status</a>
                <a href="../vote " data-preload-link="true " data-preload-link-activated="true ">Vote</a>

            </div>
            <div className="section-entry ">
                <h3>About us</h3>
                <a href="../blog ">Dev notes</a>
                <a href="../contact ">Contact Us</a>
                <a href="../staff ">Our Team</a>
                <a href="./todo">ToDo List</a>
            </div>
            <div className="section-entry ">
                <h3>Resources</h3>
                <a href="../terms ">Terms of Service</a>
                <a href="../policy ">Privacy Policy</a>
            </div>
        </nav>
        <p style={footerStyle}>Akira 2023 — All rights reserved</p>
    </footer>
  );
};

export default Footer;
