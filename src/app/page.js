'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, Play, ChevronLeft, ChevronRight,
  Wrench, Heart, Ribbon, ShieldCheck, Sprout, Users,
  CheckCircle, BarChart3, Monitor, Briefcase, Quote,
  Eye, FileText, ChevronDown, Cpu, Laptop, ShieldPlus,
  HeartHandshake, Home, Ban, Building2
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import StatCounter from '@/components/StatCounter/StatCounter';
import { programs, impactStats, testimonials, newsEvents, partners } from '@/data/siteData';
import styles from './page.module.css';

const iconMap = {
  Wrench, Heart, Ribbon, ShieldCheck, Sprout, Users,
  Briefcase, Cpu, Laptop, ShieldPlus, HeartHandshake,
  Home, Ban, Building2
};

/* ---- Hero Section ---- */
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: ['Empower Lives.', 'Build Skills.', 'Create Better Futures.'],
      subtitle: 'TOGETHER, WE CAN',
      description: 'Munificient Angels is committed to skill development, social welfare, women empowerment, health awareness and community rehabilitation for an inclusive and stronger society.',
      image: '/images/hero/hero-1.png'
    }
  ];

  const heroStats = [
    { number: '25K+', label: 'Lives Impacted' },
    { number: '120+', label: 'Skill Programs' },
    { number: '75+', label: 'Communities' },
    { number: '300+', label: 'Placement Partners' },
    { number: '15+', label: 'Years of Impact' },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <Image
          src={slides[0].image}
          alt="Empowering communities"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.heroOverlay} />
      </div>

      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroText}>
          <span className={styles.heroSubtitle}>{slides[0].subtitle}</span>
          <h1 className={styles.heroTitle}>
            {slides[0].title.map((line, i) => (
              <span key={i} className={styles.heroTitleLine}>
                {line}
              </span>
            ))}
          </h1>
          <p className={styles.heroDesc}>{slides[0].description}</p>
          <div className={styles.heroCta}>
            <Link href="/programs" className="btn btn-primary btn-lg">
              Explore Our Programs <ArrowRight size={18} />
            </Link>
            <Link href="/about" className="btn btn-outline-white btn-lg">
              <Play size={18} /> Watch Our Story
            </Link>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroCard}>
            <span className={styles.heroCardText}>Empowering Communities</span>
            <span className={styles.heroCardText2}>Transforming Lives</span>
          </div>
        </div>
      </div>

      <div className={styles.heroStatsBar}>
        <div className={`container ${styles.heroStatsInner}`}>
          {heroStats.map((stat, i) => (
            <div key={i} className={styles.heroStat}>
              <span className={styles.heroStatNum}>{stat.number}</span>
              <span className={styles.heroStatLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Focus Areas Section ---- */
function FocusAreasSection() {
  return (
    <section className={`section ${styles.focusAreas}`}>
      <div className="container">
        <SectionHeading
          subtitle="WHAT WE DO"
          title="Our Focus Areas"
        />
        <div className={styles.focusGrid}>
          {programs.map((program, i) => {
            const IconComponent = iconMap[program.icon];
            return (
              <div key={program.id} className={`${styles.focusCard} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={styles.focusIconWrap}>
                  {IconComponent && <IconComponent size={28} />}
                </div>
                <h3 className={styles.focusTitle}>{program.title}</h3>
                <p className={styles.focusDesc}>{program.shortDesc}</p>
                <Link href={`/programs/${program.id}`} className={styles.focusLink}>
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---- Impact Numbers Section ---- */
function ImpactSection() {
  return (
    <section className={styles.impact}>
      <div className={styles.impactOverlay} />
      <div className={`container ${styles.impactContent}`}>
        <div className={styles.impactHeader}>
          <span className={styles.impactSubtitle}>OUR IMPACT IN NUMBERS</span>
          <Link href="/impact" className={styles.impactLink}>
            <Eye size={16} /> View Impact Report
          </Link>
        </div>
        <div className={styles.impactGrid}>
          {impactStats.map((stat, i) => (
            <StatCounter
              key={i}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              light
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Projects Section ---- */
function ProjectsSection() {
  return (
    <section className={`section ${styles.projects}`}>
      <div className="container">
        <div className={styles.projectsHeader}>
          <SectionHeading subtitle="OUR PROJECTS" title="Our Projects" center={false} />
          <Link href="/projects" className={styles.viewAllLink}>
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
        <div className={styles.projectsGrid}>
          {programs.map((project, i) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.projectImageOverlay}>
                  <Link href={`/programs/${project.id}`} className={styles.projectImageLink}>
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h4 className={styles.projectTitle}>{project.title}</h4>
                <p className={styles.projectDesc}>{project.shortDesc}</p>
                <Link href={`/programs/${project.id}`} className={styles.projectReadMore}>
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Swift ITI Section ---- */
function SwiftITISection() {
  const features = [
    'NCVT Approved Courses',
    '100% Placement Assistance',
    'Modern Workshops',
    'Expert Faculty'
  ];

  return (
    <section className={`section ${styles.itiSection}`}>
      <div className={`container ${styles.itiInner}`}>
        <div className={`${styles.itiContent} reveal-left`}>
          <span className={styles.itiBadge}>Our Technical Wing</span>
          <h2 className={styles.itiTitle}>Swift Private ITI</h2>
          <p className={styles.itiDesc}>
            Under the umbrella of Munificient Angels, Swift Private ITI is dedicated to providing high-quality technical education and vocational training to empower youth with industry-ready skills for a brighter future.
          </p>
          <ul className={styles.itiFeatures}>
            {features.map((f, i) => (
              <li key={i} className={styles.itiFeature}>
                <CheckCircle size={16} className={styles.itiCheck} />
                {f}
              </li>
            ))}
          </ul>
          <Link href="/swift" className="btn btn-primary btn-lg">
            Explore Courses & Admissions <ArrowRight size={18} />
          </Link>
        </div>
        <div className={`${styles.itiImageWrap} reveal-right`}>
          <Image
            src="/images/swift-iti/building.png"
            alt="Swift Private ITI Campus"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}

/* ---- Why Choose Us Section ---- */
function WhyChooseUs() {
  const features = [
    { icon: BarChart3, title: 'Smart MIS & Reporting', desc: 'Real-time data tracking, digital MIS & transparent reporting system.' },
    { icon: Monitor, title: 'AI Powered Monitoring', desc: 'AI-enabled monitoring, analytics & impact assessment.' },
    { icon: FileText, title: 'Digital Learning Platform', desc: 'E-learning, virtual classes & digital content for skill development.' },
    { icon: Briefcase, title: 'Placement Support', desc: 'Industry tie-ups & 100% placement assistance for eligible candidates.' },
  ];

  const reasons = [
    'Experienced & Dedicated Team',
    'Transparent & Accountable Operations',
    'Government Recognized & Trusted',
    'Impact-driven Approach',
    'Strong Network & Partnerships',
  ];

  return (
    <section className={styles.whyChoose}>
      <div className={`container ${styles.whyChooseInner}`}>
        <div className={styles.whyChooseLeft}>
          <span className={styles.whySubtitle}>WHY CHOOSE</span>
          <h2 className={styles.whyTitle}>MUNIFICIENT ANGELS?</h2>
          <ul className={styles.reasonsList}>
            {reasons.map((reason, i) => (
              <li key={i}>
                <CheckCircle size={18} className={styles.checkIcon} />
                {reason}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.whyChooseRight}>
          <div className={styles.featuresGrid}>
            {features.map((feature, i) => (
              <div key={i} className={styles.featureCard}>
                <feature.icon size={28} className={styles.featureIcon} />
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.whyQuote}>
          <div className={styles.quoteCard}>
            <p className={styles.quoteText}>"Small Actions<br />Create Big<br />Change"</p>
            <Link href="/donate" className="btn btn-accent btn-lg">
              Join Us in Making a Difference
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Testimonials Section ---- */
function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const maxVisible = 3;

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        <div className={styles.testimonialsHeader}>
          <SectionHeading subtitle="SUCCESS STORIES" title="Success Stories" center={false} />
          <Link href="/impact" className={styles.viewAllLink}>
            View All Stories <ArrowRight size={16} />
          </Link>
        </div>
        <div className={styles.testimonialSlider}>
          <button onClick={prev} className={styles.sliderBtn} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          <div className={styles.testimonialCards}>
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`${styles.testimonialCard} ${i === current ? styles.activeTestimonial : ''}`}
              >
                <Quote size={24} className={styles.quoteIcon} />
                <p className={styles.testimonialText}>{t.quote}</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong className={styles.testimonialName}>{t.name}</strong>
                    <span className={styles.testimonialRole}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={next} className={styles.sliderBtn} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---- Partners Section ---- */
function PartnersSection() {
  return (
    <section className={styles.partnersSection}>
      <div className="container">
        <SectionHeading subtitle="OUR PARTNERS & AFFILIATIONS" title="Our Partners & Affiliations" />
        <div className={styles.partnersGrid}>
          {partners.map((partner, i) => (
            <div key={i} className={styles.partnerLogo}>
              <span className={styles.partnerName}>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- News Section ---- */
function NewsSection() {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleString('en', { month: 'short' }).toUpperCase(),
      year: date.getFullYear()
    };
  };

  return (
    <section className={`section ${styles.newsSection}`}>
      <div className="container">
        <div className={styles.newsHeader}>
          <SectionHeading subtitle="LATEST NEWS & EVENTS" title="Latest News & Events" center={false} />
          <Link href="/media" className={styles.viewAllLink}>
            View All News <ArrowRight size={16} />
          </Link>
        </div>
        <div className={styles.newsGrid}>
          {newsEvents.map((item) => {
            const date = formatDate(item.date);
            return (
              <div key={item.id} className={styles.newsCard}>
                <div className={styles.newsBadge}>
                  <span className={styles.newsDay}>{date.day}</span>
                  <span className={styles.newsMonth}>{date.month}</span>
                  <span className={styles.newsYear}>{date.year}</span>
                </div>
                <div className={styles.newsContent}>
                  <span className={styles.newsCategory}>{item.category}</span>
                  <h4 className={styles.newsTitle}>{item.title}</h4>
                  <p className={styles.newsExcerpt}>{item.excerpt}</p>
                  <Link href="/media" className={styles.newsReadMore}>
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---- Scroll Reveal Hook ---- */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

/* ---- Main Page Component ---- */
export default function HomePage() {
  useScrollReveal();

  return (
    <>
      <HeroSection />
      <FocusAreasSection />
      <ImpactSection />
      <ProjectsSection />
      <SwiftITISection />
      <WhyChooseUs />
      <TestimonialsSection />
      <PartnersSection />
      <NewsSection />
    </>
  );
}
