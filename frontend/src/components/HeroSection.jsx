import { Button } from "@/components/ui/button";
import { ArrowDown, Heart, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-autism-support.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Floating Elements */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Juntos
            <span className="block text-blue-400">
              Pelo
            </span>
            <span className="block text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Autismo
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Oferecemos suporte especializado, recursos educativos e uma comunidade acolhedora 
            para pessoas com autismo e suas famílias.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Heart className="w-5 h-5 text-red-400" />
              <span>Apoio Especializado</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span>Comunidade Unida</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>Ambiente Seguro</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToContact} className="bg-blue-600 hover:bg-blue-700">
              Buscar Apoio Agora
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToAbout} className="border-white text-white hover:bg-white hover:text-black">
              Saiba Mais
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;