import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, FileText, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("userAuth");
    if (!userData) {
      navigate("/login");
      return;
    }
    setUser(JSON.parse(userData));
    fetchStats();
  }, []);

  const fetchStats = () => {
    const contatos = JSON.parse(localStorage.getItem('contatos') || '[]');
    const recursos = JSON.parse(localStorage.getItem('recursos') || '[]');
    const depoimentos = JSON.parse(localStorage.getItem('depoimentos') || '[]');
    
    const contatosNaoLidos = contatos.filter((c) => !c.lido).length;
    const contatos30Dias = contatos.filter((c) => {
      const dataContato = new Date(c.dataEnvio);
      const agora = new Date();
      const diferenca = agora.getTime() - dataContato.getTime();
      return diferenca <= 30 * 24 * 60 * 60 * 1000;
    }).length;
    const recursosAtivos = recursos.filter((r) => r.ativo).length;
    const depoimentosPendentes = depoimentos.filter((d) => !d.aprovado).length;
    
    setStats({
      ContatosPendentes: contatosNaoLidos,
      DepoimentosPendentes: depoimentosPendentes,
      RecursosAtivos: recursosAtivos,
      ContatosUltimos30Dias: contatos30Dias
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("userAuth");
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600">Bem-vindo, {user.Nome}</p>
            <Badge variant="secondary" className="mt-2">
              {user.Tipo === 'Usuario' ? 'Usuário' : user.Tipo}
            </Badge>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Contatos Pendentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.ContatosPendentes || 0}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Depoimentos Pendentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.DepoimentosPendentes || 0}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Recursos Ativos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.RecursosAtivos || 0}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Contatos (30 dias)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.ContatosUltimos30Dias || 0}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Gerenciar Contatos
              </CardTitle>
              <p className="text-sm text-gray-600">
                Visualizar e responder mensagens recebidas
              </p>
            </CardHeader>
            <CardContent>
              <Button onClick={() => navigate('/gerenciar-contatos')}>Acessar</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Gerenciar Recursos
              </CardTitle>
              <p className="text-sm text-gray-600">
                Adicionar, editar e organizar recursos
              </p>
            </CardHeader>
            <CardContent>
              <Button onClick={() => navigate('/gerenciar-recursos')}>Acessar</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Gerenciar Depoimentos
              </CardTitle>
              <p className="text-sm text-gray-600">
                Aprovar e gerenciar depoimentos
              </p>
            </CardHeader>
            <CardContent>
              <Button onClick={() => navigate('/gerenciar-depoimentos')}>Acessar</Button>
            </CardContent>
          </Card>

          {user.Tipo === 'Admin' && (
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Gerenciar Usuários
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Administrar usuários e permissões
                </p>
              </CardHeader>
              <CardContent>
                <Button onClick={() => navigate('/gerenciar-usuarios')}>Acessar</Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;