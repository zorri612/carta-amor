"use client";
import { useState } from "react";

export default function Carta() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">

      {!opened ? (
        <div
          onClick={() => setOpened(true)}
          className="w-72 h-48 bg-neutral-800 rounded-xl flex items-center justify-center cursor-pointer shadow-xl hover:scale-105 transition"
        >
          <p className="text-lg">💌 Abrir</p>
        </div>
      ) : (
        <div className="w-80 p-6 bg-neutral-900 rounded-xl text-center animate-fadeIn">
          <h2 className="text-xl mb-4">Para ti ❤️</h2>

          <p className="text-sm leading-relaxed">
            No todo ha sido perfecto, pero quiero intentarlo mejor contigo.
            Hoy quiero elegirte otra vez.
          </p>

          <button
            className="mt-6 px-4 py-2 bg-red-500 rounded-full hover:bg-red-600 transition"
            onClick={() => alert("Sabía que dirías que sí 💫")}
          >
            Aceptar 💫
          </button>
        </div>
      )}
    </div>
  );
}