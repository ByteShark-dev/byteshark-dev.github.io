export const defaultLocale = 'es';
export const supportedLocales = ['es', 'en'];

const buildWhatsAppUrl = (locale) => {
  const messages = siteConfig.links.whatsappTemplates;

  return `https://api.whatsapp.com/send?phone=${siteConfig.links.whatsappPhone}&text=${encodeURIComponent(messages[locale] ?? messages.es)}`;
};

const localizedContent = {
  es: {
    navigation: [
      { label: 'Inicio', section: 'home' },
      { label: 'Servicios', section: 'services' },
      { label: 'Casos reales', section: 'proof' },
      { label: 'Aphidex', page: 'aphidex' },
      { label: 'Contacto', section: 'contact' },
    ],
    footer: {
      tagline: 'Software para la siguiente era',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        playStoreDeveloper: 'Google Play',
        email: 'Correo',
      },
    },
    ui: {
      skipToContent: 'Saltar al contenido',
      homeAria: 'Inicio de ByteShark',
      languageLabel: 'Idioma',
      menuLabel: 'Abrir navegacion',
      closeMenuLabel: 'Cerrar navegacion',
      menuPanelTitle: 'Menu',
      mobileHeaderCta: 'Contacto',
      whatsappShortcut: 'WhatsApp',
      whatsappShortcutAria: 'Enviar mensaje por WhatsApp a ByteShark',
      localeLabels: {
        es: 'ES',
        en: 'EN',
      },
      pageLead: 'Inicio',
    },
    home: {
      seo: {
        title: 'ByteShark | Sitios web, apps y sistemas digitales',
        description:
          'ByteShark crea sitios web, apps y sistemas digitales para negocios que quieren verse profesionales, vender mas y operar mejor.',
      },
      hero: {
        eyebrow: 'ESTUDIO DIGITAL PARA NEGOCIOS EN CRECIMIENTO',
        title: 'Sitios web, apps y sistemas que hacen que tu negocio se vea serio.',
        description:
          'ByteShark crea sitios web, apps y sistemas digitales para negocios que quieren verse profesionales, vender mas y operar mejor.',
        primaryCta: 'Solicitar cotizacion',
        secondaryCta: 'Ver casos reales',
        bullets: [
          'Sitios web comerciales y landing pages listas para vender.',
          'Apps y MVPs con arquitectura real, no demos de portafolio.',
          'Sistemas internos para citas, pedidos, dashboards y operaciones.',
        ],
        statusCardTitle: 'Capacidad de entrega',
        statusCardBody:
          'Diseno, frontend, arquitectura y publicaciones reales para negocios que necesitan velocidad sin verse improvisados.',
        statusHighlights: [
          {
            label: 'Enfoque',
            value: 'Claridad comercial',
          },
          {
            label: 'Desarrollo',
            value: 'Sitios web, apps y sistemas',
          },
          {
            label: 'Metodo',
            value: 'Diseno premium. Ingenieria lista para uso real.',
          },
        ],
      },
      sectionEyebrows: {
        problems: 'PROBLEMAS QUE RESOLVEMOS',
        services: 'SERVICIOS',
        proof: 'CASOS REALES',
        contact: 'CONTACTO',
      },
      problems: {
        title: 'Problemas que ByteShark resuelve',
        intro:
          'Cuando la operacion depende de mensajes sueltos, procesos manuales o una web vieja, el negocio pierde confianza y tiempo.',
        items: [
          {
            icon: 'storefront',
            title: 'Tu negocio no se ve profesional online',
            body: 'Creamos presencia digital clara, moderna y alineada a una marca que quiere vender en serio.',
          },
          {
            icon: 'chat',
            title: 'Todo termina en WhatsApp',
            body: 'Reducimos preguntas repetidas con paginas, formularios y flujos que explican, filtran y convierten mejor.',
          },
          {
            icon: 'calendar_month',
            title: 'No existe un sistema para citas, pedidos o procesos',
            body: 'Disenamos herramientas operativas para reservas, paneles internos, inventario y automatizaciones utiles.',
          },
          {
            icon: 'speed',
            title: 'La web actual es lenta, vieja o no convierte',
            body: 'Replanteamos contenido, estructura y rendimiento para que la experiencia se sienta premium y confiable.',
          },
          {
            icon: 'phonelink_setup',
            title: 'Hay una idea de app, pero falta convertirla en MVP',
            body: 'Bajamos ideas a producto usable, con foco en arquitectura, lanzamiento y mantenimiento real.',
          },
        ],
      },
      services: {
        title: 'Servicios',
        intro:
          'Cada servicio parte del mismo principio: resolver un problema comercial con una experiencia clara y una base tecnica mantenible.',
        chipLabel: 'Servicio',
        items: [
          {
            icon: 'rocket_launch',
            title: 'Web Express',
            description: 'Landing page rapida para negocios, servicios o campanas que necesitan salir ya.',
            benefits: [
              'Mensaje comercial claro',
              'CTA a WhatsApp o formulario',
              'Entrega enfocada en velocidad',
            ],
            cta: 'Cotizar Web Express',
          },
          {
            icon: 'language',
            title: 'Web Pro',
            description: 'Sitio completo con secciones, SEO base, formulario, integracion con WhatsApp y estructura escalable.',
            benefits: [
              'Arquitectura de contenido solida',
              'SEO tecnico basico',
              'Mejor soporte para ventas y confianza',
            ],
            cta: 'Cotizar Web Pro',
          },
          {
            icon: 'developer_board',
            title: 'Sistema a medida',
            description: 'Reservas, inventario, dashboards, paneles internos o automatizaciones para operar mejor.',
            benefits: [
              'Menos pasos manuales',
              'Informacion centralizada',
              'Flujos adaptados a tu operacion',
            ],
            cta: 'Cotizar sistema',
          },
          {
            icon: 'smartphone',
            title: 'App / Producto digital',
            description: 'Apps moviles, MVPs y herramientas digitales con criterio de producto y despliegue real.',
            benefits: [
              'MVP con foco',
              'Arquitectura lista para crecer',
              'Publicacion y mantenimiento',
            ],
            cta: 'Cotizar app',
          },
        ],
      },
      proof: {
        title: 'Casos reales',
        intro:
          'Trabajo aplicado en productos publicados y proyectos con uso real, no ejercicios inventados para llenar un portfolio.',
        items: [
          {
            name: 'Aphidex',
            eyebrow: 'APP PUBLICADA',
            description:
              'App publicada para la comunidad de Grounded, disponible en Google Play y App Store, con soporte multilenguaje, datos offline y monetizacion integrada.',
            highlights: [
              'Publicada en Google Play',
              'Disponible en iPhone',
              'Flutter',
              'Datos offline',
              'ES / EN / RU',
              'Preparacion para Grounded 2',
              'Integracion con AdMob',
              'Actualizaciones reales',
            ],
            image: '/assets/images/Aphidex_logo.webp',
            imageAlt: 'Logo de Aphidex.',
            primaryCtaLabel: 'Ver pagina de Aphidex',
            primaryCtaHref: '/aphidex.html',
            secondaryCtaLabel: 'Ver en Google Play',
            secondaryCtaHref: 'https://play.google.com/store/apps/details?id=com.byteshark.aphidex&hl=es_419',
          },
          {
            name: 'Reciclando Goles',
            eyebrow: 'WEB PUBLICA + IMPACTO SOCIAL',
            description:
              'Proyecto social con web publica, branding digital y presencia online para recolectar reciclaje y apoyar una causa benefica.',
            highlights: [
              'Web real publicada',
              'Branding y comunicacion',
              'Proyecto con impacto comunitario',
              'Enfoque en transparencia y difusion',
            ],
            image: '',
            imageAlt: '',
            primaryCtaLabel: 'Ver sitio publicado',
            primaryCtaHref: 'https://reciclando-goles.web.app',
            secondaryCtaLabel: 'Ver repositorio',
            secondaryCtaHref: 'https://github.com/ByteShark-dev/reciclando-goles-web',
          },
        ],
      },
      contact: {
        title: 'Tu negocio necesita una presencia que venda y una operacion que escale.',
        intro:
          'ByteShark trabaja en sitios web, apps y sistemas con criterio de producto, ejecucion limpia y foco en resultados reales.',
        checklistTitle: 'Ideal para negocios que necesitan:',
        checklist: [
          'Lanzar rapido sin verse improvisados',
          'Ordenar reservas, pedidos o procesos internos',
          'Presentar mejor su marca frente a nuevos clientes',
          'Convertir una idea de app en un MVP funcional',
        ],
        primaryCta: 'Solicitar cotizacion',
        secondaryCta: 'Ver casos reales',
        supportTitle: 'Canales directos',
        supportCopy: 'WhatsApp directo, correo y perfiles publicos para validar trabajo real.',
        touchpoints: {
          emailLabel: 'Correo',
          githubLabel: 'GitHub',
          linkedinLabel: 'LinkedIn',
          githubValue: '@byteshark-dev',
          linkedinValue: 'Angel Arenas Patino',
        },
      },
    },
    aphidex: {
      seo: {
        title: 'Aphidex | App complementaria de Grounded',
        description:
          'Descarga Aphidex, una app complementaria no oficial de Grounded con debilidades, resistencias, ataques, efectos y datos offline para Grounded y Grounded 2.',
      },
      labels: {
        overview: 'RESUMEN',
        playerValue: 'VALOR PARA EL JUGADOR',
        searchContent: 'CONTENIDO SEO',
        searchTitle: 'Contenido util para jugadores que buscan ayuda sobre Grounded',
        searchIntro:
          'La pagina esta estructurada para posicionar con lenguaje natural sin dejar de explicar con claridad lo que hace la app.',
        features: 'FUNCIONES',
        screenshots: 'CAPTURAS',
        stack: 'STACK',
        monetization: 'MONETIZACION',
        proof: 'LO QUE DEMUESTRA',
        legal: 'AVISO LEGAL',
        finalCta: 'BYTE SHARK',
      },
      hero: {
        eyebrow: 'APP COMPLEMENTARIA DE GROUNDED \u00B7 ANDROID + IOS',
        title: 'Aphidex - App complementaria de Grounded',
        description:
          'Una app complementaria movil para Grounded y Grounded 2, ahora disponible en Android y iPhone, con debilidades, resistencias, ataques, efectos y datos de supervivencia disponibles offline.',
        primaryCta: 'Descargar en Google Play',
        storeCta: 'Descargar en App Store',
        secondaryCta: 'Quieres una app como Aphidex?',
        badgeAlt: 'Insignia de Google Play para Aphidex',
        storeBadgeAlt: 'Insignia de App Store para Aphidex',
        storeNote: 'Ahora disponible en Android y iOS.',
        sideCardTitle: 'Construida y publicada por ByteShark',
        sideCardBody:
          'Consulta criaturas mas rapido, entiende mejor sus debilidades y toma mejores decisiones de combate sin salirte de la partida, ahora tambien desde iPhone.',
      },
      overview: {
        title: 'Que es Aphidex?',
        body:
          'Aphidex es una app complementaria no oficial para jugadores de Grounded. Te ayuda a consultar debilidades, resistencias, tipos de ataque, niveles, efectos e informacion util de combate sin tener que buscar en multiples paginas.',
      },
      problem: {
        title: 'Que problema resuelve?',
        body:
          'Los jugadores de Grounded suelen saltar entre wikis, videos y notas dispersas para preparar combates. Aphidex concentra la informacion en una referencia movil que funciona offline y sigue siendo rapida cuando necesitas una respuesta en medio de una partida.',
      },
      searchSections: [
        {
          title: 'Debilidades y resistencias de criaturas en Grounded',
          body:
            'Aphidex ayuda a revisar que debilidades y resistencias importan antes de pelear. En lugar de abrir varias pestanas, puedes consultar tipos de dano, resistencias y counters en una sola guia movil pensada para decisiones rapidas.',
        },
        {
          title: 'Guia de criaturas para Grounded 2',
          body:
            'La app se esta preparando para soportar contenido de Grounded 2 para que el handbook pueda crecer con nuevas criaturas, encuentros y necesidades de la comunidad. La capa de datos esta estructurada para expandirse sin reconstruir el producto desde cero.',
        },
        {
          title: 'Handbook offline de Grounded',
          body:
            'Aphidex esta pensada como un handbook offline de Grounded. Los datos de criaturas siguen disponibles sin depender de un navegador ni de una conexion movil inestable mientras juegas o planeas builds.',
        },
        {
          title: 'Ataques y efectos de insectos en Grounded',
          body:
            'Ademas de debilidades de criaturas, la app ayuda a entender ataques de insectos, efectos de combate y otra informacion que cambia como preparas equipo, curacion y estrategia.',
        },
      ],
      features: {
        title: 'Funciones',
        items: [
          'Debilidades y resistencias de criaturas',
          'Tipos de ataque y datos de combate',
          'Soporte para Grounded 1 y Grounded 2',
          'Disponible en Android y iOS',
          'Acceso offline',
          'Interfaz multilenguaje: espanol, ingles y ruso',
          'Busqueda rapida y filtros',
          'Actualizaciones regulares',
        ],
      },
      screenshots: {
        title: 'Capturas',
        items: [
          {
            src: '/assets/aphidex/IMG_20260428_231511.jpg',
            alt: 'Pantalla principal de Aphidex con busqueda y filtros de enemigos.',
            caption: 'Busca criaturas y filtra enemigos en segundos',
          },
          {
            src: '/assets/aphidex/IMG_20260428_231525.jpg',
            alt: 'Pantalla de detalle de criatura en Aphidex con descripcion, vida y debilidades.',
            caption: 'Revisa vida, descripcion y debilidades antes de pelear',
          },
          {
            src: '/assets/aphidex/IMG_20260428_231537.jpg',
            alt: 'Pantalla de enciclopedia de efectos en Aphidex.',
            caption: 'Entiende efectos y elementos sin abrir varias guias',
          },
        ],
      },
      architecture: {
        title: 'Por que mejora la experiencia',
        intro:
          'Aphidex esta pensada para ayudarte a jugar con mas contexto, menos busqueda externa y decisiones mas rapidas dentro de Grounded.',
        items: [
          {
            title: 'Menos tiempo buscando',
            body: 'La informacion importante esta ordenada para que llegues rapido a debilidades, resistencias y datos clave sin perder ritmo.',
          },
          {
            title: 'Mejores decisiones de combate',
            body: 'Te ayuda a preparar armas, efectos y estrategias con mas claridad antes de entrar a una pelea complicada.',
          },
          {
            title: 'Todo disponible offline',
            body: 'Puedes consultar la app aunque no quieras depender de abrir el navegador o cargar varias paginas mientras juegas.',
          },
          {
            title: 'Mas comoda para mas jugadores',
            body: 'La interfaz multilenguaje hace que la informacion sea mas clara para jugadores en espanol, ingles y ruso.',
          },
          {
            title: 'Lista para seguir creciendo',
            body: 'La app esta preparada para sumar mas criaturas, efectos y contenido nuevo conforme evoluciona Grounded 2.',
          },
          {
            title: 'Actualizaciones reales',
            body: 'No es un mockup: es una app publicada que puede mantenerse, mejorar y recibir nuevas versiones con contenido util.',
          },
        ],
      },
      monetization: {
        title: 'Monetizacion',
        body:
          'Aphidex integra AdMob como parte del producto publicado en Android y la base publica del proyecto tambien deja listo `app-ads.txt` para mantener correcta la autorizacion del inventario publicitario desde el dominio companion.',
      },
      proof: {
        title: 'Lo que demuestra este proyecto',
        items: [
          'Desarrollo mobile real',
          'Publicacion en tienda y flujo de release',
          'Mantenimiento y actualizaciones',
          'Internacionalizacion',
          'Arquitectura de datos escalable',
          'Monetizacion con AdMob',
        ],
      },
      disclaimer:
        'Aphidex es una app complementaria no oficial hecha por fans y no esta afiliada, avalada ni patrocinada por Obsidian Entertainment, Xbox Game Studios o Microsoft.',
      finalCta: {
        title: 'Quieres una app como Aphidex?',
        body:
          'ByteShark puede ayudarte a convertir una idea clara de producto en una app real con arquitectura, UX y criterios de despliegue desde el primer dia.',
        primary: 'Quiero una app como Aphidex',
        secondary: 'Ver servicios de ByteShark',
      },
    },
  },
  en: {
    navigation: [
      { label: 'Home', section: 'home' },
      { label: 'Services', section: 'services' },
      { label: 'Proof of Work', section: 'proof' },
      { label: 'Aphidex', page: 'aphidex' },
      { label: 'Contact', section: 'contact' },
    ],
    footer: {
      tagline: 'Software built for the next era',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        playStoreDeveloper: 'Google Play',
        email: 'Email',
      },
    },
    ui: {
      skipToContent: 'Skip to content',
      homeAria: 'ByteShark home',
      languageLabel: 'Language',
      menuLabel: 'Open navigation',
      closeMenuLabel: 'Close navigation',
      menuPanelTitle: 'Menu',
      mobileHeaderCta: 'Contact',
      whatsappShortcut: 'WhatsApp',
      whatsappShortcutAria: 'Send a WhatsApp message to ByteShark',
      localeLabels: {
        es: 'ES',
        en: 'EN',
      },
      pageLead: 'Home',
    },
    home: {
      seo: {
        title: 'ByteShark | Websites, Apps & Digital Systems',
        description:
          'ByteShark builds modern websites, mobile apps and digital systems for businesses that want to look professional, sell more and operate better.',
      },
      hero: {
        eyebrow: 'DIGITAL STUDIO FOR GROWING BUSINESSES',
        title: 'Websites, apps and systems that make your business look serious.',
        description:
          'ByteShark creates websites, apps and digital systems for businesses that want to look professional, sell more and operate better.',
        primaryCta: 'Request a quote',
        secondaryCta: 'View real projects',
        bullets: [
          'Commercial websites and landing pages built to convert.',
          'Apps and MVPs with real architecture, not portfolio demos.',
          'Internal systems for bookings, orders, dashboards and operations.',
        ],
        statusCardTitle: 'Delivery stack',
        statusCardBody:
          'Design, frontend, architecture and real releases for businesses that need speed without looking improvised.',
        statusHighlights: [
          {
            label: 'Focus',
            value: 'Commercial clarity',
          },
          {
            label: 'Build',
            value: 'Websites, apps and systems',
          },
          {
            label: 'Approach',
            value: 'Design that looks premium. Engineering that survives real use.',
          },
        ],
      },
      sectionEyebrows: {
        problems: 'PROBLEMS WE FIX',
        services: 'SERVICES',
        proof: 'PROOF OF WORK',
        contact: 'CONTACT',
      },
      problems: {
        title: 'Problems ByteShark solves',
        intro:
          'When operations depend on scattered messages, manual processes or an outdated website, the business loses trust and time.',
        items: [
          {
            icon: 'storefront',
            title: 'Your business does not look professional online',
            body: 'We create a digital presence that feels modern, intentional and aligned with a business that wants to sell seriously.',
          },
          {
            icon: 'chat',
            title: 'Everything ends up in WhatsApp',
            body: 'We reduce repetitive questions with pages, forms and flows that explain better, filter leads and convert more clearly.',
          },
          {
            icon: 'calendar_month',
            title: 'There is no system for bookings, orders or processes',
            body: 'We build useful operational tools for reservations, internal panels, inventory and automations.',
          },
          {
            icon: 'speed',
            title: 'The current website is slow, old or not converting',
            body: 'We rethink content, structure and performance so the experience feels premium and trustworthy.',
          },
          {
            icon: 'phonelink_setup',
            title: 'There is an app idea, but no MVP yet',
            body: 'We turn product ideas into usable releases with focus on architecture, launch and ongoing maintenance.',
          },
        ],
      },
      services: {
        title: 'Services',
        intro:
          'Every service starts from the same principle: solve a business problem with a clear experience and a maintainable technical foundation.',
        chipLabel: 'Service',
        items: [
          {
            icon: 'rocket_launch',
            title: 'Web Express',
            description: 'A fast landing page for businesses, services or campaigns that need to launch now.',
            benefits: [
              'Clear commercial message',
              'WhatsApp or form CTA',
              'Delivery optimized for speed',
            ],
            cta: 'Quote Web Express',
          },
          {
            icon: 'language',
            title: 'Web Pro',
            description: 'A complete website with sections, basic SEO, forms, WhatsApp integration and scalable structure.',
            benefits: [
              'Solid content architecture',
              'Basic technical SEO',
              'Better support for sales and trust',
            ],
            cta: 'Quote Web Pro',
          },
          {
            icon: 'developer_board',
            title: 'Custom system',
            description: 'Bookings, inventory, dashboards, internal panels or automations built around your operation.',
            benefits: [
              'Fewer manual steps',
              'Centralized information',
              'Flows adapted to your business',
            ],
            cta: 'Quote a system',
          },
          {
            icon: 'smartphone',
            title: 'App / Digital product',
            description: 'Mobile apps, MVPs and digital tools built with product criteria and real deployment in mind.',
            benefits: [
              'Focused MVP scope',
              'Architecture ready to scale',
              'Publishing and maintenance',
            ],
            cta: 'Quote an app',
          },
        ],
      },
      proof: {
        title: 'Proof of Work',
        intro:
          'Applied work on shipped products and real-use projects, not invented exercises created to fill a portfolio.',
        items: [
          {
            name: 'Aphidex',
            eyebrow: 'PUBLISHED APP',
            description:
              'Published app for the Grounded community, now available on Google Play and the App Store, with multilingual support, offline data and integrated monetization.',
            highlights: [
              'Published on Google Play',
              'Available on iPhone',
              'Flutter',
              'Offline data',
              'ES / EN / RU',
              'Grounded 2 preparation',
              'AdMob integration',
              'Real updates',
            ],
            image: '/assets/images/Aphidex_logo.webp',
            imageAlt: 'Aphidex logo.',
            primaryCtaLabel: 'View Aphidex page',
            primaryCtaHref: '/aphidex.html',
            secondaryCtaLabel: 'View on Google Play',
            secondaryCtaHref: 'https://play.google.com/store/apps/details?id=com.byteshark.aphidex&hl=es_419',
          },
          {
            name: 'Reciclando Goles',
            eyebrow: 'PUBLIC WEBSITE + SOCIAL IMPACT',
            description:
              'Social initiative with a public website, digital branding and online presence to collect recycling and support a charitable cause.',
            highlights: [
              'Real published website',
              'Branding and communication',
              'Community impact project',
              'Transparency and outreach focus',
            ],
            image: '',
            imageAlt: '',
            primaryCtaLabel: 'View live website',
            primaryCtaHref: 'https://reciclando-goles.web.app',
            secondaryCtaLabel: 'View repository',
            secondaryCtaHref: 'https://github.com/ByteShark-dev/reciclando-goles-web',
          },
        ],
      },
      contact: {
        title: 'Your business needs a presence that sells and an operation that scales.',
        intro:
          'ByteShark works on websites, apps and systems with product thinking, clean execution and focus on real outcomes.',
        checklistTitle: 'Ideal for businesses that need to:',
        checklist: [
          'Launch fast without looking improvised',
          'Organize bookings, orders or internal workflows',
          'Present a stronger brand to new clients',
          'Turn an app idea into a functional MVP',
        ],
        primaryCta: 'Request a quote',
        secondaryCta: 'View real projects',
        supportTitle: 'Direct channels',
        supportCopy: 'Direct WhatsApp, email and public profiles so prospects can validate real work.',
        touchpoints: {
          emailLabel: 'Email',
          githubLabel: 'GitHub',
          linkedinLabel: 'LinkedIn',
          githubValue: '@byteshark-dev',
          linkedinValue: 'Angel Arenas Patino',
        },
      },
    },
    aphidex: {
      seo: {
        title: 'Aphidex | Grounded Handbook App',
        description:
          'Download Aphidex, an unofficial Grounded companion app with creature weaknesses, resistances, attacks, effects and offline handbook data for Grounded and Grounded 2.',
      },
      labels: {
        overview: 'OVERVIEW',
        playerValue: 'PLAYER VALUE',
        searchContent: 'SEO LANDING CONTENT',
        searchTitle: 'Useful content for players searching for Grounded help',
        searchIntro:
          'The page is structured to rank with natural language while still explaining what the app actually does.',
        features: 'FEATURES',
        screenshots: 'SCREENSHOTS',
        stack: 'STACK',
        monetization: 'MONETIZATION',
        proof: 'PROOF',
        legal: 'LEGAL DISCLAIMER',
        finalCta: 'BYTE SHARK',
      },
      hero: {
        eyebrow: 'GROUNDED COMPANION APP \u00B7 ANDROID + IOS',
        title: 'Aphidex - Grounded Handbook App',
        description:
          'A mobile companion app for Grounded and Grounded 2, now available on Android and iPhone, with creature weaknesses, resistances, attacks, effects and survival data available offline.',
        primaryCta: 'Download on Google Play',
        storeCta: 'Download on the App Store',
        secondaryCta: 'Want an app like Aphidex?',
        badgeAlt: 'Google Play badge for Aphidex',
        storeBadgeAlt: 'App Store badge for Aphidex',
        storeNote: 'Now available on Android and iOS.',
        sideCardTitle: 'Built and shipped by ByteShark',
        sideCardBody:
          'Check creatures faster, understand weaknesses better and make smarter combat decisions without leaving your session, now also on iPhone.',
      },
      overview: {
        title: 'What is Aphidex?',
        body:
          'Aphidex is an unofficial companion handbook for Grounded players. It helps you check creature weaknesses, resistances, attack types, tiers, effects and useful combat information without needing to search across multiple pages.',
      },
      problem: {
        title: 'What problem does it solve?',
        body:
          'Grounded players often jump between wikis, videos and scattered notes to prepare for fights. Aphidex puts combat data in one mobile reference that works offline and stays fast when you need an answer mid-session.',
      },
      searchSections: [
        {
          title: 'Grounded Creature Weaknesses and Resistances',
          body:
            'Aphidex helps players check which creature weaknesses and resistances matter before combat. Instead of opening multiple tabs, you can review damage types, resistances and counters in a single mobile guide built for quick decisions.',
        },
        {
          title: 'Grounded 2 Creature Guide',
          body:
            'The app is being prepared to support Grounded 2 content so the handbook can grow with new creatures, combat encounters and community needs. The data layer is structured to expand without rebuilding the product from scratch.',
        },
        {
          title: 'Offline Grounded Handbook',
          body:
            'Aphidex is designed as an offline Grounded handbook. Creature data stays available without needing to load a browser or depend on unstable mobile connectivity while playing or planning builds.',
        },
        {
          title: 'Grounded Insect Attacks and Effects',
          body:
            'Beyond creature weaknesses, the app helps players understand insect attacks, combat effects and other information that changes how you approach equipment, healing and strategy.',
        },
      ],
      features: {
        title: 'Features',
        items: [
          'Creature weaknesses and resistances',
          'Attack types and combat data',
          'Grounded 1 and Grounded 2 support',
          'Available on Android and iOS',
          'Offline access',
          'Multilanguage interface: Spanish, English and Russian',
          'Fast search and filtering',
          'Regular updates',
        ],
      },
      screenshots: {
        title: 'Screenshots',
        items: [
          {
            src: '/assets/aphidex/IMG_20260428_231511.jpg',
            alt: 'Aphidex main screen with enemy search and filters.',
            caption: 'Find enemies and filter creatures fast',
          },
          {
            src: '/assets/aphidex/IMG_20260428_231525.jpg',
            alt: 'Aphidex creature detail screen with description, health and weaknesses.',
            caption: 'Review health, description and weaknesses before a fight',
          },
          {
            src: '/assets/aphidex/IMG_20260428_231537.jpg',
            alt: 'Aphidex effects encyclopedia screen.',
            caption: 'Understand effects and elements without opening multiple guides',
          },
        ],
      },
      architecture: {
        title: 'Why it improves the experience',
        intro:
          'Aphidex is built to help players move faster, compare combat options more clearly and keep useful game knowledge in one place.',
        items: [
          {
            title: 'Less time searching',
            body: 'Important creature data is organized so you can get to weaknesses, resistances and combat notes without breaking your flow.',
          },
          {
            title: 'Better combat choices',
            body: 'It helps players prepare weapons, effects and strategies with more confidence before difficult encounters.',
          },
          {
            title: 'Offline access',
            body: 'Core information stays available even when you do not want to rely on opening a browser or loading external pages mid-session.',
          },
          {
            title: 'More comfortable for more players',
            body: 'The multilingual interface makes the app easier to use for Spanish, English and Russian players.',
          },
          {
            title: 'Ready to grow',
            body: 'The content model can keep expanding with more creatures, effects and Grounded 2 information over time.',
          },
          {
            title: 'Real updates',
            body: 'This is a published product that can keep improving with new releases instead of staying as a one-off prototype.',
          },
        ],
      },
      monetization: {
        title: 'Monetization',
        body:
          'Aphidex integrates AdMob as part of the shipped Android product, and the public companion site also keeps `app-ads.txt` in place so ad inventory authorization is correctly published from the public domain.',
      },
      proof: {
        title: 'What this project demonstrates',
        items: [
          'Real mobile app development',
          'Store publication and release flow',
          'Ongoing maintenance and updates',
          'Internationalization',
          'Scalable data architecture',
          'Monetization with AdMob',
        ],
      },
      disclaimer:
        'Aphidex is an unofficial fan-made companion app and is not affiliated with, endorsed by, or sponsored by Obsidian Entertainment, Xbox Game Studios, or Microsoft.',
      finalCta: {
        title: 'Want an app like Aphidex?',
        body:
          'ByteShark can help you turn a focused product idea into a real mobile release with architecture, UX and deployment criteria from day one.',
        primary: 'Want an app like Aphidex?',
        secondary: 'View ByteShark services',
      },
    },
  },
};

export const siteConfig = {
  defaultLocale,
  supportedLocales,
  brand: {
    name: 'ByteShark',
    slogan: 'Software built for the next era',
    owner: 'Angel Arenas Patino',
    established: 'EST. 2024',
    logoIcon: '/assets/images/byteshark_graphic_logo.png',
    logoMark: '/assets/images/byteshark_graphic_logo_white.svg',
    logoNeutral: '/assets/images/byteshark_graphic_logo_google.png',
  },
  seo: {
    siteUrl: 'https://byteshark-dev.github.io/',
    defaultOgImagePath: '/assets/social/og-image.png',
    pages: {
      home: {
        path: '/',
        ogImagePath: '/assets/social/og-image.png',
        twitterCard: 'summary_large_image',
        ogType: 'website',
      },
      aphidex: {
        path: '/aphidex.html',
        ogImagePath: '/assets/images/project-aphidex.webp',
        twitterCard: 'summary_large_image',
        ogType: 'website',
      },
    },
  },
  links: {
    github: 'https://github.com/byteshark-dev',
    linkedin: 'https://www.linkedin.com/in/angel-arenas-pati%C3%B1o-534372402/',
    email: 'mailto:byteshark098@gmail.com',
    emailAddress: 'byteshark098@gmail.com',
    playStoreDeveloper: 'https://play.google.com/store/apps/dev?id=7017575535426186313',
    aphidexPlay: 'https://play.google.com/store/apps/details?id=com.byteshark.aphidex&hl=es_419',
    aphidexIos: 'https://apps.apple.com/mx/app/aphidex/id6766727089',
    reciclandoGoles: 'https://reciclando-goles.web.app',
    whatsappPhone: '524614220738',
    whatsappTemplates: {
      es: 'Hola Angel, vi tu pagina y me gustaria platicar sobre mi proyecto.',
      en: 'Hello Angel, I saw your website and would like to talk about my project.',
    },
    whatsappQuotePlaceholder:
      'https://api.whatsapp.com/send?phone=000000000000&text=Hello%20ByteShark%2C%20I%20want%20to%20request%20a%20quote%20for%20my%20project.',
  },
  assets: {
    playBadge: '/assets/google-play-badge.svg',
    appStoreBadge: '/assets/app-store-badge.svg',
    aphidexScreenshots: [
      '/assets/aphidex/screenshot-1.svg',
      '/assets/aphidex/screenshot-2.svg',
      '/assets/aphidex/screenshot-3.svg',
    ],
  },
  socialLinks: [
    'https://github.com/byteshark-dev',
    'https://www.linkedin.com/in/angel-arenas-pati%C3%B1o-534372402/',
    'https://play.google.com/store/apps/dev?id=7017575535426186313',
  ],
  localizedContent,
};

const staticLocaleByPage = {
  home: 'es',
  aphidex: 'es',
};

function getActiveLocale(locale) {
  return localizedContent[locale] ? locale : defaultLocale;
}

export function getStaticLocale(pageKey) {
  return staticLocaleByPage[pageKey] ?? defaultLocale;
}

export function getPageSeo(pageKey, locale = defaultLocale) {
  const activeLocale = getActiveLocale(locale);
  const pageCopy = localizedContent[activeLocale][pageKey];
  const pageSeo = siteConfig.seo.pages[pageKey];
  const pageUrl = new URL(pageSeo.path, siteConfig.seo.siteUrl).toString();

  return {
    ...pageSeo,
    ...pageCopy.seo,
    siteUrl: siteConfig.seo.siteUrl,
    pageUrl,
    ogImagePath: pageCopy.seo.ogImagePath ?? pageSeo.ogImagePath ?? siteConfig.seo.defaultOgImagePath,
  };
}

export function getPageStructuredData(pageKey, locale = defaultLocale) {
  const activeLocale = getActiveLocale(locale);
  const content = getPageContent(pageKey, activeLocale);
  const { brand, links, seo } = content;
  const absoluteOgImage = new URL(seo.ogImagePath, seo.siteUrl).toString();
  const organization = {
    '@type': 'Organization',
    name: brand.name,
    url: seo.siteUrl,
    logo: new URL(brand.logoIcon, seo.siteUrl).toString(),
    slogan: brand.slogan,
    sameAs: siteConfig.socialLinks,
  };

  const website = {
    '@type': 'WebSite',
    name: brand.name,
    url: seo.siteUrl,
    inLanguage: activeLocale,
    description: localizedContent[activeLocale].home.seo.description,
  };

  if (pageKey !== 'aphidex') {
    return {
      '@context': 'https://schema.org',
      '@graph': [organization, website],
    };
  }

  const appData = localizedContent[activeLocale].aphidex;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      website,
      {
        '@type': 'MobileApplication',
        name: 'Aphidex',
        operatingSystem: 'Android, iOS',
        applicationCategory: 'GameApplication',
        url: seo.pageUrl,
        downloadUrl: links.aphidexPlay,
        image: absoluteOgImage,
        sameAs: [links.aphidexPlay, links.aphidexIos],
        author: {
          '@type': 'Organization',
          name: brand.name,
        },
        publisher: {
          '@type': 'Organization',
          name: brand.name,
        },
        description: appData.seo.description,
        inLanguage: ['en', 'es', 'ru'],
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    ],
  };
}

export function getPageContent(pageKey, locale = defaultLocale) {
  const activeLocale = getActiveLocale(locale);
  const copy = localizedContent[activeLocale];

  return {
    ...siteConfig,
    brand: {
      ...siteConfig.brand,
      slogan: copy.footer.tagline,
    },
    locale: activeLocale,
    navigation: copy.navigation,
    footer: {
      copyright: '© 2026 ByteShark.',
      ...copy.footer,
    },
    ui: copy.ui,
    links: {
      ...siteConfig.links,
      whatsappQuote: buildWhatsAppUrl(activeLocale),
    },
    seo: getPageSeo(pageKey, activeLocale),
    pageKey,
    page: copy[pageKey],
  };
}
