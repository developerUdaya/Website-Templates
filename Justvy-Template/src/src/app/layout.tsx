import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Justvy Global Innovations",
  description: "Justvy Global Innovations is a software company delivering custom websites, e-commerce platforms, and 3D web solutions.",
  keywords: "Justvy, Justvy Global Innovations, software development, IT solutions, web development, e-commerce platforms",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}