import Image from 'next/image';
import Link from 'next/link';
import {
  Wrench,
  Cpu,
  Scissors,
  Zap,
  Droplets,
  Flame,
  Clock,
  GraduationCap,
  Users,
  Hammer,
  Monitor,
  BookOpen,
  Home,
  Dumbbell,
  UtensilsCrossed,
  ClipboardList,
  FileText,
  CheckSquare,
  UserCheck,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import { swiftITICourses } from '@/data/siteData';
import AdmissionForm from '@/components/AdmissionForm/AdmissionForm';
import { client } from '../../../sanity/client';
import styles from './page.module.css';

export const metadata = {
  title: 'Swift Private ITI — Training Centers',
  description: 'Swift Private ITI, run by Munificient Angels, offers NCVT-affiliated courses in Electrician, Fitter, COPA, Plumber, Dress Making, and Welder trades. Located in Srinagar, J&K.',
  openGraph: {
    title: 'Swift Private ITI | Munificient Angels',
    description: 'NCVT-affiliated ITI offering industry-ready trade courses in Srinagar, J&K.',
  },
};

const courseIcons = {
  Electrician: Zap,
  Fitter: Wrench,
  'Computer Operator & Programming Assistant (COPA)': Cpu,
  Plumber: Droplets,
  'Dress Making': Scissors,
  Welder: Flame,
};

const facilities = [
  {
    icon: Hammer,
    title: 'Workshops',
    description: 'Well-equipped workshops with modern tools and machinery for hands-on practical training.',
  },
  {
    icon: Monitor,
    title: 'Computer Lab',
    description: 'State-of-the-art computer lab with latest software for COPA and digital literacy training.',
  },
  {
    icon: BookOpen,
    title: 'Library',
    description: 'Comprehensive library with technical books, reference materials, and digital resources.',
  },
  {
    icon: Home,
    title: 'Hostel',
    description: 'Safe and comfortable hostel accommodation for outstation students with all amenities.',
  },
  {
    icon: Dumbbell,
    title: 'Sports',
    description: 'Sports facilities and recreational areas to promote physical fitness and team building.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Canteen',
    description: 'Hygienic canteen providing nutritious meals at affordable prices for students and staff.',
  },
];

const admissionSteps = [
  {
    number: 1,
    title: 'Check Eligibility',
    description: 'Review the eligibility criteria for your preferred trade and ensure you meet the requirements.',
  },
  {
    number: 2,
    title: 'Submit Application',
    description: 'Fill out the application form online or visit our campus to submit your application.',
  },
  {
    number: 3,
    title: 'Document Verification',
    description: 'Submit required documents for verification including mark sheets and identity proof.',
  },
  {
    number: 4,
    title: 'Enroll & Begin',
    description: 'Complete the enrollment process, pay fees, and begin your journey at Swift ITI.',
  },
];

export const revalidate = 60;

export default async function TrainingCentersPage() {
  // Fetch courses from Sanity
  const query = `*[_type == "course"] | order(name asc)`;
  const sanityCourses = await client.fetch(query);
  
  // Use Sanity courses if available, otherwise fallback to static data
  const coursesToRender = sanityCourses && sanityCourses.length > 0 ? sanityCourses : swiftITICourses;

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Training Excellence</span>
          <h1 className={styles.heroTitle}>Swift Private ITI</h1>
          <p className={styles.heroSubtitle}>An Initiative by Munificient Angels</p>
          <p className={styles.heroDesc}>
            NCVT-affiliated Industrial Training Institute offering industry-ready trade courses to empower the youth of Jammu &amp; Kashmir with employable skills.
          </p>
        </div>
      </section>

      {/* About Swift ITI */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <SectionHeading
            subtitle="About the Institute"
            title="Building Skills, Shaping Futures"
            description="Swift Private ITI is committed to producing skilled professionals for the nation."
          />
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImageWrapper}>
              <Image
                src="/images/swift-iti/building.png"
                alt="Swift Private ITI Campus"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className={styles.aboutContent}>
              <h3>Empowering Youth Through Technical Education</h3>
              <p>
                Swift Private ITI, established by Munificient Angels, is an NCVT (National Council for Vocational Training) affiliated Industrial Training Institute located in Srinagar, Jammu &amp; Kashmir. Our institute is dedicated to providing quality technical education and practical training to equip students with industry-relevant skills.
              </p>
              <p>
                We offer a range of trade courses designed to meet the growing demand for skilled professionals across various industries. Our experienced faculty, modern infrastructure, and industry-aligned curriculum ensure that our students are job-ready upon graduation.
              </p>
              <div className={styles.aboutHighlights}>
                <div className={styles.aboutHighlight}>
                  <span className={styles.aboutHighlightNum}>6</span>
                  <span className={styles.aboutHighlightLabel}>Trades</span>
                </div>
                <div className={styles.aboutHighlight}>
                  <span className={styles.aboutHighlightNum}>132</span>
                  <span className={styles.aboutHighlightLabel}>Seats</span>
                </div>
                <div className={styles.aboutHighlight}>
                  <span className={styles.aboutHighlightNum}>NCVT</span>
                  <span className={styles.aboutHighlightLabel}>Affiliated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className={styles.coursesSection}>
        <div className={styles.coursesContainer}>
          <SectionHeading
            subtitle="Our Trades"
            title="Courses Offered"
            description="Choose from a variety of NCVT-certified trade courses designed for your career growth."
          />
          <div className={styles.coursesGrid}>
            {coursesToRender.map((course) => {
              const IconComponent = courseIcons[course.name] || Wrench;
              return (
                <div key={course.name} className={styles.courseCard}>
                  <div className={styles.courseIcon}>
                    <IconComponent size={24} />
                  </div>
                  <h3>{course.name}</h3>
                  <p>{course.description}</p>
                  <div className={styles.courseMeta}>
                    <div className={styles.courseMetaItem}>
                      <Clock size={16} />
                      <span>Duration: <strong>{course.duration}</strong></span>
                    </div>
                    <div className={styles.courseMetaItem}>
                      <GraduationCap size={16} />
                      <span>Eligibility: <strong>{course.eligibility}</strong></span>
                    </div>
                    <div className={styles.courseMetaItem}>
                      <Users size={16} />
                      <span>Seats: <strong>{course.seats}</strong></span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className={styles.facilitiesSection}>
        <div className={styles.facilitiesContainer}>
          <SectionHeading
            subtitle="Campus Life"
            title="Our Facilities"
            description="A conducive learning environment with modern infrastructure and amenities."
          />
          <div className={styles.facilitiesGrid}>
            {facilities.map((facility) => {
              const IconComponent = facility.icon;
              return (
                <div key={facility.title} className={styles.facilityCard}>
                  <div className={styles.facilityIcon}>
                    <IconComponent size={28} />
                  </div>
                  <h4>{facility.title}</h4>
                  <p>{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className={styles.admissionSection}>
        <div className={styles.admissionContainer}>
          <SectionHeading
            subtitle="How to Join"
            title="Admission Process"
            description="Follow these simple steps to begin your journey at Swift Private ITI."
          />
          <div className={styles.admissionSteps}>
            {admissionSteps.map((step) => (
              <div key={step.number} className={styles.step}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2>Start Your Career Journey Today</h2>
          <p>
            Admissions are open for the upcoming session. Enroll now to learn from the best and kickstart your career with an NCVT-certified trade qualification.
          </p>
          <div className={styles.ctaButtons}>
            <a href="#admission-inquiry" className="btn btn-white btn-lg">
              Apply for Admission
            </a>
            <Link href="/programs" className="btn btn-outline-white btn-lg">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <AdmissionForm />
    </>
  );
}
