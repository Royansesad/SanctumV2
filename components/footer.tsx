import { InstagramIcon, LinkedinIcon, WhatsAppIcon } from "./icons";

const COLUMNS = [
  {
    title: "KOLEKSI PILIHAN",
    links: [
      "The Grand Pavilion",
      "Pineview Sanctuary",
      "Luminary Sky Penthouse",
      "Banyan Courtyard",
      "The Sovereign Manor",
    ],
  },
  {
    title: "PRINSIP DESAIN",
    links: [
      "Universal & Zero-Step",
      "Akustik Ruang 42 dB",
      "Pencegahan Bioklimatik",
      "Kayu Ulin Lestari",
      "Garansi SNI 25 Tahun",
    ],
  },
  {
    title: "LAYANAN KLIEN",
    links: [
      "Private Escort Tour",
      "Verifikasi SHM Notaris",
      "Concierge Residensial",
      "Kebijakan Kerahasiaan",
      "Aksesibilitas Universal",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <a href="#beranda" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream font-serif text-sm text-ink">
                M
              </span>
              <span className="leading-tight">
                <span className="block font-serif text-sm font-semibold tracking-[0.25em]">
                  SANCTUM
                </span>
                <span className="block text-[9px] tracking-[0.3em] text-bronze">
                  ESTATES &amp; ARCHITECTURE
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-xs text-xs leading-6 text-cream/60">
              Penyedia hunian berkarakter abadi. Presisi arsitektur modern
              yang bertemu ketahanan struktur dan kenyamanan hidup
              lintas generasi.
            </p>
            <div className="mt-8 space-y-1.5 text-xs leading-5 text-cream/75">
              <p className="font-semibold">
                SCBD Headquarters: Pacific Century Place Lt. 20, SCBD Lot 10,
                Jakarta Selatan
              </p>
              <p className="font-semibold">
                Private Pavilion Bali: Jl. Raya Nusa Dua Selatan No. 88,
                Benoa, Badung
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4 text-cream/60">
              <a href="#" aria-label="Instagram" className="transition hover:text-bronze">
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="transition hover:text-bronze">
                <LinkedinIcon className="h-4.5 w-4.5" />
              </a>
              <a href="#" aria-label="WhatsApp" className="transition hover:text-bronze">
                <WhatsAppIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {COLUMNS.map((c) => (
            <div key={c.title}>
              <h3 className="text-[11px] font-semibold tracking-[0.22em] text-cream">
                {c.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#beranda"
                      className="text-xs text-cream/60 transition hover:text-bronze"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-[11px] text-cream/40 sm:flex-row">
          <p>© 2026. Hak Cipta Dilindungi Undang-Undang.</p>
          <p>*Kunjungan privat hanya dengan perjanjian. Kuota unit terbatas.</p>
        </div>
      </div>
    </footer>
  );
}
