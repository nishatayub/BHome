import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import PropertiesExplorer from "@/components/site/PropertiesExplorer";

export default function PropertiesPage() {
  return (
    <>
      <Nav />
      <main className="section-white section-pad border-t border-black">
        <section className="container">
          <p className="caption mb-4 tracking-[0.08em] uppercase">All properties</p>
          <h1 className="heading mb-6">Browse the full property inventory.</h1>
          <p className="body-text max-w-[760px] mb-12">
            This is the functional “show all properties” page. Users can filter by
            audience and lease type and compare MatchScore, Reality Score, and
            Move-In Confidence without changing the existing design direction.
          </p>
          <PropertiesExplorer />
        </section>
      </main>
      <Footer />
    </>
  );
}
