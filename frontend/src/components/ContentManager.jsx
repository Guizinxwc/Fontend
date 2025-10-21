import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, Save, LogOut } from "lucide-react";
import { useContent } from "@/hooks/useContent";
import { showSuccess } from "@/utils/notifications";

const ContentManager = () => {
  const { content, updateContent, resetToDefault } = useContent();
  const [isEditing, setIsEditing] = useState(false);

  const addNewItem = (categoryIndex) => {
    const newContent = { ...content };
    newContent.resources[categoryIndex].items.push({
      title,
      description,
      type,
      url);
    updateContent(newContent);
  };

  const removeItem = (categoryIndex, itemIndex) => {
    const newContent = { ...content };
    newContent.resources[categoryIndex].items.splice(itemIndex, 1);
    updateContent(newContent);
  };

  const updateItem = (categoryIndex, itemIndex, field, value) => {
    const newContent = { ...content };
    (newContent.resources[categoryIndex].items[itemIndex])[field] = value;
    updateContent(newContent);
  };

  if (!isEditing) {
    return (

            Gerenciador de Conteúdo

            Gerencie o conteúdo do site sem mexer no código.
            
               setIsEditing(true)}>
                Editar Conteúdo
              
               {
                  localStorage.removeItem("adminAuth");
                  window.location.reload();
                }}
              >
                
                Sair

    );
  }

  return (

        Gerenciador de Conteúdo

            ✓ Salvamento Automático
          
           {
              resetToDefault();
              showSuccess('Conteúdo restaurado para o padrão!');
            }}
          >
            Restaurar Original
          
           setIsEditing(false)}>
            Cancelar
          
           {
              localStorage.removeItem("adminAuth");
              window.location.reload();
            }}
          >
            
            Sair

      {content.resources.map((category, categoryIndex) => (

            {category.category}

            {category.items.map((item, itemIndex) => (

                  Item {itemIndex + 1}
                   removeItem(categoryIndex, itemIndex)}
                  >

                Título
                     updateItem(categoryIndex, itemIndex, 'title', e.target.value)}
                      placeholder="Título do recurso"
                    />

                    Tipo
                     updateItem(categoryIndex, itemIndex, 'type', value)}
                    >

                        PDF
                        Online
                        Atividade
                        Vídeo

                  Descrição
                   updateItem(categoryIndex, itemIndex, 'description', e.target.value)}
                    placeholder="Descrição do recurso"
                    rows={2}
                  />

                  URL/Link
                   updateItem(categoryIndex, itemIndex, 'url', e.target.value)}
                    placeholder="https))}
            
             addNewItem(categoryIndex)}
              className="w-full"
            >
              
              Adicionar Novo Item

      ))}
    
  );
};

export default ContentManager;