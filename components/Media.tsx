"use client";

import { motion } from "framer-motion";

const mediaLogos = [
  {
    name: "Warta Ekonomi",
    image: "https://caregiver.id/assets/coverage/wartaekonomi.webp",
  },
  {
    name: "TechnoId",
    image: "https://caregiver.id/assets/images/logo-3.webp",
  },
  {
    name: "BeritaSatu",
    image: "https://caregiver.id/assets/logo/beritasatu.png",
  },
  {
    name: "DailySocial",
    image: "https://caregiver.id/assets/images/logo-6.webp",
  },
  {
    name: "NET",
    image: "https://caregiver.id/assets/logo/net.png",
  },
  {
    name: "SINDOnews",
    image: "https://caregiver.id/assets/coverage/sindonews.webp",
  },
  {
    name: "Tempo",
    image: "https://caregiver.id/assets/coverage/tempo.webp",
  },
  {
    name: "Detik",
    image: "https://caregiver.id/assets/images/detikx.webp",
  },
  {
    name: "Okezone",
    image: "https://caregiver.id/assets/optimized/okz.webp",
  },
  {
    name: "SWA",
    image: "https://caregiver.id/assets/images/logo-2.webp",
  },
  {
    name: "Fimella",
    image: "https://caregiver.id/assets/coverage/fimela.webp",
  },
  {
    name: "Suara",
    image: "https://caregiver.id/assets/coverage/suara.webp",
  },
  {
    name: "JPN",
    image: "https://caregiver.id/assets/coverage/jpnn.webp",
  },
  {
    name: "liputan6",
    image: "https://caregiver.id/assets/images/liputan6.webp",
  },
  {
    name: "Tech in Asia",
    image: "https://caregiver.id/assets/coverage/techinasia.webp",
  },
  {
    name: "DetikHealth",
    image: "https://caregiver.id/assets/coverage/detik.webp",
  },
  {
    name: "Tribunnews",
    image: "https://caregiver.id/assets/optimized/tribunnews.webp",
  },
];

const members = [
  {
    image: "https://caregiver.id/assets/optimized/lspcaregiver.webp",
  },
  {
    image: "https://caregiver.id/assets/optimized/asli.webp",
  },
];

export default function MediaPartner() {
  return (
    <section className="py-24 bg-[#F8FBFF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-[#1D8FE1]">
            Dipercaya Oleh
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Diliput Berbagai Media Nasional
          </h2>

          <p className="mt-5 max-w-3xl mx-auto leading-8 text-slate-600">
            Komitmen kami dalam menghadirkan layanan home care profesional
            mendapat perhatian dari berbagai media dan menjadi bagian dari
            organisasi profesional di Indonesia.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {mediaLogos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.04 }}
              transition={{ duration: 0.2 }}
              className="flex h-28 items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="max-h-12 w-auto transition duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-[#1D8FE1]">
            Anggota Dari
          </span>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {members.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm hover:shadow-xl transition"
              >
                <img
                  src={member.image}
                  className="mx-auto h-20 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
