import Divider from "../../components/divider";
import HeroSection from "./components/hero-section/hero-section";
export default function Home() {
  return (
    <div className="min-h-screen px-4 py-12 text-zinc-800">
      <HeroSection />
      <Divider title={"Rooms for you"} />
    </div>
  );
}
