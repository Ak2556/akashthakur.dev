'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiMaildotru } from "react-icons/si";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Track which input is focused (for field animation)
  const [focus, setFocus] = useState<string | null>(null);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!form.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  const inputVariants = {
    focused: { scale: 1.05, boxShadow: "0 0 10px #2563ebaa" },
    unfocused: { scale: 1, boxShadow: "none" },
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center px-4 py-20">
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-lg bg-black/70 backdrop-blur-md rounded-3xl p-10 shadow-lg border border-white/20"
      >
        <h1 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent select-none">
          Get In Touch
        </h1>

        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-green-400 font-semibold text-center select-none"
          >
            Thanks for reaching out! I’ll get back to you soon.
          </motion.div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Name Field */}
          <motion.div
            className="mb-6"
            animate={focus === "name" ? "focused" : "unfocused"}
            variants={inputVariants}
          >
            <label htmlFor="name" className="block mb-1 font-semibold">
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={`w-full rounded-md bg-white/10 border border-white/20 px-4 py-3 placeholder:text-white/50 text-white focus:outline-none transition shadow-sm ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="Your Name"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby="name-error"
              onFocus={() => setFocus("name")}
              onBlur={() => setFocus(null)}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-500">
                {errors.name}
              </p>
            )}
          </motion.div>

          {/* Email Field */}
          <motion.div
            className="mb-6"
            animate={focus === "email" ? "focused" : "unfocused"}
            variants={inputVariants}
          >
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email
            </label>
            <motion.input
              type="email"
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`w-full rounded-md bg-white/10 border border-white/20 px-4 py-3 placeholder:text-white/50 text-white focus:outline-none transition shadow-sm ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="your.email@example.com"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby="email-error"
              onFocus={() => setFocus("email")}
              onBlur={() => setFocus(null)}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </motion.div>

          {/* Message Field */}
          <motion.div
            className="mb-8"
            animate={focus === "message" ? "focused" : "unfocused"}
            variants={inputVariants}
          >
            <label htmlFor="message" className="block mb-1 font-semibold">
              Message
            </label>
            <motion.textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`w-full rounded-md bg-white/10 border border-white/20 px-4 py-3 placeholder:text-white/50 text-white focus:outline-none transition shadow-sm resize-none min-h-[120px] ${
                errors.message ? "border-red-500" : ""
              }`}
              placeholder="Write your message here..."
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby="message-error"
              onFocus={() => setFocus("message")}
              onBlur={() => setFocus(null)}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-500">
                {errors.message}
              </p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            disabled={submitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-700/60 rounded-full py-3 font-semibold shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {submitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        {/* Contact Icons Only */}
        <div className="mt-12 flex justify-center gap-10 text-blue-400 select-none">
          <a
            href="mailto:akash.thakur.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="hover:text-blue-300 transition"
          >
            <SiMaildotru className="w-7 h-7" />
          </a>
          <a
            href="https://github.com/ak2556"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-300 transition"
          >
            <SiGithub className="w-7 h-7" />
          </a>
          <a
            href="https://linkedin.com/in/akash-thakur2556"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-300 transition"
          >
            <SiLinkedin className="w-7 h-7" />
          </a>
        </div>
      </motion.section>
    </main>
  );
}