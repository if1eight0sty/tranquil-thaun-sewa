import { AnimatePresence, motion } from "framer-motion";
export default function NavItem({ children, selected, id, setSelected }) {
  return (
    <motion.button
      className="relative p-3 text-xl transition-colors rounded-md bg-slate-800 hover:bg-slate-700"
      onClick={() => setSelected(id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 block">{children}</span>
      <AnimatePresence>
        {selected && (
          <motion.span
            className="absolute inset-0 z-0 bg-indigo-600 rounded-md"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          ></motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
