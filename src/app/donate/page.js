'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import {
  Heart,
  GraduationCap,
  Utensils,
  Stethoscope,
  QrCode,
  Landmark,
  Copy,
  Check,
  ShieldCheck,
  Mail,
  ArrowRight,
  Sparkles,
  AlertTriangle,
} from 'lucide-react';
import styles from './page.module.css';

const PRESET_AMOUNTS = [500, 1000, 2500, 5000, 10000];

const IMPACT_CARDS = [
  {
    icon: GraduationCap,
    colorClass: 'impactIconGreen',
    title: 'Educate a Child',
    description:
      'Your donation funds school supplies, tuition fees, and skill-development programs for underprivileged children in Jammu & Kashmir.',
  },
  {
    icon: Utensils,
    colorClass: 'impactIconOrange',
    title: 'Feed the Hungry',
    description:
      'Help us provide nutritious meals and ration kits to families struggling with food insecurity during harsh winters and emergencies.',
  },
  {
    icon: Stethoscope,
    colorClass: 'impactIconRed',
    title: 'Support Healthcare',
    description:
      'Fund free health camps, medical aid, and mental health awareness programs for communities with limited access to healthcare.',
  },
];

const BANK_DETAILS = [
  { label: 'Bank Name', value: 'State Bank of India' },
  { label: 'Account Name', value: 'Munificient Angels' },
  { label: 'Account Number', value: 'XXXX XXXX XXXX' },
  { label: 'IFSC Code', value: 'SBIN0XXXXXX' },
  { label: 'Branch', value: 'Srinagar Main' },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [copied, setCopied] = useState(false);

  function handlePresetClick(amount) {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount('');
  }

  function handleCustomFocus() {
    setIsCustom(true);
    setSelectedAmount(null);
  }

  function handleCustomChange(e) {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    setIsCustom(true);
    setSelectedAmount(null);
  }

  async function copyUPI() {
    try {
      await navigator.clipboard.writeText('gpay-11254248577@okbizaxis');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  }

  const displayAmount = isCustom && customAmount ? Number(customAmount) : selectedAmount;

  return (
    <>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heartIconWrap}>
            <Heart size={36} fill="white" />
          </div>
          <h1 className={styles.heroTitle}>Make a Difference Today</h1>
          <p className={styles.heroSubtitle}>
            Every rupee you contribute helps transform lives in Jammu &amp;
            Kashmir. Your generosity fuels education, healthcare, and hope for
            those who need it most.
          </p>
        </div>
      </section>

      {/* Why Donate */}
      <section className={styles.whySection}>
        <div className={styles.sectionContainer}>
          <SectionHeading
            subtitle="Why Donate"
            title="Your Impact, Their Future"
            description="See how your contribution creates real, lasting change in the communities we serve."
          />
          <div className={styles.impactGrid}>
            {IMPACT_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className={styles.impactCard}>
                  <div
                    className={`${styles.impactIconWrap} ${styles[card.colorClass]}`}
                  >
                    <Icon size={32} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Amount Selector */}
      <section className={styles.amountSection}>
        <div className={styles.sectionContainer}>
          <SectionHeading
            subtitle="Choose Amount"
            title="Select Your Donation"
            description="Pick a preset amount or enter a custom one. Every contribution counts."
          />
          <div className={styles.amountGrid}>
            {PRESET_AMOUNTS.map((amount) => (
              <button
                key={amount}
                className={
                  selectedAmount === amount && !isCustom
                    ? styles.amountBtnActive
                    : styles.amountBtn
                }
                onClick={() => handlePresetClick(amount)}
                type="button"
              >
                ₹{amount.toLocaleString('en-IN')}
              </button>
            ))}
            <input
              type="text"
              inputMode="numeric"
              placeholder="₹ Custom"
              className={styles.customInput}
              value={customAmount ? `₹${customAmount}` : ''}
              onFocus={handleCustomFocus}
              onChange={handleCustomChange}
            />
          </div>
          {displayAmount > 0 && (
            <p className={styles.selectedLabel}>
              You&apos;re donating{' '}
              <strong>₹{displayAmount.toLocaleString('en-IN')}</strong>
            </p>
          )}
        </div>
      </section>

      {/* Payment Methods */}
      <section className={styles.paymentSection}>
        <div className={styles.sectionContainer}>
          <SectionHeading
            subtitle="Payment Methods"
            title="How to Donate"
            description="Choose your preferred payment method to complete your donation."
          />
          <div className={styles.paymentGrid}>
            {/* UPI */}
            <div className={styles.upiCard}>
              <h3 className={styles.upiCardTitle}>
                <QrCode size={24} />
                UPI Payment
              </h3>
              <div className={styles.qrImageWrapper}>
                <Image
                  src="/images/donate-qr.png"
                  alt="Munificient Angels UPI QR Code"
                  width={220}
                  height={220}
                  className={styles.qrImage}
                />
              </div>
              <div className={styles.upiId}>
                <span>gpay-11254248577@okbizaxis</span>
                <button
                  type="button"
                  className={styles.copyBtn}
                  onClick={copyUPI}
                  aria-label="Copy UPI ID"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
              <p className={styles.upiNote}>
                Scan the QR code above or use the UPI ID to make a donation via
                any UPI app — Google Pay, PhonePe, Paytm, etc.
              </p>
            </div>

            {/* Bank Transfer */}
            <div className={styles.bankCard}>
              <h3 className={styles.bankCardTitle}>
                <Landmark size={24} />
                Bank Transfer
              </h3>
              <div className={styles.bankDetails}>
                {BANK_DETAILS.map((row) => (
                  <div key={row.label} className={styles.bankRow}>
                    <span className={styles.bankLabel}>{row.label}</span>
                    <span className={styles.bankValue}>{row.value}</span>
                  </div>
                ))}
              </div>
              <div className={styles.bankNote}>
                <AlertTriangle size={14} />
                <span>
                  After transfer, please email your transaction details to{' '}
                  <strong>donate@munificentangels.org</strong> for receipt
                  generation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className={styles.taxSection}>
        <div className={styles.taxCard}>
          <div className={styles.taxIcon}>
            <ShieldCheck size={36} />
          </div>
          <div className={styles.taxContent}>
            <span className={styles.taxBadge}>TAX EXEMPTION</span>
            <h3>80G Tax Deduction Benefits</h3>
            <p>
              All donations made to Munificient Angels are eligible for tax
              deduction under Section 80G of the Income Tax Act, 1961. You will
              receive an official 80G receipt via email after your donation is
              confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* Thank You */}
      <section className={styles.thankSection}>
        <div className={styles.thankContent}>
          <div className={styles.thankIconWrap}>
            <Sparkles size={32} />
          </div>
          <h2>Thank You for Your Generosity</h2>
          <p>
            Your kindness helps us continue our mission of empowering
            communities, educating the youth, and uplifting lives across Jammu
            &amp; Kashmir. Every donation, big or small, makes a real
            difference. Together, we can build a brighter tomorrow.
          </p>
          <Link href="/contact" className={styles.thankContact}>
            <Mail size={18} />
            Questions? Contact us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
