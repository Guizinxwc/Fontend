import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, Trash2, FileText, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { showSuccess } from "@/utils/notifications";

const GerenciarRecursos = () => {
  const [recursos, setRecursos] = useState([]);
  const [user, setUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    tipo: '',
    categoria: '',
    url: '',
    ativo: true
  });
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
    fetchRecursos();
  }, []);

  const fetchRecursos = () => {
    const recursos = JSON.parse(localStorage.getItem('recursos') || '[]');
    setRecursos(recursos.sort((a, b) => new Date(b.dataCriacao).getTime() - new Date(a.dataCriacao).getTime()));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recursos = JSON.parse(localStorage.getItem('recursos') || '[]');
    
    const novoRecurso = {
      id: Date.now(),
      ...formData,
      dataCriacao: new Date().toISOString(),
      autor: user.Nome
    };
    recursos.push(novoRecurso);
    localStorage.setItem('recursos', JSON.stringify(recursos));
    
    window.dispatchEvent(new Event('recursos-updated'));
    
    setFormData({
      titulo: '',
      descricao: '',
      tipo: '',
      categoria: '',
      url: '',
      ativo: true
    });
    setShowForm(false);
    fetchRecursos();
    showSuccess("Recurso adicionado com sucesso!");
  };

  const toggleStatus = (id) => {
    const recursos = JSON.parse(localStorage.getItem('recursos') || '[]');
    const recursoIndex = recursos.findIndex((r) => r.id === id);
    
    if (recursoIndex !== -1) {
      recursos[recursoIndex].ativo = !recursos[recursoIndex].ativo;
      localStorage.setItem('recursos', JSON.stringify(recursos));
      window.dispatchEvent(new Event('recursos-updated'));
      fetchRecursos();
      showSuccess(`Recurso ${recursos[recursoIndex].ativo ? 'ativado' : 'desativado'}!`);
    }
  };

  const deleteRecurso = (id) => {
    const recursos = JSON.parse(localStorage.getItem('recursos') || '[]');
    const novosRecursos = recursos.filter((r) => r.id !== id);
    localStorage.setItem('recursos', JSON.stringify(novosRecursos));
    window.dispatchEvent(new Event('recursos-updated'));
    fetchRecursos();
    showSuccess("Recurso removido com sucesso!");
  };

  const formatarData = (dataISO) => {
    return new Date(dataISO).toLocaleDateString('pt-BR');
  };

  if (!user) return null;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button onClick={() => navigate("/dashboard")} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-2xl font-bold">Gerenciar Recursos</h1>
          <Badge variant="secondary">
            {recursos.filter((r) => r.ativo).length} ativos
          </Badge>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="h-4 w-4 mr-2" />
          Novo Recurso
        </Button>
      </div>

      {showForm && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Adicionar Novo Recurso</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Título *</label>
                <Input
                  value={formData.titulo}
                  onChange={(e) => setFormData({...formData, titulo: e.target.value})}
                  placeholder="Título do recurso"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Tipo *</label>
                <Select value={formData.tipo} onValueChange={(value) => setFormData({...formData, tipo: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PDF">PDF</SelectItem>
                    <SelectItem value="Video">Vídeo</SelectItem>
                    <SelectItem value="Link">Link</SelectItem>
                    <SelectItem value="Atividade">Atividade</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium">Categoria *</label>
                <Select value={formData.categoria} onValueChange={(value) => setFormData({...formData, categoria: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Educacional">Educacional</SelectItem>
                    <SelectItem value="Terapeutico">Terapêutico</SelectItem>
                    <SelectItem value="Familiar">Familiar</SelectItem>
                    <SelectItem value="Profissional">Profissional</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium">URL/Link</label>
                <Input
                  value={formData.url}
                  onChange={(e) => setFormData({...formData, url: e.target.value})}
                  placeholder="https://exemplo.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Descrição *</label>
                <Textarea
                  value={formData.descricao}
                  onChange={(e) => setFormData({...formData, descricao: e.target.value})}
                  placeholder="Descrição do recurso"
                  rows={3}
                  required
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit">Salvar Recurso</Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {recursos.length === 0 ? (
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              Nenhum recurso cadastrado ainda.
            </CardContent>
          </Card>
        ) : (
          recursos.map((recurso) => (
            <Card key={recurso.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{recurso.titulo}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Por {recurso.autor} • {formatarData(recurso.dataCriacao)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">{recurso.tipo}</Badge>
                    <Badge variant="outline">{recurso.categoria}</Badge>
                    <Badge variant={recurso.ativo ? "default" : "secondary"}>
                      {recurso.ativo ? "Ativo" : "Inativo"}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">{recurso.descricao}</p>
                
                {recurso.url && (
                  <div className="mb-4">
                    <a href={recurso.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      {recurso.url}
                    </a>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleStatus(recurso.id)}
                  >
                    {recurso.ativo ? (
                      <>
                        <EyeOff className="h-4 w-4 mr-2" />
                        Desativar
                      </>
                    ) : (
                      <>
                        <Eye className="h-4 w-4 mr-2" />
                        Ativar
                      </>
                    )}
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteRecurso(recurso.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Excluir
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

export default GerenciarRecursos;