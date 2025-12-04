const Footer = () => {
  return (
    <footer className="py-12 px-4 relative">
      {/* Animated divider */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Logo/Brand */}
        <div className="mb-6">
          <h3 className="cinematic-title text-lg text-gold tracking-[0.3em]">NANO GROUP</h3>
          <p className="text-xs text-muted-foreground font-mono mt-2">
            PRESENTS
          </p>
        </div>

        {/* Hunt title */}
        <div className="mb-8">
          <p className="font-cinematic text-sm text-foreground/60 tracking-widest">
            HUNT 0 — THE THIRTEENTH GUEST
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-8 mb-8">
          <a href="#case-file" className="text-xs text-muted-foreground hover:text-gold transition-colors font-mono">
            CASE FILE
          </a>
          <a href="#evidence" className="text-xs text-muted-foreground hover:text-gold transition-colors font-mono">
            EVIDENCE
          </a>
          <a href="#witnesses" className="text-xs text-muted-foreground hover:text-gold transition-colors font-mono">
            WITNESSES
          </a>
          <a href="#submit" className="text-xs text-muted-foreground hover:text-gold transition-colors font-mono">
            SUBMIT
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50">
          <p className="text-xs text-ash font-mono">
            © {new Date().getFullYear()} Nano Group. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            This is a fictional interactive challenge. All characters and events are imaginary.
          </p>
        </div>

        {/* Decorative element */}
        <div className="mt-8 flex justify-center">
          <div className="w-8 h-8 border border-gold/30 rotate-45 flex items-center justify-center">
            <div className="w-2 h-2 bg-gold/50 rotate-45 animate-pulse-glow" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
