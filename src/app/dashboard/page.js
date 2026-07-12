"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Loader, Toast } from "../../components/ui";

export default function Dashboard() {
  const router = useRouter();

  const [homestays, setHomestays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    fetch("http://localhost:5000/api/homestays", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (res.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          router.push("/login");
          return [];
        }

        return res.json();
      })
      .then((data) => {
        setHomestays(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to fetch dashboard data.");
        setLoading(false);
      });
  }, [router]);

  if (loading) {
    return (
      <div className="py-20">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 flex justify-center">
        <Toast message={error} />
      </div>
    );
  }

  const totalHomestays = homestays.length;

  const averagePrice =
    totalHomestays > 0
      ? homestays.reduce((sum, stay) => sum + stay.price, 0) /
        totalHomestays
      : 0;

  const highestEcoScore =
    totalHomestays > 0
      ? Math.max(...homestays.map((stay) => stay.ecoScore))
      : 0;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-10">
        EcoNest Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold">
            Total Homestays
          </h2>

          <p className="text-4xl mt-4 font-bold text-green-700">
            {totalHomestays}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold">
            Average Price
          </h2>

          <p className="text-4xl mt-4 font-bold text-green-700">
            ₹{averagePrice.toFixed(0)}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold">
            Highest Eco Score
          </h2>

          <p className="text-4xl mt-4 font-bold text-green-700">
            {highestEcoScore}
          </p>
        </div>

      </div>

    </div>
  );
}