import { Heart, Facebook, Instagram, Youtube, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { showInfo } from "@/utils/notifications";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Recursos": [
      "Saiba mais",
      "Guias",
      "Materiais"
    ],
    "Suporte": [
      "Contato",
      "FAQ",
      "Ajuda"
    ]
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:bg-blue-600"
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:bg-pink-600"
    },
    {
      icon: Youtube,
      href: "#",
      label: "YouTube",
      color: "hover:bg-red-600"
    },
    {
      icon: Mail,
      href: "mailto:contato@apoioautismo.com",
      label: "E-mail",
      color: "hover:bg-gray-600"
    }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-red-500" />
              <div>
                <h3 className="text-2xl font-bold">Juntos pelo Autismo</h3>
                <p className="text-sm opacity-80">Juntos pela inclusão</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Dedicados a oferecer suporte especializado e recursos para pessoas 
              com autismo e suas famílias, construindo um futuro mais inclusivo.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <button
                    key={social.label}
                    onClick={() => showInfo(`Siga-nos no ${social.label}! Link em breve.`)}
                    className={`w-10 h-10 rounded-full bg-background/10 flex items-center justify-center transition-all duration-300 ${social.color}`}
                    title={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <button className="text-background/80 hover:text-background transition-colors">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-semibold mb-2">Receba Nossas Atualizações</h4>
            <p className="text-background/80 mb-4 text-sm">
              Inscreva-se para receber dicas, recursos e novidades sobre autismo.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Seu e-mail" className="bg-background/10 border-background/20" />
              <Button 
                variant="secondary"
                onClick={() => showInfo('Obrigado pelo interesse! Em breve implementaremos a newsletter.')}
              >
                Inscrever
              </Button>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 text-sm">
          <div className="text-center">
            <div className="text-2xl mb-2">🔒</div>
            <h5 className="font-semibold mb-1">Confidencialidade</h5>
            <p className="text-background/80">
              Todas as informações são tratadas com total sigilo e confidencialidade.
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🏥</div>
            <h5 className="font-semibold mb-1">Profissionais</h5>
            <p className="text-background/80">
              Equipe multidisciplinar especializada em Transtorno do Espectro Autista.
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">📞</div>
            <h5 className="font-semibold mb-1">Emergência 24h</h5>
            <p className="text-background/80">
              Suporte disponível para situações que requerem atenção imediata.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8 text-center text-sm">
          <p className="mb-4">
            &copy; {currentYear} Apoio Autismo. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6 mb-4">
            <button onClick={() => showInfo('Política de Privacidade em desenvolvimento')} className="opacity-80 hover:opacity-100">
              Política de Privacidade
            </button>
            <button onClick={() => showInfo('Termos de Uso em desenvolvimento')} className="opacity-80 hover:opacity-100">
              Termos de Uso
            </button>
            <button onClick={() => showInfo('Página de Acessibilidade em desenvolvimento')} className="opacity-80 hover:opacity-100">
              Acessibilidade
            </button>
          </div>
          <div className="text-blue-300 font-medium">
            <Heart className="w-4 h-4 inline mr-1" />
            Abril Azul - Mês de Conscientização do Autismo
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;