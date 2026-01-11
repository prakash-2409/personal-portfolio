import { useState, useEffect } from 'react';
import { personalInfo } from '../../data/portfolio';
import TextReveal from '../TextReveal/TextReveal';
import './Hero.css';

export default function Hero() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouse = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouse);
        return () => window.removeEventListener('mousemove', handleMouse);
    }, []);

    const roles = ['Frontend Developer', 'AI/ML Enthusiast', 'Problem Solver'];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero">
            {/* Floating decorative elements */}
            <div className="hero-decorations">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
                <div
                    className="cursor-glow"
                    style={{
                        left: mousePos.x,
                        top: mousePos.y
                    }}
                />
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    {/* Badge */}
                    <div className="hero-badge animate-in" style={{ '--delay': '0.1s' }}>
                        <span className="badge-dot"></span>
                        <span>Available for opportunities</span>
                    </div>

                    {/* Main heading with gradient */}
                    <h1 className="hero-title">
                        <span className="title-line animate-in" style={{ '--delay': '0.2s' }}>
                            Hi, I'm <span className="gradient-text">Prakash</span>
                        </span>
                        <span className="title-line animate-in" style={{ '--delay': '0.3s' }}>
                            I build <span className="gradient-text-alt">digital</span>
                        </span>
                        <span className="title-line animate-in" style={{ '--delay': '0.4s' }}>
                            experiences.
                        </span>
                    </h1>

                    {/* Animated role */}
                    <div className="hero-role animate-in" style={{ '--delay': '0.5s' }}>
                        <span className="role-label">Currently:</span>
                        <span className="role-text" key={roleIndex}>
                            {roles[roleIndex]}
                        </span>
                    </div>

                    {/* Description */}
                    <p className="hero-desc animate-in" style={{ '--delay': '0.6s' }}>
                        2nd year Engineering student at St. Joseph's College, Chennai.
                        I craft web applications that solve real problems and explore
                        the intersection of design and machine learning.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-actions animate-in" style={{ '--delay': '0.7s' }}>
                        <a href="#work" className="btn-glow">
                            <span>View Projects</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#contact" className="btn-outline">
                            Let's Talk
                        </a>
                    </div>

                    {/* Social links */}
                    <div className="hero-socials animate-in" style={{ '--delay': '0.8s' }}>
                        <a href="https://github.com/prakash-2409" target="_blank" rel="noopener noreferrer">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/prakash-raj-a-460a19325" target="_blank" rel="noopener noreferrer">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="mailto:aprakashraj602@gmail.com">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <path d="M22 6l-10 7L2 6" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Hero visual */}
                <div className="hero-visual animate-in" style={{ '--delay': '0.5s' }}>
                    <div className="code-window">
                        <div className="window-header">
                            <div className="window-dots">
                                <span></span><span></span><span></span>
                            </div>
                            <span className="window-title">developer.js</span>
                        </div>
                        <pre className="window-code">
                            <code>
                                {`const developer = {
  name: "Prakash Raj A",
  role: "Frontend Developer",
  skills: ["React", "Python", "AI/ML"],
  passion: "Building solutions",
  
  available: true,
  
  contact: () => {
    return "Let's create together!";
  }
};`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <div className="scroll-line"></div>
                <span>Scroll</span>
            </div>
        </section>
    );
}
