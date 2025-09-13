"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}
