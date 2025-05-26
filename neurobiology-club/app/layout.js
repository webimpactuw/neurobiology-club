import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito_Sans ({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
})

export const metadata = {
  title: "UW Neurobiology",
  description: "Website created by Aliyah Mcrae, Gabe Tanumihardja, and Ava Nunes",
  icons: {icon: '/logo.svg'}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

