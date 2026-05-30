import Image from 'next/image';
import { FileText, Download, TrendingUp, BarChart3, PieChart } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import StatCounter from '@/components/StatCounter/StatCounter';
import { impactStats, programs } from '@/data/siteData';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Impact',
  description: 'See the measurable impact Munificient Angels has created — 25,000+ lives impacted, 120+ training programs, 75+ communities served across Jammu & Kashmir.',
  openGraph: {
    title: 'Our Impact | Munificient Angels',
    description: 'Discover the social impact and milestones achieved by Munificient Angels.',
  },
};

const milestones = [
  {
    year: '2008',
    title: 'Foundation Year',
    description: 'Munificient Angels was established in Srinagar, J&K with a vision to empower marginalized communities through education and skill development.',
  },
  {
    year: '2011',
    title: 'First Skill Training Center',
    description: 'Launched our first skill development center, training 200+ youth in various vocational trades under government schemes.',
  },
  {
    year: '2014',
    title: 'Women Empowerment Initiative',
    description: 'Expanded programs to include women empowerment — Self-Help Groups, financial literacy, and vocational training for women.',
  },
  {
    year: '2016',
    title: 'HIV/AIDS & Health Programs',
    description: 'Partnered with NACO to launch HIV/AIDS awareness campaigns and community health programs across J&K.',
  },
  {
    year: '2018',
    title: 'Swift Private ITI Established',
    description: 'Founded Swift Private ITI — an NCVT-affiliated Industrial Training Institute offering 6 trade courses in Srinagar.',
  },
  {
    year: '2020',
    title: 'Drug De-addiction Programs',
    description: 'Launched comprehensive drug de-addiction programs including awareness, rehabilitation, and community-based prevention.',
  },
  {
    year: '2023',
    title: '25,000+ Lives Impacted',
    description: 'Reached a milestone of impacting over 25,000 lives through our diverse programs across 75+ communities.',
  },
];

const reports = [
  {
    title: 'Annual Report 2024-25',
    description: 'Comprehensive overview of our programs, financials, and impact during the year 2024-25.',
    icon: FileText,
  },
  {
    title: 'Impact Assessment Report',
    description: 'Detailed analysis of the social impact created across all program areas and beneficiary communities.',
    icon: BarChart3,
  },
  {
    title: 'Financial Transparency Report',
    description: 'Audited financial statements and fund utilization report for stakeholders and donors.',
    icon: PieChart,
  },
];

export default function ImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Making A Difference</span>
          <h1 className={styles.heroTitle}>Our Impact</h1>
          <p className={styles.heroDesc}>
            Measurable change, lasting transformation. Explore how Munificient Angels is creating real impact across communities in Jammu &amp; Kashmir.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <SectionHeading
            subtitle="By The Numbers"
            title="Impact at a Glance"
            light
          />
          <div className={styles.statsGrid}>
            {impactStats.map((stat) => (
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

      {/* Impact Areas */}
      <section className={styles.areasSection}>
        <div className={styles.areasContainer}>
          <SectionHeading
            subtitle="Where We Work"
            title="Impact Areas"
            description="Our programs create measurable change across multiple focus areas."
          />
          <div className={styles.areasGrid}>
            {programs.slice(0, 6).map((program) => {
              const statEntries = Object.entries(program.stats);
              return (
                <div key={program.id} className={styles.areaCard}>
                  <div className={styles.areaImageWrapper}>
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className={styles.areaImage}
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className={styles.areaBody}>
                    <h3>{program.title}</h3>
                    <p>{program.shortDesc}</p>
                    <div className={styles.areaStats}>
                      {statEntries.slice(0, 2).map(([key, value]) => (
                        <div key={key} className={styles.areaStat}>
                          <span className={styles.areaStatValue}>{value}</span>
                          <span className={styles.areaStatLabel}>{key}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineContainer}>
          <SectionHeading
            subtitle="Our Journey"
            title="Milestones"
            description="Key moments in our journey of social transformation."
          />
          <div className={styles.timeline}>
            {milestones.map((milestone) => (
              <div key={milestone.year} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <span className={styles.timelineYear}>{milestone.year}</span>
                <div className={styles.timelineContent}>
                  <h4>{milestone.title}</h4>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className={styles.reportsSection}>
        <div className={styles.reportsContainer}>
          <SectionHeading
            subtitle="Transparency"
            title="Reports & Documents"
            description="Download our reports to learn more about our work, impact, and financials."
          />
          <div className={styles.reportsGrid}>
            {reports.map((report) => {
              const IconComponent = report.icon;
              return (
                <div key={report.title} className={styles.reportCard}>
                  <div className={styles.reportIcon}>
                    <IconComponent size={26} />
                  </div>
                  <h4>{report.title}</h4>
                  <p>{report.description}</p>
                  <a href="#" className={styles.downloadBtn}>
                    <Download size={16} /> Download PDF
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
