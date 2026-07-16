"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[40px] bg-gradient-to-r from-[#1D8FE1] to-[#42A5F5] p-14 lg:p-20 text-center text-white shadow-2xl"
        >
          <span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
            Siap Membantu Anda
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight">
            Temukan Perawat Profesional
            <br />
            untuk Orang Tersayang
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-blue-50">
            Dapatkan layanan home care yang aman, nyaman, dan terpercaya dengan
            proses pemesanan yang mudah serta didukung perawat profesional.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <button className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-[#1D8FE1] shadow-lg transition hover:scale-105">
              Cari Perawat
              <ArrowRight size={20} />
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#1D8FE1]">
              <MessageCircle size={20} />
              Hubungi Kami
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
