import Banner from "@/components/Header/Banner";
import Sponsor from "@/components/Header/Sponsor";
import SearchFiltering from "@/components/SearchFiltering/SearchFiltering";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <Sponsor />
      <SearchFiltering />
    </main>
  );
}
