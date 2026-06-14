export default function Manifesto() {
  return (
    <section className="section-gray section-pad">
      <div className="container">
        <div className="grid grid-cols-[1fr_2fr] gap-24 items-center max-lg:grid-cols-1 max-lg:gap-8">
          {/* Label column */}
          <div>
            <p className="caption text-[#bfbfbf] leading-loose">
              <span className="block">Manifest</span>
              <span className="block">BHome</span>
              <span className="block">Smart Living Network</span>
              <span className="block">2024</span>
            </p>
          </div>

          {/* Quote column */}
          <div>
            <blockquote className="heading-sm font-normal">
              &ldquo;Housing is not inventory.
              <br /><br />
              A home is where people build careers, friendships, families, and futures.
              Yet finding a place to live remains one of the most uncertain decisions people make.
              <br /><br />
              We believe trust should not be optional.
              We believe transparency should be standard.
              We believe people deserve to know exactly what they are booking before they arrive.
              <br /><br />
              BHome exists to make housing decisions intelligent, transparent, and human.&rdquo;
            </blockquote>
            <hr className="border-t border-black my-10" />
            <p className="caption text-[#bfbfbf]">
              BHome Manifest — published in conjunction with the Smart Living Network Charter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
