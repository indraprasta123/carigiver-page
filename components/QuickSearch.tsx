"use client";

import { motion } from "framer-motion";
import {
  UserRound,
  Stethoscope,
  HeartHandshake,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Perawat Lansia",
    icon: UserRound,
  },
  {
    title: "Perawat Orang Sakit",
    icon: Stethoscope,
  },
  {
    title: "Perawatan Pasca Stroke",
    icon: HeartHandshake,
  },
  {
    title: "Perawatan Pasca ICU",
    icon: HeartHandshake,
  },
];

export default function QuickSearch() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-24 bg-[#F8FBFF]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-[32px] bg-white shadow-xl border border-blue-100 p-8 lg:p-12"
        >
          {/* Header */}

          <div className="text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-[#1D8FE1]">
              Temukan Layanan
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Pilih Layanan Sesuai Kebutuhan Anda
            </h2>

            <p className="mt-5 text-slate-600 max-w-2xl mx-auto leading-8">
              Pilih layanan yang Anda butuhkan, masukkan lokasi, kemudian
              temukan perawat profesional yang siap membantu keluarga Anda.
            </p>
          </div>

          {/* Services */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <button
                  key={index}
                  onClick={() => setSelected(index)}
                  className={`cursor-pointer rounded-2xl border p-6 transition-all text-left duration-300 ${
                    selected === index
                      ? "border-[#1D8FE1] bg-blue-50 shadow-lg"
                      : "border-slate-200 hover:border-[#1D8FE1] hover:shadow-md"
                  }`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <Icon className="text-[#1D8FE1]" size={28} />
                  </div>

                  <h3 className="mt-5 font-semibold text-slate-900">
                    {service.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Search */}

          <div className="grid lg:grid-cols-[1fr_auto] gap-5 mt-12">
            <div>
              <label className="block mb-3 text-sm font-medium text-slate-700">
                Lokasi
              </label>

              <div className="relative">
                <MapPin
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#1D8FE1]"
                  size={20}
                />

                <input
                  type="text"
                  placeholder="Contoh: Jakarta Selatan, Depok, Bekasi"
                  className="w-full rounded-2xl border border-slate-300 bg-white py-4 pl-14 pr-5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#1D8FE1] focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            <div className="flex items-end">
              <button className="cursor-pointer w-full lg:w-auto rounded-2xl bg-[#1D8FE1] hover:bg-[#1679C4] transition px-10 py-4 text-white font-semibold flex items-center justify-center gap-2 shadow-lg">
                Cari Perawat
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Bottom Info */}

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1D8FE1]" />
              Pendamping Lansia
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1D8FE1]" />
              Perawat Orang Sakit
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1D8FE1]" />
              Perawatan Pasca Stroke
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1D8FE1]" />
              Perawatan Pasca ICU
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
