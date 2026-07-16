"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Clock3, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Perawat Terseleksi & Bersertifikat",
    description:
      "Seluruh perawat dan perawat melalui proses seleksi serta pelatihan sehingga siap memberikan pelayanan yang profesional.",
  },
  {
    icon: UserCheck,
    title: "Berpengalaman & Profesional",
    description:
      "Didukung tenaga perawat yang berpengalaman dalam memberikan layanan home care sesuai kebutuhan setiap pasien.",
  },
  {
    icon: HeartHandshake,
    title: "Pendampingan dengan Empati",
    description:
      "Kami mengutamakan kenyamanan, kepedulian, serta komunikasi yang baik agar pasien dan keluarga merasa lebih tenang.",
  },
  {
    icon: Clock3,
    title: "Layanan & Respons 24 Jam",
    description:
      "Tim kami siap memberikan bantuan, konsultasi, serta merespons kebutuhan layanan kapan pun dibutuhkan.",
  },
  {
    icon: ShieldCheck,
    title: "Jaminan Kualitas Pelayanan",
    description:
      "Kami berkomitmen memberikan pelayanan terbaik dengan standar kualitas yang konsisten demi kepuasan setiap keluarga.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-24 bg-[#F8FBFF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1"
          >
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-[#1D8FE1]">
              Mengapa Memilih Kami
            </span>

            <h2 className="mt-5 text-3xl lg:text-5xl font-bold leading-tight text-slate-900">
              Pendampingan Profesional
              <br />
              untuk Orang yang Anda Sayangi
            </h2>

            <p className="mt-6 text-[15px] lg:text-base leading-7 lg:leading-8 text-slate-600">
              Kami memahami bahwa setiap keluarga memiliki kebutuhan yang
              berbeda. Karena itu kami menghadirkan layanan home care yang
              profesional, terpercaya, mudah diakses, dan memberikan rasa nyaman
              bagi pasien maupun keluarga.
            </p>

            <div className="mt-10 grid gap-5">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      x: 6,
                    }}
                    className="flex gap-4 rounded-2xl border border-blue-100 bg-white p-4 lg:p-5 shadow-sm hover:shadow-lg transition-all"
                  >
                    <div className="flex h-12 w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                      <Icon className="text-[#1D8FE1]" size={24} />
                    </div>

                    <div>
                      <h3 className="text-base lg:text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm lg:text-base leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-2"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7QyCHDCgLF3Y9PHcDCx6kJXpP9Ns-nq6Hl9GcDsGCLA4I6aIyAk3UGM&s=10"
                alt="Perawat"
                loading="lazy"
                className="w-full h-[300px] sm:h-[420px] lg:h-[650px] object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Floating Desktop */}

            <div className="hidden lg:block absolute -bottom-6 -right-6 rounded-2xl border border-blue-100 bg-white px-6 py-5 shadow-xl">
              <h3 className="text-3xl font-bold text-[#1D8FE1]">24/7</h3>

              <p className="mt-1 text-sm text-slate-600">Customer Support</p>
            </div>

            {/* Mobile Card */}

            <div className="mt-5 lg:hidden rounded-2xl bg-white border border-blue-100 p-5 shadow-md text-center">
              <h3 className="text-3xl font-bold text-[#1D8FE1]">24/7</h3>

              <p className="mt-1 text-sm text-slate-600">
                Customer Support Siap Membantu
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
