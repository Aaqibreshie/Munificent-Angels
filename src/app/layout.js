import './globals.css';
import SiteWrapper from '@/components/SiteWrapper/SiteWrapper';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: {
    default: 'Munificient Angels — Empower • Educate • Elevate',
    template: '%s | Munificient Angels'
  },
  description: 'Munificient Angels is a non-profit organization committed to skill development, women empowerment, health awareness, drug de-addiction and community welfare in Jammu & Kashmir.',
  keywords: ['NGO', 'Munificient Angels', 'Skill Development', 'Women Empowerment', 'Srinagar', 'Kashmir', 'Swift ITI', 'Training', 'Community Welfare'],
  authors: [{ name: 'Munificient Angels' }],
  openGraph: {
    title: 'Munificient Angels — Empower • Educate • Elevate',
    description: 'Empowering communities and transforming lives through skill development, education, and social welfare.',
    url: 'https://munificentangels.org',
    siteName: 'Munificient Angels',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1B6B3A" />
      </head>
      <body suppressHydrationWarning>
        <ClerkProvider>
          <SiteWrapper>{children}</SiteWrapper>
        </ClerkProvider>
      </body>
    </html>
  );
}
