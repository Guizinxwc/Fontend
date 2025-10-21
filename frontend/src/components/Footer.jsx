import { Heart, Facebook, Instagram, Youtube, Mail } from "lucide-react";
import { showInfo } from "@/utils/notifications";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Recurso": [
      "saiba mais",
      
    ],
  };

  const socialLinks = [
    {
      icon,
      href,
      label,
      color,
    {
      icon,
      href,
      label,
      color,
    {
      icon,
      href,
      label,
      color,
    {
      icon,
      href,
      label,
      color="bg-foreground text-background py-16">
      
        {/* Main Footer Content */}

                Juntos pelo Autismo
                Juntos pela inclusão

              Dedicados a oferecer suporte especializado e recursos para pessoas 
              com autismo e suas famílias, construindo um futuro mais inclusivo.

            {/* Social Links */}
            
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                   showInfo(`Siga-nos no ${social.label}! Link em breve.`)}
                    className={`w-10 h-10 rounded-full bg-background/10 flex items-center justify-center transition-all duration-300 ${social.color} hover={social.label}
                  >

                );
              })}

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (

                {category}

                {links.map((link) => (

          ))}

        {/* Newsletter Subscription */}

              Receba Nossas Atualizações

              Inscreva-se para receber dicas, recursos e novidades sobre autismo.

               showInfo('Obrigado pelo interesse! Em breve implementaremos a newsletter.')}
              >
                Inscrever

        {/* Important Information */}
        
            🔒 Confidencialidade
            
              Todasções são tratadas com total sigilo e confidencialidade.

            🏥 Profissionais
            
              Equipe multidisciplinar especializada em Transtorno do Espectro Autista.

            📞 Emergência 24h
            
              Suporte disponível para situações que requerem atenção imediata.

        {/* Bottom Footer */}
        
            &copy; {currentYear} Apoio Autismo. Todos os direitos reservados.

             showInfo('Política de Privacidade em desenvolvimento')} className="opacity-80 hover={() => showInfo('Termos de Uso em desenvolvimento')} className="opacity-80 hover={() => showInfo('Página de Acessibilidade em desenvolvimento')} className="opacity-80 hover="mt-8 text-center">

              Abril Azul - Mês de Conscientização do Autismo

  );
};

export default Footer;