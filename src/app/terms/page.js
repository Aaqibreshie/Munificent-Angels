import styles from './page.module.css';

export const metadata = {
  title: 'Terms and Conditions | Munificient Angels',
  description: 'Terms and Conditions for Munificient Angels, an NGO dedicated to empowering communities.',
};

export default function TermsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Terms and Conditions</h1>
          <p className={styles.heroDesc}>
            Please read these terms carefully before using our website or services.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={`container`}>
          <div className={styles.contentContainer}>
            <h2>1. Introduction</h2>
            <p>
              Welcome to the official website of Munificent Angels ("we," "our," or "us"). By accessing or using our website, you agree to comply with and be bound by the following Terms and Conditions. If you do not agree with these terms, please do not use our website.
            </p>

            <h2>2. Use of the Website</h2>
            <p>
              You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this site by any third party. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of Munificent Angels or its content suppliers and is protected by copyright laws. You may not reproduce, duplicate, copy, sell, resell, or otherwise exploit any portion of the website without our express written consent.
            </p>

            <h2>4. Donations and Contributions</h2>
            <p>
              All donations made through our website are voluntary. By making a donation, you confirm that the funds are your own and are provided without any unlawful intent. We utilize donations to support our various projects and community initiatives. Please ensure all details provided during the donation process are accurate.
            </p>

            <h2>5. Admissions and Portals</h2>
            <p>
              The Student Portal and Admin Dashboard are strictly for authorized users. Any attempt to gain unauthorized access to these portals, or to manipulate data within them, is strictly prohibited and may result in legal action. Information provided during the admission process must be true, complete, and accurate.
            </p>

            <h2>6. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with Munificent Angels. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              Munificent Angels shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products, even if Munificent Angels has been advised of the possibility of such damages.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Your use of the website following any such change constitutes your agreement to follow and be bound by the Terms and Conditions as changed.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding these Terms and Conditions, please contact us at:<br/>
              <strong>Email:</strong> info@munificentangels.org<br/>
              <strong>Phone:</strong> +91 98785 43210
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
