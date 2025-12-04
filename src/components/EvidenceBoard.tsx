import { useState } from "react";

interface Evidence {
  id: number;
  title: string;
  source: string;
  type: string;
  content: string;
  detail: string;
}

const evidenceItems: Evidence[] = [
  {
    id: 1,
    title: "Host Testimony",
    source: "Leila Sade",
    type: "WITNESS STATEMENT",
    content: "\"I felt a presence before the lights went out. Not a person — a weight in the room, like the air had thickened.\"",
    detail: "Leila Sade's account is the most detailed yet the most metaphysical. She describes the moments before the blackout as 'narratively inevitable,' as if the evening had been building toward that exact moment. She refuses to speculate on the identity of the 13th guest, saying only: 'Some characters write themselves into existence.'",
  },
  {
    id: 2,
    title: "Audio Impression",
    source: "Dr. Ethan Ward",
    type: "MEDICAL OBSERVATION",
    content: "\"I heard breathing that wasn't mine. Measured. Deliberate. As if someone was counting.\"",
    detail: "Dr. Ward's medical training makes his testimony particularly compelling. He noted his own heart rate remained steady at 72 BPM during the blackout — unusual given the circumstances. He theorizes the 'extra breathing' may have been his own, reflected back by the room's acoustics, though this explanation fails to satisfy him.",
  },
  {
    id: 3,
    title: "False-Face Memory",
    source: "Adrian Mercer",
    type: "PSYCHOLOGICAL ANALYSIS",
    content: "\"I can describe a face I saw — but I know it's a face my mind constructed. A composite of everyone at the table.\"",
    detail: "As a psychologist specializing in memory reconstruction, Mercer's testimony carries weight. He describes the phenomenon of 'false-face syndrome' — the brain's tendency to construct a face from available data when confronted with ambiguity. He believes all witnesses who claim to have 'seen' someone are experiencing collective confabulation.",
  },
  {
    id: 4,
    title: "Deleted Photograph",
    source: "Ryan Cole",
    type: "DIGITAL EVIDENCE",
    content: "\"My camera took a photo at 9:47 PM. The file exists but won't open. Something is in there.\"",
    detail: "Cole's camera, set to interval shooting, captured an image during the blackout. Metadata confirms the file exists. Multiple recovery attempts have produced only corrupted data — except for a single reconstructed pixel region showing what appears to be fabric. Burgundy fabric. The same color as the dining chairs.",
  },
  {
    id: 5,
    title: "Library Note",
    source: "Unknown Author",
    type: "DISCOVERED DOCUMENT",
    content: "\"No one notices the person who does not wish to be seen.\"",
    detail: "Found tucked inside a book on Leila's shelf: 'The Psychology of Invisibility' by Dr. Marcus Veil. The note was handwritten on aged paper. Handwriting analysis is inconclusive — it shares characteristics with Leila's writing but also with several other guests. The book itself contains extensive marginalia in different handwriting styles.",
  },
  {
    id: 6,
    title: "Novel Draft Line",
    source: "Leila Sade's Manuscript",
    type: "LITERARY EVIDENCE",
    content: "\"One exists only in memory. Without memory, existence becomes a question mark.\"",
    detail: "This line appears on page 213 of Leila's unpublished manuscript, 'The Absence.' The novel concerns a character who slowly erases themselves from collective memory. Notably, page 213 is the only page in the manuscript that shows signs of recent editing — the ink is fresher, the paper less worn.",
  },
  {
    id: 7,
    title: "The 13th Chair",
    source: "Physical Evidence",
    type: "FORENSIC ANALYSIS",
    content: "\"Carved into the wood: the letter 'L'. No fingerprints. No tool marks. As if it had always been there.\"",
    detail: "The chair itself presents the greatest mystery. It matches the other 12 perfectly — same wood grain, same age, same wear patterns. Yet the manor's records show only 12 chairs were ever purchased. The carved 'L' on the underside appears decades old, yet the wood fibers suggest recent disturbance. Forensic experts are divided: some believe the carving is original, others insist it's a masterful forgery.",
  },
];

const EvidenceBoard = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="evidence" className="py-20 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-burgundy/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="evidence-tag mb-6 inline-block">7 ARTIFACTS RECOVERED</span>
          <h2 className="cinematic-title text-3xl md:text-4xl text-foreground mb-4">
            EVIDENCE BOARD
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Each piece tells a fragment of the story. Together, they form a pattern — 
            if you can see it.
          </p>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>

        {/* Evidence Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {evidenceItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              className={`glass-card glass-card-hover rounded-lg cursor-pointer transition-all duration-500 ${
                expandedId === item.id ? "md:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="evidence-tag text-[10px] mb-2 inline-block">{item.type}</span>
                    <h3 className="font-cinematic text-lg text-foreground">{item.title}</h3>
                    <p className="text-sm text-gold">{item.source}</p>
                  </div>
                  <span className="font-mono text-2xl text-gold/30">0{item.id}</span>
                </div>

                {/* Quote */}
                <blockquote className="text-sm text-muted-foreground italic border-l-2 border-burgundy pl-4 mb-4">
                  {item.content}
                </blockquote>

                {/* Expanded content */}
                {expandedId === item.id && (
                  <div className="animate-expand overflow-hidden">
                    <div className="divider-gold mb-4" />
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {item.detail}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gold rounded-full animate-pulse-glow" />
                      <span className="text-xs text-muted-foreground font-mono">
                        ANALYSIS IN PROGRESS
                      </span>
                    </div>
                  </div>
                )}

                {/* Expand indicator */}
                <div className="flex justify-center mt-4">
                  <span className="text-xs text-muted-foreground font-mono">
                    {expandedId === item.id ? "[ COLLAPSE ]" : "[ EXPAND ]"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvidenceBoard;
