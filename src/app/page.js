"use client";

import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import Card from "../components/Card";

import { Button, Loader, Toast } from "../components/ui";

export default function Home() {
  const [homestays, setHomestays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/homestays")
      .then((res) => res.json())
      .then((data) => {
        setHomestays(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to connect to EcoNest Backend.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="text-center mb-10">
          <Button text="Explore Eco Stays" />
        </div>

        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Experiences
        </h2>

        {loading && (
          <div className="my-10">
            <Loader />
          </div>
        )}

        {error && (
          <div className="flex justify-center my-6">
            <Toast message={error} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {homestays.map((stay) => (
            <Card
              key={stay.id}
              title={stay.name}
              description="Experience sustainable tourism with EcoNest."
              location={stay.location}
              price={stay.price}
              ecoScore={stay.ecoScore}
              action="View Details"
            />
          ))}

        </div>

      </section>
    </>
  );
}