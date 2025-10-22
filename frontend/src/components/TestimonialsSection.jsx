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
        Nome: d.nome,
        Cargo: d.cargo || 'Família',
        Conteudo: d.depoimento,
        Avatar: d.nome.charAt(0).toUpperCase()
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
        Nome: 'Famílias Atendidas',
        Valor: usuarios.length,
        Descricao: 'Famílias cadastradas',
        Cor: 'text-blue-600'
      },
      {
        Nome: 'Recursos Ativos',
        Valor: recursos.filter((r) => r.ativo).length,
        Descricao: 'Materiais disponíveis',
        Cor: 'text-green-600'
      },
      {
        Nome: 'Depoimentos',
        Valor: depoimentos.filter((d) => d.aprovado).length,
        Descricao: 'Histórias compartilhadas',
        Cor: 'text-purple-600'
      },
      {
        Nome: 'Contatos Recebidos',
        Valor: contatos.length,
        Descricao: 'Mensagens de apoio',
        Cor: 'text-orange-600'
      }
    ];
    setStats(statsData);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Histórias de Sucesso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça algumas das famílias que encontraram esperança, orientação e crescimento 
            através de nossos serviços de apoio especializados.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                
                {/* Testimonial Content */}
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.Conteudo}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.Avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.Nome}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.Cargo}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className={`text-4xl font-bold ${stat.Cor}`}>
                {stat.Valor}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.Nome}
              </div>
              <div className="text-xs text-gray-500">
                {stat.Descricao}
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonial Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Compartilhe Sua História</h3>
              <p className="text-gray-600 mb-6">
                Sua experiência pode inspirar e ajudar outras famílias. 
                Compartilhe como nosso apoio fez a diferença em sua jornada.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Enviar Depoimento
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;