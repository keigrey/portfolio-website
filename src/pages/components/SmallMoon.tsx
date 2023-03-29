import React from "react";
import { motion } from "framer-motion";

export default function SmallMoon() {
  return (
    <motion.div
      initial={{ opacity: 0.18, x: "-300%", y: "-50%" }}
      animate={{ opacity: 0.18, x: "-50%", y: "-50%" }}
      exit={{ x: "200%" }}
      transition={{ duration: 1 }}
      className="small-moon"
    ></motion.div>
  );
}
