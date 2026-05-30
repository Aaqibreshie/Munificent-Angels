import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Heart, ArrowRight } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={`container ${styles.footerGrid}`}>
          {/* Column 1: About */}
          <div className={styles.footerCol}>
            <div className={styles.footerLogo}>
              <Image 
                src="/images/logo.png" 
                alt="Munificient Angels Logo" 
                width={140} 
                height={140} 
                className={styles.logoImage}
              />
            </div>
            <p className={styles.footerAbout}>
              Munificient Angels is a non-profit organization working for skill development, women empowerment, health awareness, de-addiction and community welfare.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook"><FaFacebook size={18} /></a>
              <a href="#" aria-label="Twitter"><FaTwitter size={18} /></a>
              <a href="#" aria-label="Instagram"><FaInstagram size={18} /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
              <a href="#" aria-label="YouTube"><FaYoutube size={18} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerHeading}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/about"><ArrowRight size={14} /> About Us</Link></li>
              <li><Link href="/projects"><ArrowRight size={14} /> Our Projects</Link></li>
              <li><Link href="/programs"><ArrowRight size={14} /> Programs</Link></li>
              <li><Link href="/swift"><ArrowRight size={14} /> Training Centers</Link></li>
              <li><Link href="/media"><ArrowRight size={14} /> Media</Link></li>
              <li><Link href="/contact"><ArrowRight size={14} /> Contact Us</Link></li>
              <li><Link href="/studio" target="_blank"><ArrowRight size={14} /> Admin Login</Link></li>
            </ul>
          </div>

          {/* Column 3: Focus Areas */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerHeading}>Our Focus Areas</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/programs/skill-development"><ArrowRight size={14} /> Skill Development</Link></li>
              <li><Link href="/programs/women-empowerment"><ArrowRight size={14} /> Women Empowerment</Link></li>
              <li><Link href="/programs/hiv-aids-projects"><ArrowRight size={14} /> HIV/AIDS Projects</Link></li>
              <li><Link href="/programs/drug-de-addiction"><ArrowRight size={14} /> Drug De-addiction</Link></li>
              <li><Link href="/programs/livelihood-projects"><ArrowRight size={14} /> Livelihood Projects</Link></li>
              <li><Link href="/programs/community-welfare"><ArrowRight size={14} /> Community Welfare</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerHeading}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={16} />
                <span>Nowgam Bypass Chowk, Srinagar, Jammu & Kashmir — 190015</span>
              </li>
              <li>
                <Phone size={16} />
                <span>+91 98785 43210</span>
              </li>
              <li>
                <Mail size={16} />
                <span>info@munificentangels.org</span>
              </li>
              <li>
                <Clock size={16} />
                <span>Mon — Sat: 10:00 AM — 6:00 PM</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className={styles.newsletter}>
              <h5 className={styles.nlTitle}>Newsletter</h5>
              <p className={styles.nlText}>Subscribe for latest updates.</p>
              <form className={styles.nlForm}>
                <input type="email" placeholder="Enter your email" className={styles.nlInput} />
                <button type="submit" className={styles.nlBtn}>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={`container ${styles.footerBottomInner}`}>
          <p>© {new Date().getFullYear()} Munificient Angels. All Rights Reserved.</p>
          <div className={styles.footerBottomLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
