export const defaultLocale = 'es';
export const supportedLocales = ['es', 'en'];

const localizedContent = {
  es: {
    seo: {
      title: 'ByteShark | Angel Arenas Pati\u00f1o',
      description:
        'Portafolio de ByteShark enfocado en sistemas, apps y experiencias digitales construidas con mentalidad de builder.',
    },
    navigation: [
      { label: 'Sobre m\u00ed', href: '#about' },
      { label: 'Proyectos', href: '#projects' },
      { label: 'Contacto', href: '#contact' },
    ],
    hero: {
      eyebrow: 'ANGEL ARENAS PATI\u00d1O',
      title: 'ByteShark',
      description:
        'Construyendo sistemas, apps y experiencias digitales con mentalidad de builder.',
      terminalLines: [
        '> INICIALIZANDO PORTAFOLIO_V4.0',
        '> CARGANDO ASSETS...',
        '> SISTEMAS EN LINEA',
        '> BIENVENIDO, USUARIO',
      ],
      primaryCta: 'Ver proyectos',
      secondaryCta: 'Contacto',
    },
    about: {
      title: 'La Mentalidad Builder',
      body:
        'No solo escribo codigo; diseno soluciones. Desde aplicaciones web de alto rendimiento hasta ecosistemas IoT complejos y entornos inmersivos para videojuegos, mi enfoque nace de la mentalidad builder: entender el nucleo del problema y construir la solucion mas eficiente, escalable y elegante posible.',
      calloutTitle: 'Arquitecto de Sistemas',
      calloutBody: 'Disenando la base de futuras experiencias digitales.',
      skills: ['Desarrollo Web', 'Sistemas', 'IoT', 'Game Dev'],
    },
    projects: {
      title: 'Proyectos Destacados',
      intro: 'Trabajos seleccionados que muestran profundidad tecnica y criterio visual.',
      repoLabel: 'REPOSITORIO EN GITHUB',
      repoAria: 'Abrir repositorio de {projectName}',
    },
    contact: {
      title: 'Construyamos algo.',
      intro: 'Disponible para colaboraciones, diseno de sistemas y retos tecnicos complejos.',
      labels: {
        email: 'Correo',
        github: 'GitHub',
        linkedin: 'LinkedIn',
      },
      form: {
        nameLabel: 'Tu nombre',
        namePlaceholder: 'Tu nombre',
        emailLabel: 'Correo electronico',
        emailPlaceholder: 'tu@correo.com',
        messageLabel: 'Mensaje',
        messagePlaceholder: 'Cuentame sobre tu proyecto...',
        submit: 'ENVIAR MENSAJE',
      },
      mailto: {
        subjectPrefix: 'Consulta de portafolio de',
        bodyName: 'Nombre',
        bodyEmail: 'Correo',
      },
      aria: {
        email: 'Enviar correo a {value}',
        github: 'Abrir perfil de GitHub',
        linkedin: 'Abrir perfil de LinkedIn',
      },
    },
    footer: {
      tagline: 'Construido para la era obsidiana.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        playStore: 'Play Store',
        email: 'Correo',
      },
    },
    ui: {
      skipToContent: 'Saltar al contenido',
      hireMe: 'Contactame',
      jumpToContact: 'Ir a la seccion de contacto',
      homeAria: 'Inicio de ByteShark',
      languageLabel: 'Idioma',
      localeLabels: {
        es: 'ES',
        en: 'EN',
      },
    },
  },
  en: {
    seo: {
      title: 'ByteShark | Angel Arenas Pati\u00f1o',
      description:
        'ByteShark portfolio focused on systems, apps, and digital experiences built with a builder mindset.',
    },
    navigation: [
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      eyebrow: 'ANGEL ARENAS PATI\u00d1O',
      title: 'ByteShark',
      description:
        'Building systems, apps and digital experiences with a builder mindset.',
      terminalLines: [
        '> INITIALIZING PORTFOLIO_V4.0',
        '> LOADING ASSETS...',
        '> SYSTEMS ONLINE',
        '> WELCOME, USER',
      ],
      primaryCta: 'View Projects',
      secondaryCta: 'Contact',
    },
    about: {
      title: 'The Builder Mindset',
      body:
        'I do not just write code; I architect solutions. From high-performance web applications to intricate IoT ecosystems and immersive game environments, my approach is rooted in the Builder Mindset: understanding the core problem and building the most efficient, scalable, and elegant solution possible.',
      calloutTitle: 'Systems Architect',
      calloutBody: 'Designing the backbone of future digital experiences.',
      skills: ['Web Dev', 'Systems', 'IoT', 'Game Dev'],
    },
    projects: {
      title: 'Featured Projects',
      intro: 'Selected works demonstrating technical depth and aesthetic precision.',
      repoLabel: 'GITHUB REPOSITORY',
      repoAria: 'Open {projectName} repository',
    },
    contact: {
      title: "Let's build something.",
      intro: 'Open for collaborations, system designs, or complex technical challenges.',
      labels: {
        email: 'Email',
        github: 'GitHub',
        linkedin: 'LinkedIn',
      },
      form: {
        nameLabel: 'Your Name',
        namePlaceholder: 'John Doe',
        emailLabel: 'Email Address',
        emailPlaceholder: 'john@example.com',
        messageLabel: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        submit: 'SEND MESSAGE',
      },
      mailto: {
        subjectPrefix: 'Portfolio inquiry from',
        bodyName: 'Name',
        bodyEmail: 'Email',
      },
      aria: {
        email: 'Email {value}',
        github: 'Open GitHub profile',
        linkedin: 'Open LinkedIn profile',
      },
    },
    footer: {
      tagline: 'Built for the obsidian era.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        playStore: 'Play Store',
        email: 'Email',
      },
    },
    ui: {
      skipToContent: 'Skip to content',
      hireMe: 'Hire Me',
      jumpToContact: 'Jump to contact section',
      homeAria: 'ByteShark home',
      languageLabel: 'Language',
      localeLabels: {
        es: 'ES',
        en: 'EN',
      },
    },
  },
};

export const siteConfig = {
  defaultLocale,
  supportedLocales,
  brand: {
    name: 'ByteShark',
    owner: 'Angel Arenas Pati\u00f1o',
    initials: 'AA',
    established: 'EST. 2024',
    logoIcon: '/assets/images/byteshark_graphic_logo_google.png',
    logoMark: '/assets/images/byteshark_graphic_logo.png',
  },
  seo: {
    siteUrl: 'https://byteshark.dev/',
    ogImagePath: '/assets/images/byteshark_graphic_logo_google.png',
  },
  links: {
    primaryCta: '#projects',
    hireMe: '#contact',
    github: 'https://github.com/byteshark-dev',
    linkedin: 'https://www.linkedin.com/in/angel-arenas-pati%C3%B1o-534372402/',
    playStore: 'https://play.google.com/store/apps/dev?id=7017575535426186313',
    email: 'mailto:byteshark098@gmail.com',
  },
  contactInfo: {
    email: 'byteshark098@gmail.com',
    githubLabel: 'github.com/byteshark-dev',
    linkedinLabel: 'linkedin.com/in/angel-arenas-pati%C3%B1o-534372402',
  },
  localizedContent,
};

export function getSiteContent(locale = defaultLocale) {
  const activeLocale = localizedContent[locale] ? locale : defaultLocale;
  const copy = localizedContent[activeLocale];

  return {
    ...siteConfig,
    locale: activeLocale,
    seo: {
      ...siteConfig.seo,
      ...copy.seo,
    },
    navigation: copy.navigation,
    hero: copy.hero,
    about: copy.about,
    projects: copy.projects,
    contact: {
      ...siteConfig.contactInfo,
      ...copy.contact,
    },
    footer: {
      copyright: '\u00a9 2024 ByteShark.',
      ...copy.footer,
    },
    ui: copy.ui,
  };
}
