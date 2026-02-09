'use client';

import { useState } from 'react';

const testimonials = [
    {
        id: 1,
        name: 'Aisha Rahman',
        details: 'Stanford University · $85,000 scholarship',
        quote: 'StudySphere transformed my application journey. Their data-driven approach and personalized mentoring helped me secure admission to my dream school.',
    },
    {
        id: 2,
        name: 'Carlos Mendez',
        details: 'MIT · $120,000 scholarship',
        quote: 'The mock interview sessions were game-changing. My advisor knew exactly what top schools were looking for and helped me articulate my story perfectly.',
    },
    {
        id: 3,
        name: 'Priya Sharma',
        details: 'Harvard University · $95,000 scholarship',
        quote: 'From essay strategy to visa prep, StudySphere was with me every step. Their attention to detail and genuine care made all the difference.',
    },
];

function QuoteIcon() {
    return (
        <svg className="testimonial-quote-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>
    );
}

function ChevronLeft() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
        </svg>
    );
}

function ChevronRight() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
        </svg>
    );
}

export default function SuccessStories() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="testimonials" id="testimonials">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <p className="testimonials-label">Success Stories</p>
                    <h2 className="testimonials-title">What Our Students Say</h2>
                </div>

                <div className="testimonial-card" key={testimonials[current].id}>
                    <QuoteIcon />

                    <p className="testimonial-text">
                        &ldquo;{testimonials[current].quote}&rdquo;
                    </p>

                    <p className="testimonial-author">{testimonials[current].name}</p>
                    <p className="testimonial-details">{testimonials[current].details}</p>
                </div>

                <div className="testimonial-nav">
                    <button className="testimonial-nav-btn" onClick={prev} aria-label="Previous">
                        <ChevronLeft />
                    </button>

                    <div className="testimonial-dots">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                className={`testimonial-dot ${i === current ? 'active' : ''}`}
                                onClick={() => setCurrent(i)}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button className="testimonial-nav-btn" onClick={next} aria-label="Next">
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
}
