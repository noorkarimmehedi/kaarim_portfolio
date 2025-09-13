import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  //description: siteConfig.description,
  keywords: [
    "Design",
    "Technology",
    "Design Engineer",
  ],
  authors: [
    {
      name: "Kaarim",
      url: "https://kaarim.com",
    },
  ],
  creator: "Kaarim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    //description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    //description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@kaarim",
  },
  icons: {
    icon: "/a-new-adventure-favicon.svg",
    shortcut: "/a-new-adventure-favicon.svg",
    apple: "/a-new-adventure-favicon.svg",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  themeColor: "#fefefe",
  viewport: {
    width: "device-width",
    initialScale: 1,
    themeColor: "#fefefe"
  },
  other: {
    "theme-color": "#fefefe",
    "msapplication-TileColor": "#fefefe",
    "apple-mobile-web-app-status-bar-style": "light-content"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{backgroundColor: '#fefefe'}}>
      <head>
        <meta name="theme-color" content="#fefefe" />
        <meta name="msapplication-TileColor" content="#fefefe" />
        <meta name="apple-mobile-web-app-status-bar-style" content="light-content" />
      </head>
      <body
        className={`antialiased h-screen w-screen`}
        style={{backgroundColor: '#fefefe'}}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
