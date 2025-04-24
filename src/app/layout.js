import './globals.css';
import PasswordGate from '@/components/PasswordGate';

export const metadata = {
  title: 'Garrett Crumrine Portfolio',
  description: 'AI Researcher, HPC Developer, and Engineer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Load Google reCAPTCHA */}
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </head>
      <body>
        <PasswordGate>{children}</PasswordGate>
      </body>
    </html>
  );
}
