import styles from './SectionHeading.module.css';

export default function SectionHeading({ subtitle, title, description, light = false, center = true }) {
  return (
    <div className={`${styles.heading} ${light ? styles.light : ''} ${center ? styles.center : ''}`}>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
