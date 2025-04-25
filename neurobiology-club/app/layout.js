import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter ({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: "UW Neurobiology",
  description: "Website created by Aliyah Mcrae, Hao Le, Gabe Tanumihardja, and Ava Nunes",
  icons: {icon: '/logo.svg'}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

