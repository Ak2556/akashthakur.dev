'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' }, // ✅ Added contact here
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.getElementById(href.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className={`sticky top-0 z-50 backdrop-blur-lg border-b transition-all duration-300 ${
        scrolled ? 'bg-white/10 border-white/20 py-2' : 'bg-white/5 border-white/10 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-white transition-all">
        <motion.a
          href="/"
          whileHover={{ scale: 1.1, rotate: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="text-lg font-semibold tracking-tight"
        >
          Akash.dev
        </motion.a>

        <div className="flex space-x-6 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className={`relative transition-all ${
                pathname === link.href ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
              {pathname === link.href && link.href !== '/' && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-white"
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}