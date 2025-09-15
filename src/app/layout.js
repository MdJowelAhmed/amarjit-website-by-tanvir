import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/project_components/footer/Footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KFBUSA",
  description: "Company Portfolio Website by KFBUSA",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        sizes: "32x32",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div>
          {children}
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
