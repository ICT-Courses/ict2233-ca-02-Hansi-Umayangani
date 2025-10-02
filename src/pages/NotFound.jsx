import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-gray-100 dark:bg-gray-800 text-forground px-4">
      <motion.h1
        className="text-6xl md:text-8xl font-bold mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Oops! Page not found.
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link
          to="/"
          className="px-6 py-3 bg-[#20A612] text-white rounded-lg hover:bg-[#5DE64E] transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
