import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import ConferenceFooter from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ICGEWEE | 2025",
  description: "Join the premier international conference on Gender Equality, Women Empowerment & Entrepreneurship. Connect with experts, share research, and explore cutting-edge developments in gender studies, women leadership, and social innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         
      >
       <Nav/>
        {children}
      <ConferenceFooter/>
      </body>
    </html>
  );
}
