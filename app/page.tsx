import { HomeContent } from "@/components/home/home-content";

export default function Home() {
  return (
    <main className="px-5 py-5 md:px-6">
      <div className="w-full max-w-6xl mx-auto px-0 md:px-3 space-y-8">
        <HomeContent />
      </div>
    </main>
  );
}
