import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="footer-logo">Prakash.</span>
                        <p className="footer-tagline">Building digital experiences</p>
                    </div>
                    
                    <div className="footer-links">
                        <a href="#work">Work</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer-bottom">
                        <p>Designed & Built with 💜 by Prakash Raj A</p>
                        <p className="footer-year">© {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
