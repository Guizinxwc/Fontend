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
    console.log('Recursos carregados, recursos);
    const recursosAtivos = recursos.filter((r) => r.ativo);
    console.log('Recursos ativos, recursosAtivos);
    setRecursos(recursosAtivos);
  };

  const getIconByCategory = (categoria) => {
    switch (categoria) {
      case 'Educacional': return BookOpen;
      case 'Terapeutico': return Video;
      case 'Familiar': return Calendar;
      case 'Profissional': return FileText;
      default= (categoria) => {
    switch (categoria) {
      case 'Educacional': return 'autism-blue';
      case 'Terapeutico': return 'warm-orange';
      case 'Familiar': return 'hope-green';
      case 'Profissional': return 'calm-purple';
      default= ['Educacional', 'Terapeutico', 'Familiar', 'Profissional'];
  const resourcesByCategory = categorias.map(categoria => {
    const items = recursos.filter((r) => r.categoria === categoria);
    return {
      category=== 'Terapeutico' ? 'Terapêutico' : categoria,
      icon),
      color),
      items
    };
  }).filter(cat => cat.items.length > 0);

  return (

        {/* Section Header */}
        
          Apoio

            Oferecemos uma ampla gama de recursos, desde orientações práticas até apoio especializado, 
            para ajudar você e sua família em cada etapa da jornada.

        {/* Resources Grid */}

              Nenhum recurso disponível no momento.
            
          ) : (
            resourcesByCategory.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (

                        {category.category}

                      {category.items.map((item, itemIndex) => (

                                {item.titulo}

                                {item.descricao}

                                  {item.tipo}

                            {item.url && (
                               {
                                  try {
                                    window.open(item.url, '_blank', 'noopener,noreferrer');
                                  } catch (error) {
                                    console.error('Erro ao abrir link, error);
                                    window.location.href = item.url;
                                  }
                                }}
                              >

                            )}

                      ))}

              );
            })
          )}

  );
};

export default ResourcesSection;