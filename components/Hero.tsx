"use client";

import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F5FBFF] via-white to-[#EAF6FE] pt-36 pb-28">
      {/* Background Blur */}

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />

      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-[#1D8FE1]">
              <ShieldCheck size={18} />
              Perawat Profesional & Terpercaya
            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
              Perawatan Profesional
              <span className="block text-[#1D8FE1]">
                Langsung di Rumah Anda
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Temukan perawat profesional untuk pendamping lansia, perawatan
              medis, baby care, hingga home care dengan proses pemesanan yang
              mudah, aman, dan terpercaya.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-[#1D8FE1] px-8 py-4 font-semibold text-white transition hover:bg-[#1679C4] flex items-center gap-2">
                Cari Perawat
                <ArrowRight size={20} />
              </button>

              <button className="rounded-xl border border-[#1D8FE1] px-8 py-4 font-semibold text-[#1D8FE1] transition hover:bg-[#1D8FE1] hover:text-white">
                Konsultasi Gratis
              </button>
            </div>

            {/* TRUST */}

            <div className="mt-12 space-y-5">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#1D8FE1]" size={22} />

                <span className="text-slate-700">
                  Perawat profesional sesuai kebutuhan keluarga.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#1D8FE1]" size={22} />

                <span className="text-slate-700">
                  Proses pemesanan mudah dan cepat.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#1D8FE1]" size={22} />

                <span className="text-slate-700">
                  Pendampingan yang nyaman dan responsif.
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[36px] shadow-2xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixpBpPDwUHFapT6FBmamPyojaK6aeXhbeqw3hMx_Uqb0KodFmrk5fZ7o&s=10"
                alt="Perawat"
                className="w-full h-[320px] sm:h-[420px] lg:h-[650px] object-cover rounded-[36px]"
              />
            </div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -bottom-8 left-8 w-72 rounded-3xl border border-blue-100 bg-white p-5 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80"
                  alt="Perawat"
                  className="h-14 w-14 rounded-full object-cover border-2 border-blue-100"
                />

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Perawat Profesional
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    Siap membantu kebutuhan keluarga Anda.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full bg-blue-100 px-3 py-2 text-xs font-medium text-[#1D8FE1]">
                  ✔ Siap Bertugas
                </span>

                <button className="text-sm font-semibold text-[#1D8FE1] hover:underline">
                  Lihat Layanan →
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
