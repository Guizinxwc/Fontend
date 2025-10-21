import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, User, ToggleLeft, ToggleRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { showSuccess } from "@/utils/notifications";

const GerenciarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
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
    fetchUsuarios();
  }, []);

  const fetchUsuarios = () => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    setUsuarios(usuarios);
  };

  const alterarTipo = (id, novoTipo) => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioIndex = usuarios.findIndex((u) => u.id === id);
    
    if (usuarioIndex !== -1) {
      usuarios[usuarioIndex].tipo = novoTipo;
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      fetchUsuarios();
      showSuccess(`Usuário alterado para ${novoTipo === 'Admin' ? 'Administrador' : 'Usuário'} com sucesso!`);
    }
  };

  const alterarStatus = (id, ativo) => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioIndex = usuarios.findIndex((u) => u.id === id);
    
    if (usuarioIndex !== -1) {
      usuarios[usuarioIndex].ativo = ativo;
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      fetchUsuarios();
      showSuccess(`Usuário ${ativo ? 'ativado' : 'desativado'} com sucesso!`);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button onClick={() => navigate("/dashboard")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-3xl font-bold text-gray-800">Gerenciar Usuários</h1>
        </div>

        <div className="grid gap-4">
          {usuarios.map((usuario) => (
            <Card key={usuario.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-blue-100">
                      {usuario.tipo === 'Admin' ? 
                        <Shield className="w-6 h-6 text-blue-600" /> : 
                        <User className="w-6 h-6 text-gray-600" />
                      }
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{usuario.nome}</h3>
                      <p className="text-gray-600">{usuario.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <Badge variant={usuario.tipo === 'Admin' ? 'default' : 'secondary'}>
                        {usuario.tipo === 'Usuario' ? 'Usuário' : usuario.tipo}
                      </Badge>
                      <div className="mt-1">
                        <Badge variant={usuario.ativo ? 'default' : 'destructive'}>
                          {usuario.ativo ? 'Ativo' : 'Inativo'}
                        </Badge>
                      </div>
                    </div>
                    <Button 
                      onClick={() => alterarTipo(usuario.id, usuario.tipo === 'Admin' ? 'Usuario' : 'Admin')}
                      disabled={usuario.id === user.Id}
                    >
                      {usuario.tipo === 'Admin' ? 'Tornar Usuário' : 'Tornar Admin'}
                    </Button>
                    <Button 
                      onClick={() => alterarStatus(usuario.id, !usuario.ativo)}
                      disabled={usuario.id === user.Id}
                    >
                      {usuario.ativo ? 
                        <><ToggleRight className="w-4 h-4 mr-2" />Desativar</> : 
                        <><ToggleLeft className="w-4 h-4 mr-2" />Ativar</>
                      }
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GerenciarUsuarios;