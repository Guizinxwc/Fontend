# Frontend - Unity Autism Care

Aplicação React com TypeScript para o sistema Unity Autism Care.

## Tecnologias

- React 18 + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router DOM
- React Hook Form
- Lucide React (ícones)

## Scripts

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint
```

## Estrutura

```
src/
├── components/        # Componentes React
│   ├── ui/           # Componentes shadcn/ui
│   └── ...           # Componentes específicos
├── pages/            # Páginas da aplicação
├── hooks/            # Custom hooks
├── services/         # Serviços de API
├── lib/              # Utilitários
└── utils/            # Funções auxiliares
```

## Configuração

O frontend está configurado para se conectar com o backend Spring Boot na porta 8080.

## Build

```bash
npm run build
```

Os arquivos de build serão gerados na pasta `dist/`.