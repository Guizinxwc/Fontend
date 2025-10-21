import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Lightbulb, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon,
      title,
      description,
      color,
    {
      icon,
      title,
      description,
      color,
    {
      icon,
      title,
      description,
      color,
    {
      icon,
      title,
      description,
      color= [
    {
      number,
      description,
    
  ];

  return (

        {/* Section Header */}
        
          Autismo

            O Transtorno do Espectro Autista (TEA) é uma condição neurológica que afeta o desenvolvimento, 
            mas com o apoio adequado, pessoas com autismo podem viver vidas plenas e significativas.

        {/* Features Grid */}
         {
            const IconComponent = feature.icon;
            return (

                    {feature.title}

                    {feature.description}

            );
          })}

        {/* Information Section */}

                  Comunicação="flex items-start gap-3">

                  Interação Social="flex items-start gap-3">

                  Comportamentos="flex items-start gap-3">

                  Sensibilidade="mt-8 p-6 bg-autism-blue-light rounded-lg">
              
                "Cada pessoa com autismo é única, com suas próprias forças, desafios e potenciais."

          {/* Right Stats */}

              {facts.map((fact, index) => (

                    {fact.number}

                    {fact.description}

              ))}

  );
};

export default AboutSection;