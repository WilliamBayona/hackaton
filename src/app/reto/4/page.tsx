"use client";
import { useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-semibold mb-10">
        {darkMode ? "Ola es de noche" : "Ola es de día"}
      </h1>

      <button
        onClick={toggleMode}
        className={`relative w-20 h-10 rounded-full transition-colors duration-500 flex items-center ${
          darkMode ? "bg-gray-700" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-500 ${
            darkMode ? "translate-x-10" : "translate-x-1"
          }`}
        >
          {darkMode ? "🌙" : "☀️"}
        </span>
      </button>
    </main>
  );
}
