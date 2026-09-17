import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-[100svh] flex-col bg-cream"
    >
      {/* headline */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-20 lg:px-10 lg:pt-24">
        <h1 className="max-w-[15ch] font-serif text-[clamp(2rem,4vw,3.6rem)] leading-[1.14] text-ink">
          Mahakarya Hunian untuk{" "}
          <em className="text-bronze">Kenyamanan Abadi</em> &amp; Warisan
          Keluarga.
        </h1>
      </div>

      {/* hero image: enlarged, anchored to the bottom of the screen so the
          rooftop rises up beside the headline while the ground stays put */}
      <div className="relative z-0 flex-1">
        <div className="absolute bottom-0 right-0 w-[96%] max-w-[calc((100svh-240px)*2.2)] sm:w-[88%] lg:w-[86%]">
          <Image
            src="/images/hero-house.png"
            alt="Mahakarya Residence — rumah modern dua lantai saat senja"
            width={1620}
            height={1080}
            priority
            sizes="(min-width: 1024px) 86vw, 96vw"
            className="h-auto w-full"
          />

          {/* frosted badge: 4 Baths */}
          <span className="absolute left-[54%] top-[24%] rounded-2xl border border-white/40 bg-white/30 px-4 py-3 font-serif text-[clamp(0.9rem,1.3vw,1.25rem)] text-ink shadow-md backdrop-blur-md sm:px-5 sm:py-4">
            4 Baths
          </span>

          {/* frosted badge: 4 Beds */}
          <span className="absolute bottom-[16%] left-[46%] rounded-2xl border border-white/40 bg-white/30 px-4 py-3 font-serif text-[clamp(0.9rem,1.3vw,1.25rem)] text-ink shadow-md backdrop-blur-md sm:left-[40%] sm:px-5 sm:py-4 lg:left-[34%]">
            4 Beds
          </span>

          {/* left glass card overlapping image edge */}
          <div className="absolute -left-6 top-[58%] hidden max-w-[250px] rounded-2xl border border-white/50 bg-white/45 p-5 shadow-lg backdrop-blur-md sm:block lg:-left-2 lg:max-w-[280px]">
            <p className="font-serif text-3xl leading-none text-ink/90">01</p>
            <p className="my-1.5 text-sm text-ink/60">—</p>
            <p className="font-serif text-3xl leading-none text-ink/90">03</p>
            <p className="mt-5 text-[11px] font-bold tracking-[0.12em] text-ink">
              MAHAKARYA RESIDENCE
            </p>
            <p className="mt-1.5 text-[11px] leading-4 text-body">
              A contemporary expression of timeless living.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="rounded-full bg-ink px-3 py-1.5 text-[8px] font-semibold tracking-[0.12em] text-cream">
                YOGYAKARTA, ID
              </span>
              <span className="rounded-full border border-ink/25 bg-white/70 px-3 py-1.5 text-[8px] font-semibold tracking-[0.12em] text-ink">
                EXPLORE
              </span>
            </div>
          </div>

          {/* right solid white card */}
          <div className="absolute -right-2 bottom-[20%] hidden max-w-[250px] rounded-2xl bg-white p-5 text-[11px] leading-4 text-body shadow-xl sm:block lg:right-0 lg:max-w-[270px]">
            Mahakarya Residence: A contemporary residence designed for
            timeless family living.
          </div>
        </div>
      </div>

      {/* stats bar */}
      <div className="relative border-y border-line bg-cream">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 lg:grid-cols-4">
          {[
            ["550", "m²", "LAND AREA"],
            ["420", "m²", "BUILDING AREA"],
            ["4", "", "BEDROOMS"],
            ["4", "", "BATHROOMS"],
          ].map(([v, unit, label], i) => (
            <div
              key={label}
              className={`px-4 py-7 text-center lg:py-8 ${
                i > 0 ? "border-l border-line" : ""
              } ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${
                i === 2 ? "border-l-0 lg:border-l" : ""
              }`}
            >
              <p className="font-serif text-[clamp(1.6rem,2.8vw,2.6rem)] text-ink">
                {v} <span className="text-[0.6em] text-bronze">{unit}</span>
              </p>
              <p className="mt-1.5 text-[10px] tracking-[0.22em] text-body">
                {label}
              </p>
            </div>
          ))}
        </div>
        {/* price tag just above bar, right */}
        <div className="absolute right-8 top-0 hidden -translate-y-2/3 flex-col items-end gap-1.5 lg:flex">
          <span className="text-xs font-medium text-ink">Rp 9,5 M</span>
          <span className="rounded-full bg-ink px-2.5 py-1 text-[8px] tracking-[0.12em] text-cream">
            Harga Total
          </span>
        </div>
      </div>
    </section>
  );
}
