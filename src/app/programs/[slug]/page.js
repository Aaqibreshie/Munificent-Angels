import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, ChevronRight, Phone, Heart } from 'lucide-react';
import { programs } from '@/data/siteData';
import styles from './page.module.css';

export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.id,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const program = programs.find((p) => p.id === slug);

  if (!program) {
    return {
      title: 'Program Not Found',
    };
  }

  return {
    title: program.title,
    description: program.longDesc,
    openGraph: {
      title: `${program.title} | Munificient Angels`,
      description: program.shortDesc,
      images: [{ url: program.image }],
    },
  };
}

export default async function ProgramDetailPage({ params }) {
  const { slug } = await params;
  const program = programs.find((p) => p.id === slug);

  if (!program) {
    notFound();
  }

  const statEntries = Object.entries(program.stats);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src={program.image}
            alt={program.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
            sizes="100vw"
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroBreadcrumb}>
            <Link href="/">Home</Link>
            <ChevronRight size={14} className={styles.breadcrumbSep} />
            <Link href="/programs">Programs</Link>
            <ChevronRight size={14} className={styles.breadcrumbSep} />
            <span className={styles.breadcrumbCurrent}>{program.title}</span>
          </div>
          <h1 className={styles.heroTitle}>{program.title}</h1>
          <p className={styles.heroDesc}>{program.shortDesc}</p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <div className={styles.contentGrid}>
            {/* Main Content */}
            <div className={styles.mainContent}>
              <h2>About This Program</h2>
              <p className={styles.description}>{program.longDesc}</p>

              <h3 className={styles.featuresHeading}>Key Features</h3>
              <div className={styles.featuresList}>
                {program.features.map((feature) => (
                  <div key={feature} className={styles.featureItem}>
                    <div className={styles.featureIcon}>
                      <CheckCircle size={18} />
                    </div>
                    <span className={styles.featureText}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.statsCard}>
                <h3>Program Impact</h3>
                <div className={styles.statItems}>
                  {statEntries.map(([key, value]) => (
                    <div key={key} className={styles.statItem}>
                      <span className={styles.statValue}>{value}</span>
                      <span className={styles.statLabel}>{key}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.ctaCard}>
                <h3>Support This Program</h3>
                <p>
                  Your contribution helps us reach more people and create lasting change in communities across J&amp;K.
                </p>
                <div className={styles.ctaButtons}>
                  <Link href="/donate" className="btn btn-white btn-lg">
                    <Heart size={16} /> Donate Now
                  </Link>
                  <Link href="/contact" className="btn btn-outline-white btn-lg">
                    <Phone size={16} /> Contact Us
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
