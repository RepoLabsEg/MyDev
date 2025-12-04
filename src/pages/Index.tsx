import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import CaseFileSection from "@/components/CaseFileSection";
import EvidenceBoard from "@/components/EvidenceBoard";
import WitnessesDirectory from "@/components/WitnessesDirectory";
import FinalRiddle from "@/components/FinalRiddle";
import SubmissionInterface from "@/components/SubmissionInterface";
import RulesSection from "@/components/RulesSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Soft client-side security
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Block common dev tools shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "u")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Global grain overlay */}
      <div className="fixed inset-0 pointer-events-none grain-overlay z-50" />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <CaseFileSection />
        <EvidenceBoard />
        <WitnessesDirectory />
        <FinalRiddle />
        <SubmissionInterface />
        <RulesSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
