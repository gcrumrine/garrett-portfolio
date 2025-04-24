import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import './globals.css';
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Garrett Crumrine Portfolio',
  description: 'Academic and professional profile of Garrett Crumrine',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <nav className="flex space-x-4 p-6 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
          <Link href="/">Home</Link>
          <Link href="/biography">Biography</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
