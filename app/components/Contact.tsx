"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_3g26jmc",
          template_id: "template_s7q2er5",
          user_id: "dV9HZl2bzlrncCN-S",
          template_params: {
            user_name: data.get("user_name"),
            user_email: data.get("user_email"),
            message: data.get("message"),
          },
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="flex flex-col items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl mx-auto"
      >
        <div className="section-intro">
          <div className="section-tag">
            <span className="dot" style={{ background: "#7dff5a" }} />
            Contact
          </div>
          <h2 className="section-heading">
            Get in <span className="gradient-text-cyan">touch</span>
          </h2>
          <p className="text-gray-500 mt-3 text-base">
            Submit the form below to reach out!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-8 gradient-border-card p-8 sm:p-12 lg:p-16"
        >
          <div>
            <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] mb-2 text-gray-500">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your name"
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl text-white px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:border-[#7dff5a]/40 focus:bg-white/[0.05] transition-all"
            />
          </div>

          <div>
            <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] mb-2 text-gray-500">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="your@email.com"
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl text-white px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:border-[#00f0ff]/40 focus:bg-white/[0.05] transition-all"
            />
          </div>

          <div>
            <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] mb-2 text-gray-500">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="What's on your mind?"
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl text-white px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:border-[#d946ef]/40 focus:bg-white/[0.05] transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "idle" && "Send Message →"}
            {status === "sending" && "Sending..."}
            {status === "sent" && "✓ Sent!"}
            {status === "error" && "Failed — Try Again"}
          </button>

          {status === "error" && (
            <p className="text-red-400 text-xs text-center font-mono">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
