'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './StatCounter.module.css';

export default function StatCounter({ number, suffix = '', label, light = false }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += number / steps;
      if (current >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div ref={ref} className={`${styles.stat} ${light ? styles.light : ''}`}>
      <span className={styles.number}>
        {count.toLocaleString()}{suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
