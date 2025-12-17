import HeroSection from "@/components/HeroSection";
import QuotesSection from "@/components/QuotesSection";
import CharactersGallery from "@/components/CharactersGallery";

// Import all character images
import heroBg from "@/assets/hero-bg.jpg";
import gojoImg from "@/assets/gojo.jpg";
import gojoImg2 from "@/assets/gojo2.jpg";
import gokuImg from "@/assets/goku.jpg";
import gokuImg2 from "@/assets/goku2.jpg";
import aizenImg from "@/assets/aizen.jpg";
import aizenImg2 from "@/assets/aizen2.jpg";
import escanorImg from "@/assets/escanor.jpg";
import escanorImg2 from "@/assets/escanor2.jpg";
import madaraImg from "@/assets/madara.jpg";
import madaraImg2 from "@/assets/madara2.jpg";
import supermanImg from "@/assets/superman.jpg";
import supermanImg2 from "@/assets/superman2.jpg";
import optimusImg from "@/assets/optimus.jpg";
import optimusImg2 from "@/assets/optimus2.jpg";
import walterWhiteImg from "@/assets/walter-white.jpg";
import walterWhiteImg2 from "@/assets/walter-white2.jpg";
import batmanImg from "@/assets/batman.jpg";
import batmanImg2 from "@/assets/batman2.jpg";
import jinwooImg from "@/assets/jinwo.jpg";
import jinwooImg2 from "@/assets/jinwo2.jpg";

// Import audio files
import domainExpansionAudio from "@/assets/audio/domain-expansion-made-with-Voicemod.mp3";
import cruelSunAudio from "@/assets/audio/cruel-sun-escanor-made-with-Voicemod.mp3";
import wakeUpRealityAudio from "@/assets/audio/wake-up-to-reality-pt1-made-with-Voicemod.mp3";
import yokosoAudio from "@/assets/audio/yokoso-watashi-made-with-Voicemod.mp3";
import iAmTheDangerAudio from "@/assets/audio/i-am-the-danger-ww-made-with-Voicemod.mp3";
import jokerAudio from "@/assets/audio/joker---here-we-go-made-with-Voicemod.mp3";
import gokuAudio from "@/assets/audio/goku.mp3";
import optimusAudio from "@/assets/audio/optimus.mp3";
import supermanAudio from "@/assets/audio/superman.mp3";
import jinwooAudio from "@/assets/audio/arise-made-with-Voicemod.mp3";

const characters = [
  {
    name: "Gojo Satoru",
    image: gojoImg,
    image2: gojoImg2,
    maxAura: 150,
    audioUrl: domainExpansionAudio,
  },
  {
    name: "Goku",
    image: gokuImg,
    image2: gokuImg2,
    maxAura: 200,
    audioUrl: gokuAudio,
  },
  {
    name: "Aizen Sousuke",
    image: aizenImg,
    image2: aizenImg2,
    maxAura: 170,
    audioUrl: yokosoAudio,
  },
  {
    name: "Jin woo",
    image: jinwooImg,
    image2: jinwooImg2,
    maxAura: 180,
    audioUrl: jinwooAudio,
  },
  {
    name: "Escanor",
    image: escanorImg,
    image2: escanorImg2,
    maxAura: 160,
    audioUrl: cruelSunAudio,
  },
  {
    name: "Madara Uchiha",
    image: madaraImg,
    image2: madaraImg2,
    maxAura: 190,
    audioUrl: wakeUpRealityAudio,
  },
  {
    name: "Superman",
    image: supermanImg,
    image2: supermanImg2,
    maxAura: 200,
    audioUrl: supermanAudio,
  },
  {
    name: "Optimus Prime",
    image: optimusImg,
    image2: optimusImg2,
    maxAura: 180,
    audioUrl: optimusAudio,
  },
  {
    name: "Walter White",
    image: walterWhiteImg,
    image2: walterWhiteImg2,
    maxAura: 150,
    audioUrl: iAmTheDangerAudio,
  },
  {
    name: "Batman",
    image: batmanImg,
    image2: batmanImg2,
    maxAura: 160,
    audioUrl: jokerAudio,
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection heroImage={heroBg} />
      <QuotesSection />
      <CharactersGallery characters={characters} />

      {/* Coming Soon Section */}
      <section className="py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase animate-pulse">
            Upcoming Presences
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6 tracking-tighter uppercase">
            There will be more characters soon to feed your{" "}
            <span className="text-gradient">aura thirst!</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            The collection of legendary aura is constantly expanding. Keep
            farming and stay ready for the next arrival.
          </p>
          <div className="mt-12 flex justify-center gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-16 h-1 bg-muted rounded-full relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary animate-shimmer"
                  style={{
                    animationDelay: `${i * 0.3}s`,
                    backgroundSize: "200% 100%",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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
