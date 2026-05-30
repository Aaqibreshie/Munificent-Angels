import { currentUser, clerkClient } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import AssignCourseForm from './AssignCourseForm';
import styles from './page.module.css';
import { Users, Settings } from 'lucide-react';

export const revalidate = 0; // Ensure data is always fresh

export default async function AdminStudentsPage() {
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }

  // Security check: Must be an admin to access this page
  if (user.publicMetadata?.role !== 'admin') {
    redirect('/'); // Kick non-admins out
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
