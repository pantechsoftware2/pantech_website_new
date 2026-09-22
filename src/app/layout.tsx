import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import "@fontsource-variable/inter";
import "@fontsource-variable/caveat";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "PanTech Software — Ideas. Technology. Growth.",
    template: "%s | PanTech Software",
  },
  description: site.description,
  openGraph: {
    title: "PanTech Software",
    description: site.description,
    siteName: site.name,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/brand/pantech-social.png",
        width: 1200,
        height: 630,
        alt: "PanTech Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PanTech Software",
    description: site.description,
    images: ["/images/brand/pantech-social.png"],
  },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  themeColor: "#060c13",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
