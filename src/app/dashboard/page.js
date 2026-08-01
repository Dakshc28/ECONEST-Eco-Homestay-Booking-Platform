"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Card from "../../components/Card";
import { Loader, Toast } from "../../components/ui";

export default function Dashboard() {
  const router = useRouter();

  const [homestays, setHomestays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [message, setMessage] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    ecoScore: "",
  });

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;

  const fetchHomestays = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/homestays`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/login");
        return;
      }

      const data = await res.json();

      setHomestays(Array.isArray(data) ? data : []);
    } catch {
      setError("Unable to fetch homestays.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    }

    fetchHomestays();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setFormData({
      name: "",
      location: "",
      price: "",
      ecoScore: "",
    });

    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    const name = formData.name.trim();
    const location = formData.location.trim();
    const price = Number(formData.price);
    const ecoScore = Number(formData.ecoScore);

    if (!name) {
      setError("Homestay name is required.");
      return;
    }

    if (!location) {
      setError("Location is required.");
      return;
    }

    if (isNaN(price) || price <= 0) {
      setError("Price must be greater than 0.");
      return;
    }

    if (isNaN(ecoScore) || ecoScore < 0 || ecoScore > 100) {
      setError("Eco Score must be between 0 and 100.");
      return;
    }

    try {
      const url = editingId
  ? `${process.env.NEXT_PUBLIC_API_URL}/api/homestays/${editingId}`
  : `${process.env.NEXT_PUBLIC_API_URL}/api/homestays`;
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          location,
          price,
          ecoScore,
        }),
      });

      if (!res.ok) {
        throw new Error();
      }

      setMessage(
        editingId
          ? "Homestay updated successfully!"
          : "Homestay created successfully!"
      );

      clearForm();

      fetchHomestays();
    } catch {
      setError("Operation failed.");
    }
  };

  const handleEdit = (stay) => {
    setEditingId(stay._id);

    setFormData({
      name: stay.name,
      location: stay.location,
      price: stay.price,
      ecoScore: stay.ecoScore,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this homestay?")) {
      return;
    }

    try {
      await fetch(`http://localhost:5000/api/homestays/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage("Homestay deleted.");

      fetchHomestays();
    } catch {
      setError("Delete failed.");
    }
  };
    if (loading) {
    return (
      <div className="py-20">
        <Loader />
      </div>
    );
  }

  const totalHomestays = homestays.length;

  const averagePrice =
    totalHomestays > 0
      ? homestays.reduce((sum, stay) => sum + Number(stay.price), 0) /
        totalHomestays
      : 0;

  const highestEcoScore =
    totalHomestays > 0
      ? Math.max(...homestays.map((stay) => Number(stay.ecoScore)))
      : 0;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {message && <Toast message={message} />}

      {error && <Toast message={error} />}

      <h1 className="text-4xl font-bold mb-10">
        EcoNest Dashboard
      </h1>

      {/* Dashboard Stats */}

      <div className="grid md:grid-cols-3 gap-6 mb-12">

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold">
            Total Homestays
          </h2>

          <p className="text-4xl font-bold mt-4 text-green-700">
            {totalHomestays}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold">
            Average Price
          </h2>

          <p className="text-4xl font-bold mt-4 text-green-700">
            ₹{averagePrice.toFixed(0)}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold">
            Highest Eco Score
          </h2>

          <p className="text-4xl font-bold mt-4 text-green-700">
            {highestEcoScore}
          </p>
        </div>

      </div>

      {/* Form */}

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">

        <h2 className="text-2xl font-bold mb-6">

          {editingId
            ? "Update Homestay"
            : "Add New Homestay"}

        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Homestay Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="ecoScore"
            placeholder="Eco Score"
            value={formData.ecoScore}
            onChange={handleChange}
            required
            className="border rounded-lg p-3"
          />

          <div className="md:col-span-2 flex gap-4">

            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg transition"
            >
              {editingId ? "Update Homestay" : "Create Homestay"}
            </button>

            {editingId && (

              <button
                type="button"
                onClick={clearForm}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition"
              >
                Cancel
              </button>

            )}

          </div>

        </form>

      </div>

      {/* Homestays */}

      <h2 className="text-3xl font-bold mb-6">
        All Homestays
      </h2>

      {homestays.length === 0 ? (

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 text-center">

          <h3 className="text-2xl font-semibold">
            No homestays found
          </h3>

          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Create your first eco-friendly homestay.
          </p>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {homestays.map((stay) => (

            <Card
              key={stay._id}
              title={stay.name}
              description="Eco-friendly stay"
              location={stay.location}
              price={stay.price}
              ecoScore={stay.ecoScore}
              onEdit={() => handleEdit(stay)}
              onDelete={() => handleDelete(stay._id)}
            />

          ))}

        </div>

      )}

    </div>
  );
}