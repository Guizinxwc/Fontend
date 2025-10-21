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
    name,
    email,
    phone,
    subject,
    message);

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
      id),
      ...formData,
      dataEnvio).toISOString(),
      lido);
    localStorage.setItem('contatos', JSON.stringify(contatos));
    
    showSuccess("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      name,
      email,
      phone,
      subject,
      message);
  };

  const contactInfo = [
    {
      icon,
      title,
      content) 4000-0000",
      description, 8h às 18h",
      color,
    {
      icon,
      title,
      content) 99999-9999",
      description,
      color,
    {
      icon,
      title,
      content,
      description,
      color,
    
  ];

  const services = [
    "Grupo de apoio familiar",
    "Orientação escolar",
    "Emergência 24h",
    "Outro assunto"
  ];

  return (

        {/* Section Header */}
        
          Contato

            Estamos aqui para ajudar você e sua família. Entre em contato conosco para 
            obter orientação especializada e suporte personalizado.

                Envie sua Mensagem

                Nome Completo *

                    E-mail *

                Telefone

                    Assunto *
                    Selecione um assunto
                      {services.map((service) => (
                        
                          {service}
                        
                      ))}

                  Mensagem *

                  Enviar Mensagem

                  * Campos obrigatórios. Suas informações são tratadas com total confidencialidade.

          {/* Contact Information */}
          
            {/* Contact Cards */}
             {
                const IconComponent = info.icon;
                return (

                            {info.title}

                            {info.content}

                            {info.description}

                );
              })}

            {/* Emergency Contact */}

                  Atendimento de Emergência

                  Para situações urgentes que necessitam apoio imediato, nossa equipe 
                  está disponível 24 horas por dia, 7 dias por semana.
                
                 window.open('tel, '_self')}
                >
                  (11) 99999-9999 - Emergência

            {/* Testimonial Form */}

                Compartilhe sua História

                 {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const depoimentos = JSON.parse(localStorage.getItem('depoimentos') || '[]');
                  const novoDepoimento = {
                    id),
                    nome),
                    email),
                    depoimento),
                    dataEnvio).toISOString(),
                    aprovado,
                    visivel);
                  localStorage.setItem('depoimentos', JSON.stringify(depoimentos));
                  showSuccess('Depoimento enviado! Será analisado pela nossa equipe.');
                  (e.target).reset();
                }} className="space-y-3">

                    Enviar Depoimento

            {/* Office Hours */}

                Horários de Atendimento

                    Segunda a Sexta
                    8="flex justify-between">
                    Sábado
                    8="flex justify-between">
                    Domingo
                    Emergências

                    WhatsApp
                    24/7

            {/* Location Map Placeholder */}

                    Mapa da Localização
                    
                      Rua das Flores, 123 - São Paulo/SP

  );
};

export default ContactSection;