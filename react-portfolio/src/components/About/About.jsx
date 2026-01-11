import { aboutData } from '../../data/portfolio';
import GlowCard from '../GlowCard/GlowCard';
import './About.css';

export default function About() {
    return (
        <section className="section about-section" id="about">
            <div className="container">
                <header className="section-header">
                    <span className="section-label">Who I Am</span>
                    <h2 className="section-title">
                        About <span className="gradient-text">Me</span>
                    </h2>
                </header>

                <div className="about-grid">
                    <div className="about-story">
                        {aboutData.story.map((paragraph, index) => (
                            <p key={index} className="story-paragraph">{paragraph}</p>
                        ))}
                    </div>

                    <div className="about-cards">
                        {/* Education Card */}
                        <GlowCard className="info-card">
                            <div className="card-icon education-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                </svg>
                            </div>
                            <h3>Education</h3>
                            <p className="card-primary">{aboutData.education.institution}</p>
                            <p className="card-secondary">{aboutData.education.degree}</p>
                            <div className="cgpa-badge">
                                <span className="cgpa-value">{aboutData.education.gpa}</span>
                            </div>
                        </GlowCard>

                        {/* Experience Card */}
                        <GlowCard className="info-card">
                            <div className="card-icon experience-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                            </div>
                            <h3>Experience</h3>
                            <div className="experience-list">
                                {aboutData.experience.map((exp, index) => (
                                    <div key={index} className="exp-item">
                                        <p className="exp-role">{exp.role}</p>
                                        <p className="exp-company">{exp.company}</p>
                                        <p className="exp-period">{exp.period}</p>
                                    </div>
                                ))}
                            </div>
                        </GlowCard>

                        {/* Achievements Card */}
                        <GlowCard className="info-card achievements-card">
                            <div className="card-icon trophy-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                                    <path d="M4 22h16" />
                                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                                </svg>
                            </div>
                            <h3>Recognition</h3>
                            <ul className="achievements-list">
                                {aboutData.achievements.map((achievement, index) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        </GlowCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
