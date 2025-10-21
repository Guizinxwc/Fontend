export const initializeData = () => {
  // Recursos iniciais sobre autismo
  const recursosIniciais = [
    {
      id: 1,
      titulo: "Guia Completo sobre Transtorno do Espectro Autista",
      descricao: "Material abrangente sobre características, diagnóstico e intervenções para TEA.",
      tipo: "PDF",
      categoria: "Educacional",
      url: "https://exemplo.com/guia-tea.pdf",
      ativo: true,
      dataCriacao: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      autor: "Sistema"
    },
    {
      id: 2,
      titulo: "Estratégias de Comunicação para Crianças com Autismo",
      descricao: "Técnicas práticas para melhorar a comunicação e interação social.",
      tipo: "Video",
      categoria: "Terapeutico",
      url: "https://youtube.com/watch?v=exemplo1",
      ativo: true,
      dataCriacao: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
      autor: "Sistema"
    },
    {
      id: 3,
      titulo: "Atividades Sensoriais para Desenvolvimento",
      descricao: "Conjunto de atividades para estimulação sensorial e desenvolvimento motor.",
      tipo: "Atividade",
      categoria: "Terapeutico",
      url: "https://drive.google.com/file/d/exemplo2",
      ativo: true,
      dataCriacao: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
      autor: "Sistema"
    },
    {
      id: 4,
      titulo: "Como Apoiar Famílias de Crianças com TEA",
      descricao: "Orientações para familiares e cuidadores sobre suporte emocional e prático.",
      tipo: "PDF",
      categoria: "Familiar",
      url: "https://exemplo.com/apoio-familias.pdf",
      ativo: true,
      dataCriacao: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(),
      autor: "Sistema"
    },
    {
      id: 5,
      titulo: "Inclusão Escolar: Práticas Eficazes",
      descricao: "Manual para educadores sobre inclusão de alunos com autismo.",
      tipo: "PDF",
      categoria: "Educacional",
      url: "https://exemplo.com/inclusao-escolar.pdf",
      ativo: true,
      dataCriacao: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
      autor: "Sistema"
    },
    {
      id: 6,
      titulo: "Webinar: Intervenções Baseadas em Evidências",
      descricao: "Apresentação sobre as mais recentes pesquisas em intervenções para TEA.",
      tipo: "Video",
      categoria: "Profissional",
      url: "https://youtube.com/watch?v=exemplo3",
      ativo: true,
      dataCriacao: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
      autor: "Sistema"
    },
    {
      id: 7,
      titulo: "Jogos Educativos Adaptados",
      descricao: "Coleção de jogos e brincadeiras adaptadas para crianças com autismo.",
      tipo: "Atividade",
      categoria: "Educacional",
      url: "https://exemplo.com/jogos-adaptados",
      ativo: true,
      dataCriacao: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      autor: "Sistema"
    },
    {
      id: 8,
      titulo: "Protocolo de Avaliação Comportamental",
      descricao: "Ferramenta para avaliação e monitoramento de comportamentos.",
      tipo: "PDF",
      categoria: "Profissional",
      url: "https://exemplo.com/protocolo-avaliacao.pdf",
      ativo: true,
      dataCriacao: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
      autor: "Sistema"
    },
    {
      id: 9,
      titulo: "Curso Online: Fundamentos do ABA",
      descricao: "Curso introdutório sobre Análise do Comportamento Aplicada.",
      tipo: "Link",
      categoria: "Profissional",
      url: "https://cursos.exemplo.com/aba-fundamentos",
      ativo: true,
      dataCriacao: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      autor: "Sistema"
    },
    {
      id: 10,
      titulo: "Rotinas Visuais para Casa e Escola",
      descricao: "Modelos de rotinas visuais para organização do dia a dia.",
      tipo: "PDF",
      categoria: "Familiar",
      url: "https://exemplo.com/rotinas-visuais.pdf",
      ativo: true,
      dataCriacao: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      autor: "Sistema"
    },
    {
      id: 11,
      titulo: "Tecnologias Assistivas para Comunicação",
      descricao: "Guia sobre aplicativos e dispositivos para comunicação alternativa.",
      tipo: "Link",
      categoria: "Terapeutico",
      url: "https://exemplo.com/tecnologias-assistivas",
      ativo: true,
      dataCriacao: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      autor: "Sistema"
    },
    {
      id: 12,
      titulo: "Workshop: Manejo de Crises Comportamentais",
      descricao: "Estratégias práticas para lidar com situações desafiadoras.",
      tipo: "Video",
      categoria: "Profissional",
      url: "https://youtube.com/watch?v=exemplo4",
      ativo: true,
      dataCriacao: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      autor: "Sistema"
    }
  ];

  // Depoimentos iniciais
  const depoimentosIniciais = [
    {
      id: 1,
      nome: "Maria Silva",
      email: "maria.silva@email.com",
      depoimento: "Meu filho Lucas, de 8 anos, estava tendo dificuldades na escola e em casa. Com o apoio da equipe, aprendemos estratégias que transformaram nosso dia a dia. Hoje ele está mais comunicativo e feliz!",
      dataEnvio: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      aprovado: true,
      visivel: true,
      dataAprovacao: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 2,
      nome: "João Santos",
      email: "joao.santos@email.com",
      depoimento: "Como pai de primeira viagem, me sentia perdido e sem direção. Os recursos e orientações que recebi aqui me deram confiança para apoiar minha filha da melhor forma. A diferença no desenvolvimento dela é notável!",
      dataEnvio: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
      aprovado: true,
      visivel: true,
      dataAprovacao: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 3,
      nome: "Ana Costa",
      email: "ana.costa@email.com",
      depoimento: "Os profissionais não apenas ajudaram nossa filha Sofia, mas também nos ensinaram como ser uma família mais unida e compreensiva. Recomendo a todos que precisam de apoio especializado.",
      dataEnvio: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
      aprovado: true,
      visivel: true,
      dataAprovacao: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 4,
      nome: "Carlos Oliveira",
      email: "carlos.oliveira@email.com",
      depoimento: "Encontramos aqui não apenas um serviço, mas uma comunidade que nos acolheu. Nosso filho Pedro está progredindo muito bem com as terapias recomendadas.",
      dataEnvio: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      aprovado: true,
      visivel: true,
      dataAprovacao: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 5,
      nome: "Fernanda Lima",
      email: "fernanda.lima@email.com",
      depoimento: "A abordagem personalizada e o carinho da equipe fizeram toda a diferença no tratamento da nossa filha. Estamos muito gratos por todo o suporte recebido.",
      dataEnvio: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      aprovado: true,
      visivel: true,
      dataAprovacao: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
    }
  ];

  // Verificar se já existem dados
  const recursosExistentes = localStorage.getItem('recursos');
  const depoimentosExistentes = localStorage.getItem('depoimentos');

  // Sempre garantir que os recursos estejam atualizados
  localStorage.setItem('recursos', JSON.stringify(recursosIniciais));

  // Adicionar depoimentos se não existirem
  if (!depoimentosExistentes || JSON.parse(depoimentosExistentes).length === 0) {
    localStorage.setItem('depoimentos', JSON.stringify(depoimentosIniciais));
  }

  // Disparar evento para atualizar interface
  setTimeout(() => {
    window.dispatchEvent(new Event('recursos-updated'));
  }, 100);
};