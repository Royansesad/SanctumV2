import Image from "next/image";
import {
  AirflowIcon,
  BulbIcon,
  GemIcon,
  InfoCircleIcon,
  ShieldIcon,
  SoundWaveIcon,
  TreeIcon,
  WheelchairIcon,
} from "./icons";

const MATERIALS = [
  {
    icon: GemIcon,
    title: "Batu Karang Purba & Andesit",
    body: "Pilihan marmer travertine & andesit non-slip dengan finishing honed — sejuk, tahan noda, dan nyaman untuk langkah kaki lansia.",
  },
  {
    icon: TreeIcon,
    title: "Kayu Ulin Bersertifikasi",
    body: "Kayu besi Kalimantan lestari: tahan cuaca ekstrem dan rayap, semakin indah dan berkarakter seiring bergantinya dekade.",
  },
  {
    icon: BulbIcon,
    title: "Pencahayaan Indirek & Hangat",
    body: "Sistem pencahayaan tersembunyi 2700K tanpa silau tajam, menjaga kenyamanan mata dan ritme kesegaran alami sepanjang hari.",
  },
  {
    icon: ShieldIcon,
    title: "Garansi Struktur 25 Tahun",
    body: "Inspeksi ketahanan gempa berjenjang standar SNI dan garansi struktural terverifikasi lembaga independen.",
  },
];

const COMFORTS = [
  {
    icon: WheelchairIcon,
    title: "Aksesibilitas Tanpa Undakan (Zero-Threshold)",
    body: "Lantai mengalir mulus tanpa anak tangga antara ruang tamu, taman, dan kamar mandi. Pintu geser ekstra-lebar (110 cm) memastikan mobilitas kursi roda atau tongkat santai tanpa rintangan.",
    note: "Standar Universal Design",
  },
  {
    icon: AirflowIcon,
    title: "Kualitas Akustik & Sirkulasi Udara Murni",
    body: "Peredam suara kaca ganda Soundproof Guard mengurangi kebisingan luar hingga 42 dB. Ventilasi silang terjaga mengalirkan udara segar alami, menunjang kesehatan pernapasan dan kualitas tidur lelap.",
    note: "Tingkat Kebisingan < 30 dBA",
  },
  {
    icon: ShieldIcon,
    title: "Keamanan Terintegrasi & Tanggap Medis Cepat",
    body: "Tombol panggilan darurat diskret (Emergency Panic Pendant) di setiap kamar tidur utama, terhubung langsung 24 jam dengan tim medis residensi dan ambulans rumah sakit rujukan utama.",
    note: "Respon Medis Terjaga < 7 Menit",
  },
];

export default function Comfort() {
  return (
    <>
      {/* material section */}
      <section id="material" className="bg-cream-deep">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
          <p className="text-[11px] font-semibold tracking-[0.3em] text-bronze">
            FILOSOFI MATERIALITAS
          </p>
          <h2 className="mt-3 max-w-md font-serif text-3xl leading-snug text-ink sm:text-4xl">
            Batu Karang Purba &amp; Kayu Ulin Lestari: Dibangun Bertahan
            Generasi
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="grid gap-5 sm:grid-cols-2">
              {MATERIALS.map((m) => (
                <article
                  key={m.title}
                  className="rounded-xl border border-line bg-white p-6"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-bronze/15 text-bronze">
                    <m.icon className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="mt-8 font-serif text-[15px] font-semibold text-ink">
                    {m.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-5 text-body">{m.body}</p>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-1 row-span-2 overflow-hidden rounded-xl">
                <Image
                  src="/images/properties/pineview-hillside-sanctuary.png"
                  alt="Rumah kayu di lereng bukit"
                  fill
                  sizes="(min-width: 1024px) 22vw, 44vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/images/properties/the-sovereign-heritage-manor.png"
                  alt="Detail eksterior batu dan kaca"
                  fill
                  sizes="(min-width: 1024px) 22vw, 44vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/images/properties/the-grand-pavilion-estate.png"
                  alt="Taman batu dan kolam reflektif"
                  fill
                  sizes="(min-width: 1024px) 22vw, 44vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* comfort section */}
      <section id="kenyamanan" className="relative overflow-hidden bg-ink">
        <Image
          src="/images/hero-house.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom opacity-60"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink/85" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold tracking-[0.3em] text-bronze">
              ERGONOMI &amp; AKSES SEUMUR HIDUP
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-snug text-cream text-balance sm:text-4xl">
              Dirancang Khusus untuk Ketenangan &amp; Kemudahan Generasi Matang
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-start">
            {COMFORTS.map((f, i) => (
              <article
                key={f.title}
                className={`rounded-2xl bg-cream p-7 shadow-2xl md:p-8 ${
                  i === 1 ? "md:-mt-8" : "md:mt-6"
                }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-bronze/15 text-bronze-deep">
                  <f.icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-6 font-serif text-xl leading-snug text-ink">
                  {f.title}
                </h3>
                <p className="mt-4 text-[13px] leading-6 text-body">{f.body}</p>
                <p className="mt-7 flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] text-bronze-deep">
                  {f.note}
                  <InfoCircleIcon className="h-3.5 w-3.5" />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
