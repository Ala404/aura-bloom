import { useEffect, useState } from "react";

interface HeroSectionProps {
  heroImage: string;
}

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img
          src={heroImage}
          alt="Cinematic hero background"
          className="w-full h-[120%] object-cover object-center opacity-60"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-hero z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-secondary/30 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <h1 className="hero-title text-foreground mb-6 animate-fade-in-up">
          Aura Is Not Explained.{" "}
          <span className="text-gradient">It Is Felt.</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up-delay-1 font-body">
          AuraFrammer lets you farm the presence of iconic characters by simply
          clicking them.
        </p>

        <div className="mt-12 animate-fade-in-up-delay-2">
          <button
            onClick={() => {
              document.getElementById("characters")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="group relative px-8 py-4 bg-gradient-primary rounded-lg text-foreground font-display text-xl tracking-wider overflow-hidden transition-all duration-300 hover:scale-105 glow-primary"
          >
            <span className="relative z-10">BEGIN FARMING</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
