"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PageLoaderProps {
  duration?: number;
}

export function PageLoader({ duration = 4000 }: PageLoaderProps) {
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    const completeTimer = setTimeout(() => setIsComplete(true), duration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [duration]);

  if (isComplete) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-8">
        <motion.div
          className="relative w-28 h-28"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="4" />
            <motion.circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="264"
              animate={{ strokeDashoffset: 264 - (progress / 100) * 264 }}
              transition={{ duration: 0.1 }}
            />
          </svg>
        </motion.div>

        <div className="text-center">
          <motion.h2
            className="text-2xl font-bold text-white mb-2"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading Safari Experience
          </motion.h2>
          <p className="text-amber-200 text-sm">{Math.round(progress)}%</p>
        </div>
      </div>
    </motion.div>
  );
}