import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingLogo() {
  return (
    <motion.div
      style={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      className="loading-logo"
    >
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M40 -1.74846e-06C50.6087 -2.21217e-06 60.7828 4.21427 68.2843 11.7157C75.7857 19.2172 80 29.3913 80 40C80 50.6087 75.7857 60.7828 68.2843 68.2843C60.7828 75.7857 50.6087 80 40 80L40 40L40 -1.74846e-06Z"
          fill="white"
        />
        <path
          d="M40 80C29.3913 80 19.2172 75.7857 11.7157 68.2843C4.21425 60.7828 -1.7471e-05 50.6087 -1.70072e-05 40C-1.65435e-05 29.3913 4.21426 19.2172 11.7157 11.7157C19.2172 4.21427 29.3913 -6.10312e-07 40 -1.74846e-06L40 40L40 80Z"
          fill="black"
        />
      </svg>
    </motion.div>
  );
}
