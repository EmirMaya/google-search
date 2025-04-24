import { Geist, Geist_Mono, Monoton } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const monoton = Monoton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-monoton',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata = {
  title: "Google Retro",
  description: "Retro version of Google Search",
  icons: {
    icon: "/favicon.ico", // asegurate que este archivo esté en /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
