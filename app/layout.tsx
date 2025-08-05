import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// FIX: Changed the variable name from 'MonsSans' to 'monaSans' (camelCase).
// This is the standard convention and now matches its usage below.
const monaSans = Mona_Sans({
  variable: "--font-mona-sans", // TIP: Corrected 'mons-sans' to 'mona-sans' for consistency.
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI-powered platform for preparing for mock interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        // FIX: This now correctly references the 'monaSans' variable declared above.
        className={`${monaSans.className} antialiased pattern`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
