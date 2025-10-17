import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import ProgramsSection from "./components/ProgramSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ApplicationForm from "./components/ApplicationForm";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ApplicationForm />
      <FAQSection />
    </div>
  );
}
