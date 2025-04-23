import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Discovery Land Company",
  description: "Discover luxury residential family homes built in private club communities internationally.",
  keywords: "luxury real estate, golf club, private club, residential communities, discovery land company",
  icons: {
    icon: "/images/logo-mark.svg",
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
