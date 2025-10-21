import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageSquare, Eye, EyeOff, Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { showSuccess } from "@/utils/notifications";

const GerenciarDepoimentos = () => {
  const [depoimentos, setDepoimentos] = useState([]);
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
    fetchDepoimentos();
  }, []);

  const fetchDepoimentos = () => {
    const depoimentos = JSON.parse(localStorage.getItem('depoimentos') || '[]');
    setDepoimentos(depoimentos.sort((a, b) => new Date(b.dataEnvio).getTime() - new Date(a.dataEnvio).getTime()));
  };

  const aprovarDepoimento = (id) => {
    const depoimentos = JSON.parse(localStorage.getItem('depoimentos') || '[]');
    const depoimentoIndex = depoimentos.findIndex((d) => d.id === id);
    
    if (depoimentoIndex !== -1) {
      depoimentos[depoimentoIndex].aprovado = true;
      depoimentos[depoimentoIndex].dataAprovacao = new Date().toISOString();
      localStorage.setItem('depoimentos', JSON.stringify(depoimentos));
      fetchDepoimentos();
      showSuccess("Depoimento aprovado!");
    }
  };

  const rejeitarDepoimento = (id) => {
    const depoimentos = JSON.parse(localStorage.getItem('depoimentos') || '[]');
    const novosDepoimentos = depoimentos.filter((d) => d.id !== id);
    localStorage.setItem('depoimentos', JSON.stringify(novosDepoimentos));
    fetchDepoimentos();
    showSuccess("Depoimento rejeitado!");
  };

  const toggleVisibilidade = (id) => {
    const depoimentos = JSON.parse(localStorage.getItem('depoimentos') || '[]');
    const depoimentoIndex = depoimentos.findIndex((d) => d.id === id);
    
    if (depoimentoIndex !== -1) {
      depoimentos[depoimentoIndex].visivel = !depoimentos[depoimentoIndex].visivel;
      localStorage.setItem('depoimentos', JSON.stringify(depoimentos));
      fetchDepoimentos();
      showSuccess(`Depoimento ${depoimentos[depoimentoIndex].visivel ? 'publicado' : 'ocultado'}!`);
    }
  };

  const formatarData = (dataISO) => {
    return new Date(dataISO).toLocaleString('pt-BR');
  };

  if (!user) return null;

  const pendentes = depoimentos.filter((d) => !d.aprovado);
  const aprovados = depoimentos.filter((d) => d.aprovado);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/dashboard")} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <h1 className="text-3xl font-bold text-gray-800">Gerenciar Depoimentos</h1>
          </div>
          <div className="flex gap-4">
            <Badge variant="destructive">
              {pendentes.length} pendentes
            </Badge>
            <Badge variant="default">
              {aprovados.length} aprovados
            </Badge>
          </div>
        </div>

        {pendentes.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Depoimentos Pendentes</h2>
            <div className="grid gap-4">
              {pendentes.map((depoimento) => (
                <Card key={depoimento.id} className="border-orange-200">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{depoimento.nome}</h3>
                        <p className="text-sm text-gray-600">
                          {formatarData(depoimento.dataEnvio)}
                        </p>
                        <Badge variant="secondary" className="mt-1">
                          Pendente
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">"{depoimento.depoimento}"</p>
                    {depoimento.email && (
                      <p className="text-sm text-gray-600 mb-4">
                        Email: {depoimento.email}
                      </p>
                    )}
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => aprovarDepoimento(depoimento.id)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Check className="w-4 h-4 mr-1" />
                        Aprovar
                      </Button>
                      <Button 
                        onClick={() => rejeitarDepoimento(depoimento.id)}
                        variant="destructive"
                      >
                        <X className="w-4 h-4 mr-1" />
                        Rejeitar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="text-2xl font-semibold mb-4">Depoimentos Aprovados</h2>
          <div className="grid gap-4">
            {aprovados.length === 0 ? (
              <Card>
                <CardContent className="p-6 text-center text-gray-500">
                  Nenhum depoimento aprovado ainda.
                </CardContent>
              </Card>
            ) : (
              aprovados.map((depoimento) => (
                <Card key={depoimento.id} className="border-green-200">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{depoimento.nome}</h3>
                        <p className="text-sm text-gray-600">
                          Enviado: {formatarData(depoimento.dataEnvio)}
                        </p>
                        <p className="text-sm text-gray-600">
                          Aprovado: {formatarData(depoimento.dataAprovacao)}
                        </p>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="default">
                            Aprovado
                          </Badge>
                          <Badge variant={depoimento.visivel ? "default" : "secondary"}>
                            {depoimento.visivel ? "Visível" : "Oculto"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">"{depoimento.depoimento}"</p>
                    <Button 
                      onClick={() => toggleVisibilidade(depoimento.id)}
                      variant="outline"
                      className="ml-4"
                    >
                      {depoimento.visivel ? (
                        <>
                          <EyeOff className="w-4 h-4 mr-2" />
                          Ocultar
                        </>
                      ) : (
                        <>
                          <Eye className="w-4 h-4 mr-2" />
                          Publicar
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GerenciarDepoimentos;