"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setExpanded(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-[#25D366] text-white rounded-full shadow-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          {expanded ? (
            <motion.div
              key="expanded"
              initial={{ width: 60, opacity: 0 }}
              animate={{ width: 240, opacity: 1 }}
              exit={{ width: 60, opacity: 0 }}
              className="h-16 flex items-center gap-4 px-6"
            >
              <FaWhatsapp size={28} />

              <div>
                <p className="font-semibold leading-none">Konsultasi Gratis</p>

                <span className="text-sm text-white/90">Chat via WhatsApp</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-16 h-16 flex items-center justify-center"
            >
              <FaWhatsapp size={30} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.a>
  );
}
