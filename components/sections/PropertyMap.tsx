"use client";

import Link from "next/link";

import LivePropertyMap from "@/components/site/PropertyMap";
import { properties } from "@/lib/properties";

export default function PropertyMap() {
  const mapProperties = properties.slice(0, 5);

  return (
    <section className="section-white section-pad border-t border-black">
      <div className="container">
        <div className="flex items-end justify-between mb-12 gap-8 max-md:flex-col max-md:items-start">
          <div>
            <p className="caption mb-4 tracking-[0.08em] uppercase">Area Intelligence</p>
            <h2 className="heading-lg">Explore by neighborhood</h2>
          </div>
          <Link href="/properties" className="btn-ghost flex-shrink-0">Show all properties</Link>
        </div>

        <LivePropertyMap properties={mapProperties} />

        {/* Legend */}
        <div className="mt-6 flex gap-6 flex-wrap">
          {["Students", "Professionals", "Families", "Travelers"].map((type, i) => (
            <div key={type} className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full border border-black ${i === 0 ? "bg-black" : "bg-white"}`}
              />
              <span className="caption">{type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
