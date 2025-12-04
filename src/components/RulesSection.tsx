const RulesSection = () => {
  const rules = [
    "No brute force attacks or automated submission attempts",
    "Do not publish solutions or spoilers publicly",
    "No reverse engineering of the submission system",
    "Collaboration is permitted; credit all team members",
    "The Nano Group reserves final authority on all decisions",
    "This is a fictional challenge — all characters are imaginary",
  ];

  return (
    <section id="rules" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Terminal Panel */}
        <div className="terminal-panel rounded-lg overflow-hidden">
          {/* Header */}
          <div className="terminal-header flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-burgundy/60" />
              <span className="w-3 h-3 rounded-full bg-gold/40" />
              <span className="w-3 h-3 rounded-full bg-green-500/40" />
            </div>
            <span className="font-mono text-xs text-gold">RULES & GUIDELINES — hunt0.protocol</span>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="font-mono text-sm space-y-4">
              <p className="text-muted-foreground">
                <span className="text-gold">$</span> cat /etc/hunt0/rules.md
              </p>
              
              <div className="border-l-2 border-burgundy/50 pl-4 space-y-3">
                {rules.map((rule, index) => (
                  <p key={index} className="text-muted-foreground">
                    <span className="text-burgundy-glow">[{String(index + 1).padStart(2, "0")}]</span>{" "}
                    {rule}
                  </p>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-ash">
                  <span className="text-gold">$</span> echo "Good luck, investigator."
                </p>
                <p className="text-foreground mt-2">Good luck, investigator.</p>
                <p className="text-gold animate-pulse-glow mt-4">█</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
