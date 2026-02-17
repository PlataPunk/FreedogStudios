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
    title: "Freedog Studios | Apps Móviles, IA para Bots y Estrategia de Datos",
    description: "Desarrollamos Apps móviles, IA aplicada a tus Bots y sistemas de datos para escalar tu operación. ¡Transforma tu negocio hoy! Somos el brazo tecnológico que potencia la comunicación con tus clientes.",
    keywords: ["Apps Móviles", "iOS", "Android", "IA aplicada", "Chatbots con IA", "Data Analytics", "Automatización de procesos", "Sincronización de datos", "Software a medida", "Integración de sistemas"],
    authors: [{ name: "Freedog Studios" }],
    creator: "Freedog Studios",
    publisher: "Freedog Studios",
    openGraph: {
        type: "website",
        locale: "es_MX",
        url: "https://freedogstudios.com",
        siteName: "Freedog Studios",
        title: "Freedog Studios | Apps Móviles, IA para Bots y Estrategia de Datos",
        description: "Desarrollamos Apps móviles, IA aplicada a tus Bots y sistemas de datos para escalar tu operación. ¡Transforma tu negocio hoy! Somos el brazo tecnológico que potencia la comunicación con tus clientes.",
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
        title: "Freedog Studios | Apps Móviles, IA para Bots y Estrategia de Datos",
        description: "Desarrollamos Apps móviles, IA aplicada a tus Bots y sistemas de datos para escalar tu operación. ¡Transforma tu negocio hoy! Somos el brazo tecnológico que potencia la comunicación con tus clientes.",
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
