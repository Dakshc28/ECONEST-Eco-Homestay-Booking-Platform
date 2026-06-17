import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">EcoNest</h1>

        <div className="flex flex-wrap gap-3 items-center justify-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login">Login</Link>

          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            U
          </div>
        </div>
      </div>
    </nav>
  );
}