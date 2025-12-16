import HeroSection from "@/components/HeroSection";
import QuotesSection from "@/components/QuotesSection";
import CharactersGallery from "@/components/CharactersGallery";

// Import all character images
import heroBg from "@/assets/hero-bg.jpg";
import piccoloImg from "@/assets/piccolo.jpg";
import gojoImg from "@/assets/gojo.jpg";
import gokuImg from "@/assets/goku.jpg";
import jirenImg from "@/assets/jiren.jpg";
import aizenImg from "@/assets/aizen.jpg";
import escanorImg from "@/assets/escanor.jpg";
import madaraImg from "@/assets/madara.jpg";
import killuaImg from "@/assets/killua.jpg";
import dioImg from "@/assets/dio.jpg";
import supermanImg from "@/assets/superman.jpg";
import optimusImg from "@/assets/optimus.jpg";

const characters = [
  { name: "Piccolo", image: piccoloImg, maxAura: 100 },
  { name: "Gojo Satoru", image: gojoImg, maxAura: 150 },
  { name: "Goku", image: gokuImg, maxAura: 200 },
  { name: "Jiren", image: jirenImg, maxAura: 180 },
  { name: "Aizen Sousuke", image: aizenImg, maxAura: 170 },
  { name: "Escanor", image: escanorImg, maxAura: 160 },
  { name: "Madara Uchiha", image: madaraImg, maxAura: 190 },
  { name: "Killua", image: killuaImg, maxAura: 120 },
  { name: "Dio", image: dioImg, maxAura: 140 },
  { name: "Superman", image: supermanImg, maxAura: 200 },
  { name: "Optimus Prime", image: optimusImg, maxAura: 180 },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection heroImage={heroBg} />
      <QuotesSection />
      <CharactersGallery characters={characters} />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground font-body text-sm">
            AuraFrammer — A tribute to legendary presence.
          </p>
          <p className="text-muted-foreground/50 font-body text-xs mt-2">
            Made for the culture. Click responsibly.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
