import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex flex-col md:flex-row justify-between items-center">
  <h2 className="text-2xl font-bold">EcoNest</h2>

  <div className="flex gap-4 mt-2 md:mt-0">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/login">Login</Link>
  </div>
</nav>
  );
}

export default Navbar;