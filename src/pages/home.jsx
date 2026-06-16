import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="card-container">
        <Card
          title="Eco Homestays"
          description="Stay in sustainable village homes."
        />

        <Card
          title="Cultural Tours"
          description="Experience local traditions and lifestyles."
        />
      </div>

      <Footer />
    </>
  );
}

export default Home;