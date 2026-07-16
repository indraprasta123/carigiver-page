"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Keluarga Bapak Hadi",
    city: "Jakarta Selatan",
    message:
      "Perawat lansia yang ditugaskan sangat sabar dan profesional. Orang tua kami merasa lebih nyaman menjalani aktivitas sehari-hari di rumah.",
  },
  {
    name: "Keluarga Ibu Ratna",
    city: "Bandung",
    message:
      "Setelah menjalani perawatan di rumah sakit, kami menggunakan layanan perawatan pasca stroke. Pendampingan yang diberikan sangat membantu proses pemulihan.",
  },
  {
    name: "Keluarga Bapak Arif",
    city: "Surabaya",
    message:
      "Layanan perawatan pasca ICU sangat memudahkan keluarga kami. Perawat datang tepat waktu, komunikatif, dan memberikan pelayanan yang sangat baik.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-[#1D8FE1]">
            Testimoni
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Cerita dari Keluarga yang Menggunakan Layanan Kami
          </h2>

          <p className="mt-5 max-w-2xl mx-auto leading-8 text-slate-600">
            Kepuasan dan kenyamanan keluarga menjadi prioritas kami dalam
            memberikan layanan home care yang profesional dan terpercaya.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm hover:shadow-xl transition-all"
            >
              {/* Quote */}

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                <Quote className="text-[#1D8FE1]" size={30} />
              </div>

              {/* Message */}

              <p className="mt-6 leading-8 italic text-slate-600">
                "{item.message}"
              </p>

              {/* User */}

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1D8FE1] text-lg font-bold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">{item.name}</h4>

                  <p className="text-sm text-slate-500">{item.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
