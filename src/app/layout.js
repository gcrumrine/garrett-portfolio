import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import PasswordGate from '@/components/PasswordGate';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Garrett Crumrine Portfolio',
  description: 'Academic and professional profile of Garrett Crumrine',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Load Google reCAPTCHA */}
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}>
        <PasswordGate>
          {/* ✅ Sticky Top Nav */}
          <nav className="flex space-x-4 p-6 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
            <Link href="/">Home</Link>
            <Link href="/biography">Biography</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/publications">Publications</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* ✅ Main Page Content */}
          <main className="p-4">{children}</main>
        </PasswordGate>
      </body>
    </html>
  );
}
