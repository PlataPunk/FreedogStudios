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
    title: "Freedog Studios | Desarrollo de Sistemas, Apps y Chatbots a medida",
    description: "Organizamos la información de tu negocio. Expertos en sistemas a medida, chatbots de ventas y gestión de sucursales. Deja atrás el Excel y el Drive. ¡Cotiza!",
    keywords: ["Fintech", "Integraciones de pago", "Stripe", "Clip", "Openpay", "WhatsApp Business", "IA", "Data Engineering", "AWS", "IoT", "MQTT", "Automatización"],
    authors: [{ name: "Freedog Studios" }],
    creator: "Freedog Studios",
    publisher: "Freedog Studios",
    openGraph: {
        type: "website",
        locale: "es_MX",
        url: "https://freedogstudios.com",
        siteName: "Freedog Studios",
        title: "Freedog Studios | Desarrollo de Sistemas, Apps y Chatbots a medida",
        description: "Organizamos la información de tu negocio. Expertos en sistemas a medida, chatbots de ventas y gestión de sucursales. Deja atrás el Excel y el Drive. ¡Cotiza!",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Freedog Studios - Desarrollo de Sistemas, Apps y Chatbots a medida",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Freedog Studios | Desarrollo de Sistemas, Apps y Chatbots a medida",
        description: "Organizamos la información de tu negocio. Expertos en sistemas a medida, chatbots de ventas y gestión de sucursales. Deja atrás el Excel y el Drive. ¡Cotiza!",
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
