import { useEffect, useState } from "react";

const quotes = [
  { text: "He stood still.", highlight: "Aura increased." },
  { text: "Silence is a", highlight: "strategy." },
  { text: "Some characters don't fight. They", highlight: "arrive." },
  { text: "Presence speaks louder than", highlight: "words." },
];

const QuotesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % quotes.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentQuote = quotes[currentIndex];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground uppercase tracking-widest text-sm mb-8 font-body">
          The Philosophy of Aura
        </p>

        <div
          className={`quote-text text-foreground transition-all duration-500 ${
            isAnimating
              ? "opacity-0 transform translate-y-4"
              : "opacity-100 transform translate-y-0"
          }`}
        >
          {currentQuote.text}{" "}
          <span className="underline-accent">{currentQuote.highlight}</span>
        </div>

        {/* Quote indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-gradient-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
