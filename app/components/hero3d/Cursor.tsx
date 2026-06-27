"use client";

import { motion } from "framer-motion";

type CursorProps = {
  visible: boolean;
  typedText?: string;
};

export default function Cursor({ visible, typedText = "" }: CursorProps) {
  if (!visible) {
    return null;
  }

  return (
    <div className="hero-terminal-line" aria-live="polite">
      <span className="hero-prompt">&gt;</span>
      {typedText ? <span className="hero-typed">{typedText}</span> : null}
      <motion.span
        className="hero-cursor"
        animate={{ opacity: [1, 1, 0, 0, 1] }}
        transition={{ duration: 1.08, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
