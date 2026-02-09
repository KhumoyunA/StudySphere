'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TELEGRAM_LINK = 'https://t.me/studysphere_placeholder';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#services' },
  { name: 'Success Stories', href: '#testimonials' },
  { name: 'Contact', href: '#footer' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <Image src="/logo.jpg" alt="StudySphere" width={42} height={42} />
          <span>StudySphere</span>
        </Link>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>

        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-cta desktop"
        >
          Get Started
        </a>

        <button
          className="navbar-mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div className={`navbar-mobile-menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
            {link.name}
          </Link>
        ))}
        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ marginTop: '16px', justifyContent: 'center' }}
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
