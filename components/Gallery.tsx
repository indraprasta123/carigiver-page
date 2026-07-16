"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const gallery = [
  {
    title: "Kelas Praktik",
    description:
      "Seluruh perawat Insan Medika mengikuti pelatihan praktik untuk meningkatkan keterampilan dalam memberikan pelayanan home care secara profesional.",
    image: "https://caregiver.id/assets/galeri/praktik/1.webp",
  },
  {
    title: "Pelatihan Teori",
    description:
      "Pelatihan Teori untuk Tenaga Home Care Insan Medika sebelum disalurkan",
    image: "https://caregiver.id/assets/galeri/teori/2.webp",
  },
  {
    title: "Ujian Kompetensi",
    description:
      "Pelatihan Sertifikasi Caregiver sebelum disalurkan ke pengguna jasa",
    image: "https://caregiver.id/assets/sertifikasi/1.webp",
  },
  {
    title: "Sertifikasi BNSP",
    description:
      "Sertifikat BNSP Caregiver yang menandakan mereka sudah lolos.",
    image: "https://caregiver.id/assets/bnsp/7.webp",
  },
  {
    title: "The Global Awards 2026",
    description:
      "The Most Outstanding Home Health Service in The World in 2016 ",
    image: "https://caregiver.id/assets/images/penghargaan1.webp",
  },
  {
    title: "The Best Operator Home care 2017",
    description: "Finalist Best Home care Operator 2017",
    image: "https://caregiver.id/assets/images/penghargaan3.webp",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<(typeof gallery)[0] | null>(null);

  return (
    <section className="py-24 bg-[#F8FBFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-[#1D8FE1]">
            Dokumentasi
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Pelatihan & Prestasi Kami
          </h2>

          <p className="mt-5 max-w-2xl mx-auto leading-8 text-slate-600">
            Kami berkomitmen meningkatkan kualitas layanan melalui pelatihan,
            sertifikasi, dan berbagai pencapaian yang telah diraih.
          </p>
        </div>

        {/* Gallery */}

        <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm hover:shadow-xl"
            >
              {/* Image */}

              <div
                className="group relative cursor-pointer overflow-hidden"
                onClick={() => setSelected(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-[#1D8FE1]/0 transition duration-300 group-hover:bg-[#1D8FE1]/40">
                  <ZoomIn
                    size={42}
                    className="scale-75 text-white opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100"
                  />
                </div>
              </div>

              {/* Content */}

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}

        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-5 top-5 z-10 rounded-full bg-white p-2 shadow-lg transition hover:bg-slate-100"
                >
                  <X size={22} />
                </button>

                <img
                  src={selected.image}
                  alt={selected.title}
                  className="h-[420px] w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-slate-900">
                    {selected.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {selected.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
