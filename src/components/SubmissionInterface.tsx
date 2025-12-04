import { useState, useEffect } from "react";

// Obfuscated correct answer keywords (must contain these concepts)
const SOLUTION_KEYWORDS = ["leila", "memory", "collective", "psychological", "perception", "constructed", "herself"];

const SubmissionInterface = () => {
  const [name, setName] = useState("");
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "correct" | "incorrect">("idle");
  const [showReveal, setShowReveal] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const savedName = localStorage.getItem("hunt0_name");
    const savedAnswer = localStorage.getItem("hunt0_answer");
    if (savedName) setName(savedName);
    if (savedAnswer) setAnswer(savedAnswer);
  }, []);

  // Autosave
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (name || answer) {
        localStorage.setItem("hunt0_name", name);
        localStorage.setItem("hunt0_answer", answer);
        setStatus("saving");
        setTimeout(() => setStatus("idle"), 1000);
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [name, answer]);

  const checkAnswer = () => {
    const lowerAnswer = answer.toLowerCase();
    const matchCount = SOLUTION_KEYWORDS.filter(keyword => lowerAnswer.includes(keyword)).length;
    
    // Requires at least 4 keywords to be considered correct
    if (matchCount >= 4) {
      setStatus("correct");
      setTimeout(() => setShowReveal(true), 1500);
    } else {
      setStatus("incorrect");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !answer.trim()) return;
    checkAnswer();
  };

  if (showReveal) {
    return <RevealSection />;
  }

  return (
    <section id="submit" className="py-20 px-4 relative">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="evidence-tag mb-6 inline-block">SECURE CHANNEL</span>
          <h2 className="cinematic-title text-3xl md:text-4xl text-foreground mb-4">
            SUBMIT YOUR THEORY
          </h2>
          <div className="divider-gold w-24 mx-auto" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="glass-card rounded-lg p-6 md:p-8">
          {/* Name field */}
          <div className="mb-6">
            <label className="block font-mono text-xs text-gold mb-2 tracking-wider">
              INVESTIGATOR NAME / TEAM
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name or team identifier"
              className="input-noir w-full px-4 py-3 rounded"
            />
          </div>

          {/* Answer field */}
          <div className="mb-6">
            <label className="block font-mono text-xs text-gold mb-2 tracking-wider">
              YOUR SOLUTION
            </label>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Present your unified theory explaining the identity of the Thirteenth Guest..."
              rows={8}
              className="input-noir w-full px-4 py-3 rounded resize-none"
            />
          </div>

          {/* Status indicator */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              {status === "saving" && (
                <>
                  <span className="w-2 h-2 bg-gold rounded-full animate-pulse-glow" />
                  <span className="text-xs text-muted-foreground font-mono">Autosaving...</span>
                </>
              )}
              {status === "idle" && answer && (
                <>
                  <span className="w-2 h-2 bg-green-500/50 rounded-full" />
                  <span className="text-xs text-muted-foreground font-mono">Draft saved locally</span>
                </>
              )}
              {status === "incorrect" && (
                <>
                  <span className="w-2 h-2 bg-burgundy rounded-full animate-pulse" />
                  <span className="text-xs text-burgundy-glow font-mono">Theory incomplete. Dig deeper.</span>
                </>
              )}
            </div>
            <span className="text-xs text-ash font-mono">{answer.length} characters</span>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={!name.trim() || !answer.trim() || status === "correct"}
            className="btn-noir w-full py-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "correct" ? "ACCESS GRANTED..." : "SUBMIT THEORY"}
          </button>
        </form>

        {/* Security note */}
        <p className="text-center text-xs text-ash font-mono mt-6">
          Your submission is encrypted and stored locally. Analysis in progress.
        </p>
      </div>
    </section>
  );
};

const RevealSection = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 2000),
      setTimeout(() => setStage(3), 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="py-20 px-4 relative min-h-screen flex items-center justify-center">
      {/* Glitch overlay */}
      {stage === 1 && (
        <div className="fixed inset-0 bg-background z-50 animate-glitch" />
      )}

      <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${stage >= 2 ? "opacity-100" : "opacity-0"}`}>
        <div className="glass-card rounded-lg p-8 md:p-12">
          {/* Success badge */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gold/20 border border-gold/40 rounded text-gold font-mono text-sm">
              ✓ SOLUTION VERIFIED
            </span>
          </div>

          {/* Title */}
          <h2 className="cinematic-title text-3xl md:text-4xl text-gold glow-gold-text mb-8">
            THE TRUTH REVEALED
          </h2>

          <div className="divider-gold w-32 mx-auto mb-8" />

          {/* Reveal content */}
          <div className={`space-y-6 text-left transition-all duration-1000 delay-500 ${stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <p className="text-foreground leading-relaxed">
              The Thirteenth Guest was never a person in the physical sense. It was a <span className="text-gold">psychological presence</span> — 
              collectively constructed by the memories and perceptions of all twelve witnesses.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Leila Sade, the novelist obsessed with memory and identity, orchestrated the evening as a living experiment 
              for her book. The 60-second blackout was planned. The 13th chair was always there — hidden in plain sight, 
              its presence suppressed until the moment of revelation.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              The "guest" was an idea planted through suggestion: the mysterious envelope, the carved initial, 
              the conflicting testimonies. Each witness, influenced by the dark and their own psychology, 
              constructed a presence from the void.
            </p>

            <div className="bg-burgundy/10 border border-burgundy/30 rounded p-6 mt-8">
              <p className="text-foreground italic font-mono text-center">
                "The Thirteenth Guest was you — the observer, the investigator, the one who 
                gave form to the formless by seeking an answer."
              </p>
              <p className="text-right text-gold text-sm mt-4">— From "The Absence" by Leila Sade</p>
            </div>

            <p className="text-sm text-ash text-center mt-8 font-mono">
              The letter "L" carved into the chair? Leila's signature — she was always the author of this mystery.
            </p>
          </div>

          {/* Completion badge */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-gold font-cinematic tracking-widest">HUNT 0 — COMPLETE</p>
            <p className="text-xs text-muted-foreground font-mono mt-2">
              You have solved the mystery of The Thirteenth Guest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionInterface;
