import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MemoryCards from "@/components/MemoryCards";
import PrincessSection from "@/components/PrincessSection";
import LoveLetter from "@/components/LoveLetter";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero name="Ananya" />
      <MemoryCards />
      <PrincessSection />
      <LoveLetter />
      <CTAButton />
      <Footer />
    </main>
  );
}

