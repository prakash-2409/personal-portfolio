import { blogPosts } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Blog.css';

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

function BlogCard({ post, index }) {
    return (
        <article
            className="blog-card"
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            <div className="blog-meta">
                <span className="blog-category">{post.category}</span>
                <span className="blog-date">{formatDate(post.date)}</span>
            </div>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <div className="blog-footer">
                <span className="blog-read-time">{post.readTime}</span>
                <a href={`/blog/${post.slug}`} className="blog-link">
                    Read more →
                </a>
            </div>
        </article>
    );
}

export default function Blog() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="section section-alt" id="blog">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">From the Blog</h2>
                    <p className="section-desc">Thoughts on code, design, and learning.</p>
                </header>

                <div
                    ref={ref}
                    className={`blog-grid ${isVisible ? 'reveal' : ''}`}
                >
                    {blogPosts.map((post, index) => (
                        <BlogCard
                            key={post.id}
                            post={post}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
