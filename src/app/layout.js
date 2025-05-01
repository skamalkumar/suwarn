// src/app/layout.jsx

import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Finance',
  description: 'Your financial companion',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-black text-white m-0 p-0 flex flex-col min-h-screen">
        {/* Main content that expands */}
        <main className="flex-grow">{children}</main>

      </body>
    </html>
  );
}
