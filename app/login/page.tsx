import AuthForm from "@/components/site/AuthForm";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";

export default function LoginPage() {
  return (
    <>
      <Nav />
      <main className="section-white section-pad border-t border-black">
        <div className="container grid grid-cols-2 gap-24 items-start max-lg:grid-cols-1 max-lg:gap-12">
          <div>
            <p className="caption mb-4 tracking-[0.08em] uppercase">Trusted access</p>
            <h1 className="heading mb-6">Login with email or continue with Google.</h1>
            <p className="body-text max-w-[560px]">
              This flow keeps the existing visual language and adds the missing
              authentication plumbing behind it. Once credentials are added, users can
              sign in with email/password or Google OAuth.
            </p>
          </div>
          <AuthForm mode="login" />
        </div>
      </main>
      <Footer />
    </>
  );
}
