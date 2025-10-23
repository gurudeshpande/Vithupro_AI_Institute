import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import AboutSection from "./about/page";
import ProgramsSection from "./components/ProgramSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ApplicationForm from "./applynow/page";
// import FAQSection from "./components/FAQSection";
import AboutUs from "./components/About";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <ProgramsSection />
      <ProjectsSection />
      <TestimonialsSection />
      {/* <ApplicationForm /> */}
      {/* <FAQSection /> */}
    </div>
  );
}
