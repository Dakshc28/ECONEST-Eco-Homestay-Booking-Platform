import Hero from "../components/Hero";
import Card from "../components/Card";
import { Button } from "../components/ui";

export default function Home() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <Card
            title="Mountain Retreat"
            description="Eco-friendly homestay surrounded by scenic mountain views."
            image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            action="View Details"
          />

          <Card
            title="Village Experience"
            description="Explore local traditions, food, and sustainable tourism."
            image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            action="Explore"
          />

        </div>

      </section>
    </>
  );
}