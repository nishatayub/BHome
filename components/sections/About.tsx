import Image from "next/image";

export default function About() {
  return (
    <section className="section-white section-pad border-t border-black" id="about">
      <div className="container">
        <div className="grid grid-cols-2 gap-24 items-start max-lg:grid-cols-1 max-lg:gap-12">
          <div>
            <p className="caption mb-4 tracking-[0.08em] uppercase">Why BHome Exists</p>
            <h2 className="heading-sm mb-8">
              A platform that treats trust as infrastructure
            </h2>

            <div
              className="body-text space-y-5 max-w-[560px]"
              style={{ color: "#000" }}
            >
              <p>
                BHome is an intelligent accommodation ecosystem built for the modern renter.
                Instead of forcing users to browse hundreds of listings, BHome helps them
                discover homes that match their lifestyle, commute, safety requirements,
                budget, and long-term goals.
              </p>
              <p>
                From student rooms and shared apartments to premium residences and short-stay
                rentals, BHome brings every housing option into a single trusted platform
                powered by data, community verification, and AI.
              </p>
            </div>

            <div className="mt-10">
              <a href="#" className="btn-ghost">Learn How BHome Works</a>
            </div>
          </div>

          {/* Image */}
          <figure className="relative aspect-[3/4] bg-[#e8e8e8] overflow-hidden max-lg:hidden">
            <Image src="/images/p6.jpg" alt="Architecture facade" fill className="object-cover" />
          </figure>
        </div>
      </div>
    </section>
  );
}
