import { useEffect, useRef, useState } from "react";
import caseposter from "@/assets/caseposter.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToCase = () => {
    document.getElementById("case-file")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-parallax-drift"
          style={{ backgroundImage: `url(${caseposter})` }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        {/* Vignette */}
        <div className="absolute inset-0 vignette" />
        {/* Grain */}
        <div className="absolute inset-0 grain-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div
          className={`glass-card p-8 md:p-12 lg:p-16 rounded-lg transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Hunt badge */}
          <div
            className={`inline-block mb-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="evidence-tag">CLASSIFIED INVESTIGATION</span>
          </div>

          {/* Title */}
          <h1
            className={`cinematic-title text-4xl md:text-6xl lg:text-7xl font-bold text-gold mb-4 glow-gold-text transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            HUNT 0
          </h1>

          {/* Subtitle */}
          <h2
            className={`cinematic-title text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-8 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            THE THIRTEENTH GUEST
          </h2>

          {/* Divider */}
          <div
            className={`divider-gold w-32 mx-auto mb-8 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />

          {/* Tagline */}
          <p
            className={`font-mono text-sm md:text-base text-muted-foreground italic max-w-md mx-auto mb-10 leading-relaxed transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            "Some presences are remembered,
            <br />
            yet were never truly seen."
          </p>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <button onClick={scrollToCase} className="btn-noir px-8 py-3 rounded">
              Enter the Case
            </button>
            <a
              href={caseposter}
              download="HUNT0_Dossier.png"
              className="btn-outline-gold px-8 py-3 rounded inline-block"
            >
              Download Dossier
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold/50 rounded-full mt-2 animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
