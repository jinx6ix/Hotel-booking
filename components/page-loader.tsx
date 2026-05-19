"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface PageLoaderProps {
  onComplete?: () => void;
  duration?: number;
}

export function PageLoader({ onComplete, duration = 4000 }: PageLoaderProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 150);

    const completeTimer = setTimeout(() => {
      setIsComplete(true);
      if (onComplete) onComplete();
    }, duration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-amber-400/20 rounded-full"
                initial={{
                  x: (typeof window !== 'undefined' ? window.innerWidth : 1000) * Math.random(),
                  y: (typeof window !== 'undefined' ? window.innerHeight : 800) * Math.random(),
                  scale: Math.random() * 0.5 + 0.5,
                  opacity: Math.random() * 0.3 + 0.1,
                }}
                animate={{
                  y: [null, (typeof window !== 'undefined' ? window.innerHeight : 800) * -0.5],
                  opacity: [null, 0],
                  scale: [null, Math.random() * 0.5],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          <motion.div
            className="flex flex-col items-center gap-10"
            exit={{
              scale: 1.5,
              opacity: 0,
              rotateZ: 15,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
          >
            <motion.div
              className="relative w-40 h-40"
              style={{ perspective: 1200 }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{ rotateY: [0, 360], rotateX: [0, 30, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              </motion.div>

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: [0, -360], rotateX: [0, -30, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="3"
                    strokeDasharray="220"
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              </motion.div>

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                  rotateY: [0, 180, 360],
                  rotateX: [0, 180, 360],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl shadow-2xl flex items-center justify-center"
                  style={{ transformStyle: "preserve-3d", boxShadow: "0 0 60px rgba(251, 146, 60, 0.5)" }}>
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48"
                animate={{ width: ["100px", "180px", "100px"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="h-1.5 bg-amber-400/30 rounded-full overflow-hidden backdrop-blur">
                  <motion.div
                    className="h-full bg-gradient-to-r from-amber-300 to-orange-400 rounded-full"
                    animate={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ duration: 0.1 }}
                    style={{ boxShadow: "0 0 20px rgba(251, 191, 36, 0.8)" }}
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 50, rotateX: 30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              style={{ transformStyle: "preserve-3d", perspective: 800 }}
            >
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white"
                animate={{
                  rotateX: [0, 5, -5, 0],
                  textShadow: [
                    "0 0 30px rgba(255,255,255,0.3)",
                    "0 0 60px rgba(255,255,255,0.6)",
                    "0 0 30px rgba(255,255,255,0.3)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                style={{ transformStyle: "preserve-3d" }}
              >
                Loading Safari Experience
              </motion.h2>

              <motion.p
                className="text-amber-200 text-xl"
                animate={{
                  opacity: [0.4, 1, 0.4],
                  y: [0, -8, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Preparing your adventure...
              </motion.p>

              <motion.div
                className="flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="w-2 h-2 bg-amber-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
                <motion.div
                  className="w-2 h-2 bg-amber-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5], delay: 0.15 }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.15 }}
                />
                <motion.div
                  className="w-2 h-2 bg-amber-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5], delay: 0.3 }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
                />
              </motion.div>

              <motion.div
                className="flex items-center justify-center gap-2"
              >
                <span className="text-white/50 text-sm">Loading</span>
                <motion.span
                  className="text-white font-bold text-lg w-12 text-center"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  {Math.round(Math.min(progress, 100))}%
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="w-4 h-4 bg-white rounded-full"
                  animate={{
                    y: [0, -30, 0],
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.12,
                    ease: "easeInOut",
                  }}
                  style={{
                    boxShadow: "0 0 15px rgba(255,255,255,0.6)",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-20 left-20 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.8, 1],
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <motion.div
            className="absolute bottom-32 right-16 w-52 h-52 bg-orange-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              x: [0, -80, 0],
              y: [0, -80, 0],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <motion.div
            className="absolute top-1/2 left-10 w-32 h-32 bg-amber-300/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function usePageLoader(duration = 4000) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, isMounted]);

  return { isLoading, setIsLoading };
}