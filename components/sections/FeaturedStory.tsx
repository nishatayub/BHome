import Image from "next/image";

export default function FeaturedStory() {
  return (
    <section className="section-white section-pad border-t border-black">
      <div className="container">
        <div className="grid grid-cols-2 gap-12 items-center max-md:grid-cols-1">
          {/* Image */}
          <figure className="relative aspect-square bg-[#e8e8e8] overflow-hidden">
            <Image src="/images/p4.jpg" alt="Property discovery vision" fill className="object-cover" />
          </figure>

          {/* Content */}
          <div className="py-10">
            <span className="tag-red-outline mb-6 inline-block">Featured Story</span>
            <h2 className="heading mb-6">
              The Future Of Property Discovery Starts Here
            </h2>
            <p className="body-text text-black mb-8 max-w-[480px]">
              Every day thousands of renters make decisions based on incomplete information.
              BHome combines AI recommendations, location intelligence, trust scores, and
              community verification to create a fundamentally better way to discover
              accommodation — one that respects your time and your life.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#" className="btn-ghost">Explore The Vision</a>
              <a href="#" className="btn-filled">Start Searching</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
