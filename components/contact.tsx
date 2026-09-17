"use client";

import { useState } from "react";
import { LockIcon, PhoneIcon, WhatsAppIcon } from "./icons";

const UNIT_OPTIONS = [
  "The Grand Pavilion Estate",
  "Pineview Hillside Sanctuary",
  "Luminary Sky Suite",
  "Banyan Courtyard",
  "Azure Horizon Villa",
  "The Sovereign Heritage Manor",
];

const TIME_OPTIONS = [
  "Pagi Hari (09.00 - 11.30 WIB)",
  "Siang Hari (13.00 - 15.00 WIB)",
  "Sore Hari (16.00 - 18.00 WIB)",
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const inputCls =
    "w-full rounded-md border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-body/70 focus:border-bronze focus:outline-none";

  return (
    <section id="kontak" className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="rounded-3xl bg-cream-deep p-6 shadow-sm sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* left */}
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-ink">
                <LockIcon className="h-3.5 w-3.5 text-bronze" />
                KERAHASIAAN PRIVASI TERJAMIN
              </p>
              <h2 className="mt-6 font-serif text-3xl leading-snug text-ink text-balance sm:text-4xl">
                Mulai Percakapan Pribadi Bersama Konsultan Senior Kami
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-body">
                Kami sangat menghargai waktu berharga Anda. Sampaikan
                preferensi jadwal dan unit yang diminati. Tim representatif
                kami siap membawakan dossir fisik lengkap ke kediaman Anda
                atau menemui Anda di Private Pavilion.
              </p>

              <div className="mt-10 max-w-md rounded-2xl border border-line bg-white p-6">
                <p className="text-[10px] font-semibold tracking-[0.22em] text-body">
                  AKSES JALUR KHUSUS DIREKSI:
                </p>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-bronze/15 text-bronze-deep">
                      <PhoneIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[10px] tracking-[0.14em] text-body">
                        HOTLINE EKSEKUTIF JAKARTA
                      </p>
                      <p className="text-sm font-semibold text-ink">
                        +62 (021) 5088-9800
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-bronze/15 text-bronze-deep">
                      <WhatsAppIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[10px] tracking-[0.14em] text-body">
                        WHATSAPP PRIVATE CONCIERGE
                      </p>
                      <p className="text-sm font-semibold text-ink">
                        +62 811-800-9800 (Prioritas)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right: form */}
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              {sent ? (
                <div className="flex h-full min-h-96 flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-bronze/15 text-bronze-deep">
                    <LockIcon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl text-ink">
                    Permintaan Diterima
                  </h3>
                  <p className="mt-3 max-w-xs text-sm text-body">
                    Terima kasih. Konsultan senior kami akan menghubungi Anda
                    dalam 1×24 jam untuk mengatur jadwal kunjungan privat.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-8 text-[11px] tracking-[0.18em] text-bronze underline-offset-4 hover:underline"
                  >
                    KIRIM PERMINTAAN LAIN
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="nama" className="text-[10px] font-semibold tracking-[0.18em] text-body">
                        NAMA LENGKAP &amp; GELAR
                      </label>
                      <input
                        id="nama"
                        name="nama"
                        required
                        placeholder="Contoh: Bapak B. Hartono"
                        className={`mt-2 ${inputCls}`}
                      />
                    </div>
                    <div>
                      <label htmlFor="telepon" className="text-[10px] font-semibold tracking-[0.18em] text-body">
                        NOMOR TELEPON / WHATSAPP
                      </label>
                      <input
                        id="telepon"
                        name="telepon"
                        type="tel"
                        required
                        placeholder="+62 812 xxxx xxxx"
                        className={`mt-2 ${inputCls}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-[10px] font-semibold tracking-[0.18em] text-body">
                      ALAMAT EMAIL RESMI
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="nama@perusahaan.com atau alamat personal"
                      className={`mt-2 ${inputCls}`}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="unit" className="text-[10px] font-semibold tracking-[0.18em] text-body">
                        UNIT YANG DIMINATI
                      </label>
                      <select id="unit" name="unit" className={`mt-2 ${inputCls}`} defaultValue={UNIT_OPTIONS[0]}>
                        {UNIT_OPTIONS.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="waktu" className="text-[10px] font-semibold tracking-[0.18em] text-body">
                        WAKTU KUNJUNGAN TERBAIK (WIB)
                      </label>
                      <select id="waktu" name="waktu" className={`mt-2 ${inputCls}`} defaultValue={TIME_OPTIONS[0]}>
                        {TIME_OPTIONS.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="catatan" className="text-[10px] font-semibold tracking-[0.18em] text-body">
                      CATATAN PREFERENSI / KEBUTUHAN AKSESIBILITAS KHUSUS
                    </label>
                    <textarea
                      id="catatan"
                      name="catatan"
                      rows={4}
                      placeholder="Contoh: Kami memerlukan penjemputan dengan kendaraan berlantai rendah atau pendampingan ramah kursi roda…"
                      className={`mt-2 resize-none ${inputCls}`}
                    />
                  </div>

                  <label className="flex items-start gap-3 text-xs leading-5 text-body">
                    <input
                      type="checkbox"
                      required
                      className="mt-0.5 h-4 w-4 accent-[#8c6f42]"
                    />
                    Saya menyetujui penanganan informasi kontak di bawah
                    kebijakan kerahasiaan Klien Sanctum Estates.
                  </label>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-ink px-8 py-4 text-[12px] font-semibold tracking-[0.18em] text-cream transition hover:bg-ink-soft"
                  >
                    KIRIM PERMINTAAN RESERVASI PRIVAT →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
