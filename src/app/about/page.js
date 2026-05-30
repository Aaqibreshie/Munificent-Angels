import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, Heart, Users, Shield, Handshake, Lightbulb, Globe } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import { team } from '@/data/siteData';
import styles from './page.module.css';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Munificient Angels — a non-profit organization based in Srinagar, Jammu & Kashmir, committed to empowering communities through skill development, education, and social welfare.',
  openGraph: {
    title: 'About Us | Munificient Angels',
    description: 'Discover the mission, vision, and team behind Munificient Angels NGO.',
  },
};

const coreValues = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We serve with empathy and genuine care for every individual in our communities.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Transparency and accountability guide every decision and action we take.',
  },
  {
    icon: Users,
    title: 'Inclusivity',
    description: 'We believe in equal opportunities for all, regardless of background or identity.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace new approaches and creative solutions to complex social challenges.',
  },
  {
    icon: Handshake,
    title: 'Collaboration',
    description: 'Partnering with communities, government, and organizations for greater impact.',
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description: 'Building self-reliant communities through lasting, sustainable development programs.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Who We Are</span>
          <h1 className={styles.heroTitle}>About Munificient Angels</h1>
          <p className={styles.heroDesc}>
            Empowering communities and transforming lives across Jammu &amp; Kashmir through education, skill development, and sustainable welfare since 2008.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className={styles.storySection}>
        <div className={styles.storyContainer}>
          <SectionHeading
            subtitle="Our Journey"
            title="Our Story"
            description="A legacy of compassion, empowerment, and community transformation."
          />
          <div className={styles.storyGrid}>
            <div className={styles.storyImageWrapper}>
              <Image
                src="/images/hero/hero-1.png"
                alt="Munificient Angels community work"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className={styles.storyDecor} />
            </div>
            <div className={styles.storyContent}>
              <h3>Rooted in Srinagar, Reaching Across J&amp;K</h3>
              <p>
                Munificient Angels was founded in 2008 in the heart of Srinagar, Jammu &amp; Kashmir, with a simple yet powerful mission — to uplift marginalized communities through education, skill development, and holistic welfare.
              </p>
              <p>
                What began as a small initiative by a group of passionate social workers has grown into a leading non-governmental organization, impacting over 25,000 lives across 75+ villages and communities. We are registered under the Societies Registration Act and recognized by multiple government bodies for our impactful programs.
              </p>
              <p>
                From running certified skill development programs under PMKVY and DDU-GKY, to establishing Swift Private ITI, to conducting HIV/AIDS awareness campaigns and drug de-addiction programs — our work spans the full spectrum of community empowerment.
              </p>
              <div className={styles.storyHighlight}>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightNumber}>15+</span>
                  <span className={styles.highlightLabel}>Years of Service</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightNumber}>25,000+</span>
                  <span className={styles.highlightLabel}>Lives Impacted</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightNumber}>75+</span>
                  <span className={styles.highlightLabel}>Communities Served</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionSection} id="mission">
        <div className={styles.missionContainer}>
          <SectionHeading
            subtitle="Our Purpose"
            title="Mission & Vision"
            description="Guided by purpose, driven by impact."
          />
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>
                <Target size={28} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower underserved communities through sustainable skill development, quality education, healthcare awareness, and social welfare programs. We strive to create an inclusive society where every individual has the opportunity to learn, grow, and lead a dignified life.
              </p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>
                <Eye size={28} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be a catalyst for social transformation in Jammu &amp; Kashmir and beyond — building self-reliant communities where education, health, and livelihood opportunities are accessible to all, irrespective of gender, religion, or socio-economic background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesContainer}>
          <SectionHeading
            subtitle="What We Stand For"
            title="Our Core Values"
            description="The principles that guide our work and define who we are."
          />
          <div className={styles.valuesGrid}>
            {coreValues.map((value) => {
              const IconComponent = value.icon;
              return (
                <div key={value.title} className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <IconComponent size={24} />
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection} id="team">
        <div className={styles.teamContainer}>
          <SectionHeading
            subtitle="Leadership"
            title="Meet Our Team"
            description="Dedicated leaders driving positive change in our communities."
          />
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.teamImageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className={styles.teamInfo}>
                  <h4>{member.name}</h4>
                  <span className={styles.teamRole}>{member.role}</span>
                  <p className={styles.teamBio}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2>Be Part of the Change</h2>
          <p>
            Join us in our mission to empower communities and transform lives. Whether you volunteer, donate, or partner with us — every contribution makes a difference.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn btn-white btn-lg">
              Get Involved
            </Link>
            <Link href="/donate" className="btn btn-outline-white btn-lg">
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
