import Divider from "../../components/divider";
import HeroSection from "./components/hero-section/hero-section";
import AvailableRooms from "./components/product-section/available-rooms";
export default function Home() {
  return (
    <div className="min-h-screen px-4 py-12 text-zinc-800">
      <HeroSection />
      <Divider title={"Latest Rooms for you"} />
      <AvailableRooms />
    </div>
  );
}
