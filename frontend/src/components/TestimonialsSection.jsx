import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetchTestimonials();
    fetchStats();
  }, []);

  const fetchTestimonials = () => {
    const depoimentos = JSON.parse(localStorage.getItem('depoimentos') || '[]');
    const depoimentosVisiveis = depoimentos
      .filter((d) => d.aprovado && d.visivel)
      .map((d) => ({
        Nome,
        Cargo,
        Conteudo,
        Avatar).toUpperCase()
      }));
    setTestimonials(depoimentosVisiveis);
  };

  const fetchStats = () => {
    const contatos = JSON.parse(localStorage.getItem('contatos') || '[]');
    const recursos = JSON.parse(localStorage.getItem('recursos') || '[]');
    const depoimentos = JSON.parse(localStorage.getItem('depoimentos') || '[]');
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    
    const statsData = [
      {
        Nome,
        Valor,
        Descricao,
        Cor,
      {
        Nome,
        Valor) => r.ativo).length,
        Descricao,
        Cor,
      {
        Nome,
        Valor) => d.aprovado).length,
        Descricao,
        Cor,
      {
        Nome,
        Valor,
        Descricao,
        Cor);
  };

  return (

        {/* Section Header */}
        
          Sucesso

            Conheça algumas das famílias que encontraram esperança, orientação e crescimento 
            através de nossos serviços de apoio especializados.

        {/* Testimonials Grid */}
         (
            
                {/* Quote Icon */}

                {/* Testimonial Content */}
                
                  "{testimonial.Conteudo}"

                {/* Author Info */}

                    {testimonial.Avatar}

                      {testimonial.Nome}

                      {testimonial.Cargo}

          ))}

        {/* Impact Stats */}
         (
            {stat.Valor}
              {stat.Descricao}
            
          ))}

        {/* Video Testimonial Section */}

  );
};

export default TestimonialsSection;