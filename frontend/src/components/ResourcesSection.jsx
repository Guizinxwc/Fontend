import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, Phone, Video, Download, ExternalLink, FileText } from "lucide-react";

const ResourcesSection = () => {
  const [recursos, setRecursos] = useState([]);

  useEffect(() => {
    fetchRecursos();
    
    // Listener para atualizar quando recursos forem modificados
    const handleStorageChange = () => {
      fetchRecursos();
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('recursos-updated', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('recursos-updated', handleStorageChange);
    };
  }, []);

  const fetchRecursos = () => {
    const recursos = JSON.parse(localStorage.getItem('recursos') || '[]');
    console.log('Recursos carregados:', recursos);
    const recursosAtivos = recursos.filter((r) => r.ativo);
    console.log('Recursos ativos:', recursosAtivos);
    setRecursos(recursosAtivos);
  };

  const getIconByCategory = (categoria) => {
    switch (categoria) {
      case 'Educacional': return BookOpen;
      case 'Terapeutico': return Video;
      case 'Familiar': return Calendar;
      case 'Profissional': return FileText;
      default: return BookOpen;
    }
  };

  const getColorByCategory = (categoria) => {
    switch (categoria) {
      case 'Educacional': return 'autism-blue';
      case 'Terapeutico': return 'warm-orange';
      case 'Familiar': return 'hope-green';
      case 'Profissional': return 'calm-purple';
      default: return 'autism-blue';
    }
  };

  const categorias = ['Educacional', 'Terapeutico', 'Familiar', 'Profissional'];
  const resourcesByCategory = categorias.map(categoria => {
    const items = recursos.filter((r) => r.categoria === categoria);
    return {
      category: categoria === 'Terapeutico' ? 'Terapêutico' : categoria,
      icon: getIconByCategory(categoria),
      color: getColorByCategory(categoria),
      items
    };
  }).filter(cat => cat.items.length > 0);

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Recursos de Apoio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de recursos, desde orientações práticas até apoio especializado, 
            para ajudar você e sua família em cada etapa da jornada.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="space-y-12">
          {resourcesByCategory.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Nenhum recurso disponível no momento.</p>
            </div>
          ) : (
            resourcesByCategory.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={categoryIndex} className="space-y-6">
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-lg">
                            {item.titulo}
                          </CardTitle>
                          <CardDescription>
                            {item.descricao}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              {item.tipo}
                            </span>
                            {item.url && (
                              <Button
                                size="sm"
                                onClick={() => {
                                  try {
                                    window.open(item.url, '_blank', 'noopener,noreferrer');
                                  } catch (error) {
                                    console.error('Erro ao abrir link:', error);
                                    window.location.href = item.url;
                                  }
                                }}
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Acessar
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;