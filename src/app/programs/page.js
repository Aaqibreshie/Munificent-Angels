import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import StatCounter from '@/components/StatCounter/StatCounter';
import { programs, impactStats } from '@/data/siteData';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Programs',
  description: 'Explore the diverse programs of Munificient Angels — from skill development and women empowerment to HIV/AIDS awareness, drug de-addiction, livelihood projects, and community welfare.',
  openGraph: {
    title: 'Our Programs | Munificient Angels',
    description: 'Discover our programs driving social change across Jammu & Kashmir.',
  },
};

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>What We Do</span>
          <h1 className={styles.heroTitle}>Our Programs</h1>
          <p className={styles.heroDesc}>
            Comprehensive programs designed to empower communities, build skills, and create lasting social impact across Jammu &amp; Kashmir.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className={styles.programsSection}>
        <div className={styles.programsContainer}>
          <SectionHeading
            subtitle="Focus Areas"
            title="Programs That Transform Lives"
            description="Each of our programs is designed with a specific focus to address the diverse needs of communities we serve."
          />
          <div className={styles.programsGrid}>
            {programs.map((program) => (
              <Link href={`/programs/${program.id}`} key={program.id} className={styles.programCard}>
                <div className={styles.cardImageWrapper}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className={styles.cardImage}
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.cardBody}>
                  <h3>{program.title}</h3>
                  <p>{program.shortDesc}</p>
                  <span className={styles.cardLink}>
                    Learn More <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <SectionHeading
            subtitle="Our Impact"
            title="Numbers That Speak"
            light
          />
          <div className={styles.statsGrid}>
            {impactStats.slice(0, 4).map((stat) => (
              <StatCounter
                key={stat.label}
                number={stat.number}
                suffix={stat.suffix}
                label={stat.label}
                light
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
