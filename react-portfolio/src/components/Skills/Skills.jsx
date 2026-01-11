import { skillsData } from '../../data/portfolio';
import './Skills.css';

export default function Skills() {
    const skillIcons = {
        'Python': '🐍',
        'JavaScript': '⚡',
        'Java': '☕',
        'C': '💻',
        'HTML/CSS': '🎨',
        'React': '⚛️',
        'Node.js': '🟢',
        'Flask': '🌶️',
        'Git': '📦',
        'VS Code': '💠',
        'TensorFlow': '🧠',
        'Pandas': '🐼',
        'NumPy': '🔢',
        'Scikit-learn': '📊',
        'MySQL': '🗄️',
        'SQLite': '📁',
        'Firebase': '🔥'
    };

    return (
        <section className="section skills-section" id="skills">
            <div className="container">
                <header className="section-header">
                    <span className="section-label">Expertise</span>
                    <h2 className="section-title">
                        Tech <span className="gradient-text">Stack</span>
                    </h2>
                    <p className="section-subtitle">
                        Technologies I work with to bring ideas to life
                    </p>
                </header>

                <div className="skills-wrapper">
                    {skillsData.map((category, catIndex) => (
                        <div
                            key={category.category}
                            className="skill-category"
                            style={{ '--delay': `${catIndex * 0.1}s` }}
                        >
                            <h3 className="category-title">{category.category}</h3>
                            <div className="skill-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skill}
                                        className="skill-item"
                                        style={{ '--skill-delay': `${skillIndex * 0.05}s` }}
                                    >
                                        <span className="skill-icon">
                                            {skillIcons[skill] || '💡'}
                                        </span>
                                        <span className="skill-name">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Floating tech logos for visual effect */}
                <div className="skills-decoration">
                    <div className="tech-orb orb-1"></div>
                    <div className="tech-orb orb-2"></div>
                </div>
            </div>
        </section>
    );
}
