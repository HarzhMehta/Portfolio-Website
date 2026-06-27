"use client";

import { motion } from "framer-motion";

type WordAnimatorProps = {
  word: string;
  typedText: string;
  visible: boolean;
};

export default function WordAnimator({ word, typedText, visible }: WordAnimatorProps) {
  return (
    <motion.div
      className="hero-word-layer"
      aria-hidden={!visible}
      animate={{
        opacity: visible ? 1 : 0,
        filter: visible ? "blur(0px)" : "blur(10px)",
      }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <span>{typedText || word}</span>
    </motion.div>
  );
}
