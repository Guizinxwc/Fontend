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
  }, [navigate]);

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
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <Button onClick={() => navigate("/dashboard")} variant="outline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        <h1 className="text-3xl font-bold">Gerenciar Contatos</h1>
        <Badge variant="secondary">
          {contatos.filter((c) => !c.lido).length} não lidos
        </Badge>
      </div>

      <div className="space-y-6">
        {contatos.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-500">Nenhum contato recebido ainda.</p>
            </CardContent>
          </Card>
        ) : (
          contatos.map((contato) => (
            <Card key={contato.id} className={!contato.lido ? "border-blue-200 bg-blue-50" : ""}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    {contato.name}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                      {formatarData(contato.dataEnvio)}
                    </span>
                    {!contato.lido && (
                      <Badge variant="default">
                        Novo
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span>{contato.email}</span>
                </div>
                {contato.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span>{contato.phone}</span>
                  </div>
                )}
                <div>
                  <h4 className="font-semibold mb-2">Assunto:</h4>
                  <p>{contato.subject}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Mensagem:</h4>
                  <p className="text-gray-700">{contato.message}</p>
                </div>
                <div className="flex justify-end">
                  <Button
                    onClick={() => marcarComoLido(contato.id)}
                    variant="outline"
                    size="sm"
                  >
                    {contato.lido ? (
                      <>
                        <EyeOff className="w-4 h-4 mr-2" />
                        Marcar não lido
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4 mr-2" />
                        Marcar como lido
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default GerenciarContatos;