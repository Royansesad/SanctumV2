import Image from "next/image";
import { ArrowRightIcon } from "./icons";

const PROPERTIES = [
  {
    location: "BUKIT NUSA DUA, BALI",
    name: "The Grand Pavilion",
    price: "Rp 18,5 M",
    desc: "Teras terbuka bertingkat datar, 5 kamar ensuite, kolam renang privat.",
    area: "LB 460 m² • LT 850 m²",
    badge: "Siap Habis",
    image: "/images/properties/the-grand-pavilion-estate.png",
  },
  {
    location: "DAGO, BANDUNG",
    name: "Pineview Hillside",
    price: "Rp 14,2 M",
    desc: "Elevasi sejuk 900 mdpl, sirkulasi angin alami, cahaya matahari terkurasi.",
    area: "LB 540 m² • LT 720 m²",
    badge: "Tersedia Terbatas",
    image: "/images/properties/pineview-hillside-sanctuary.png",
  },
  {
    location: "SCBD, JAKARTA SELATAN",
    name: "Luminary Sky Suite",
    price: "Rp 22,0 M",
    desc: "Panorama metropolitan 360°, lift privat langsung ke lobi, smart automation.",
    area: "Semi-Gross 410 m²",
    badge: "Private Penthouse",
    image: "/images/properties/skypark-penthouse.png",
  },
  {
    location: "UBUD SANCTUARY, BALI",
    name: "Banyan Courtyard",
    price: "Rp 16,8 M",
    desc: "Taman internal dengan pohon beringin tua, lantai marmer alami sejuk.",
    area: "LB 610 m² • LT 520 m²",
    badge: "Pemandangan Lembah",
    image: "/images/properties/glass-pavilion-residence.png",
  },
  {
    location: "SANUR COASTAL, BALI",
    name: "Azure Horizon Villa",
    price: "Rp 19,5 M",
    desc: "Akses datar menuju tepi pantai tenang, ramah kursi roda standar internasional.",
    area: "LB 700 m² • LT 880 m²",
    badge: "Akses Pantai",
    image: "/images/properties/azure-horizon-coastal-villa.png",
  },
  {
    location: "MENTENG, JAKARTA PUSAT",
    name: "The Sovereign Manor",
    price: "Rp 35,0 M",
    desc: "Lokasi historis prestisius, karakter manor klasik, sistem keamanan privat berlapis.",
    area: "LB 820 m² • LT 1.150 m²",
    badge: "Limited Heritage",
    image: "/images/properties/the-sovereign-heritage-manor.png",
  },
];

export default function Properties() {
  return (
    <section className="border-y border-line bg-cream-deep">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.3em] text-bronze">
              PORTOFOLIO MAHAKARYA TERBATAS
            </p>
            <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
              Koleksi Hunian Ikonik
            </h2>
          </div>
          <p className="max-w-xs text-xs leading-5 text-body">
            Setiap unit didesain individual menghormati kontur tanah tropis,
            kelancaran mobilitas lansia, dan privasi absolut.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTIES.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1.5 text-[9px] tracking-[0.18em] text-cream">
                  {p.location}
                </span>
                <span className="absolute bottom-3 right-3 rounded-full bg-cream/95 px-3 py-1.5 text-[10px] text-ink shadow">
                  {p.badge}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-xl text-ink">{p.name}</h3>
                  <p className="font-serif text-sm text-bronze">{p.price}</p>
                </div>
                <p className="mt-2 min-h-10 text-xs leading-5 text-body">
                  {p.desc}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                  <p className="text-[11px] tracking-wide text-body">{p.area}</p>
                  <a
                    href="#kontak"
                    className="flex items-center gap-1 text-[11px] font-semibold tracking-[0.18em] text-ink transition group-hover:text-bronze"
                  >
                    DETAIL
                    <ArrowRightIcon className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
