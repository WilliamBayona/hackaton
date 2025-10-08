"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [timeLeft, setTimeLeft] = useState(10);
  const [clicks, setClicks] = useState(0);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (!active) return;
    if (timeLeft === 0) {
      setActive(false);
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, active]);

  const handleClick = () => {
    if (active) setClicks((c) => c + 1);
  };

  const handleRestart = () => {
    setTimeLeft(10);
    setClicks(0);
    setActive(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <h1 className="text-2xl font-semibold mb-4">
        No of Clicks until timer expires
      </h1>

      <div className="w-64 h-64 bg-orange-400 flex flex-col items-center justify-center rounded-xl shadow-md">
        <p className="text-5xl font-bold">{clicks}</p>
        <p className="mt-4 text-lg font-medium">
          Time left: {timeLeft} second{timeLeft !== 1 ? "s" : ""}
        </p>

        <button
          onClick={handleClick}
          disabled={!active}
          className={`mt-5 px-4 py-2 rounded-lg border-2 text-lg font-bold ${
            active
              ? "bg-white hover:bg-gray-100 border-gray-500"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          +
        </button>
      </div>

      {!active && (
        <button
          onClick={handleRestart}
          className="mt-6 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
        >
          Restart
        </button>
      )}
    </div>
  );
}