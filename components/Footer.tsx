import { Phone, Mail, MapPin } from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto grid gap-10 px-6 py-20 lg:grid-cols-4">
        {/* Logo */}

        <div>
          <h2 className="text-3xl font-bold text-white">
            Insan<span className="text-[#42A5F5]"> Medika</span>
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Adalah Agency Penyalur Perawat Home Care yang melayani perawatan
            pasien di rumah selama 24 jam. Kami menghadirkan layanan Perawat
            Home Care Live-In mulai dari Perawat Lansia, Perawat Orang Sakit,
            hingga pasien medis maupun pasien dengan kebutuhan khusus.
          </p>
        </div>

        {/* Services */}

        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Layanan</h3>

          <ul className="space-y-3">
            {[
              "Pendamping Lansia",
              "Perawatan Medis",
              "Baby Care",
              "Home Care",
            ].map((item) => (
              <li
                key={item}
                className="cursor-pointer transition duration-300 hover:text-[#42A5F5]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}

        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Kontak</h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-1 text-[#42A5F5]" />

              <span>(021) 2912 5702</span>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-1 text-[#42A5F5]" />

              <span>info@insanmedika.id</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 shrink-0 text-[#42A5F5]" />

              <span>
                Jl. Deplu Raya No. AR 34, Pondok Pinang, Kebayoran Lama, Jakarta
                Selatan, DKI Jakarta 12310
              </span>
            </div>
          </div>
        </div>

        {/* Social */}

        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Ikuti Kami</h3>

          <div className="flex gap-4">
            {/* Instagram */}

            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition-all duration-300 hover:scale-110 hover:bg-[#E4405F] hover:text-white"
            >
              <FaInstagram size={18} />
            </a>

            {/* Facebook */}

            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition-all duration-300 hover:scale-110 hover:bg-[#1877F2] hover:text-white"
            >
              <FaFacebookF size={18} />
            </a>

            {/* X */}

            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white"
            >
              <FaXTwitter size={18} />
            </a>

            {/* YouTube */}

            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition-all duration-300 hover:scale-110 hover:bg-[#FF0000] hover:text-white"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}

      <div className="border-t border-slate-700 py-6 text-center text-sm text-slate-400">
        © 2026 Insan Medika. All Rights Reserved.
      </div>
    </footer>
  );
}
