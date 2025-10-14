// Configuração da API para conectar com Spring Boot
const API_BASE_URL = 'http://localhost:8080/api';

// Função auxiliar para fazer requisições
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Erro na requisição');
    }
    
    return data;
  } catch (error) {
    console.error('Erro na API:', error);
    throw error;
  }
};

// Serviços de autenticação
export const authService = {
  login: async (email, password) => {
    return apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  cadastro: async (nome, email, senha, tipo = 'Usuario') => {
    return apiRequest('/auth/cadastro', {
      method: 'POST',
      body: JSON.stringify({ nome, email, senha, tipo }),
    });
  },
};

// Serviços de recursos
export const recursoService = {
  listar: async () => {
    return apiRequest('/recursos');
  },

  listarAdmin: async () => {
    return apiRequest('/recursos/admin');
  },

  criar: async (recurso) => {
    return apiRequest('/recursos', {
      method: 'POST',
      body: JSON.stringify(recurso),
    });
  },

  atualizarStatus: async (id, ativo) => {
    return apiRequest(`/recursos/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify(ativo),
    });
  },

  deletar: async (id) => {
    return apiRequest(`/recursos/${id}`, {
      method: 'DELETE',
    });
  },
};

// Serviços de depoimentos
export const depoimentoService = {
  listar: async () => {
    return apiRequest('/depoimentos');
  },

  listarAdmin: async () => {
    return apiRequest('/depoimentos/admin');
  },

  listarPendentes: async () => {
    return apiRequest('/depoimentos/pendentes');
  },

  criar: async (depoimento) => {
    return apiRequest('/depoimentos', {
      method: 'POST',
      body: JSON.stringify(depoimento),
    });
  },

  aprovar: async (id) => {
    return apiRequest(`/depoimentos/${id}/aprovar`, {
      method: 'PUT',
    });
  },

  alterarVisibilidade: async (id, visivel) => {
    return apiRequest(`/depoimentos/${id}/visibilidade`, {
      method: 'PUT',
      body: JSON.stringify(visivel),
    });
  },

  deletar: async (id) => {
    return apiRequest(`/depoimentos/${id}`, {
      method: 'DELETE',
    });
  },
};

// Serviços de contatos
export const contatoService = {
  listar: async () => {
    return apiRequest('/contatos');
  },

  listarNaoLidos: async () => {
    return apiRequest('/contatos/nao-lidos');
  },

  contarNaoLidos: async () => {
    return apiRequest('/contatos/count-nao-lidos');
  },

  criar: async (contato) => {
    return apiRequest('/contatos', {
      method: 'POST',
      body: JSON.stringify(contato),
    });
  },

  marcarComoLido: async (id, lido) => {
    return apiRequest(`/contatos/${id}/lido`, {
      method: 'PUT',
      body: JSON.stringify(lido),
    });
  },
};

// Serviços de usuários
export const usuarioService = {
  listar: async () => {
    return apiRequest('/usuarios');
  },

  alterarTipo: async (id, tipo) => {
    return apiRequest(`/usuarios/${id}/tipo`, {
      method: 'PUT',
      body: JSON.stringify(tipo),
    });
  },

  alterarStatus: async (id, ativo) => {
    return apiRequest(`/usuarios/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify(ativo),
    });
  },
};