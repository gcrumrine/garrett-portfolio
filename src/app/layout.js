import './globals.css';
import PasswordGate from '@/components/PasswordGate';

export const metadata = {
  title: 'Garrett Crumrine Portfolio',
  description: 'Coming soon.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PasswordGate>
          {children}
        </PasswordGate>
      </body>
    </html>
  );
}
