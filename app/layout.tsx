import './globals.css';
import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${firaCode.className} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
