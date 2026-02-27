import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import LenisProvider from "@/components/LenisProvider";
import { Rubik } from "next/font/google";

const spaceGrotesk = Rubik({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="bg-black text-white">
        <LenisProvider>
          <Navbar />
          {children}
        </LenisProvider>


        <Analytics />
        <SpeedInsights />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Harshal Madgulkar",
              url: "https://harshalmadgulkar.live",
              jobTitle: "Frontend Engineer",
              sameAs: [
                "https://github.com/harshalmadgulkar",
                "https://www.linkedin.com/in/harshal-madgulkar/"
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

// SEO Data
export const metadata = {
  title: {
    default: "Harshal Madgulkar | Frontend Engineer",
    template: "%s | Harshal Madgulkar",
  },
  description: "Harshal Madgulkar is a Frontend Engineer specializing in React.js, TypeScript and scalable web applications.",
  openGraph: {
    title: "Harshal Madgulkar | Frontend Engineer",
    description:
      "Frontend Engineer building scalable React apps.",
    url: "https://harshalmadgulkar.live",
    siteName: "Harshal Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshal Madgulkar | Frontend Engineer",
    description:
      "Frontend Engineer specializing in React.js and scalable UI architecture.",
    images: ["/og-image.png"],
  },
};