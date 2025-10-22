import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3001/api';

export const useContent = () => {
  const [content, setContent] = useState({ 
    resources: [
      {
        category: 'Educacional',
        items: []
      },
      {
        category: 'Terapeutico', 
        items: []
      },
      {
        category: 'Familiar',
        items: []
      },
      {
        category: 'Profissional',
        items: []
      }
    ]
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch(`${API_URL}/recursos`);
      const data = await response.json();
      setContent(data);
    } catch (error) {
      console.error('Erro ao carregar recursos:', error);
      // Fallback para dados locais se API falhar
      const saved = localStorage.getItem('siteContent');
      if (saved) {
        setContent(JSON.parse(saved));
      }
    } finally {
      setLoading(false);
    }
  };

  const updateContent = (newContent) => {
    setContent(newContent);
    localStorage.setItem('siteContent', JSON.stringify(newContent));
    window.dispatchEvent(new CustomEvent('contentUpdated'));
  };

  const resetToDefault = () => {
    fetchContent();
  };

  return { content, updateContent, resetToDefault, loading };
};