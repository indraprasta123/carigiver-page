"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Perawat Lansia",
    image: "https://caregiver.id/assets/images/lansia-min.webp",
    description:
      "Pendamping profesional untuk membantu aktivitas sehari-hari lansia dengan penuh perhatian.",
  },
  {
    title: "Perawat Orang Sakit",
    image: "https://caregiver.id/assets/images/orangsakit-min.webp",
    description:
      "Layanan perawatan pasien di rumah oleh tenaga kesehatan yang berpengalaman.",
  },
  {
    title: "Perawatan Pasca Stroke",
    image: "https://caregiver.id/assets/produk/semi-medis-min.webp",
    description:
      "Pendampingan intensif untuk membantu proses pemulihan pasien pasca stroke.",
  },
  {
    title: "Perawatan Pasca ICU",
    image: "https://caregiver.id/assets/images/medis2-min.webp",
    description:
      "Perawatan lanjutan setelah pasien keluar dari ICU agar masa pemulihan lebih optimal.",
  },
];

export default function Services() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-[#1D8FE1]">
            Layanan Kami
          </span>

          <h2 className="mt-5 text-3xl lg:text-5xl font-bold text-slate-900">
            Layanan Home Care Profesional
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600 leading-8">
            Pilih layanan terbaik sesuai kebutuhan pasien. Seluruh caregiver
            telah melalui proses seleksi sehingga siap memberikan pelayanan yang
            aman, profesional, dan terpercaya.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 mt-16 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all group"
            >
              {/* Image */}

              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7 text-sm">
                  {service.description}
                </p>

                <button className="cursor-pointer mt-6 flex items-center gap-2 font-semibold text-[#1D8FE1] transition-all group-hover:gap-3">
                  Lihat Detail
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
