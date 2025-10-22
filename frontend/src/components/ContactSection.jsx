import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { showSuccess, showError } from "@/utils/notifications";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const contatos = JSON.parse(localStorage.getItem('contatos') || '[]');
    const novoContato = {
      id: Date.now(),
      ...formData,
      dataEnvio: new Date().toISOString(),
      lido: false
    };
    contatos.push(novoContato);
    localStorage.setItem('contatos', JSON.stringify(contatos));
    
    showSuccess("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 4000-0000",
      description: "Seg à Sex, 8h às 18h",
      color: "text-blue-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(11) 99999-9999",
      description: "Atendimento rápido",
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@apoioautismo.com",
      description: "Resposta em 24h",
      color: "text-purple-600"
    }
  ];

  const services = [
    "Grupo de apoio familiar",
    "Orientação escolar",
    "Emergência 24h",
    "Outro assunto"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar você e sua família. Entre em contato conosco para 
            obter orientação especializada e suporte personalizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                Envie sua Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Assunto *</Label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
                <p className="text-sm text-gray-500">
                  * Campos obrigatórios. Suas informações são tratadas com total confidencialidade.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <IconComponent className={`w-6 h-6 ${info.color}`} />
                        <div>
                          <h3 className="font-semibold mb-1">
                            {info.title}
                          </h3>
                          <p className="text-lg font-medium">
                            {info.content}
                          </p>
                          <p className="text-sm text-gray-500">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-red-800 mb-2">
                  Atendimento de Emergência
                </h3>
                <p className="text-red-700 mb-4">
                  Para situações urgentes que necessitam apoio imediato, nossa equipe 
                  está disponível 24 horas por dia, 7 dias por semana.
                </p>
                <Button 
                  variant="outline" 
                  className="border-red-300 text-red-700 hover:bg-red-100"
                  onClick={() => window.open('tel:+5511999999999', '_self')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (11) 99999-9999 - Emergência
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;