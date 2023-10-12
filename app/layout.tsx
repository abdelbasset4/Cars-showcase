import { Footer, Navbar } from "@/Components";
import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cars ShowCase",
  description: "Cars Show Case",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
