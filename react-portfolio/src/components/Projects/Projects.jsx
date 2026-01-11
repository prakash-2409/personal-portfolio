import { projectsData } from '../../data/portfolio';
import GlowCard from '../GlowCard/GlowCard';
import './Projects.css';

function ProjectCard({ project, index }) {
    return (
        <GlowCard className="project-card">
            <div className="project-header">
                <div className="project-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                </div>
                <a
                    href={project.link}
                    className="project-github"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on GitHub"
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                </a>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="project-footer">
                <span className="project-category">{project.category}</span>
                <div className="project-tech">
                    {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>
            </div>
        </GlowCard>
    );
}

export default function Projects() {
    return (
        <section className="section projects-section" id="work">
            <div className="container">
                <header className="section-header">
                    <span className="section-label">Portfolio</span>
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        Some things I've built with passion and creativity
                    </p>
                </header>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-wrapper"
                            style={{ '--delay': `${index * 0.1}s` }}
                        >
                            <ProjectCard project={project} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
