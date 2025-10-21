import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Calendar, Video, ExternalLink, Settings, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useContent } from "@/hooks/useContent";

const iconMap = {
  BookOpen,
  Calendar,
  Video,
};

const DynamicResourcesSection = () => {
  const { content } = useContent();
  const [, setUpdate] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContent, setFilteredContent] = useState(content.resources);

  useEffect(() => {
    const handleUpdate = () => setUpdate(prev => prev + 1);
    window.addEventListener('contentUpdated', handleUpdate);
    return () => window.removeEventListener('contentUpdated', handleUpdate);
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredContent(content.resources);
    } else {
      const filtered = content.resources.map(category => ({
        ...category,
        items=> 
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.type.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.items.length > 0);
      setFilteredContent(filtered);
    }
  }, [searchTerm, content.resources]);

  return (

          Apoio

            Oferecemos uma ampla gama de recursos, desde orientações práticas até apoio especializado, 
            para ajudar você e sua família em cada etapa da jornada.

         {
            const IconComponent = iconMap[category.icon typeof iconMap] || BookOpen;
            return (

                      {category.category}

                    {category.items.map((item, itemIndex) => (

                              {item.title}

                              {item.description}

                                {item.type}

                    ))}

            );
          })}

  );
};

export default DynamicResourcesSection;