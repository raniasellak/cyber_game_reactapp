import { useState } from "react";
import cscLogo from "./assets/csc-logo.jpeg";
import { attacks } from "./data/attacks";
import AttackCard from "./components/AttackCard";

export default function App() {
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState([]);

  const finished = index >= attacks.length;
  const correctCount = results.filter((r) => r.correct).length;

  const handleNext = (correct) => {
    setResults([...results, { id: attacks[index].id, correct }]);
    setIndex(index + 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-cyber-bg px-4 py-6">
      <header className="w-full max-w-md flex flex-col items-center gap-3">
        <div className="w-full rounded-2xl bg-white px-6 py-4 shadow-[0_0_24px_rgba(255,122,26,0.15)]">
          <img
            src={cscLogo}
            alt="Computer Science Club"
            className="mx-auto h-32 w-auto max-w-full object-contain sm:h-36"
          />
        </div>
        <p className="font-mono text-xs tracking-widest text-cyber-amber uppercase">
          Cyber Quiz · Intégration
        </p>
      </header>

      <main className="flex-1 w-full flex justify-center mt-6">
        {finished ? (
          <div className="w-full max-w-md rounded-2xl border border-cyber-orange bg-cyber-panel p-6 text-center font-mono">
            <p className="text-2xl font-bold text-cyber-orange">Congratulations!</p>
            <p className="mt-3 text-sm text-cyber-text">
              Tu as terminé les {attacks.length} attaques.
            </p>
            <p className="mt-2 text-sm text-cyber-amber">
              {correctCount}/{attacks.length} réponse{correctCount > 1 ? "s" : ""} correcte
              {correctCount > 1 ? "s" : ""}.
            </p>
          </div>
        ) : (
          <AttackCard
            key={attacks[index].id}
            attack={attacks[index]}
            position={index + 1}
            total={attacks.length}
            onNext={handleNext}
          />
        )}
      </main>

      <footer className="mt-6 text-xs text-cyber-amber font-mono">
        Computer Science Club · Journée d&apos;intégration
      </footer>
    </div>
  );
}
