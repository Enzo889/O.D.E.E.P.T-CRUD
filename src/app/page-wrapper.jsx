"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

function PageWrapper({ children }) {
  return (
    <>
      <AnimatePresence mode="wait">
        {children}
        <motion.div
          className="absolute top-0 left-0 w-full h-screen bg-[#dce0e4] dark:bg-stone-800 origin-top"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-screen bg-[#dce0e4] origin-bottom dark:bg-stone-800"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </AnimatePresence>
    </>
  );
}

export default PageWrapper;
