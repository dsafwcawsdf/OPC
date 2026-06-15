import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import CoreModules from "@/components/CoreModules";
import DataShowcase from "@/components/DataShowcase";
import Workflow from "@/components/Workflow";
import Cases from "@/components/Cases";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <CoreModules />
        <DataShowcase />
        <Workflow />
        <Cases />
      </main>
      <Footer />
    </>
  );
}
