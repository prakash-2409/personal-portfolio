import { useState, useEffect } from 'react';
import './TextReveal.css';

export default function TextReveal({ text, className = '', delay = 0 }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <span className={`text-reveal ${isVisible ? 'revealed' : ''} ${className}`}>
            {text.split('').map((char, i) => (
                <span
                    key={i}
                    className="char"
                    style={{ transitionDelay: `${i * 30}ms` }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </span>
    );
}
