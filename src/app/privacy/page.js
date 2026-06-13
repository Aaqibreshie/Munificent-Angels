import styles from '../terms/page.module.css';

export const metadata = {
  title: 'Privacy Policy | Munificient Angels',
  description: 'Privacy Policy for Munificient Angels.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
          <p className={styles.heroDesc}>
            Your privacy is important to us. Learn how we collect, use, and protect your data.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={`container`}>
          <div className={styles.contentContainer}>
            <h2>1. Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email address, phone number, and physical address when you voluntarily submit it to us through forms, donations, volunteer applications, or account registration. We also automatically collect certain non-personally identifiable information when you visit our website, such as your IP address, browser type, and operating system.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              The information we collect is used in the following ways:
            </p>
            <ul>
              <li>To process donations and provide tax receipts.</li>
              <li>To manage student admissions, volunteer applications, and program enrollments.</li>
              <li>To communicate with you regarding our projects, newsletters, and events.</li>
              <li>To improve our website functionality and user experience.</li>
              <li>To comply with legal obligations and prevent fraudulent activity.</li>
            </ul>

            <h2>3. Information Sharing and Disclosure</h2>
            <p>
              Munificent Angels does not sell, rent, or trade your personal information to third parties. We may share your information with trusted third-party service providers (such as payment processors or email services) who assist us in operating our website and conducting our operations. These third parties are bound by strict confidentiality agreements.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement a variety of security measures, including encryption and secure servers, to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal data, we cannot guarantee its absolute security.
            </p>

            <h2>5. Cookies and Tracking Technologies</h2>
            <p>
              Our website may use "cookies" to enhance your experience. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.
            </p>

            <h2>6. Third-Party Links</h2>
            <p>
              Our website may contain links to external sites. We are not responsible for the privacy practices or the content of these third-party websites. We encourage you to read the privacy policies of any site you visit.
            </p>

            <h2>7. Your Rights</h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections to any inaccurate data, and request the deletion of your personal data. To exercise these rights, please contact us using the details below.
            </p>

            <h2>8. Changes to this Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of any significant changes by posting the new Privacy Policy on this page with an updated effective date.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please contact us at:<br/>
              <strong>Email:</strong> info@munificentangels.org<br/>
              <strong>Phone:</strong> +91 98785 43210
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
