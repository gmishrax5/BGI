import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PageTransition } from "./PageTransition";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5F6FC]">
      <Navbar />
      <PageTransition>
        <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8">{children}</main>
      </PageTransition>
      <Footer />
    </div>
  );
}
