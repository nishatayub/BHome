import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-white overflow-hidden grid grid-cols-2 gap-0 px-10 pb-24 max-md:grid-cols-1 max-md:min-h-auto max-md:pb-16"
      aria-label="Hero section"
    >
      {/* Text column */}
      <div className="relative z-10 flex flex-col justify-end pb-12 max-md:pb-6">
        <span
          className="display-type block"
          aria-label="BHome Smart Living Network"
        >
          BHome
        </span>
        <p className="mt-7 text-[23px] leading-[1.2] tracking-[-0.39px] max-w-[460px]">
          AI-powered property discovery for students, professionals, families, and travelers.
          Find verified homes, compare neighborhoods, and book with confidence.
        </p>
        <div className="mt-10 flex items-center gap-4 flex-wrap">
          <a href="#search" className="btn-filled">Find Your Home</a>
          <a href="#how" className="btn-ghost">Learn How BHome Works</a>
        </div>
      </div>

      {/* Rotated word + photo collage */}
      <div className="relative max-md:hidden">
        {/* "Network" rotated 90° */}
        <div
          className="absolute top-1/2 right-[200px] -translate-y-[30%] rotate-90 z-10 origin-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span className="display-type whitespace-nowrap">Network</span>
        </div>

        {/* Photo crops */}
        <div
          className="absolute top-0 right-0 w-[55%] h-[45%] bg-[#e8e8e8] overflow-hidden"
          aria-hidden="true"
        >
          <Image src="/images/p6.jpg" alt="Architectural facade" fill className="object-cover" />
        </div>
        <div
          className="absolute top-[48%] right-[20%] w-[35%] h-[30%] bg-[#e8e8e8] overflow-hidden"
          aria-hidden="true"
        >
          <Image src="/images/p2.jpg" alt="Interior living space" fill className="object-cover" />
        </div>
        <div
          className="absolute bottom-[8%] right-0 w-[28%] h-[22%] bg-[#e8e8e8] overflow-hidden"
          aria-hidden="true"
        >
          <Image src="/images/p8.jpg" alt="Neighborhood architecture" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
