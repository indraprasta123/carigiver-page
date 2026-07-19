"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menus = [
  "Home",
  "Layanan",
  "Tentang",
  "Pelatihan & Prestasi",
  "Testimoni",
  "FAQ",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-lg shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="https://caregiver.id/assets/images/logo.png"
            alt="Insan Medika"
            className="h-10 w-auto lg:h-11"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menus.map((menu) => (
            <a
              key={menu}
              href="#"
              className="text-[15px] font-medium text-slate-700 transition hover:text-[#1D8FE1]"
            >
              {menu}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <button className="cursor-pointer hidden lg:block rounded-lg bg-[#1D8FE1] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1679C4]">
          Cari Perawat
        </button>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="cursor-pointer lg:hidden text-slate-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="border-t border-slate-100 bg-white shadow-lg lg:hidden"
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {menus.map((menu) => (
                <a
                  key={menu}
                  href="#"
                  onClick={() => setOpen(false)}
                  className="font-medium text-slate-700 hover:text-[#1D8FE1]"
                >
                  {menu}
                </a>
              ))}

              <button className="cursor-pointer mt-2 w-full rounded-lg bg-[#1D8FE1] py-3 font-semibold text-white transition hover:bg-[#1679C4]">
                Cari Perawat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
