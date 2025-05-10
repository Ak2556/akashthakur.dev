'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

type Direction = 'left' | 'right';

const RouteContext = createContext<{ direction: Direction }>({ direction: 'left' });

export const useRouteDirection = () => useContext(RouteContext);

export function RouteProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPath = useRef<string | null>(null);
  const [direction, setDirection] = useState<Direction>('left');

  useEffect(() => {
    if (prevPath.current !== null) {
      setDirection(pathname > prevPath.current ? 'left' : 'right');
    }
    prevPath.current = pathname;
  }, [pathname]);

  return (
    <RouteContext.Provider value={{ direction }}>
      {children}
    </RouteContext.Provider>
  );
}