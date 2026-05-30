'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Heart, User } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'Mission & Vision', href: '/about#mission' },
      { label: 'Our Team', href: '/about#team' },
    ]
  },
  {
    label: 'Our Projects',
    href: '/projects',
  },
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: 'Skill Development', href: '/programs/skill-development' },
      { label: 'Women Empowerment', href: '/programs/women-empowerment' },
      { label: 'HIV/AIDS Projects', href: '/programs/hiv-aids-projects' },
      { label: 'Drug De-addiction', href: '/programs/drug-de-addiction' },
      { label: 'Livelihood Projects', href: '/programs/livelihood-projects' },
      { label: 'Community Welfare', href: '/programs/community-welfare' },
    ]
  },
  { 
    label: 'Training Centers', 
    href: '/swift',
    children: [
      { label: 'Swift ITI', href: '/swift' },
    ]
  },
  { label: 'Impact', href: '/impact' },
  {
    label: 'Media',
    href: '/media',
    children: [
      { label: 'Gallery', href: '/media' },
      { label: 'News & Events', href: '/media#news' },
    ]
  },
  {
    label: 'Portals',
    href: '#',
    children: [
      { label: 'Student Portal', href: '/portal' },
      { label: 'Admin Dashboard', href: '/admin/students' },
      { label: 'Content Studio', href: '/studio' },
    ]
  },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleDropdown = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  return (
    <header className={styles.headerWrap}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <div className={styles.topBarLeft}>
            <span className={styles.topBarItem}>
              <MapPin size={14} />
              Nowgam Bypass Chowk, Srinagar, J&K 190015
            </span>
            <span className={styles.topBarItem}>
              <Phone size={14} />
              +91 98785 43210
            </span>
            <span className={styles.topBarItem}>
              <Mail size={14} />
              info@munificentangels.org
            </span>
          </div>
          <div className={styles.topBarRight}>
            <span className={styles.followText}>Follow Us :</span>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook"><FaFacebook size={14} /></a>
              <a href="#" aria-label="Twitter"><FaTwitter size={14} /></a>
              <a href="#" aria-label="Instagram"><FaInstagram size={14} /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin size={14} /></a>
              <a href="#" aria-label="YouTube"><FaYoutube size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.navInner}`}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/images/logo.png" 
              alt="Munificient Angels Logo" 
              width={110} 
              height={110} 
              className={styles.logoImage}
            />
          </Link>

          {/* Desktop Nav */}
          <ul className={styles.navLinks}>
            {navLinks.map((link, idx) => (
              <li key={idx} className={styles.navItem}>
                {link.href === '/studio' ? (
                  <a href={link.href} className={styles.navLink}>
                    {link.label}
                    {link.children && <ChevronDown size={14} className={styles.chevron} />}
                  </a>
                ) : (
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                    {link.children && <ChevronDown size={14} className={styles.chevron} />}
                  </Link>
                )}
                
                {link.children && (
                  <ul className={styles.dropdown}>
                    {link.children.map((child, cidx) => (
                      <li key={cidx}>
                        {child.href === '/studio' ? (
                          <a href={child.href} className={styles.dropdownLink}>
                            {child.label}
                          </a>
                        ) : (
                          <Link href={child.href} className={styles.dropdownLink}>
                            {child.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className={styles.headerActions}>
            <Link href="/donate" className={`btn btn-donate ${styles.donateBtn}`}>
              <Heart size={16} fill="white" />
              Donate Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileOpen : ''}`}>
        <div className={styles.mobileMenuInner}>
          {navLinks.map((link, idx) => (
            <div key={idx} className={styles.mobileNavItem}>
              {link.children ? (
                <>
                  <button
                    className={styles.mobileNavLink}
                    onClick={() => toggleDropdown(idx)}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`${styles.mobileChevron} ${openDropdown === idx ? styles.rotated : ''}`}
                    />
                  </button>
                  <div className={`${styles.mobileDropdown} ${openDropdown === idx ? styles.mobileDropdownOpen : ''}`}>
                    <Link
                      href={link.href}
                      className={styles.mobileDropdownLink}
                      onClick={() => setMobileOpen(false)}
                    >
                      Overview
                    </Link>
                    {link.children.map((child, cidx) => (
                      child.href === '/studio' ? (
                        <a
                          key={cidx}
                          href={child.href}
                          className={styles.mobileDropdownLink}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </a>
                      ) : (
                        <Link
                          key={cidx}
                          href={child.href}
                          className={styles.mobileDropdownLink}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      )
                    ))}
                  </div>
                </>
              ) : (
                link.href === '/studio' ? (
                  <a
                    href={link.href}
                    className={styles.mobileNavLink}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={styles.mobileNavLink}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          ))}
          <Link href="/donate" className={`btn btn-donate ${styles.mobileDonate}`} onClick={() => setMobileOpen(false)}>
            <Heart size={16} fill="white" />
            Donate Now
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && <div className={styles.overlay} onClick={() => setMobileOpen(false)} />}
    </header>
  );
}
