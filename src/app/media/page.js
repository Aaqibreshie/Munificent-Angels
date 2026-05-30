'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import { newsEvents } from '@/data/siteData';
import styles from './page.module.css';

const galleryImages = [
  { src: '/images/projects/skill-development.png', label: 'Skill Development Training' },
  { src: '/images/projects/women-empowerment.png', label: 'Women Empowerment Program' },
  { src: '/images/projects/hiv-aids.png', label: 'HIV/AIDS Awareness Campaign' },
  { src: '/images/projects/drug-deaddiction.png', label: 'Drug De-addiction Program' },
  { src: '/images/projects/livelihood.png', label: 'Livelihood Promotion' },
  { src: '/images/projects/community-welfare.png', label: 'Community Welfare Camp' },
  { src: '/images/swift-iti/building.png', label: 'Swift Private ITI Campus' },
  { src: '/images/hero/hero-1.png', label: 'Community Outreach Event' },
];

const videos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Our Journey of Impact',
    description: 'A documentary on Munificient Angels\' 15+ years of community empowerment.',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Skill Development Programs',
    description: 'Inside look at our vocational training and skill development initiatives.',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Swift Private ITI Tour',
    description: 'Virtual tour of Swift Private ITI campus, facilities, and training workshops.',
  },
];

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.toLocaleString('en-IN', { month: 'short' });
  return { day, month };
}

export default function MediaPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Media Center</span>
          <h1 className={styles.heroTitle}>Media &amp; Gallery</h1>
          <p className={styles.heroDesc}>
            Explore our visual journey — photos, news, and videos showcasing the impact and stories of Munificient Angels.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryContainer}>
          <SectionHeading
            subtitle="Visual Stories"
            title="Photo Gallery"
            description="Moments captured from our programs, events, and community initiatives."
          />
          <div className={styles.galleryGrid}>
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={styles.galleryItem}
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.label}
                  fill
                  className={styles.galleryImage}
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className={styles.galleryOverlay}>
                  <span className={styles.galleryLabel}>{image.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className={styles.newsSection} id="news">
        <div className={styles.newsContainer}>
          <SectionHeading
            subtitle="Stay Updated"
            title="News & Events"
            description="Latest updates, events, and announcements from Munificient Angels."
          />
          <div className={styles.newsGrid}>
            {newsEvents.map((item) => {
              const { day, month } = formatDate(item.date);
              return (
                <article key={item.id} className={styles.newsCard}>
                  <div className={styles.newsDateBox}>
                    <span className={styles.newsDay}>{day}</span>
                    <span className={styles.newsMonth}>{month}</span>
                  </div>
                  <div className={styles.newsContent}>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <span className={styles.newsCategoryBadge}>{item.category}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className={styles.videoSection}>
        <div className={styles.videoContainer}>
          <SectionHeading
            subtitle="Watch"
            title="Videos"
            description="Watch our documentaries, program highlights, and campus tours."
          />
          <div className={styles.videoGrid}>
            {videos.map((video, index) => (
              <div key={index} className={styles.videoCard}>
                <div className={styles.videoWrapper}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className={styles.videoInfo}>
                  <h4>{video.title}</h4>
                  <p>{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close lightbox">
              <X size={22} />
            </button>
            <button
              className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
              onClick={goPrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className={`${styles.lightboxNav} ${styles.lightboxNext}`}
              onClick={goNext}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].label}
              width={900}
              height={600}
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              priority
            />
            <div className={styles.lightboxCaption}>
              {galleryImages[lightboxIndex].label}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
