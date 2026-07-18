"use client";

import { useState } from "react";

export default function AITripPlanner() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateTrip = async () => {
    if (!prompt.trim()) {
      setError("Please enter your travel request.");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    try {
      const response = await fetch("http://localhost:5000/api/ai/trip-planner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setResult(data.result);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">

        <h1 className="text-4xl font-bold mb-4 text-green-700">
          🌿 AI Eco Trip Planner
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Describe your dream eco-friendly vacation and let AI create a personalized itinerary.
        </p>

        <textarea
          rows={6}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Example: Plan a 4-day eco-friendly trip to Uttarakhand with a budget of ₹20,000."
          className="w-full border rounded-lg p-4 dark:bg-gray-700 dark:text-white"
        />

        <button
          onClick={generateTrip}
          disabled={loading}
          className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          {loading ? "Generating..." : "Generate Trip Plan"}
        </button>

        {error && (
          <div className="mt-6 bg-red-100 text-red-700 p-4 rounded-lg">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-green-700">
              Your AI Travel Plan
            </h2>

            <div className="bg-green-50 dark:bg-gray-700 rounded-lg p-6 whitespace-pre-wrap text-gray-800 dark:text-gray-100">
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}