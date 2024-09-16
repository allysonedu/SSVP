export const menu = [
  {
    title: 'home',
    icon: 'home',
    items: [
      {
        label: 'Página Inicial',
        icon: 'home',
        path: '/home',
      },
    ],
  },

  {
    title: 'Conferencias',
    icon: 'church',
    items: [
      {
        label: 'Cadastrar',
        icon: 'c',
        path: '/conferences',
      },
      {
        label: 'Encontrar',
        icon: 'c',
        path: '/conferencesView',
      },
    ],
  },
  {
    title: 'Assistidos',
    icon: 'receipt_long',
    items: [
      
      {
        label: 'Encontrar',
        icon: 'user',
        path: '/assisteds-page',
      },
    ],
  },
  {
    title: 'Configurações',
    icon: 'build',
    items: [
      {
        label: 'Ajustes',
        icon: 'display_settings',
        path: '/configs',
      },
    ],
  },
];
