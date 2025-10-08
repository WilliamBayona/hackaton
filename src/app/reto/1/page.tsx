"use client";
import { useState, ChangeEvent } from "react";

export default function Page() {
  const [percentage, setPercentage] = useState<number | "">("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setPercentage("");
    } else {
      const num = Number(value);
      if (num >= 0 && num <= 100) setPercentage(num);
    }
  };

  const numericValue = percentage === "" ? 0 : percentage;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <h1 className="text-3xl font-semibold mb-6">Progress bar</h1>
      <div className="relative w-72 h-6 bg-gray-300 rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-red-400 transition-all duration-500"
          style={{ width: `${numericValue}%` }}
        />
        <span
          className="absolute top-1/2 -translate-y-1/2 text-sm font-semibold text-white transition-all duration-500"
          style={{
            left: `calc(${numericValue}% - 1.5ch)`, // se ajusta horizontalmente
          }}
        >
          {percentage === "" ? "0%" : `${numericValue}%`}
        </span>
      </div>

      {/* Input */}
      <div className="flex items-center gap-3">
        <label htmlFor="percent" className="font-medium">
          Input Percentage:
        </label>
        <input
          id="percent"
          type="number"
          min="0"
          max="100"
          value={percentage}
          onChange={handleChange}
          className="border-2 border-gray-400 rounded-full px-3 py-1 w-20 text-center focus:outline-none focus:border-red-500"
        />
      </div>
    </div>
  );
}
