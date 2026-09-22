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
  },
  twitter: {
    card: "summary",
    title: "PanTech Software",
    description: site.description,
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
