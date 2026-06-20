"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">
          EcoNest
        </h1>

        <div className="flex flex-wrap gap-4 items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login">Login</Link>
          

          <button
            onClick={toggleTheme}
            className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-500"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}