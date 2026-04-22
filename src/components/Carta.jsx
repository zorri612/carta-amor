"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ParticlesBackground = dynamic(
  () => import("./ParticlesBackground"),
  { ssr: false }
);

export default function Carta() {
  const [opened, setOpened] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  //const [confirmed, setConfirmed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [finished, setFinished] = useState(false);

  const fullText = `Mi amor, como siempre hay una primera vez...
  Esta vez quiero hacerte esta invitación especial.

Te invito a una cena especial conmigo.

📅 Sábado 2 de mayo de 2026
🕒 Hora de recogida: 7:30 pm
📍 (Lugar sorpresa)
👔 Dress code: Elegante

Será una ocasión especial para nuestra relación.`;

  useEffect(() => {
  if (opened) {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) {
        clearInterval(interval);
        setFinished(true); // ✅ AQUÍ
      }
    }, 35);

    return () => clearInterval(interval);
  }
}, [opened]);


  return (
    <div className="relative h-screen w-full overflow-hidden">

    {/* Fondo de partículas */}
    <ParticlesBackground />

    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4">

      <div className="relative w-[90vw] max-w-[320px] h-[200px] cursor-pointer" onClick={() => setOpened(true)}>

        {/* Base del sobre */}
        <div className="absolute inset-0 rounded-xl shadow-2xl flex items-center justify-center active:scale-95 transition"
          style={{
            background: "linear-gradient(145deg, #e272b7ff, #7e7e7eff)",
            border: "1px solid rgba(248, 200, 232, 0.2)"
          }}>
        {!opened && <span style={{ color: "#f8c8dc" }}>💌</span>}
      </div>

        {/* Tapa */}
        <div
          className={`absolute top-0 left-0 w-full h-full origin-top transition-transform duration-700 ${
            opened ? "-rotate-x-180" : ""
          }`}
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 60%)",
            background: "#e49eccff",
          }}
        />

        {/* Carta */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 w-[90vw] max-w-[340px] p-6 rounded-2xl transition-all duration-700 ${
            opened ? "-translate-y-40 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{
            background: "linear-gradient(145deg, #111111, #1a1a1a)",
            border: "1px solid rgba(248,200,220,0.25)",
            boxShadow: "0 0 40px rgba(248,200,220,0.15)",
          }}
        >
          <h2 className="text-2xl mb-4 text-center tracking-wide"
            style={{ color: "#f8c8dc" }}>
          Para Sofia ❤️
        </h2>

          <p 
            className="text-[13.5px] sm:text-sm leading-relaxed whitespace-pre-line min-h-[220px]"
            style={{ color: "#eaeaea" }}
          >
            {displayedText}
          </p>

          {finished && (
            <button
              className="relative mt-6 py-3 rounded-full w-full overflow-hidden active:scale-95 transition"
              style={{
                background: "linear-gradient(90deg, #f8c8dc, #ff9bb3)",
                color: "#111",
                fontWeight: "500",
                letterSpacing: "0.5px",
              }}
              onClick={(e) => {
                e.stopPropagation();
                navigator.vibrate?.(50);
                setShowModal(true);
              }}
            >
              <span className="relative z-10">Confirmar asistencia ✨</span>
              <span className="absolute inset-0 shine"></span>
            </button>
          )}
        </div>
      </div>
    </div>
    {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6">
    
    <div
      className="w-full max-w-sm rounded-2xl p-6 text-center animate-fadeIn"
      style={{
        background: "linear-gradient(145deg, #111111, #1a1a1a)",
        border: "1px solid rgba(248,200,220,0.25)",
        boxShadow: "0 0 40px rgba(248,200,220,0.15)",
      }}
    >
      <h2
        className="text-xl mb-3"
        style={{ color: "#f8c8dc" }}
      >
        Sabía que dirías que sí 💗
      </h2>

      {/* Línea decorativa */}
      <div
        className="w-12 h-[1px] mx-auto my-3"
        style={{ background: "#f8c8dc" }}
      />

      <p className="text-sm text-white leading-relaxed">
        Entonces… nos vemos esa noche ✨  
        Va a ser algo muy especial para nosotros.
      </p>

      <button
        className="mt-5 py-2 px-4 rounded-full text-sm"
        style={{
          background: "#f8c8dc",
          color: "#111",
        }}
        onClick={() => setShowModal(false)}
      >
        Cerrar 💗
      </button>
    </div>
  </div>
)}
    </div>
    
  );
}