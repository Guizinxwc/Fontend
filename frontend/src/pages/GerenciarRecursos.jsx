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
    titulo,
    descricao,
    tipo,
    categoria,
    url,
    ativo);
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
      id),
      ...formData,
      dataCriacao).toISOString(),
      autor);
    localStorage.setItem('recursos', JSON.stringify(recursos));
    
    // Disparar evento para atualizar outras páginas
    window.dispatchEvent(new Event('recursos-updated'));
    
    setFormData({
      titulo,
      descricao,
      tipo,
      categoria,
      url,
      ativo);
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

             navigate("/dashboard")} variant="outline">
              
              Voltar
            
            Gerenciar Recursos
            
              {recursos.filter((r) => r.ativo).length} ativos

           setShowForm(!showForm)}>
            
            Novo Recurso

        {showForm && (

              Adicionar Novo Recurso

                Título *
                     setFormData({...formData, titulo)}
                      placeholder="Título do recurso"
                    />

                    Tipo *
                     setFormData({...formData, tipo)}>

                        PDF
                        Vídeo
                        Link
                        Atividade

                Categoria *
                     setFormData({...formData, categoria)}>

                        Educacional
                        Terapêutico
                        Familiar
                        Profissional

                    URL/Link
                     setFormData({...formData, url)}
                      placeholder="https="text-sm font-medium">Descrição *
                   setFormData({...formData, descricao)}
                    placeholder="Descrição do recurso"
                    rows={3}
                  />

                  Salvar Recurso
                   setShowForm(false)}>
                    Cancelar

        )}

          {recursos.length === 0 ? (

                Nenhum recurso cadastrado ainda.

          ) : (
            recursos.map((recurso) => (

                          {recurso.titulo}
                          
                            Por {recurso.autor} • {formatarData(recurso.dataCriacao)}

                          {recurso.tipo}
                          {recurso.categoria}
                          
                            {recurso.ativo ? "Ativo" : "Inativo"}

                        {recurso.descricao}

                      {recurso.url && (
                        
                          {recurso.url}
                        
                      )}

                       toggleStatus(recurso.id)}
                      >
                        {recurso.ativo ? (

                            Desativar
                          
                        ) : (

                            Ativar
                          
                        )}

                       deleteRecurso(recurso.id)}
                      >

            ))
          )}

  );
};

export default GerenciarRecursos;