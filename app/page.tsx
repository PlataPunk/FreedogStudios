import Hero from '@/app/components/Hero';
import TechStack from "@/app/components/TechStack";
import Services from "@/app/components/Services";
import Portfolio from "@/app/components/Portfolio";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-primary">
          <Hero />
          <TechStack />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </main>
    );
}
