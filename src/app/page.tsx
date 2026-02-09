import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import Footer from "@/components/Footer";
import MobileTelegramFab from "@/components/MobileTelegramFab";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <SuccessStories />
      <Footer />
      <MobileTelegramFab />
    </main>
  );
}
