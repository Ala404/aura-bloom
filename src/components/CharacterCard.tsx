import { useState, useRef } from "react";

interface FloatingNumber {
  id: number;
  x: number;
  y: number;
}

interface CharacterCardProps {
  name: string;
  image: string;
  maxAura: number;
  audioUrl?: string;
}

const CharacterCard = ({ name, image, maxAura, audioUrl }: CharacterCardProps) => {
  const [aura, setAura] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [floatingNumbers, setFloatingNumbers] = useState<FloatingNumber[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isComplete) return;

    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Add floating number
    const newFloating: FloatingNumber = {
      id: Date.now(),
      x,
      y,
    };
    setFloatingNumbers((prev) => [...prev, newFloating]);

    // Remove floating number after animation
    setTimeout(() => {
      setFloatingNumbers((prev) => prev.filter((f) => f.id !== newFloating.id));
    }, 1000);

    // Pulse effect
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 500);

    // Update aura
    const newAura = Math.min(aura + 10, maxAura);
    setAura(newAura);

    // Check completion
    if (newAura >= maxAura) {
      setIsComplete(true);
      if (audioUrl && audioRef.current) {
        audioRef.current.volume = 0.5;
        audioRef.current.play();
      }
    }
  };

  const progress = (aura / maxAura) * 100;

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      className={`character-card aspect-[3/4] relative group ${
        isPulsing ? "animate-pulse-glow" : ""
      } ${isComplete ? "ring-2 ring-aura-gold" : ""}`}
    >
      {/* Character Image */}
      <img
        src={image}
        alt={name}
        className={`w-full h-full object-cover transition-all duration-500 ${
          isComplete ? "brightness-110 saturate-110" : "group-hover:brightness-110"
        }`}
      />

      {/* Overlay gradient */}
      <div
        className={`absolute inset-0 bg-gradient-card transition-opacity duration-400 ${
          isComplete ? "opacity-30" : ""
        }`}
      />

      {/* Character Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <h3 className="font-display text-xl md:text-2xl text-foreground tracking-wide mb-2">
          {name}
        </h3>

        {/* Aura Progress Bar */}
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center mt-2">
          <span className="text-muted-foreground text-sm font-body">
            {aura} / {maxAura}
          </span>
          {isComplete && (
            <span className="text-aura-gold text-sm font-display tracking-wider animate-pulse">
              MAXED
            </span>
          )}
        </div>
      </div>

      {/* Floating Numbers */}
      {floatingNumbers.map((floating) => (
        <div
          key={floating.id}
          className="absolute z-30 text-aura-gold font-display text-2xl aura-float pointer-events-none"
          style={{
            left: floating.x,
            top: floating.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          +10
        </div>
      ))}

      {/* Completion Glow */}
      {isComplete && (
        <div className="absolute inset-0 bg-aura-gold/10 animate-pulse pointer-events-none" />
      )}

      {/* Audio element */}
      {audioUrl && <audio ref={audioRef} src={audioUrl} preload="auto" />}

      {/* Click hint */}
      {!isComplete && (
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="px-3 py-1 bg-background/80 rounded-full text-xs text-muted-foreground font-body">
            Click to farm
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterCard;
