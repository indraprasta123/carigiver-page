"use client";

import { motion } from "framer-motion";
import { ClipboardList, CalendarDays, UserRoundCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Pilih Layanan",
    description:
      "Pilih layanan yang sesuai dengan kebutuhan Anda, mulai dari pendamping lansia hingga home care.",
  },
  {
    icon: CalendarDays,
    title: "Isi Data & Jadwal",
    description:
      "Lengkapi informasi pasien dan tentukan jadwal layanan yang diinginkan.",
  },
  {
    icon: UserRoundCheck,
    title: "Perawat Datang",
    description:
      "Tim kami akan membantu proses pencocokan dan perawat siap datang ke lokasi Anda.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F8FBFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-[#1D8FE1]">
            Cara Pemesanan
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Pesan Perawat dalam 3 Langkah Mudah
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600 leading-8">
            Proses pemesanan yang sederhana sehingga Anda dapat memperoleh
            layanan home care dengan cepat, aman, dan nyaman.
          </p>
        </div>

        {/* Steps */}

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
              >
                {/* Number */}

                <span className="absolute top-6 right-6 text-6xl font-bold text-blue-50">
                  0{index + 1}
                </span>

                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="text-[#1D8FE1]" size={30} />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
