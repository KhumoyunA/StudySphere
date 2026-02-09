'use client';

const TELEGRAM_LINK = 'https://t.me/studysphere_placeholder';

const services = [
    {
        id: 'cohort',
        title: 'Weekly Cohort',
        price: '$499',
        description: 'Group mentorship with live sessions and community support.',
        features: [
            'Weekly live sessions',
            'Application strategy workshops',
            'Peer community access',
            'Resource library & templates',
        ],
        popular: false,
    },
    {
        id: 'executive',
        title: 'Executive 1-on-1',
        price: '$2,999',
        description: 'Full-service mentorship with dedicated personal advisor.',
        features: [
            'Dedicated personal advisor',
            'Unlimited essay reviews',
            'Complete visa preparation',
            'Mock interview sessions',
            'Scholarship application support',
            '24/7 priority support',
        ],
        popular: true,
    },
];

function CheckIcon() {
    return (
        <svg className="service-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" />
        </svg>
    );
}

export default function Services() {
    return (
        <section className="services" id="services">
            <div className="services-container">
                <div className="services-header">
                    <p className="services-label">Programs</p>
                    <h2 className="services-title">Choose Your Path</h2>
                    <p className="services-subtitle">
                        Select the program that fits your needs and helps you achieve your goals.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className={`service-card ${service.popular ? 'popular' : ''}`}>
                            {service.popular && <span className="service-badge">Most Popular</span>}

                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <div className="service-price">{service.price}</div>

                            <div className="service-features">
                                {service.features.map((feature) => (
                                    <div key={feature} className="service-feature">
                                        <CheckIcon />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href={TELEGRAM_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`service-btn ${service.popular ? 'service-btn-primary' : 'service-btn-secondary'}`}
                            >
                                Get Started
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
