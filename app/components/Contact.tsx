"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // Using emailjs via REST API
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
    <section id="contact" className="relative px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block neo-border bg-[#39FF14] text-black px-4 py-1 text-sm font-black uppercase tracking-widest mb-4">
            05
          </div>
          <h2 className="text-4xl md:text-6xl font-black">
            Contact<span className="text-[#39FF14]">.</span>
          </h2>
          <p className="text-gray-400 mt-3 text-lg">
            Submit the form below to get in touch with me!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
          <div>
            <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-400">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your name"
              className="w-full neo-border bg-black/60 text-white px-4 py-3 text-base font-medium placeholder-gray-600 focus:outline-none focus:shadow-[6px_6px_0px_#DDFF00] transition-shadow"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="your@email.com"
              className="w-full neo-border bg-black/60 text-white px-4 py-3 text-base font-medium placeholder-gray-600 focus:outline-none focus:shadow-[6px_6px_0px_#00FFFF] transition-shadow"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-400">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="What's on your mind?"
              className="w-full neo-border bg-black/60 text-white px-4 py-3 text-base font-medium placeholder-gray-600 focus:outline-none focus:shadow-[6px_6px_0px_#FF00FF] transition-shadow resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="neo-btn bg-[#DDFF00] text-black px-10 py-4 font-black uppercase text-sm tracking-widest w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "idle" && "Let's Connect →"}
            {status === "sending" && "Sending..."}
            {status === "sent" && "✓ Message Sent!"}
            {status === "error" && "Failed — Try Again"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-24 text-center text-gray-600 text-sm font-mono pb-8">
          <p>
            Built with{" "}
            <span className="text-[#DDFF00]">Next.js</span> +{" "}
            <span className="text-[#00FFFF]">tsParticles</span> +{" "}
            <span className="text-[#FF00FF]">Neobrutalism Theme `-__-' </span>
          </p>
          
        </div>
      </div>
    </section>
  );
}
