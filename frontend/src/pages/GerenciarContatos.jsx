import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Phone, MessageCircle, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { showSuccess } from "@/utils/notifications";

const GerenciarContatos = () => {
  const [contatos, setContatos] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("userAuth");
    if (!userData) {
      navigate("/login");
      return;
    }
    const parsedUser = JSON.parse(userData);
    if (parsedUser.Tipo !== 'Admin') {
      navigate("/dashboard");
      return;
    }
    setUser(parsedUser);
    fetchContatos();
  }, []);

  const fetchContatos = () => {
    const contatos = JSON.parse(localStorage.getItem('contatos') || '[]');
    setContatos(contatos.sort((a, b) => new Date(b.dataEnvio).getTime() - new Date(a.dataEnvio).getTime()));
  };

  const marcarComoLido = (id) => {
    const contatos = JSON.parse(localStorage.getItem('contatos') || '[]');
    const contatoIndex = contatos.findIndex((c) => c.id === id);
    
    if (contatoIndex !== -1) {
      contatos[contatoIndex].lido = !contatos[contatoIndex].lido;
      localStorage.setItem('contatos', JSON.stringify(contatos));
      fetchContatos();
      showSuccess(`Contato marcado como ${contatos[contatoIndex].lido ? 'lido' : 'não lido'}!`);
    }
  };

  const formatarData = (dataISO) => {
    return new Date(dataISO).toLocaleString('pt-BR');
  };

  if (!user) return null;

  return (

           navigate("/dashboard")} variant="outline">
            
            Voltar
          
          Gerenciar Contatos
          
            {contatos.filter((c) => !c.lido).length} não lidos

          {contatos.length === 0 ? (

                Nenhum contato recebido ainda.

          ) : (
            contatos.map((contato) => (

                          {contato.name}
                          
                            {formatarData(contato.dataEnvio)}

                        {!contato.lido && (
                          
                            Novo
                          
                        )}

                          {contato.email}
                        
                        {contato.phone && (

                            {contato.phone}
                          
                        )}

                          {contato.subject}

                          {contato.message}

                     marcarComoLido(contato.id)}
                      className="ml-4"
                    >
                      {contato.lido ? (

                          Marcar não lido
                        
                      ) : (

                          Marcar como lido
                        
                      )}

            ))
          )}

  );
};

export default GerenciarContatos;