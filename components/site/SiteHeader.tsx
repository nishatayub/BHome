"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useAuth } from "@/components/providers/AuthProvider";

const links = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const { session, isConfigured, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <div className="flex items-center gap-10">
          <Link href="/" className="leading-none">
            <span className="block text-xs uppercase tracking-[0.3em] text-red-600">
              BHome
            </span>
            <span className="block text-lg font-semibold tracking-[-0.03em] text-black">
              Trusted rental discovery
            </span>
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    active ? "text-black" : "text-black/60 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {!isConfigured && (
            <span className="hidden rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs text-amber-800 md:inline-flex">
              Add auth credentials
            </span>
          )}

          {session ? (
            <>
              <span className="hidden text-sm text-black/70 lg:inline">
                {session.user.email}
              </span>
              <button
                type="button"
                onClick={() => void signOut()}
                className="rounded-full border border-black px-4 py-2 text-sm transition-colors hover:bg-black hover:text-white"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-full border border-black/20 px-4 py-2 text-sm transition-colors hover:border-black"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="rounded-full bg-black px-4 py-2 text-sm text-white transition-opacity hover:opacity-85"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
