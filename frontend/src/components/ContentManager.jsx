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
      title: '',
      description: '',
      type: 'PDF',
      url: ''
    });
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
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Gerenciador de Conteúdo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6">
              Gerencie o conteúdo do site sem mexer no código.
            </p>
            <div className="flex gap-4">
              <Button onClick={() => setIsEditing(true)}>
                Editar Conteúdo
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  localStorage.removeItem("adminAuth");
                  window.location.reload();
                }}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Gerenciador de Conteúdo</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-green-600">
            ✓ Salvamento Automático
          </span>
          <Button 
            variant="outline"
            onClick={() => {
              resetToDefault();
              showSuccess('Conteúdo restaurado para o padrão!');
            }}
          >
            Restaurar Original
          </Button>
          <Button variant="outline" onClick={() => setIsEditing(false)}>
            Cancelar
          </Button>
          <Button 
            variant="outline"
            onClick={() => {
              localStorage.removeItem("adminAuth");
              window.location.reload();
            }}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        {content.resources.map((category, categoryIndex) => (
          <Card key={categoryIndex}>
            <CardHeader>
              <CardTitle>{category.category}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {category.items.map((item, itemIndex) => (
                <Card key={itemIndex} className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">Item {itemIndex + 1}</h4>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => removeItem(categoryIndex, itemIndex)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="grid gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Título</label>
                      <Input
                        value={item.title}
                        onChange={(e) => updateItem(categoryIndex, itemIndex, 'title', e.target.value)}
                        placeholder="Título do recurso"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Tipo</label>
                      <Select 
                        value={item.type}
                        onValueChange={(value) => updateItem(categoryIndex, itemIndex, 'type', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="PDF">PDF</SelectItem>
                          <SelectItem value="Online">Online</SelectItem>
                          <SelectItem value="Atividade">Atividade</SelectItem>
                          <SelectItem value="Vídeo">Vídeo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Descrição</label>
                      <Textarea
                        value={item.description}
                        onChange={(e) => updateItem(categoryIndex, itemIndex, 'description', e.target.value)}
                        placeholder="Descrição do recurso"
                        rows={2}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">URL/Link</label>
                      <Input
                        value={item.url}
                        onChange={(e) => updateItem(categoryIndex, itemIndex, 'url', e.target.value)}
                        placeholder="https://exemplo.com"
                      />
                    </div>
                  </div>
                </Card>
              ))}
              
              <Button 
                onClick={() => addNewItem(categoryIndex)}
                className="w-full"
              >
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Novo Item
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContentManager;