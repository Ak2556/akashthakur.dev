'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen px-6 py-20 bg-gradient-to-b from-black via-neutral-900 to-black text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full"
      >
        <motion.h1
          className="text-4xl font-extrabold text-center mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Let's Collaborate 🤝
        </motion.h1>
        <p className="text-center text-gray-400 mb-10">
          Whether you're a founder, recruiter, or engineer — my inbox is open.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/5 p-6 rounded-xl shadow-md backdrop-blur-md border border-white/10"
        >
          {['name', 'email', 'message'].map((field, i) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <label htmlFor={field} className="block text-sm mb-1 capitalize">
                {field === 'message' ? 'Your Message' : field}
              </label>
              {field === 'message' ? (
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-neutral-900 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={form[field as 'name' | 'email']}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-neutral-900 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            disabled={status === 'loading'}
            className="w-full bg-white text-black font-medium py-2 rounded-md transition"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </motion.button>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-center"
            >
              ✅ Message sent successfully!
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-center"
            >
              ❌ Something went wrong. Please try again.
            </motion.p>
          )}
        </form>
      </motion.div>
    </main>
  );
}