"use client";
import { useState } from "react";

export default function Reto3() {
  const [celdas, setCeldas] = useState<string[]>(Array(9).fill(""));
  const [turno, setTurno] = useState<"X" | "O">("X");

  const jugar = (i: number) => {
    if (celdas[i] !== "") return; 
    const nuevas = [...celdas];
    nuevas[i] = turno;
    setCeldas(nuevas);
    setTurno(turno === "X" ? "O" : "X");
  };

  const reiniciar = () => {
    setCeldas(Array(9).fill(""));
    setTurno("X");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans">

      <div className="grid grid-cols-3">
        {celdas.map((valor, i) => (
          <button
            key={i}
            onClick={() => jugar(i)}
            className="w-24 h-24 text-5xl flex items-center justify-center bg-white border-2 border-black hover:bg-blue-50 transition-colors disabled:bg-gray-200"
            disabled={valor !== ""}
          >
            {valor}
          </button>
        ))}
      </div>


    </main>
  );
}
