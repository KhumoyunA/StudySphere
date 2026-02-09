'use client';

const TELEGRAM_LINK = 'https://t.me/studysphere_placeholder';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="hero-badge-dot"></span>
                    <span>Trusted by 500+ Students Worldwide</span>
                </div>

                <h1 className="hero-title">
                    Your Path to Top
                    <br />
                    <span>US Universities</span>
                </h1>

                <p className="hero-subtitle">
                    Data-driven admissions mentoring for international students.
                    We help you craft standout applications and get accepted to your dream schools.
                </p>

                <div className="hero-buttons">
                    <a
                        href={TELEGRAM_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Book a Consultation
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="#services" className="btn btn-secondary">
                        View Programs
                    </a>
                </div>

                <div className="hero-stats">
                    <div className="hero-stat">
                        <div className="hero-stat-value">$5M+</div>
                        <div className="hero-stat-label">Scholarships Secured</div>
                    </div>
                    <div className="hero-stat">
                        <div className="hero-stat-value">500+</div>
                        <div className="hero-stat-label">Students Placed</div>
                    </div>
                    <div className="hero-stat">
                        <div className="hero-stat-value">100%</div>
                        <div className="hero-stat-label">Visa Success Rate</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
