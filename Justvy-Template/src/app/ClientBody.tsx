'use client';
import { useEffect, useState, createContext, useContext } from 'react';
import { usePathname } from 'next/navigation';
import LoadingScreen from '@/components/LoadingScreen';

const LoadingContext = createContext<{ isAnimating: boolean }>({ isAnimating: true });

export function useLoading() {
  return useContext(LoadingContext);
}

export default function ClientBody({ children }: { children: React.ReactNode }) {
  const [isAnimating, setIsAnimating] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsAnimating(true);
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsAnimating(false);
      document.body.style.overflow = 'auto';
    }, 1600);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ isAnimating }}>
      <body className="antialiased" suppressHydrationWarning>
        <LoadingScreen />
        {children}
      </body>
    </LoadingContext.Provider>
  );
}
