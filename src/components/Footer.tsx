'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const iconVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="mt-32 text-center text-sm py-10 border-t border-white/10 bg-white/5 backdrop-blur-md relative z-10"
    >
      <p className="text-white/60 mb-4">
        © {new Date().getFullYear()} Akash Thakur. Built with love and terminal.
      </p>

      <motion.div
        className="flex justify-center gap-6 text-white/70 text-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          {
            icon: <FaGithub />,
            href: 'https://github.com/ak2556',
            color: '#fff',
            label: 'GitHub',
          },
          {
            icon: <FaLinkedin />,
            href: 'https://www.linkedin.com/in/akashthakur2556',
            color: '#0077b5',
            label: 'LinkedIn',
          },
          {
            icon: <FaEnvelope />,
            href: 'mailto:akash.thakur.dev@gmail.com',
            color: '#ea4335',
            label: 'Email',
          },
          {
            icon: <FaInstagram />,
            href: 'https://www.instagram.com/akash___thakur07?igsh=NHljNDZxdTAxdGRp&utm_source=qr',
            color: '#E1306C',
            label: 'Instagram',
          },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            custom={i}
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.label}
              aria-label={item.label}
              whileHover={{ scale: 1.2, color: item.color }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {item.icon}
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </motion.footer>
  );
}