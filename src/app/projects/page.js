'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import StatCounter from '@/components/StatCounter/StatCounter';
import { programs, impactStats } from '@/data/siteData';
import styles from './page.module.css';

const projectsData = programs.map((program, index) => ({
  ...program,
  status: index < 4 ? 'Ongoing' : 'Completed',
  beneficiaries: program.stats.beneficiaries,
}));

const filters = ['All', 'Ongoing', 'Completed'];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.status === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Our Work</span>
          <h1 className={styles.heroTitle}>Our Projects</h1>
          <p className={styles.heroDesc}>
            Discover the projects creating lasting change across communities in Jammu &amp; Kashmir — from skill training to healthcare and beyond.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.projectsSection}>
        <div className={styles.projectsContainer}>
          <SectionHeading
            subtitle="Explore"
            title="Projects at a Glance"
            description="Browse through our ongoing and completed projects."
          />

          {/* Filter Tabs */}
          <div className={styles.filterTabs}>
            {filters.map((filter) => (
              <button
                key={filter}
                className={`${styles.filterTab} ${activeFilter === filter ? styles.filterTabActive : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          {filtered.length > 0 ? (
            <div className={styles.projectGrid}>
              {filtered.map((project) => (
                <div
                  key={project.id}
                  className={styles.projectCard}
                >
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={styles.cardImage}
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span
                      className={`${styles.cardStatus} ${
                        project.status === 'Ongoing'
                          ? styles.statusOngoing
                          : styles.statusCompleted
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className={styles.cardBody}>
                    <h3>{project.title}</h3>
                    <p>{project.shortDesc}</p>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardStat}>
                        Beneficiaries:{' '}
                        <span className={styles.cardStatValue}>
                          {project.beneficiaries}
                        </span>
                      </span>
                      <Link
                        href={`/programs/${project.id}`}
                        className={styles.cardLink}
                      >
                        Details <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>No projects found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Impact Stats */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <SectionHeading
            subtitle="Collective Impact"
            title="Our Impact in Numbers"
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
