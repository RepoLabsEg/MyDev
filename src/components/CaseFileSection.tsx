import { useState } from "react";

const tabs = ["Overview", "Timeline", "Recovered Notes"];

const CaseFileSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="case-file" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="stamped inline-block mb-6">CONFIDENTIAL</span>
          <h2 className="cinematic-title text-3xl md:text-4xl text-foreground mb-4">
            THE CASE FILE
          </h2>
          <div className="divider-gold w-24 mx-auto" />
        </div>

        {/* Glass Card Container */}
        <div className="glass-card rounded-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-border overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`tab-noir whitespace-nowrap ${activeTab === index ? "active" : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-8 lg:p-10">
            {activeTab === 0 && <OverviewTab />}
            {activeTab === 1 && <TimelineTab />}
            {activeTab === 2 && <NotesTab />}
          </div>
        </div>
      </div>
    </section>
  );
};

const OverviewTab = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="flex items-start gap-4">
      <span className="evidence-tag shrink-0">CASE #001</span>
      <div>
        <h3 className="text-lg font-cinematic text-gold mb-2">The Sade Manor Incident</h3>
        <p className="text-muted-foreground leading-relaxed">
          On the evening of October 13th, celebrated novelist <span className="text-foreground">Leila Sade</span> hosted 
          a private dinner at her secluded manor. Twelve guests were invited — close associates, 
          colleagues, and family members. The evening was meant to celebrate the completion of her latest 
          manuscript, a psychological thriller about memory and perception.
        </p>
      </div>
    </div>

    <div className="divider-gold" />

    <div className="grid md:grid-cols-2 gap-6">
      <div className="terminal-panel rounded p-4">
        <div className="terminal-header -m-4 mb-4 rounded-t">
          <span className="text-gold text-xs">GUEST REGISTRY</span>
        </div>
        <ul className="text-sm text-muted-foreground space-y-1 font-mono">
          <li>01. Nora Caldwell <span className="text-ash">— Editor</span></li>
          <li>02. Oliver Grant <span className="text-ash">— Relative</span></li>
          <li>03. Serena Hale <span className="text-ash">— Artist</span></li>
          <li>04. Adrian Mercer <span className="text-ash">— Psychologist</span></li>
          <li>05. Caleb Rhodes <span className="text-ash">— Programmer</span></li>
          <li>06. Emilia Voss <span className="text-ash">— Designer</span></li>
          <li>07. Dr. Ethan Ward <span className="text-ash">— Doctor</span></li>
          <li>08. Ryan Cole <span className="text-ash">— Photographer</span></li>
          <li>09. Melody Hart <span className="text-ash">— Musician</span></li>
          <li>10. Hayden Cross <span className="text-ash">— Fiancé</span></li>
          <li>11. Grace Milton <span className="text-ash">— Housekeeper</span></li>
          <li className="text-burgundy-glow">12. Leila Sade <span className="text-ash">— Host</span></li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="font-cinematic text-foreground">The Anomaly</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          At precisely 9:47 PM, a complete power failure plunged the dining room into darkness 
          for exactly <span className="text-gold">60 seconds</span>. When the lights returned, 
          the guests discovered something impossible:
        </p>
        <div className="bg-burgundy/10 border border-burgundy/30 rounded p-4">
          <p className="text-sm text-foreground italic">
            A thirteenth chair had appeared at the table. Upon it lay a black envelope containing 
            a single card with the words:
          </p>
          <p className="text-gold font-mono text-center mt-3 text-lg">
            "I sat here — yet none of you saw me."
          </p>
        </div>
      </div>
    </div>

    <div className="divider-gold" />

    <div className="bg-card/50 rounded p-4">
      <h4 className="font-cinematic text-foreground mb-3">Investigation Status</h4>
      <ul className="text-sm text-muted-foreground space-y-2">
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-burgundy rounded-full" />
          No physical intruder detected by security systems
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-burgundy rounded-full" />
          No fingerprints, footprints, or DNA evidence on the 13th chair
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-burgundy rounded-full" />
          Conflicting eyewitness testimonies — some recall a figure, others do not
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse-glow" />
          Philosophical implications of "presence without presence" under analysis
        </li>
      </ul>
    </div>
  </div>
);

const TimelineTab = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

      {/* Timeline items */}
      {[
        { time: "7:00 PM", event: "Guests begin arriving at Sade Manor" },
        { time: "7:30 PM", event: "All 12 guests present; pre-dinner drinks served in the library" },
        { time: "8:15 PM", event: "Dinner commences in the main dining hall" },
        { time: "9:30 PM", event: "Leila announces upcoming novel reading" },
        { time: "9:47 PM", event: "POWER FAILURE — Complete darkness for 60 seconds", highlight: true },
        { time: "9:48 PM", event: "Lights return; 13th chair discovered with black envelope" },
        { time: "9:50 PM", event: "Initial panic; Grace Milton checks circuit breakers" },
        { time: "10:00 PM", event: "Security footage reviewed — no anomalies detected" },
        { time: "10:30 PM", event: "Dr. Ward examines guests for signs of tampering" },
        { time: "11:00 PM", event: "Investigation team notified" },
      ].map((item, index) => (
        <div key={index} className="relative pl-10 pb-6 last:pb-0">
          <div
            className={`absolute left-2.5 w-3 h-3 rounded-full ${
              item.highlight ? "bg-gold animate-pulse-glow" : "bg-burgundy"
            }`}
          />
          <div className={`${item.highlight ? "glass-card p-4 rounded border-gold/30" : ""}`}>
            <span className="font-mono text-xs text-gold">{item.time}</span>
            <p className={`text-sm mt-1 ${item.highlight ? "text-foreground font-medium" : "text-muted-foreground"}`}>
              {item.event}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const NotesTab = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="grid gap-4">
      {[
        {
          id: "NOTE-001",
          content: "Guest Nora Caldwell claims to have seen a silhouette during the blackout. Dr. Ward reports no such memory.",
          classification: "CONTRADICTION",
        },
        {
          id: "NOTE-002",
          content: "The letter 'L' was carved into the underside of the 13th chair. Only discovered during forensic examination.",
          classification: "EVIDENCE",
        },
        {
          id: "NOTE-003",
          content: "Adrian Mercer, the psychologist, describes experiencing 'false-face syndrome' — the sensation of recognizing someone who wasn't there.",
          classification: "TESTIMONY",
        },
        {
          id: "NOTE-004",
          content: "Photographer Ryan Cole's camera contained a corrupted file timestamped 9:47:32 PM. Recovery attempts ongoing.",
          classification: "DIGITAL ANOMALY",
        },
        {
          id: "NOTE-005",
          content: "From Leila's unpublished manuscript: 'One exists only in memory. Remove the memory, and the existence becomes a question mark.'",
          classification: "LITERARY CLUE",
        },
      ].map((note) => (
        <div key={note.id} className="terminal-panel rounded overflow-hidden">
          <div className="terminal-header flex justify-between items-center">
            <span className="font-mono text-xs text-gold">{note.id}</span>
            <span className="evidence-tag text-[10px]">{note.classification}</span>
          </div>
          <p className="p-4 text-sm text-muted-foreground font-mono leading-relaxed">
            {note.content}
          </p>
        </div>
      ))}
    </div>

    <div className="bg-burgundy/10 border border-burgundy/30 rounded p-4 mt-6">
      <p className="text-xs text-muted-foreground font-mono">
        <span className="text-burgundy-glow">CIPHER DETECTED:</span> Analysis suggests hidden message 
        within recovered materials. First letters of key phrases may reveal additional meaning.
      </p>
    </div>
  </div>
);

export default CaseFileSection;
