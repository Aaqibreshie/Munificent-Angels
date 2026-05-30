import { currentUser, clerkClient } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import AssignCourseForm from './AssignCourseForm';
import styles from './page.module.css';
import { Users, Settings, Lock } from 'lucide-react';

export const revalidate = 0; // Ensure data is always fresh

export default async function AdminStudentsPage() {
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }

  // Security check: Must be an admin to access this page
  if (user.publicMetadata?.role !== 'admin') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center', padding: '2rem' }}>
        <Lock size={64} color="#f57c00" style={{ marginBottom: '1rem' }} />
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Access Denied</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          You are currently logged in as <strong>{user.emailAddresses[0]?.emailAddress}</strong>.<br/>
          This account does not have Administrator privileges.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fff', padding: '1rem 2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <span>Click here to sign out or switch accounts:</span>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    );
  }

  const client = await clerkClient();
  const allUsersResponse = await client.users.getUserList({
    limit: 100, // Fetch up to 100 students for now
    orderBy: '-created_at'
  });

  // Depending on Clerk version, it's either returning the array directly or in a `data` object
  const allUsers = allUsersResponse.data ? allUsersResponse.data : allUsersResponse;

  return (
    <div className={styles.adminWrapper}>
      <header className={styles.adminHeader}>
        <div className={styles.headerTitle}>
          <Settings className={styles.adminIcon} size={32} />
          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage Student Enrollments</p>
          </div>
        </div>
      </header>

      <main className={styles.adminMain}>
        <div className={styles.tableContainer}>
          <div className={styles.tableHeaderRow}>
            <Users size={20} className={styles.tableIcon} />
            <h2>All Registered Students</h2>
            <span className={styles.badge}>{allUsers.length}</span>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.studentTable}>
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Email Address</th>
                  <th>Date Joined</th>
                  <th>Course Assignment</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((u) => {
                  const email = u.emailAddresses[0]?.emailAddress || 'No Email';
                  const name = `${u.firstName || ''} ${u.lastName || ''}`.trim() || 'Unknown';
                  const joinDate = new Date(u.createdAt).toLocaleDateString();
                  const currentCourse = u.publicMetadata?.course || '';
                  
                  return (
                    <tr key={u.id}>
                      <td className={styles.tdName}>
                        <div className={styles.avatar}>{name.charAt(0)}</div>
                        {name}
                      </td>
                      <td>{email}</td>
                      <td>{joinDate}</td>
                      <td>
                        <AssignCourseForm userId={u.id} currentCourse={currentCourse} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
