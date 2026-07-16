"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Bagaimana cara memesan layanan Perawat?",
    answer:
      "Pilih layanan yang dibutuhkan, isi data diri dan kebutuhan perawatan, kemudian tim kami akan menghubungi Anda untuk proses selanjutnya.",
  },
  {
    question: "Apakah saya bisa memilih jadwal layanan?",
    answer:
      "Ya. Anda dapat menentukan tanggal dan waktu sesuai kebutuhan. Tim kami akan menyesuaikan dengan ketersediaan perawat.",
  },
  {
    question: "Layanan apa saja yang tersedia?",
    answer:
      "Kami menyediakan layanan Pendamping Lansia, Perawatan Lansia, Perawatan Orang Sakit, Perawatan pasca stroke dan Perawatan pasca ICU sesuai kebutuhan keluarga.",
  },
  {
    question: "Apakah bisa berkonsultasi terlebih dahulu?",
    answer:
      "Tentu. Tim kami siap memberikan konsultasi dan rekomendasi layanan sebelum Anda melakukan pemesanan.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#F8FBFF]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#1D8FE1]">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Pertanyaan yang Sering Diajukan
          </h2>

          <p className="mt-5 text-slate-600 leading-8 max-w-2xl mx-auto">
            Temukan jawaban dari pertanyaan yang paling sering diajukan mengenai
            layanan home care kami.
          </p>
        </div>

        {/* FAQ */}

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                layout
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? "border-[#1D8FE1] bg-blue-50 shadow-md"
                    : "border-slate-200 bg-white hover:border-[#1D8FE1]"
                }`}
              >
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="cursor-pointer flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <span
                    className={`text-lg font-semibold ${
                      isOpen ? "text-[#1D8FE1]" : "text-slate-800"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`transition duration-300 ${
                      isOpen ? "rotate-180 text-[#1D8FE1]" : "text-slate-500"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="px-7 pb-7 text-slate-600 leading-8">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
