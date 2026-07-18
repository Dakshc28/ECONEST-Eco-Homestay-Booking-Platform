"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkLogin();
  }, [pathname]);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsLoggedIn(false);

    alert("Logged out successfully!");

    router.push("/login");
  };

  return (
    <nav className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">

        <h1 className="text-2xl font-bold">
          EcoNest
        </h1>

        <div className="flex flex-wrap gap-4 items-center">

          <Link href="/">Home</Link>
          <Link href="/ai">AI Planner</Link>

          <Link href="/about">About</Link>

          <Link href="/dashboard">Dashboard</Link>

          {!isLoggedIn ? (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
            >
              Logout
            </button>
          )}

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