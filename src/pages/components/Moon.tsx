import React from "react";
import { motion } from "framer-motion";

export default function Moon() {
  return (
    <motion.div
      initial={{ opacity: 1, x: "-100%", y: "-50%" }}
      animate={{ opacity: 1, x: "-50%", y: "-50%" }}
      exit={{ x: "300%" }}
      transition={{ duration: 2 }}
      className="moon"
    ></motion.div>
  );
}
