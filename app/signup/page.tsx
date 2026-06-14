import AuthForm from "@/components/site/AuthForm";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";

export default function SignupPage() {
  return (
    <>
      <Nav />
      <main className="section-white section-pad border-t border-black">
        <div className="container grid grid-cols-2 gap-24 items-start max-lg:grid-cols-1 max-lg:gap-12">
          <div>
            <p className="caption mb-4 tracking-[0.08em] uppercase">Account creation</p>
            <h1 className="heading mb-6">Create a trustworthy account.</h1>
            <p className="body-text max-w-[560px]">
              This page keeps the original site styling and adds the actual signup path
              that was missing. It supports email/password now and Google OAuth once
              your credentials are configured.
            </p>
          </div>
          <AuthForm mode="signup" />
        </div>
      </main>
      <Footer />
    </>
  );
}
