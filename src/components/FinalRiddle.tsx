const FinalRiddle = () => {
  return (
    <section id="riddle" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-burgundy/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-burgundy/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Glass container */}
        <div className="glass-card rounded-lg p-8 md:p-12 text-center">
          {/* Header */}
          <div className="mb-8">
            <span className="stamped inline-block mb-6">THE FINAL QUESTION</span>
          </div>

          {/* Main question */}
          <div className="mb-8">
            <h2 className="cinematic-title text-2xl md:text-3xl lg:text-4xl text-gold glow-gold-text leading-relaxed mb-6">
              Who was the Thirteenth Guest?
            </h2>
            <p className="font-mono text-lg text-muted-foreground italic">
              And why can they never be seen,
              <br />
              even though they "sat" in the chair?
            </p>
          </div>

          <div className="divider-gold w-32 mx-auto mb-8" />

          {/* Rules */}
          <div className="text-left bg-card/50 rounded p-6">
            <h3 className="font-cinematic text-sm text-gold mb-4 tracking-wider">
              SOLUTION REQUIREMENTS
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-burgundy rounded-full mt-2 shrink-0" />
                <span>Your answer must provide a unified, rational explanation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-burgundy rounded-full mt-2 shrink-0" />
                <span>It must incorporate all contradictions within the evidence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-burgundy rounded-full mt-2 shrink-0" />
                <span>Every witness testimony must be accounted for</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0 animate-pulse-glow" />
                <span className="text-foreground">The truth lies not in what was seen, but in what was perceived</span>
              </li>
            </ul>
          </div>

          {/* Cryptic hint */}
          <div className="mt-8 p-4 border border-dashed border-border rounded">
            <p className="font-mono text-xs text-ash">
              HINT: Consider the nature of collective memory. Consider what makes someone "present."
              Consider who benefits from being remembered as absent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalRiddle;
