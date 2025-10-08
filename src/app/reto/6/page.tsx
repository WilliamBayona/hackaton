"use client";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState<string>("");

  const getWordCount = (text: string) => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    return words.length;
  };

  const getCharCount = (text: string) => text.length;

  const getSentenceCount = (text: string) => {
    const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
    return sentences.length;
  };

  const getParagraphCount = (text: string) => {
    const paragraphs = text.split(/\n+/).filter((p) => p.trim().length > 0);
    return paragraphs.length;
  };

  const getLongestWord = (text: string) => {
    const words = text.match(/\b\w+\b/g);
    if (!words) return "-";
    return words.reduce((a, b) => (b.length > a.length ? b : a), "");
  };

  const stats = {
    words: getWordCount(text),
    chars: getCharCount(text),
    sentences: getSentenceCount(text),
    paragraphs: getParagraphCount(text),
    longest: getLongestWord(text),
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-gray-100 shadow-lg p-8 border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-center">Text Analyser</h1>

        <div className="grid grid-cols-4 text-center mb-6 bg-gray-200 py-3">
          <div>
            <p className="font-semibold text-gray-700">Words</p>
            <p className="text-lg font-medium">{stats.words}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Characters</p>
            <p className="text-lg font-medium">{stats.chars}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Sentences</p>
            <p className="text-lg font-medium">{stats.sentences}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Paragraphs</p>
            <p className="text-lg font-medium">{stats.paragraphs}</p>
          </div>
        </div>

        <textarea
          className="w-full h-64 p-4 bg-white text-gray-800 border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Paste your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="flex justify-between items-center bg-gray-200 mt-5 p-3 text-sm text-gray-700">
          <span>
            Longest word: <strong>{stats.longest}</strong>
          </span>
        </div>
      </div>
    </main>
  );
}
