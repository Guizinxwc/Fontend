import { Button } from "@/components/ui/button";
import { ArrowDown, Heart, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-autism-support.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior);
    }
  };

  return (
    
      {/* Background Image */}

      {/* Floating Elements */}

          {/* Main Heading */}
          Pelo
            
            Autismo

          {/* Subtitle */}

          {/* Key Features */}

              Apoio Especializado

              Comunidade Unida

              Ambiente Seguro

          {/* CTA Buttons */}
          
              Buscar Apoio Agora

  );
};

export default HeroSection;