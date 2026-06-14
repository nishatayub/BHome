import Image from "next/image";

import type { PropertyRecord } from "@/lib/properties";

function formatPrice(priceInr: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(priceInr);
}

export default function PropertyCard({
  property,
  compact = false,
}: {
  property: PropertyRecord;
  compact?: boolean;
}) {
  return (
    <article className="editorial-card reveal bg-white">
      <div className={`relative overflow-hidden ${compact ? "h-52" : "h-64"}`}>
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes={compact ? "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover"
        />
        <div className="absolute left-4 top-4 bg-white px-3 py-1 caption">
          {property.audience}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="tag-red mb-2">
              {property.neighborhood}
            </p>
            <h3
              className="font-[600] mb-3"
              style={{ fontSize: 19, lineHeight: 1.2, letterSpacing: "-0.39px" }}
            >
              {property.title}
            </h3>
          </div>
          <div className="text-right">
            <p className="body-sm font-[600] text-black">
              {formatPrice(property.priceInr)}
            </p>
            <p className="caption text-[#bfbfbf]">per month</p>
          </div>
        </div>

        <p className="body-sm text-[#666]">{property.summary}</p>

        <div className="grid grid-cols-3 gap-3 border-t border-[#e8e8e8] mt-4 pt-4">
          <div>
            <p className="caption text-[#bfbfbf]">Match</p>
            <p className="body-sm font-[600]">{property.matchScore}%</p>
          </div>
          <div>
            <p className="caption text-[#bfbfbf]">Reality</p>
            <p className="body-sm font-[600]">{property.realityScore}/100</p>
          </div>
          <div>
            <p className="caption text-[#bfbfbf]">Confidence</p>
            <p className="body-sm font-[600]">{property.moveInConfidence}%</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {property.amenities.slice(0, compact ? 2 : 4).map((amenity) => (
            <span
              key={amenity}
              className="btn-ghost btn-ghost-sm caption"
            >
              {amenity}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
