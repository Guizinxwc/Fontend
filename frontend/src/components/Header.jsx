import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label, href,
    { label, href,
    { label, href,
    { label, href,
    { label, href,
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior);
    }
    setIsMenuOpen(false);
  };

  return (

          {/* Logo */}

              juntos pelo autismo
              Juntos pela inclusão

          {/* Desktop Navigation */}
           (
               scrollToSection(item.href)}
                className="text-foreground hover))}

          {/* Auth Buttons */}
           window.location.href = '/login'}>
              Entrar
            
             window.location.href = '/cadastro'}>
              Cadastrar

          {/* Mobile Menu Button */}
           setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ?  : }

        {/* Mobile Navigation */}
        {isMenuOpen && (
          
              {navigationItems.map((item) => (
                 scrollToSection(item.href)}
                  className="text-left text-foreground hover))}
              
                 window.location.href = '/login'}>
                  Entrar
                
                 window.location.href = '/cadastro'}>
                  Cadastrar

        )}

  );
};

export default Header;