'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import { Send, CheckCircle, AlertCircle, AlertTriangle } from 'lucide-react';
import { swiftITICourses } from '@/data/siteData';
import styles from './AdmissionForm.module.css';

export default function AdmissionForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    qualification: '',
    desired_course: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  function validate() {
    const errs = {};
    if (!formData.full_name.trim()) errs.full_name = 'Name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[+\d\s-]{10,15}$/.test(formData.phone)) {
      errs.phone = 'Enter a valid phone number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email';
    }
    if (!formData.qualification) errs.qualification = 'Please select qualification';
    if (!formData.desired_course) errs.desired_course = 'Please select a course';
    return errs;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({
        full_name: '',
        phone: '',
        email: '',
        qualification: '',
        desired_course: '',
      });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.formSection} id="admission-inquiry">
      <div className={styles.formContainer}>
        <SectionHeading
          subtitle="Apply Now"
          title="Online Admission Inquiry"
          description="Fill out the form below to register your interest, and our admissions team will contact you shortly."
        />

        <div className={styles.formCard}>
          <form ref={formRef} onSubmit={handleSubmit} className={styles.formGrid} noValidate>
            
            {/* Full Name */}
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="full_name">
                Full Name <span className={styles.required}>*</span>
              </label>
              <input
                id="full_name"
                name="full_name"
                type="text"
                placeholder="Enter your full name"
                value={formData.full_name}
                onChange={handleChange}
                className={`${styles.formInput} ${errors.full_name ? styles.inputError : ''}`}
              />
              {errors.full_name && <span className={styles.errorText}>{errors.full_name}</span>}
            </div>

            {/* Phone */}
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="phone">
                Phone Number <span className={styles.required}>*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                className={`${styles.formInput} ${errors.phone ? styles.inputError : ''}`}
              />
              {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
            </div>

            {/* Email */}
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="email">
                Email Address (Optional)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.formInput} ${errors.email ? styles.inputError : ''}`}
              />
              {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>

            {/* Qualification */}
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="qualification">
                Highest Qualification <span className={styles.required}>*</span>
              </label>
              <select
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className={`${styles.formSelect} ${errors.qualification ? styles.inputError : ''}`}
              >
                <option value="">Select Qualification</option>
                <option value="10th Pass">10th Pass</option>
                <option value="12th Pass">12th Pass</option>
                <option value="Graduate">Graduate</option>
                <option value="Other">Other</option>
              </select>
              {errors.qualification && <span className={styles.errorText}>{errors.qualification}</span>}
            </div>

            {/* Desired Course */}
            <div className={styles.formGroupFull}>
              <label className={styles.formLabel} htmlFor="desired_course">
                Interested Trade Course <span className={styles.required}>*</span>
              </label>
              <select
                id="desired_course"
                name="desired_course"
                value={formData.desired_course}
                onChange={handleChange}
                className={`${styles.formSelect} ${errors.desired_course ? styles.inputError : ''}`}
              >
                <option value="">Select a Course</option>
                {swiftITICourses.map((course) => (
                  <option key={course.name} value={course.name}>
                    {course.name}
                  </option>
                ))}
              </select>
              {errors.desired_course && <span className={styles.errorText}>{errors.desired_course}</span>}
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className={`${styles.statusMessage} ${styles.successMsg}`}>
                <CheckCircle size={20} />
                Thank you! Your inquiry has been submitted successfully. Our team will contact you soon.
              </div>
            )}
            {status === 'error' && (
              <div className={`${styles.statusMessage} ${styles.errorMsg}`}>
                <AlertCircle size={20} />
                Oops! Something went wrong. Please try again or contact us directly.
              </div>
            )}

            {/* Submit */}
            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? (
                <>
                  <span className={styles.spinner} />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Inquiry
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
