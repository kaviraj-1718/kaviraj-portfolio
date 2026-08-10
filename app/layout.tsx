import type { Metadata } from "next";
import "./globals.css";
import "./responsive.css";

export const metadata: Metadata = {
  title: "Kaviraj K R | Software Developer",
  description:
    "Portfolio of Kaviraj K R — B.Tech AI & ML graduate from Bannari Amman Institute of Technology. Python Developer, Web Developer, and ML enthusiast seeking entry-level Software Developer roles.",
  keywords: [
    "Kaviraj K R",
    "Software Developer",
    "Python Developer",
    "Web Developer",
    "Web Developer",
    "AI ML Engineer",
    "Fresher",
    "B.Tech Graduate",
    "Bannari Amman Institute of Technology",
    "Portfolio",
  ],
  authors: [{ name: "Kaviraj K R" }],
  creator: "Kaviraj K R",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Kaviraj K R | Software Developer",
    description:
      "B.Tech AI & ML graduate skilled in Python, Web Development, and Machine Learning. View projects, skills, and contact info.",
    siteName: "Kaviraj K R Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaviraj K R | Software Developer",
    description:
      "B.Tech AI & ML graduate skilled in Python, Web Development, and Machine Learning.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
