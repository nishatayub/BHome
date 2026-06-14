"use client";

import { useMemo, useState } from "react";

import PropertyCard from "@/components/site/PropertyCard";
import { properties, propertyAudiences } from "@/lib/properties";

const leaseOptions = ["All", "Monthly", "Semester", "Flexible"] as const;

export default function PropertiesExplorer() {
  const [audience, setAudience] = useState<"All" | (typeof propertyAudiences)[number]>("All");
  const [lease, setLease] = useState<(typeof leaseOptions)[number]>("All");

  const filtered = useMemo(() => {
    return properties.filter((property) => {
      const audienceMatch = audience === "All" || property.audience === audience;
      const leaseMatch = lease === "All" || property.lease === lease;

      return audienceMatch && leaseMatch;
    });
  }, [audience, lease]);

  return (
    <div className="space-y-8">
      <div className="grid gap-5 border border-black bg-white p-6 lg:grid-cols-[1fr_1fr_auto]">
        <div>
          <p className="caption uppercase text-[#bfbfbf]">Audience</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["All", ...propertyAudiences].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setAudience(option as typeof audience)}
                className={`caption px-4 py-2 border transition-colors ${
                  audience === option
                    ? "bg-black text-white border-black"
                    : "border-black bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="caption uppercase text-[#bfbfbf]">Lease</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {leaseOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLease(option)}
                className={`caption px-4 py-2 border transition-colors ${
                  lease === option
                    ? "bg-black text-white border-black"
                    : "border-black bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="border border-black bg-black px-5 py-4 text-white">
          <p className="caption uppercase text-[#bfbfbf]">Results</p>
          <p className="mt-2 heading-sm text-white">
            {filtered.length}
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filtered.map((property) => (
          <PropertyCard key={property.id} property={property} compact />
        ))}
      </div>
    </div>
  );
}
