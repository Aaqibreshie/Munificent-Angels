'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  AlertTriangle,
} from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import styles from './page.module.css';

/* ── SEO Metadata (exported from a client component via a separate layout, or
     handled by Next.js if the page has a sibling layout.js/metadata export).
     Since this file uses 'use client', we export metadata from a wrapper —
     but Next.js 14+ supports generateMetadata in a separate file.
     We place metadata at the route level via a companion layout or
     by re-exporting from a server component. For simplicity, the parent
     layout.js already has a template. We'll add a <title> via <head> below. */

export default function ContactPage() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const subjects = [
    'General Inquiry',
    'Volunteer Opportunities',
    'Donation Related',
    'Partnership / Collaboration',
    'Media & Press',
    'Feedback / Suggestions',
    'Other',
  ];

  function validate() {
    const errs = {};
    if (!formData.user_name.trim()) errs.user_name = 'Name is required';
    if (!formData.user_email.trim()) {
      errs.user_email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      errs.user_email = 'Enter a valid email';
    }
    if (formData.user_phone && !/^[+\d\s-]{7,15}$/.test(formData.user_phone)) {
      errs.user_phone = 'Enter a valid phone number';
    }
    if (!formData.subject) errs.subject = 'Please select a subject';
    if (!formData.message.trim()) {
      errs.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      // NOTE: Replace these with your actual EmailJS credentials
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      setFormData({
        user_name: '',
        user_email: '',
        user_phone: '',
        subject: '',
        message: '',
      });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>
            <MessageSquare size={16} />
            Get In Touch
          </span>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>
            Have a question, feedback, or want to get involved? We&apos;d love to
            hear from you. Reach out to us and let&apos;s make a difference together.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <SectionHeading
            subtitle="Reach Out"
            title="We're Here to Help"
            description="Fill out the form below or use our contact information to reach us directly."
          />

          <div className={styles.contactGrid}>
            {/* ── Left: Form ── */}
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Send Us a Message</h3>
              <p className={styles.formSubtitle}>
                Fill in the details below and we&apos;ll get back to you within 24
                hours.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className={styles.formGrid}
                noValidate
              >
                {/* Name */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="user_name">
                    Full Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.user_name}
                    onChange={handleChange}
                    className={`${styles.formInput} ${errors.user_name ? styles.inputError : ''}`}
                  />
                  {errors.user_name && (
                    <span className={styles.errorText}>{errors.user_name}</span>
                  )}
                </div>

                {/* Email */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="user_email">
                    Email Address <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.user_email}
                    onChange={handleChange}
                    className={`${styles.formInput} ${errors.user_email ? styles.inputError : ''}`}
                  />
                  {errors.user_email && (
                    <span className={styles.errorText}>{errors.user_email}</span>
                  )}
                </div>

                {/* Phone */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="user_phone">
                    Phone Number
                  </label>
                  <input
                    id="user_phone"
                    name="user_phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.user_phone}
                    onChange={handleChange}
                    className={`${styles.formInput} ${errors.user_phone ? styles.inputError : ''}`}
                  />
                  {errors.user_phone && (
                    <span className={styles.errorText}>{errors.user_phone}</span>
                  )}
                </div>

                {/* Subject */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="subject">
                    Subject <span className={styles.required}>*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`${styles.formSelect} ${errors.subject ? styles.inputError : ''}`}
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <span className={styles.errorText}>{errors.subject}</span>
                  )}
                </div>

                {/* Message */}
                <div className={styles.formGroupFull}>
                  <label className={styles.formLabel} htmlFor="message">
                    Message <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${styles.formTextarea} ${errors.message ? styles.inputError : ''}`}
                  />
                  {errors.message && (
                    <span className={styles.errorText}>{errors.message}</span>
                  )}
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div
                    className={`${styles.statusMessage} ${styles.successMsg}`}
                  >
                    <CheckCircle size={20} />
                    Thank you! Your message has been sent successfully. We&apos;ll
                    get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className={`${styles.statusMessage} ${styles.errorMsg}`}>
                    <AlertCircle size={20} />
                    Oops! Something went wrong. Please try again or contact us
                    directly.
                  </div>
                )}

                {/* Credential Note */}
                <div className={styles.credentialNote}>
                  <AlertTriangle size={14} />
                  <span>
                    <strong>Note:</strong> EmailJS credentials (Service ID,
                    Template ID, Public Key) need to be configured in the code
                    for emails to send.
                  </span>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className={styles.spinner} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* ── Right: Contact Info ── */}
            <aside className={styles.infoSide}>
              <div className={styles.infoCard}>
                <div className={`${styles.iconWrap} ${styles.iconGreen}`}>
                  <MapPin size={24} />
                </div>
                <div className={styles.infoContent}>
                  <h4>Our Office</h4>
                  <p>
                    Nowgam Bypass Chowk,
                    <br />
                    Srinagar, Jammu &amp; Kashmir 190015
                  </p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={`${styles.iconWrap} ${styles.iconBlue}`}>
                  <Phone size={24} />
                </div>
                <div className={styles.infoContent}>
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+919878543210">+91 98785 43210</a>
                  </p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={`${styles.iconWrap} ${styles.iconOrange}`}>
                  <Mail size={24} />
                </div>
                <div className={styles.infoContent}>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:info@munificentangels.org">
                      info@munificentangels.org
                    </a>
                  </p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={`${styles.iconWrap} ${styles.iconRed}`}>
                  <Clock size={24} />
                </div>
                <div className={styles.infoContent}>
                  <h4>Working Hours</h4>
                  <p>
                    Monday – Saturday
                    <br />
                    10:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className={styles.socialLinks}>
                <h4>Follow Us</h4>
                <div className={styles.socialGrid}>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label="Facebook"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label="Instagram"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label="Twitter"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label="YouTube"
                  >
                    <FaYoutube size={20} />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <SectionHeading
            subtitle="Find Us"
            title="Visit Our Office"
            description="We're located at Nowgam Bypass Chowk, Srinagar. Come visit us during working hours."
          />
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.5!2d74.79!3d34.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1856!2sNowgam+Bypass+Srinagar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Munificient Angels Office Location – Nowgam Bypass, Srinagar"
            />
            <div className={styles.mapOverlay}>
              <MapPin size={18} color="var(--color-donate-red)" />
              <span>Nowgam Bypass Chowk, Srinagar</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
