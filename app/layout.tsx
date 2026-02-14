import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mammothzy - Create New Activity",
  description: "Marketplace for searching, filtering and instantly booking team activities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
