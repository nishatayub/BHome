const TYPES = [
  {
    category: "Student",
    title: "Student Housing",
    desc: "Find affordable accommodations near universities and educational hubs.",
    count: "4,200+ listings",
  },
  {
    category: "Co-Living",
    title: "Co-Living Spaces",
    desc: "Built for collaboration, networking, and flexible living with like-minded people.",
    count: "1,800+ listings",
  },
  {
    category: "Family",
    title: "Family Homes",
    desc: "Safe neighborhoods with top-rated schools, healthcare, and community amenities.",
    count: "3,100+ listings",
  },
  {
    category: "Executive",
    title: "Business Travel",
    desc: "Premium short-term stays designed for professionals on extended assignment.",
    count: "950+ listings",
  },
  {
    category: "Nomad",
    title: "Digital Nomad Spaces",
    desc: "Work-ready accommodations with 1Gbps internet and global community access.",
    count: "1,400+ listings",
  },
];

export default function ExploreHousing() {
  return (
    <section className="section-white section-pad border-t border-black" id="explore">
      <div className="container">
        <div className="flex items-end justify-between mb-12 gap-8 max-md:flex-col max-md:items-start">
          <div>
            <p className="caption mb-4 tracking-[0.08em] uppercase">Explore Housing</p>
            <h2 className="heading-lg">Find spaces that fit your life.</h2>
          </div>
        </div>

        {/* List with border rows */}
        <div className="border-t border-black">
          {TYPES.map((type, i) => (
            <a
              key={type.title}
              href="#"
              className="group flex items-center justify-between gap-8 py-7 border-b border-[#e8e8e8] hover:border-black transition-colors max-sm:flex-col max-sm:items-start"
            >
              <div className="flex items-start gap-8 flex-1 max-sm:flex-col max-sm:gap-3">
                {/* Number */}
                <span className="caption text-[#bfbfbf] w-8 flex-shrink-0 mt-1">
                  0{i + 1}
                </span>
                {/* Content */}
                <div className="flex-1">
                  <p className="tag-red mb-2">{type.category}</p>
                  <h3
                    className="font-normal group-hover:underline"
                    style={{ fontSize: "clamp(22px, 3vw, 35px)", lineHeight: 1.15, letterSpacing: "-0.7px" }}
                  >
                    {type.title}
                  </h3>
                  <p className="body-sm text-[#bfbfbf] mt-2 max-w-[480px]">{type.desc}</p>
                </div>
              </div>

              {/* Right side */}
              <div className="flex items-center gap-6 flex-shrink-0">
                <span className="caption text-[#bfbfbf]">{type.count}</span>
                <span className="btn-ghost btn-ghost-sm caption group-hover:bg-black group-hover:text-white transition-colors">
                  Explore →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
