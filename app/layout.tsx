import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://freedogstudios.com"),
    title: "Freedog Studios | Arquitectura de Software & Fintech",
    description: "Consultoría boutique especializada en integraciones de pago de alta disponibilidad, sistemas transaccionales y automatización inteligente para startups y scale-ups.",
    keywords: ["Fintech", "Integraciones de pago", "Stripe", "Clip", "Openpay", "WhatsApp Business", "IA", "Data Engineering", "AWS", "IoT", "MQTT", "Automatización"],
    authors: [{ name: "Freedog Studios" }],
    creator: "Freedog Studios",
    publisher: "Freedog Studios",
    openGraph: {
        type: "website",
        locale: "es_MX",
        url: "https://freedogstudios.com",
        siteName: "Freedog Studios",
        title: "Freedog Studios | Arquitectura de Software & Fintech",
        description: "Consultoría boutique especializada en integraciones de pago de alta disponibilidad, sistemas transaccionales y automatización inteligente para startups y scale-ups.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Freedog Studios - Arquitectura de Software & Fintech",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Freedog Studios | Arquitectura de Software & Fintech",
        description: "Consultoría boutique especializada en integraciones de pago de alta disponibilidad, sistemas transaccionales y automatización inteligente.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
