import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Manufacturing from "@/components/Manufacturing";
import Products from "@/components/Products";
import Projects from "@/components/Projects";
import Recognitions from "@/components/Recognitions";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Manufacturing />
        <Products />
        <Projects />
        <Recognitions />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
