export const initializeData = () => {
  // Recursos iniciais sobre autismo
  const recursosIniciais = [
    {
      id,
      titulo,
      descricao,
      tipo,
      categoria,
      url,
      ativo,
      dataCriacao).toISOString(),
      autor,
    {
      id,
      titulo,
      descricao,
      tipo,
      categoria,
      url,
      ativo,
      dataCriacao).toISOString(),
      autor,
    {
      id,
      titulo,
      descricao,
      tipo,
      categoria,
      url=8kDNeXVcgq_awF1s",
      ativo,
      dataCriacao).toISOString(),
      autor,
    {
      id,
      titulo,
      descricao,
      tipo,
      categoria,
      url,
      ativo,
      dataCriacao).toISOString(),
      autor,
    {
      id,
      titulo,
      descricao,
      tipo,
      categoria,
      url,
      ativo,
      dataCriacao).toISOString(),
      autor,
    {
      id,
      titulo,
      descricao,
      tipo,
      categoria,
      url=nHTxvuoW6gEYNocS",
      ativo,
      dataCriacao).toISOString(),
      autor,
    {
      id,
      titulo,
      descricao,
      tipo,
      categoria,
      url,
      ativo,
      dataCriacao).toISOString(),
      autor,
    {
      id,
      titulo,
      descricao,
      tipo,
      categoria,
      url,
      ativo,
      dataCriacao).toISOString(),
      autor,
    {
      id,
      titulo,
      descricao,
      tipo,
      categoria,
      url=oMVAxTE1TJRm2EyE",
      ativo,
      dataCriacao).toISOString(),
      autor,
    {
      id,
      titulo,
      descricao,
      tipo,
      categoria,
      url,
      ativo,
      dataCriacao).toISOString(),
      autor,
    {
      id,
      titulo,
      descricao,
      tipo,
      categoria,
      url,
      ativo,
      dataCriacao).toISOString(),
      autor,
    {
      id,
      titulo,
      descricao,
      tipo,
      categoria,
      url=Z2YhPt4Z8rcJFsYT",
      ativo,
      dataCriacao).toISOString(),
      autor= [
    {
      id,
      nome,
      email,
      depoimento, de 8 anos, estava tendo dificuldades na escola e em casa. Com o apoio da equipe, aprendemos estratégias que transformaram nosso dia a dia. Hoje ele está mais comunicativo e feliz!",
      dataEnvio) - 30 * 24 * 60 * 60 * 1000).toISOString(),
      aprovado,
      visivel,
      dataAprovacao) - 25 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id,
      nome,
      email,
      depoimento, me sentia perdido e sem direção. Os recursos e orientações que recebi aqui me deram confiança para apoiar minha filha da melhor forma. A diferença no desenvolvimento dela é notável!",
      dataEnvio) - 20 * 24 * 60 * 60 * 1000).toISOString(),
      aprovado,
      visivel,
      dataAprovacao) - 18 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id,
      nome,
      email,
      depoimento, mas também nos ensinaram como ser uma família mais unida e compreensiva. Recomendo a todos que precisam de apoio especializado.",
      dataEnvio) - 15 * 24 * 60 * 60 * 1000).toISOString(),
      aprovado,
      visivel,
      dataAprovacao) - 12 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id,
      nome,
      email,
      depoimento, mas uma comunidade que nos acolheu. Nosso filho Pedro está progredindo muito bem com recomendadas.",
      dataEnvio) - 10 * 24 * 60 * 60 * 1000).toISOString(),
      aprovado,
      visivel,
      dataAprovacao) - 8 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id,
      nome,
      email,
      depoimento,
      dataEnvio) - 5 * 24 * 60 * 60 * 1000).toISOString(),
      aprovado,
      visivel,
      dataAprovacao) - 3 * 24 * 60 * 60 * 1000).toISOString()
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