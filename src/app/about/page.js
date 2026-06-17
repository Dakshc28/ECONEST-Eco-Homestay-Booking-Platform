export default function About() {
  return (
    <div className="bg-green-50 min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            About EcoNest
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            EcoNest connects travelers with eco-friendly homestays and authentic
            local experiences, promoting sustainable tourism and supporting
            rural communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl mb-4">🌿</div>

            <h2 className="text-xl font-semibold mb-3">
              Sustainable Travel
            </h2>

            <p className="text-gray-600">
              Discover environmentally responsible homestays that encourage
              green tourism and conservation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl mb-4">🏡</div>

            <h2 className="text-xl font-semibold mb-3">
              Local Homestays
            </h2>

            <p className="text-gray-600">
              Stay with local hosts and experience authentic culture, food,
              traditions, and hospitality.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl mb-4">🤝</div>

            <h2 className="text-xl font-semibold mb-3">
              Community Impact
            </h2>

            <p className="text-gray-600">
              Support local economies by helping village communities benefit
              directly from tourism.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Our Mission
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            We aim to create meaningful travel experiences while preserving
            local culture, protecting the environment, and empowering
            communities through sustainable tourism.
          </p>
        </div>
      </section>
    </div>
  );
}