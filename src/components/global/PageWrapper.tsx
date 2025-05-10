'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouteDirection } from '@/context/RouteContext';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { direction } = useRouteDirection();

  const variants = {
    initial: {
      opacity: 0,
      x: direction === 'left' ? 100 : -100,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}