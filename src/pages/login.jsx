import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />

    <main className="min-h-screen flex items-center justify-center bg-green-50 px-4">
  <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
    <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
      Login
    </h1>

    <p className="text-center text-gray-500 mb-6">
      Access your EcoNest account
    </p>

    <form className="space-y-4">
      <input
        type="email"
        placeholder="Email Address"
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <button
        type="submit"
        className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800"
      >
        Sign In
      </button>
    </form>
  </div>
</main>

      <Footer />
    </>
  );
}

export default Login;