import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#f7f4ef]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[2fr_1fr_1fr] lg:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-red-600">BHome</p>
          <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-[-0.04em] text-black">
            Help users know exactly what they are booking before they arrive.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-black/70">
            This MVP wires together trusted authentication, map-based exploration,
            and a property catalog shaped directly from the README and PRD.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-black">Product</p>
          <div className="mt-4 space-y-3 text-sm text-black/70">
            <Link href="/">Landing page</Link>
            <br />
            <Link href="/properties">All properties</Link>
            <br />
            <Link href="/signup">Create account</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-black">Trust stack</p>
          <div className="mt-4 space-y-2 text-sm leading-6 text-black/70">
            <p>Supabase Auth for email and Google OAuth</p>
            <p>Google Maps JavaScript API for live neighborhood exploration</p>
            <p>Seeded property intelligence ready for backend migration</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
