"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

type Mode = "login" | "signup";

export default function AuthForm({ mode }: { mode: Mode }) {
  const router = useRouter();
  const supabase = getSupabaseBrowserClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isConfigured = Boolean(supabase);
  const isLogin = mode === "login";

  const handleEmailAuth = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!supabase) {
      setError("Add Supabase credentials before using authentication.");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setMessage(null);

    const response = isLogin
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/properties`,
          },
        });

    setIsSubmitting(false);

    if (response.error) {
      setError(response.error.message);
      return;
    }

    if (isLogin) {
      router.push("/properties");
      router.refresh();
      return;
    }

    setMessage(
      response.data.session
        ? "Account created. You are signed in and can now explore properties."
        : "Account created. Check your email if Supabase email confirmation is enabled."
    );

    if (response.data.session) {
      router.push("/properties");
      router.refresh();
    }
  };

  const handleGoogleAuth = async () => {
    if (!supabase) {
      setError("Add Supabase credentials before using Google OAuth.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/properties`,
      },
    });

    if (oauthError) {
      setError(oauthError.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[520px] border border-black bg-white p-10">
      <p className="caption tracking-[0.08em] uppercase text-[#ff0000]">
        {isLogin ? "Welcome back" : "Create your account"}
      </p>
      <h1 className="heading-sm mt-3">
        {isLogin ? "Login to BHome" : "Sign up for BHome"}
      </h1>
      <p className="body-sm mt-3 text-[#666]">
        {isLogin
          ? "Access saved properties, trust metrics, and personalized MatchScore flows."
          : "Create a trusted profile to save listings, track neighborhoods, and continue with Google."}
      </p>

      {!isConfigured && (
        <div className="mt-6 border border-[#e8e8e8] bg-[#faf7e8] px-4 py-3 caption text-[#8a6b00]">
          Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to enable auth.
        </div>
      )}

      <form onSubmit={handleEmailAuth} className="mt-8 space-y-4">
        <label className="block">
          <span className="caption mb-2 block text-black">Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full border border-black px-4 py-4 outline-none body-sm"
            placeholder="you@example.com"
          />
        </label>

        <label className="block">
          <span className="caption mb-2 block text-black">Password</span>
          <input
            type="password"
            required
            minLength={8}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full border border-black px-4 py-4 outline-none body-sm"
            placeholder="Minimum 8 characters"
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting || !isConfigured}
          className="btn-filled w-full justify-center disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting
            ? "Working..."
            : isLogin
              ? "Login with email"
              : "Create account"}
        </button>
      </form>

      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-[#e8e8e8]" />
        <span className="caption uppercase text-[#bfbfbf]">or</span>
        <div className="h-px flex-1 bg-[#e8e8e8]" />
      </div>

      <button
        type="button"
        onClick={() => void handleGoogleAuth()}
        disabled={isSubmitting || !isConfigured}
        className="btn-ghost w-full justify-center disabled:cursor-not-allowed disabled:opacity-50"
      >
        Continue with Google
      </button>

      {message && (
        <p className="mt-4 border border-[#d7ead7] bg-[#eef8ee] px-4 py-3 caption text-[#275427]">
          {message}
        </p>
      )}
      {error && (
        <p className="mt-4 border border-[#ffd8d8] bg-[#fff0f0] px-4 py-3 caption text-[#a10000]">
          {error}
        </p>
      )}

      <p className="caption mt-6 text-[#666]">
        {isLogin ? "Need an account?" : "Already have an account?"}{" "}
        <Link
          href={isLogin ? "/signup" : "/login"}
          className="text-black underline underline-offset-4"
        >
          {isLogin ? "Sign up" : "Login"}
        </Link>
      </p>
    </div>
  );
}
