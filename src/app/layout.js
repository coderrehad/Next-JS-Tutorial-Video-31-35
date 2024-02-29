// In /app/layout.jsx
'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import './globals.css'
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>
      <Navbar/>
      {children}
      <ProgressBar
          height="2px"
          color="#000"
          options={{ showSpinner: true }}
          shallowRouting
      />
      </body>
      </html>
  );
}