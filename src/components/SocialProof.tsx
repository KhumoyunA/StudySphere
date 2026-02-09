'use client';

const universities = [
    'MIT', 'Stanford', 'Harvard', 'Yale', 'Princeton',
    'Columbia', 'Cornell', 'UPenn', 'Brown', 'Dartmouth',
    'Duke', 'Northwestern', 'UCLA', 'Berkeley', 'CMU', 'Loyola'
];

export default function SocialProof() {
    return (
        <section className="social-proof" id="about">
            <div className="social-proof-header">
                <p className="social-proof-label">Where Our Students Go</p>
                <h2 className="social-proof-title">Accepted to World-Class Universities</h2>
            </div>

            <div className="marquee-container">
                <div className="marquee-fade-left"></div>
                <div className="marquee-fade-right"></div>

                <div className="marquee-track">
                    {[...universities, ...universities].map((uni, i) => (
                        <span key={`${uni}-${i}`} className="marquee-item">
                            {uni}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
