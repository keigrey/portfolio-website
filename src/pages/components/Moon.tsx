import React from "react";
import { easeIn, easeOut, motion } from "framer-motion";

export default function Moon() {
  return (
    <motion.div
      initial={{ opacity: 1, x: "-150%", y: "-50%" }}
      animate={{ opacity: 1, x: "-50%", y: "-50%" }}
      exit={{ x: "150%", transition: { duration: 1 } }}
      transition={{ duration: 4, ease: "easeOut" }}
      className="moon"
    ></motion.div>
  );
}
