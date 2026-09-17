import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Philosophy from "@/components/philosophy";
import Properties from "@/components/properties";
import Comfort from "@/components/comfort";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Properties />
        <Comfort />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
