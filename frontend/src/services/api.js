// Configuração da API para conectar com Spring Boot
const API_BASE_URL = 'http://localhost:8082/api';

const headers = {
  'Content-Type': 'application/json',
};

const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      ...headers,
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
  login: (email, password) => {
    return apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  cadastro: (nome, email, senha, tipo = 'Usuario') => {
    return apiRequest('/auth/cadastro', {
      method: 'POST',
      body: JSON.stringify({ nome, email, senha, tipo }),
    });
  },
};

// Serviços de recursos
export const recursoService = {
  listar: () => {
    return apiRequest('/recursos');
  },

  listarAdmin: () => {
    return apiRequest('/recursos/admin');
  },

  criar: (recurso) => {
    return apiRequest('/recursos', {
      method: 'POST',
      body: JSON.stringify(recurso),
    });
  },

  atualizarStatus: (id, ativo) => {
    return apiRequest(`/recursos/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ ativo }),
    });
  },

  deletar: (id) => {
    return apiRequest(`/recursos/${id}`, {
      method: 'DELETE',
    });
  },
};

// Serviços de depoimentos
export const depoimentoService = {
  listar: () => {
    return apiRequest('/depoimentos');
  },

  listarAdmin: () => {
    return apiRequest('/depoimentos/admin');
  },

  listarPendentes: () => {
    return apiRequest('/depoimentos/pendentes');
  },

  criar: (depoimento) => {
    return apiRequest('/depoimentos', {
      method: 'POST',
      body: JSON.stringify(depoimento),
    });
  },

  aprovar: (id) => {
    return apiRequest(`/depoimentos/${id}/aprovar`, {
      method: 'PUT',
    });
  },

  alterarVisibilidade: (id, visivel) => {
    return apiRequest(`/depoimentos/${id}/visibilidade`, {
      method: 'PUT',
      body: JSON.stringify({ visivel }),
    });
  },

  deletar: (id) => {
    return apiRequest(`/depoimentos/${id}`, {
      method: 'DELETE',
    });
  },
};

// Serviços de contatos
export const contatoService = {
  listar: () => {
    return apiRequest('/contatos');
  },

  listarNaoLidos: () => {
    return apiRequest('/contatos/nao-lidos');
  },

  contarNaoLidos: () => {
    return apiRequest('/contatos/count-nao-lidos');
  },

  criar: (contato) => {
    return apiRequest('/contatos', {
      method: 'POST',
      body: JSON.stringify(contato),
    });
  },

  marcarComoLido: (id, lido) => {
    return apiRequest(`/contatos/${id}/lido`, {
      method: 'PUT',
      body: JSON.stringify({ lido }),
    });
  },
};

// Serviços de usuários
export const usuarioService = {
  listar: () => {
    return apiRequest('/usuarios');
  },

  alterarTipo: (id, tipo) => {
    return apiRequest(`/usuarios/${id}/tipo`, {
      method: 'PUT',
      body: JSON.stringify({ tipo }),
    });
  },

  alterarStatus: (id, ativo) => {
    return apiRequest(`/usuarios/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ ativo }),
    });
  },
};