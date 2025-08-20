"use client";

import { useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <button
          onClick={handleClick}
          className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95"
        >
          {clicked ? "Clicked!" : "Click Me"}
        </button>
        {clicked && (
          <p className="mt-4 text-gray-600 text-sm fade-in">
            Button was clicked!
          </p>
        )}
      </div>
    </main>
  );
}