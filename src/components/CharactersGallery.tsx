import CharacterCard from "./CharacterCard";

interface Character {
  name: string;
  image: string;
  image2?: string;
  maxAura: number;
  audioUrl?: string;
}

interface CharactersGalleryProps {
  characters: Character[];
}

const CharactersGallery = ({ characters }: CharactersGalleryProps) => {
  return (
    <section id="characters" className="relative py-24 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground uppercase tracking-widest text-sm mb-4 font-body">
            Choose Your Presence
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground tracking-wider">
            The <span className="text-gradient">Aura</span> Gallery
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto font-body">
            Click on any character to farm their aura. Reach the maximum to
            unlock their iconic moment.
          </p>
        </div>

        {/* Characters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {characters.map((character, index) => (
            <div
              key={character.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
            >
              <CharacterCard
                name={character.name}
                image={character.image}
                image2={character.image2}
                maxAura={character.maxAura}
                audioUrl={character.audioUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersGallery;
