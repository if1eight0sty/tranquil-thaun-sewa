import { motion } from "framer-motion";
import HeaderBlock from "./header-block";
import RoomsBlock from "./rooms-block";
import TranquilBlock from "./tranquil-block";
import SubscribeBlock from "./subscribe-block";
export default function HeroSection() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      className="grid max-w-4xl grid-cols-12 gap-4 mx-auto grid-flow-dense"
    >
      <HeaderBlock />
      <RoomsBlock />
      <TranquilBlock />
      <SubscribeBlock />
    </motion.div>
  );
}
