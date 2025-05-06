// atalhosData.js
const atalhos = [
  // ⚙️ Geral
  {
    categoria: "Geral",
    acao: "Abrir paleta de comandos",
    atalho: "Cmd + Shift + P",
  },
  {
    categoria: "Geral",
    acao: "Abrir configurações do Cursor",
    atalho: "Cmd + Shift + J",
  },
  {
    categoria: "Geral",
    acao: "Abrir configurações do VS Code",
    atalho: "Cmd + ,",
  },
  {
    categoria: "Geral",
    acao: "Alternar painel lateral",
    atalho: "Cmd + B",
  },
  {
    categoria: "Geral",
    acao: "Abrir terminal integrado",
    atalho: "Ctrl + `",
  },
  { categoria: "Geral", acao: "Novo arquivo", atalho: "Cmd + N" },
  { categoria: "Geral", acao: "Salvar arquivo", atalho: "Cmd + S" },

  // 💬 Chat com IA
  { categoria: "Chat com IA", acao: "Abrir chat", atalho: "Cmd + L" },
  {
    categoria: "Chat com IA",
    acao: "Adicionar código ao contexto",
    atalho: "Cmd + Shift + L",
  },
  {
    categoria: "Chat com IA",
    acao: "Criar nova aba de chat",
    atalho: "Cmd + T",
  },
  {
    categoria: "Chat com IA",
    acao: "Navegar entre abas do chat",
    atalho: "Cmd + [ / Cmd + ]",
  },
  {
    categoria: "Chat com IA",
    acao: "Fechar aba de chat",
    atalho: "Cmd + W",
  },
  {
    categoria: "Chat com IA",
    acao: "Aceitar sugestões",
    atalho: "Cmd + Enter",
  },
  {
    categoria: "Chat com IA",
    acao: "Rejeitar sugestões",
    atalho: "Cmd + Backspace",
  },

  // ✍️ Edição com IA
  {
    categoria: "Edição com IA",
    acao: "Abrir modo de edição com IA",
    atalho: "Cmd + K",
  },
  {
    categoria: "Edição com IA",
    acao: "Aplicar mudanças sugeridas",
    atalho: "Cmd + Enter",
  },
  {
    categoria: "Edição com IA",
    acao: "Cancelar edição",
    atalho: "Cmd + Backspace",
  },

  // 🧠 Composer
  { categoria: "Composer", acao: "Abrir Composer", atalho: "Cmd + I" },

  // 🧭 Navegação
  {
    categoria: "Navegação",
    acao: "Ir para arquivo",
    atalho: "Cmd + P",
  },
  {
    categoria: "Navegação",
    acao: "Ir para linha específica",
    atalho: "Ctrl + G",
  },
  {
    categoria: "Navegação",
    acao: "Ir para símbolo no arquivo",
    atalho: "Cmd + Shift + O",
  },
  {
    categoria: "Navegação",
    acao: "Focar nos breadcrumbs",
    atalho: "Cmd + Shift + ;",
  },
  {
    categoria: "Navegação",
    acao: "Selecionar em breadcrumbs",
    atalho: "Cmd + Shift + .",
  },

  // 🧱 Organização do Código
  {
    categoria: "Organização do Código",
    acao: "Recolher tudo",
    atalho: "Cmd + R, Cmd + 0",
  },
  {
    categoria: "Organização do Código",
    acao: "Expandir tudo",
    atalho: "Cmd + R, Cmd + J",
  },
  {
    categoria: "Organização do Código",
    acao: "Comentar linha",
    atalho: "Cmd + /",
  },
  {
    categoria: "Organização do Código",
    acao: "Formatador de código",
    atalho: "Shift + Option + F",
  },
  {
    categoria: "Organização do Código",
    acao: "Mover linha para cima/baixo",
    atalho: "Option + ↑ / ↓",
  },
  {
    categoria: "Organização do Código",
    acao: "Duplicar linha",
    atalho: "Shift + Option + ↓",
  },
  {
    categoria: "Organização do Código",
    acao: "Deletar linha",
    atalho: "Cmd + Shift + K",
  },
  {
    categoria: "Organização do Código",
    acao: "Selecionar próxima ocorrência",
    atalho: "Cmd + D",
  },
  {
    categoria: "Organização do Código",
    acao: "Seleção múltipla (cursores)",
    atalho: "Option + Click",
  },

  // 🔍 Busca e Substituição
  {
    categoria: "Busca e Substituição",
    acao: "Buscar no arquivo atual",
    atalho: "Cmd + F",
  },
  {
    categoria: "Busca e Substituição",
    acao: "Substituir no arquivo atual",
    atalho: "Cmd + H",
  },
  {
    categoria: "Busca e Substituição",
    acao: "Buscar em todos os arquivos",
    atalho: "Cmd + Shift + F",
  },

  // 🔖 Bookmarks
  {
    categoria: "Bookmarks",
    acao: "Alternar marcador com rótulo",
    atalho: "Ctrl + Alt + Cmd + K",
  },
  {
    categoria: "Bookmarks",
    acao: "Focar no painel de bookmarks",
    atalho: "Shift + Cmd + B",
  },
  {
    categoria: "Bookmarks",
    acao: "Limpar todos os bookmarks",
    atalho: "Ctrl + Alt + Cmd + D",
  },

  // 🧭 Membros do Código
  {
    categoria: "Membros do Código",
    acao: "Ir para membro anterior",
    atalho: "Cmd + Shift + ↑",
  },
  {
    categoria: "Membros do Código",
    acao: "Ir para próximo membro",
    atalho: "Cmd + Shift + ↓",
  },

  // 🧠 @Símbolos (Referências contextuais)
  {
    categoria: "@Símbolos",
    acao: "Referenciar arquivo",
    atalho: "@main.ts",
  },
  {
    categoria: "@Símbolos",
    acao: "Referenciar função",
    atalho: "@getUserData",
  },
  {
    categoria: "@Símbolos",
    acao: "Referenciar variável",
    atalho: "@token",
  },
  {
    categoria: "@Símbolos",
    acao: "Buscar em toda a base de código",
    atalho: "@codebase",
  },
  { categoria: "@Símbolos", acao: "Buscar na web", atalho: "@web" },
  {
    categoria: "@Símbolos",
    acao: "Acessar documentação",
    atalho: "@docs",
  },

  // 🌲 NERDTree (navegação e gerenciamento)
  {
    categoria: "NERDTree",
    acao: "Abrir/exibir árvore",
    atalho: "Ctrl + N",
  },
  { categoria: "NERDTree", acao: "Mover para baixo", atalho: "↓ ou J" },
  { categoria: "NERDTree", acao: "Mover para cima", atalho: "↑ ou K" },
  {
    categoria: "NERDTree",
    acao: "Mover para esquerda",
    atalho: "← ou H",
  },
  {
    categoria: "NERDTree",
    acao: "Mover para direita",
    atalho: "→ ou L",
  },
  { categoria: "NERDTree", acao: "Abrir arquivo", atalho: "Enter" },
  { categoria: "NERDTree", acao: "Abrir em nova aba", atalho: "T" },
  {
    categoria: "NERDTree",
    acao: "Visualizar arquivo",
    atalho: "Space",
  },
  {
    categoria: "NERDTree",
    acao: "Criar novo arquivo",
    atalho: "M → A",
  },
  { categoria: "NERDTree", acao: "Criar nova pasta", atalho: "M → F" },
  {
    categoria: "NERDTree",
    acao: "Mover para lixeira",
    atalho: "M → D",
  },
  { categoria: "NERDTree", acao: "Copiar arquivo", atalho: "M → C" },
  { categoria: "NERDTree", acao: "Colar arquivo", atalho: "M → V" },
  { categoria: "NERDTree", acao: "Renomear arquivo", atalho: "M → R" },
];
