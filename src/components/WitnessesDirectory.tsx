interface Witness {
  name: string;
  role: string;
  description: string;
  note: string;
}

const witnesses: Witness[] = [
  {
    name: "Leila Sade",
    role: "Host / Novelist",
    description: "Author of psychological thrillers exploring the nature of memory and identity.",
    note: "Her latest manuscript may hold the key.",
  },
  {
    name: "Nora Caldwell",
    role: "Editor",
    description: "Leila's longtime editor and confidante. Known for her sharp eye and sharper wit.",
    note: "Claims to have seen a silhouette.",
  },
  {
    name: "Oliver Grant",
    role: "Relative",
    description: "Leila's estranged nephew. Recently reconnected after years of silence.",
    note: "Arrived late. Left early.",
  },
  {
    name: "Serena Hale",
    role: "Artist",
    description: "Painter specializing in portraits from memory. Her work hangs throughout the manor.",
    note: "Sketched the 13th chair from memory.",
  },
  {
    name: "Adrian Mercer",
    role: "Psychologist",
    description: "Specialist in memory reconstruction and false recollection syndrome.",
    note: "Experiences 'false-face' phenomenon.",
  },
  {
    name: "Caleb Rhodes",
    role: "Programmer",
    description: "Tech consultant who maintains the manor's security systems.",
    note: "Systems showed no breach.",
  },
  {
    name: "Emilia Voss",
    role: "Designer",
    description: "Interior designer who decorated the dining room. Knows every piece of furniture.",
    note: "Swears there were only 12 chairs.",
  },
  {
    name: "Dr. Ethan Ward",
    role: "Doctor",
    description: "Family physician with a background in neurology and sensory perception.",
    note: "Heard breathing in the dark.",
  },
  {
    name: "Ryan Cole",
    role: "Photographer",
    description: "Documentary photographer. His camera was set to interval capture.",
    note: "Corrupted file from 9:47 PM.",
  },
  {
    name: "Melody Hart",
    role: "Musician",
    description: "Concert pianist who performed before dinner. Exceptionally sensitive hearing.",
    note: "Heard a 13th heartbeat.",
  },
  {
    name: "Hayden Cross",
    role: "Fiancé",
    description: "Leila's fiancé of two years. Former investigative journalist.",
    note: "Taking detailed notes.",
  },
  {
    name: "Grace Milton",
    role: "Housekeeper",
    description: "Served the Sade family for thirty years. Knows the manor's every secret.",
    note: "Set the table for 12.",
  },
];

const WitnessesDirectory = () => {
  return (
    <section id="witnesses" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="evidence-tag mb-6 inline-block">12 TESTIMONIES</span>
          <h2 className="cinematic-title text-3xl md:text-4xl text-foreground mb-4">
            THE WITNESSES
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Twelve people. Twelve perspectives. Twelve fragments of truth.
          </p>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>

        {/* Witnesses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {witnesses.map((witness, index) => (
            <div
              key={witness.name}
              className="glass-card glass-card-hover rounded-lg p-5 group transition-all duration-300"
            >
              {/* Number */}
              <div className="flex items-start justify-between mb-3">
                <span className="font-mono text-3xl text-gold/20 group-hover:text-gold/40 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="evidence-tag text-[10px]">{witness.role}</span>
              </div>

              {/* Name */}
              <h3 className="font-cinematic text-lg text-foreground mb-2 group-hover:text-gold transition-colors">
                {witness.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {witness.description}
              </p>

              {/* Note */}
              <div className="border-t border-border pt-3 mt-auto">
                <p className="text-xs text-burgundy-glow font-mono italic">
                  "{witness.note}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WitnessesDirectory;
