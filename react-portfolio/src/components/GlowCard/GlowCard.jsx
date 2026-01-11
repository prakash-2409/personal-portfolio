import './GlowCard.css';

export default function GlowCard({ children, className = '' }) {
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <div
            className={`glow-card ${className}`}
            onMouseMove={handleMouseMove}
        >
            <div className="glow-card-border"></div>
            <div className="glow-card-content">
                {children}
            </div>
        </div>
    );
}
