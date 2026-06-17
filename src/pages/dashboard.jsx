import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

    <main className="min-h-screen p-10 bg-gray-50">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold text-green-700 mb-4">
      Dashboard
    </h1>

    <p className="text-gray-600 mb-8">
      Monitor bookings, occupancy rates, guest reviews, and homestay performance.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold">Bookings</h2>
        <p className="text-3xl font-bold text-green-600 mt-2">24</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold">Occupancy</h2>
        <p className="text-3xl font-bold text-blue-600 mt-2">78%</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold">Reviews</h2>
        <p className="text-3xl font-bold text-yellow-500 mt-2">4.8★</p>
      </div>
    </div>
  </div>
</main>

      <Footer />
    </>
  );
}

export default Dashboard;