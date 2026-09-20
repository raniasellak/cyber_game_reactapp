import { useState } from "react";

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function isAnswerCorrect(answer, keywords) {
  const text = normalize(answer.trim());
  if (!text || text.length < 3) return false;
  return keywords.some((keyword) => text.includes(normalize(keyword)));
}

export default function AttackCard({ attack, position, total, onNext }) {
  const [answer, setAnswer] = useState("");
  const [hintsShown, setHintsShown] = useState(0);
  const [validated, setValidated] = useState(false);
  const [correct, setCorrect] = useState(false);

  const handleValidate = () => {
    const ok = isAnswerCorrect(answer, attack.keywords);
    setCorrect(ok);
    setValidated(true);
  };

  return (
    <section className="w-full max-w-md rounded-2xl border border-cyber-border bg-cyber-panel p-5 font-mono">
      <div className="flex items-center justify-between text-xs text-cyber-amber">
        <span>
          Attaque {position}/{total}
        </span>
        <span className="rounded-full border border-cyber-orange px-2 py-0.5">
          {attack.level}
        </span>
      </div>

      <p className="mt-4 text-xs text-cyber-amber">&gt; ATTAQUE DÉTECTÉE</p>
      <h2 className="mt-1 text-2xl font-bold text-cyber-orange">{attack.name}</h2>

      {!validated ? (
        <>
          <label className="mt-5 block text-sm text-cyber-text">
            Que se passe-t-il dans cette attaque ?
          </label>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows={5}
            placeholder="Écris ton explication ici..."
            className="mt-2 w-full rounded-lg border border-cyber-border bg-cyber-bg p-3 text-sm text-cyber-text placeholder:text-gray-500 focus:border-cyber-orange focus:outline-none"
          />

          {hintsShown > 0 && (
            <ul className="mt-3 space-y-2">
              {attack.hints.slice(0, hintsShown).map((hint, i) => (
                <li
                  key={i}
                  className="rounded-lg border border-cyber-orange/40 bg-cyber-bg p-3 text-sm text-cyber-amber"
                >
                  💡 Indice {i + 1} : {hint}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={() => setHintsShown(hintsShown + 1)}
              disabled={hintsShown >= attack.hints.length}
              className="flex-1 rounded-lg border border-cyber-orange py-3 text-sm font-bold text-cyber-orange disabled:opacity-40"
            >
              Indice ({hintsShown}/{attack.hints.length})
            </button>
            <button
              type="button"
              onClick={handleValidate}
              disabled={!answer.trim()}
              className="flex-1 rounded-lg bg-cyber-orange py-3 text-sm font-bold text-black disabled:opacity-40"
            >
              Valider
            </button>
          </div>
        </>
      ) : (
        <>
          {correct ? (
            <div className="mt-5 rounded-lg border border-cyber-orange bg-cyber-orange/15 px-4 py-4 text-center">
              <p className="text-xl font-bold text-cyber-orange">Congratulations!</p>
              <p className="mt-1 text-xs text-cyber-amber">Ta réponse est correcte.</p>
            </div>
          ) : (
            <div className="mt-5 rounded-lg border border-red-500/50 bg-red-500/10 px-4 py-3 text-center">
              <p className="text-sm font-bold text-red-400">Réponse incorrecte</p>
              <p className="mt-1 text-xs text-cyber-amber">Voici la bonne explication :</p>
            </div>
          )}

          <div className="mt-4 rounded-lg border border-cyber-border bg-cyber-bg p-3">
            <p className="text-xs text-cyber-amber">Ta réponse</p>
            <p className="mt-1 text-sm text-cyber-text">{answer.trim()}</p>
          </div>

          <div className="mt-3 rounded-lg border border-cyber-orange bg-cyber-bg p-3">
            <p className="text-xs text-cyber-orange">
              {correct ? "Explication" : "Bonne réponse"}
            </p>
            <p className="mt-1 text-sm text-cyber-text">{attack.explanation}</p>
          </div>

          <div className="mt-3 rounded-lg border border-cyber-border bg-cyber-bg p-3">
            <p className="text-xs text-cyber-amber">Exemple</p>
            <p className="mt-1 text-sm text-cyber-text">{attack.example}</p>
          </div>

          <div className="mt-3 rounded-lg border border-cyber-border bg-cyber-bg p-3">
            <p className="text-xs text-cyber-amber">🛡️ Comment s&apos;en protéger</p>
            <p className="mt-1 text-sm text-cyber-text">{attack.protection}</p>
          </div>

          <button
            type="button"
            onClick={() => onNext(correct)}
            className="mt-5 w-full rounded-lg bg-cyber-orange py-3 text-sm font-bold text-black"
          >
            {position < total ? "Attaque suivante" : "Voir le résultat"}
          </button>
        </>
      )}
    </section>
  );
}
