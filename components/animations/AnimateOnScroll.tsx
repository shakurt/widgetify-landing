"use client";

import { useEffect, useRef, useState } from "react";

type AnimateOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
};

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally unobserve after animation triggers once
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? "animate-in" : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
