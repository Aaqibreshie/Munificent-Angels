'use client';

import { useState } from 'react';
import { assignStudentCourse } from '../../actions/userActions';
import styles from './page.module.css';

export default function AssignCourseForm({ userId, currentCourse }) {
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState(currentCourse || '');

  const courses = [
    { value: 'electrician', label: 'Electrician' },
    { value: 'plumber', label: 'Plumber' },
    { value: 'computer', label: 'Computer Operator' },
    { value: 'steno', label: 'Stenography' },
  ];

  async function handleAssign() {
    if (!course) return;
    setLoading(true);
    const result = await assignStudentCourse(userId, course);
    setLoading(false);
    
    if (!result.success) {
      alert('Error assigning course: ' + result.error);
    }
  }

  return (
    <div className={styles.assignForm}>
      <select 
        value={course} 
        onChange={(e) => setCourse(e.target.value)}
        className={styles.courseSelect}
        disabled={loading}
      >
        <option value="">-- Pending / None --</option>
        {courses.map(c => (
          <option key={c.value} value={c.value}>{c.label}</option>
        ))}
      </select>
      <button 
        onClick={handleAssign} 
        disabled={loading || course === currentCourse}
        className={styles.assignBtn}
      >
        {loading ? 'Saving...' : 'Save'}
      </button>
    </div>
  );
}
