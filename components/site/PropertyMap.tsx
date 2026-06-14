"use client";

import { useMemo, useState } from "react";

import type { PropertyRecord } from "@/lib/properties";

function buildGoogleMapsUrl(property: PropertyRecord) {
  const query = encodeURIComponent(`${property.address} ${property.latitude},${property.longitude}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export default function PropertyMap({
  properties,
}: {
  properties: PropertyRecord[];
}) {
  const [activeId, setActiveId] = useState(properties[0]?.id ?? "");

  const activeProperty = useMemo(
    () => properties.find((property) => property.id === activeId) ?? properties[0],
    [activeId, properties]
  );

  if (!activeProperty) {
    return null;
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="border border-black bg-[#e8e8e8] p-6 min-h-[440px] flex flex-col justify-between">
        <div>
          <p className="caption text-[#bfbfbf] mb-3">Property location</p>
          <h3 className="heading-sm mb-4">{activeProperty.title}</h3>
          <p className="body-text max-w-[520px]">{activeProperty.address}</p>
          <div className="mt-8 grid grid-cols-3 gap-4 max-sm:grid-cols-1">
            <div>
              <p className="caption text-[#bfbfbf]">MatchScore</p>
              <p className="body-sm font-[600]">{activeProperty.matchScore}%</p>
            </div>
            <div>
              <p className="caption text-[#bfbfbf]">Reality Score</p>
              <p className="body-sm font-[600]">{activeProperty.realityScore}/100</p>
            </div>
            <div>
              <p className="caption text-[#bfbfbf]">Move-In Confidence</p>
              <p className="body-sm font-[600]">{activeProperty.moveInConfidence}%</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={buildGoogleMapsUrl(activeProperty)}
            target="_blank"
            rel="noreferrer"
            className="btn-filled"
          >
            Open in Google Maps
          </a>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              activeProperty.address
            )}`}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            Get directions
          </a>
        </div>
      </div>

      <div className="border border-black bg-white">
        {properties.map((property) => {
          const isActive = property.id === activeProperty.id;

          return (
            <button
              key={property.id}
              type="button"
              onClick={() => setActiveId(property.id)}
              className={`w-full text-left px-6 py-5 border-b border-[#e8e8e8] transition-colors ${
                isActive ? "bg-black text-white" : "bg-white text-black hover:bg-[#f5f5f5]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className={`caption ${isActive ? "text-white/70" : "text-[#bfbfbf]"}`}>
                    {property.neighborhood}
                  </p>
                  <p className="body-sm font-[600] mt-1">{property.title}</p>
                  <p className={`caption mt-2 ${isActive ? "text-white/70" : "text-[#666]"}`}>
                    {property.address}
                  </p>
                </div>
                <span className="caption whitespace-nowrap">
                  {property.matchScore}% match
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
