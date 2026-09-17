import Image from "next/image";
import { GemIcon, SoundWaveIcon, TreeIcon } from "./icons";

export default function Architecture() {
  return (
    <section id="arsitektur" className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.3em] text-bronze">
            SINERGI SENI &amp; KETAHANAN
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            Komposisi Arsitektur Terpadu
          </h2>
        </div>

        {/* earthquake banner */}
        <div className="mx-auto mt-10 max-w-3xl rounded-xl bg-ink px-6 py-4 text-cream sm:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em]">
                STRUKTUR TAHAN GEMPA SNI
              </p>
              <p className="mt-1 text-xs text-cream/70">
                Pondasi bored-pile dalam dengan peredam seismik dan garansi
                struktural mengikat 25 tahun.
              </p>
            </div>
            <a
              href="#material"
              className="shrink-0 text-[11px] tracking-[0.18em] text-bronze transition hover:text-bronze-deep"
            >
              Audite kelayakan →
            </a>
          </div>
        </div>

        {/* three cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-3 md:items-stretch">
          <article className="rounded-xl bg-ink-soft p-7 text-cream">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-bronze/20 text-bronze">
              <TreeIcon className="h-4.5 w-4.5" />
            </span>
            <h3 className="mt-14 font-serif text-lg leading-snug">
              Pencegahan Bioklimatik 270°
            </h3>
            <p className="mt-3 text-xs leading-5 text-cream/65">
              Menghadang radiasi matahari dan arus udara panas tropis;
              sirkulasi silang menenangkan ruangan menjelang waktu
              istirahat malam hari.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-xl">
            <Image
              src="/images/properties/azure-horizon-coastal-villa.png"
              alt="Kolam vila saat matahari terbenam"
              fill
              sizes="(min-width: 768px) 32vw, 92vw"
              className="object-cover"
            />
          </article>

          <article className="rounded-xl bg-ink-soft p-7 text-cream">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-bronze/20 text-bronze">
              <GemIcon className="h-4.5 w-4.5" />
            </span>
            <h3 className="mt-14 font-serif text-lg leading-snug">
              Privasi Akustik ±42 dB
            </h3>
            <p className="mt-3 text-xs leading-5 text-cream/65">
              Lapisan insulasi selulosa alami dan segel magnetik pintu
              menjaga keheningan ruang tidur layaknya kepompong hening.
            </p>
          </article>
        </div>

        {/* accessibility strip */}
        <div className="mx-auto mt-5 max-w-3xl rounded-xl bg-ink px-6 py-4 text-cream sm:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-bronze/20 text-bronze">
                <SoundWaveIcon className="h-3.5 w-3.5" />
              </span>
              <p className="text-xs leading-5 text-cream/85">
                <span className="font-semibold text-cream">
                  Akses Kursi Roda &amp; Lift Privat Hidrolik:
                </span>{" "}
                Dirancang untuk kebebasan bergerak mandiri seumur hidup.
              </p>
            </div>
            <a
              href="#kenyamanan"
              className="shrink-0 text-[11px] tracking-[0.18em] text-bronze transition hover:text-bronze-deep"
            >
              SPESIFIKASI →
            </a>
          </div>
        </div>

        {/* trust stats */}
        <section className="mt-16">
          <div className="grid grid-cols-2 gap-y-10">
            {[
              ["80+", "TERJUAL", "Portofolio kurasi Rp 1,2T+"],
              ["95%", "CUSTOMER PUAS", "Kepemilikan multigenerasi"],
              ["50+", "TESTIMONI POSITIF", "Private Concierge 24/7"],
              ["99%", "LEGALITAS AMAN", "SHM Mutasi On-Hand Notaris"],
            ].map(([v, l, s], i) => (
              <div
                key={l}
                className={`px-4 text-center ${i > 0 ? "lg:border-l lg:border-line" : ""}`}
              >
                <p className="font-serif text-4xl text-ink lg:text-5xl">
                  {v.slice(0, -1)}
                  <span className="text-bronze">{v.slice(-1)}</span>
                </p>
                <p className="mt-2 text-[11px] font-semibold tracking-[0.2em] text-ink">
                  {l}
                </p>
                <p className="mt-1 text-[11px] text-body">{s}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
