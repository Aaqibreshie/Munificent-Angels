import { currentUser } from '@clerk/nextjs/server';
import { UserButton } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { client } from '../../../sanity/client';
import styles from './page.module.css';
import { FileText, PlayCircle, ExternalLink, Lock, CheckCircle2 } from 'lucide-react';

export const revalidate = 0; // Ensure portal is always dynamic and up to date

export default async function PortalPage() {
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }

  // Admin assigns course tag in Clerk Dashboard -> User -> Public Metadata
  const assignedCourse = user.publicMetadata?.course;

  let materials = [];
  if (assignedCourse) {
    const query = `*[_type == "courseMaterial" && course == $course] | order(_createdAt desc) {
      _id,
      title,
      description,
      "fileUrl": file.asset->url,
      link
    }`;
    materials = await client.fetch(query, { course: assignedCourse });
  }

  return (
    <div className={styles.portalWrapper}>
      <header className={styles.portalHeader}>
        <div className={styles.headerContent}>
          <div>
            <h1 className={styles.portalTitle}>Student Portal</h1>
            <p className={styles.portalSubtitle}>Welcome back, {user.firstName || 'Student'}</p>
          </div>
          <div className={styles.userActions}>
            {assignedCourse && <span className={styles.courseTag}>{assignedCourse.toUpperCase()}</span>}
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      <main className={styles.portalMain}>
        {!assignedCourse ? (
          <div className={styles.pendingState}>
            <div className={styles.pendingIconWrapper}>
              <Lock className={styles.pendingIcon} size={48} />
            </div>
            <h2>Account Pending Approval</h2>
            <p>
              Your account has been created successfully, but it is waiting for an administrator 
              to assign your specific ITI course materials. Please check back later or contact support.
            </p>
          </div>
        ) : (
          <div className={styles.materialsSection}>
            <div className={styles.sectionHeader}>
              <CheckCircle2 className={styles.successIcon} size={24} />
              <h2>Your Course Materials</h2>
            </div>
            
            {materials.length === 0 ? (
              <p className={styles.emptyState}>No materials have been uploaded for your course yet.</p>
            ) : (
              <div className={styles.materialsGrid}>
                {materials.map((item) => (
                  <div key={item._id} className={styles.materialCard}>
                    <div className={styles.cardHeader}>
                      {item.link && !item.fileUrl ? (
                        <PlayCircle size={24} className={styles.cardIcon} />
                      ) : (
                        <FileText size={24} className={styles.cardIcon} />
                      )}
                      <h3>{item.title}</h3>
                    </div>
                    {item.description && <p className={styles.cardDesc}>{item.description}</p>}
                    
                    <div className={styles.cardActions}>
                      {item.fileUrl && (
                        <a href={item.fileUrl} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                          Download PDF
                        </a>
                      )}
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className={`${styles.actionBtn} ${styles.secondaryBtn}`}>
                          <ExternalLink size={16} /> Watch / View
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
