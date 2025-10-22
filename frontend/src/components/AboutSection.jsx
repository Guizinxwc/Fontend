import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Lightbulb, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Compreensão",
      description: "Entendimento profundo sobre o espectro autista",
      color: "text-blue-600"
    },
    {
      icon: Heart,
      title: "Apoio Emocional",
      description: "Suporte especializado para famílias",
      color: "text-red-600"
    },
    {
      icon: Lightbulb,
      title: "Recursos",
      description: "Ferramentas e materiais educativos",
      color: "text-yellow-600"
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Rede de apoio e conexão",
      color: "text-green-600"
    }
  ];

  const facts = [
    {
      number: "1 em 36",
      description: "Crianças são diagnosticadas com autismo"
    },
    {
      number: "70 milhões",
      description: "Pessoas com autismo no mundo"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre o Autismo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O Transtorno do Espectro Autista (TEA) é uma condição neurológica que afeta o desenvolvimento, 
            mas com o apoio adequado, pessoas com autismo podem viver vidas plenas e significativas.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <IconComponent className={`w-12 h-12 mx-auto mb-4 ${feature.color}`} />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Information Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Características do TEA</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Comunicação</h4>
                  <p className="text-gray-600">Dificuldades na comunicação verbal e não verbal</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Interação Social</h4>
                  <p className="text-gray-600">Desafios nas interações sociais e relacionamentos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Comportamentos</h4>
                  <p className="text-gray-600">Padrões repetitivos de comportamento e interesses</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Sensibilidade</h4>
                  <p className="text-gray-600">Sensibilidades sensoriais específicas</p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-blue-100 rounded-lg">
              <p className="text-blue-800 font-medium italic">
                "Cada pessoa com autismo é única, com suas próprias forças, desafios e potenciais."
              </p>
            </div>
          </div>

          {/* Right Stats */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Dados Importantes</h3>
            {facts.map((fact, index) => (
              <Card key={index} className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {fact.number}
                  </div>
                  <p className="text-gray-600">
                    {fact.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;