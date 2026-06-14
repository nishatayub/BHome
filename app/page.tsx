import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";
import Hero from "@/components/sections/Hero";
import SearchBar from "@/components/sections/SearchBar";
import MatchScore from "@/components/sections/MatchScore";
import PropertyMap from "@/components/sections/PropertyMap";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import ExploreHousing from "@/components/sections/ExploreHousing";
import HousingInsights from "@/components/sections/HousingInsights";
import FeaturedStory from "@/components/sections/FeaturedStory";
import AreaIntelligence from "@/components/sections/AreaIntelligence";
import CommunityReviews from "@/components/sections/CommunityReviews";
import TrustMetrics from "@/components/sections/TrustMetrics";
import About from "@/components/sections/About";
import Manifesto from "@/components/sections/Manifesto";
import DisplayBand from "@/components/sections/DisplayBand";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      <main>
        <Hero />
        <SearchBar />
        <MatchScore />
        <PropertyMap />
        <FeaturedProperties />
        <DisplayBand text="Living" bg="white" />
        <ExploreHousing />
        <HousingInsights />
        <FeaturedStory />
        <AreaIntelligence />
        <CommunityReviews />
        <TrustMetrics />
        <About />
        <Manifesto />
        <DisplayBand text="Network" bg="gray" />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
}
