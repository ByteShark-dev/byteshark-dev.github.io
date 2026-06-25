export const defaultLocale = 'es';
export const supportedLocales = ['es', 'en'];

const aphidexProjectUrl = '/aphidex/';
const aphidexCanonicalUrl = 'https://byteshark-dev.github.io/aphidex/';
const aphidexPlayUrl = 'https://play.google.com/store/apps/details?id=com.byteshark.aphidex&hl=es_419';
const aphidexIosUrl = 'https://apps.apple.com/mx/app/aphidex/id6766727089';
const transformandoMiSerUrl = 'https://transformandomiser.com';
const gmAsesoresUrl = 'https://gmasesoresennegocios.com';
const reciclandoGolesUrl = 'https://reciclando-goles.web.app';
const reciclandoGolesRepoUrl = 'https://github.com/ByteShark-dev/reciclando-goles-web';

const buildWhatsAppUrl = (locale) => {
  const messages = siteConfig.links.whatsappTemplates;

  return `https://api.whatsapp.com/send?phone=${siteConfig.links.whatsappPhone}&text=${encodeURIComponent(messages[locale] ?? messages.es)}`;
};

const localizedContent = {
  es: {
    navigation: [
      { label: 'Inicio', section: 'home' },
      { label: 'Servicios', section: 'services' },
      { label: 'Demos', section: 'demos' },
      { label: 'Casos reales', section: 'proof' },
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
    },
    collections: {
      realCases: [
        {
          slug: 'transformando-mi-ser',
          name: 'Transformando Mi Ser',
          category: 'Web para psicologia / marca personal',
          description:
            'Sitio profesional para presentar servicios, generar confianza y facilitar el contacto para agendar sesiones.',
          tags: ['Cliente real', 'Web publicada', 'Psicologia', 'Agenda y contacto'],
          accent: {
            from: '#7FDBFF',
            to: '#1E5AA8',
            halo: 'rgba(127, 219, 255, 0.24)',
          },
          ctaLinks: [
            {
              label: 'Ver sitio',
              href: transformandoMiSerUrl,
              external: true,
            },
          ],
        },
        {
          slug: 'gm-asesores-en-negocios',
          name: 'GM Asesores en Negocios',
          category: 'Web corporativa / despacho contable',
          description:
            'Sitio empresarial para presentar servicios contables, fiscales y de asesoria con una imagen mas profesional.',
          tags: ['Cliente real', 'Web publicada', 'Despacho contable', 'Servicios profesionales'],
          accent: {
            from: '#8FC0FF',
            to: '#C9A86A',
            halo: 'rgba(143, 192, 255, 0.22)',
          },
          ctaLinks: [
            {
              label: 'Ver sitio',
              href: gmAsesoresUrl,
              external: true,
            },
          ],
        },
        {
          slug: 'reciclando-goles',
          name: 'Reciclando Goles',
          category: 'Web publica + impacto social',
          description:
            'Proyecto social con web publica, branding digital y presencia online para recolectar reciclaje y apoyar una causa benefica.',
          tags: ['Proyecto real', 'Web publicada', 'Impacto social', 'Branding digital'],
          accent: {
            from: '#34D399',
            to: '#1E5AA8',
            halo: 'rgba(52, 211, 153, 0.22)',
          },
          ctaLinks: [
            {
              label: 'Ver sitio publicado',
              href: reciclandoGolesUrl,
              external: true,
            },
            {
              label: 'Ver repositorio',
              href: reciclandoGolesRepoUrl,
              external: true,
            },
          ],
        },
      ],
      commercialDemos: [
        {
          name: 'Barberia Premium',
          category: 'Servicios presenciales',
          description:
            'Base pensada para citas, horarios, ubicacion, promos y una imagen mas premium.',
          highlights: ['Servicios y precios', 'WhatsApp', 'Galeria'],
          href: 'https://byteshark-dev.github.io/demos/barberia/',
        },
        {
          name: 'Cafe / Restaurante',
          category: 'Comida y bebida',
          description:
            'Menu digital, promos, pedidos o reservas y presencia visual enfocada en conversion.',
          highlights: ['Menu digital', 'Promociones', 'Reservas o pedidos'],
          href: 'https://byteshark-dev.github.io/demos/cafe-restaurante/',
        },
        {
          name: 'Salud Profesional',
          category: 'Consulta y bienestar',
          description:
            'Perfil profesional, servicios, modalidad online o presencial y FAQ con tono confiable.',
          highlights: ['Presentacion profesional', 'Agenda por WhatsApp', 'FAQ'],
          href: 'https://byteshark-dev.github.io/demos/salud-profesional/',
        },
        {
          name: 'Despacho Contable',
          category: 'Fiscal y administrativo',
          description:
            'Servicios fiscales, beneficios, FAQ y una presencia seria para captar mejores leads.',
          highlights: ['Servicios fiscales', 'Beneficios', 'Seccion de confianza'],
          href: 'https://byteshark-dev.github.io/demos/despacho-contable/',
        },
      ],
      ownSoftware: [
        {
          slug: 'aphidex',
          name: 'Aphidex',
          category: 'App destacada',
          description: 'Companion app para Grounded y Grounded 2.',
          tags: ['Android', 'iOS', 'ES / EN / RU', 'Grounded 2'],
          image: '/assets/images/Aphidex_logo.webp',
          imageAlt: 'Logo de Aphidex.',
          ctaLinks: [
            {
              label: 'Ver proyecto',
              href: aphidexProjectUrl,
            },
            {
              label: 'Google Play',
              href: aphidexPlayUrl,
              external: true,
            },
            {
              label: 'App Store',
              href: aphidexIosUrl,
              external: true,
            },
          ],
        },
      ],
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
        demos: 'DEMOS ADAPTABLES',
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
      demos: {
        title: 'Demos adaptables para negocios',
        intro:
          'Antes de construir una pagina totalmente a medida, ByteShark puede aterrizar tu giro sobre una base comercial clara para mostrar como podria verse tu negocio online.',
        note:
          'Estas demos son ejemplos conceptuales y editables. No se presentan como casos reales ni como clientes activos.',
        primaryCta: 'Explorar catalogo de demos',
        secondaryCta: 'Pedir una version para mi negocio',
      },
      proof: {
        title: 'Casos reales, demos y software propio',
        intro:
          'Un resumen compacto para validar trabajo publicado, explorar propuestas comerciales y ver productos propios sin convertir la home en catalogo.',
        realCases: {
          eyebrow: 'CASOS REALES',
          title: 'Casos reales publicados',
          description:
            'Sitios y proyectos reales desarrollados para clientes, marcas y campanas con presencia digital activa.',
          tags: ['Clientes reales', 'Web publicada', 'Marca profesional', 'Presencia digital'],
          primaryCta: 'Ver casos reales',
          secondaryCta: 'Hablar con ByteShark',
          mockupItems: ['Transformando Mi Ser', 'GM Asesores', 'Reciclando Goles'],
        },
        demosSummary: {
          eyebrow: 'DEMOS ADAPTABLES',
          title: 'Demos listas para adaptar',
          description:
            'Explora propuestas visuales y funcionales pensadas para distintos tipos de negocio.',
          tags: ['Landing pages', 'Agendas', 'ERP / CRM', 'Negocios locales'],
          primaryCta: 'Explorar demos',
        },
        ownSoftware: {
          eyebrow: 'SOFTWARE PROPIO',
          title: 'Apps y softwares propios',
          description:
            'Productos propios publicados o preparados para crecer como lineas independientes de ByteShark.',
        },
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
    cases: {
      seo: {
        title: 'Casos reales | ByteShark',
        description:
          'Proyectos publicados para clientes, marcas y campanas reales desarrollados por ByteShark.',
      },
      hero: {
        badge: 'Portafolio publicado',
        title: 'Casos reales',
        subtitle: 'Proyectos publicados para clientes, marcas y campanas reales.',
        auxiliaryText:
          'Cada caso muestra trabajo aplicado con presencia digital activa, no ejemplos conceptuales ni ejercicios de demo.',
        primaryCta: 'Hablar con ByteShark',
        secondaryCta: 'Volver al inicio',
      },
      catalog: {
        eyebrow: 'PORTAFOLIO ACTIVO',
        title: 'Proyectos con presencia digital activa',
        note:
          'Estos casos no pertenecen al catalogo de demos. Son trabajos publicados o proyectos reales con enlaces verificables.',
      },
    },
  },
  en: {
    navigation: [
      { label: 'Home', section: 'home' },
      { label: 'Services', section: 'services' },
      { label: 'Demos', section: 'demos' },
      { label: 'Proof of Work', section: 'proof' },
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
    },
    collections: {
      realCases: [
        {
          slug: 'transformando-mi-ser',
          name: 'Transformando Mi Ser',
          category: 'Psychology website / personal brand',
          description:
            'Professional website to present services, build trust and make session booking contact easier.',
          tags: ['Real client', 'Published website', 'Psychology', 'Booking and contact'],
          accent: {
            from: '#7FDBFF',
            to: '#1E5AA8',
            halo: 'rgba(127, 219, 255, 0.24)',
          },
          ctaLinks: [
            {
              label: 'View website',
              href: transformandoMiSerUrl,
              external: true,
            },
          ],
        },
        {
          slug: 'gm-asesores-en-negocios',
          name: 'GM Asesores en Negocios',
          category: 'Corporate website / accounting firm',
          description:
            'Business website to present accounting, tax and advisory services with a more professional image.',
          tags: ['Real client', 'Published website', 'Accounting firm', 'Professional services'],
          accent: {
            from: '#8FC0FF',
            to: '#C9A86A',
            halo: 'rgba(143, 192, 255, 0.22)',
          },
          ctaLinks: [
            {
              label: 'View website',
              href: gmAsesoresUrl,
              external: true,
            },
          ],
        },
        {
          slug: 'reciclando-goles',
          name: 'Reciclando Goles',
          category: 'Public website + social impact',
          description:
            'Social project with a public website, digital branding and online presence to collect recycling and support a charitable cause.',
          tags: ['Real project', 'Published website', 'Social impact', 'Digital branding'],
          accent: {
            from: '#34D399',
            to: '#1E5AA8',
            halo: 'rgba(52, 211, 153, 0.22)',
          },
          ctaLinks: [
            {
              label: 'View published site',
              href: reciclandoGolesUrl,
              external: true,
            },
            {
              label: 'View repository',
              href: reciclandoGolesRepoUrl,
              external: true,
            },
          ],
        },
      ],
      commercialDemos: [
        {
          name: 'Premium Barbershop',
          category: 'Local services',
          description:
            'Built for bookings, hours, location, promotions and a more premium first impression.',
          highlights: ['Services and pricing', 'WhatsApp', 'Gallery'],
          href: 'https://byteshark-dev.github.io/demos/barberia/',
        },
        {
          name: 'Cafe / Restaurant',
          category: 'Food and beverage',
          description:
            'Digital menu, promotions, reservations or orders and a visual flow focused on conversion.',
          highlights: ['Digital menu', 'Promotions', 'Reservations or orders'],
          href: 'https://byteshark-dev.github.io/demos/cafe-restaurante/',
        },
        {
          name: 'Professional Health',
          category: 'Consultation and wellness',
          description:
            'Professional profile, services, online or in-person mode and a trust-oriented FAQ.',
          highlights: ['Professional presentation', 'WhatsApp booking', 'FAQ'],
          href: 'https://byteshark-dev.github.io/demos/salud-profesional/',
        },
        {
          name: 'Accounting Firm',
          category: 'Tax and operations',
          description:
            'Tax services, benefits, FAQ and a more serious digital presence for lead capture.',
          highlights: ['Tax services', 'Benefits', 'Trust section'],
          href: 'https://byteshark-dev.github.io/demos/despacho-contable/',
        },
      ],
      ownSoftware: [
        {
          slug: 'aphidex',
          name: 'Aphidex',
          category: 'Featured app',
          description: 'Companion app for Grounded and Grounded 2.',
          tags: ['Android', 'iOS', 'ES / EN / RU', 'Grounded 2'],
          image: '/assets/images/Aphidex_logo.webp',
          imageAlt: 'Aphidex logo.',
          ctaLinks: [
            {
              label: 'View project',
              href: aphidexProjectUrl,
            },
            {
              label: 'Google Play',
              href: aphidexPlayUrl,
              external: true,
            },
            {
              label: 'App Store',
              href: aphidexIosUrl,
              external: true,
            },
          ],
        },
      ],
    },
    home: {
      seo: {
        title: 'ByteShark | Websites, Apps & Digital Systems',
        description:
          'ByteShark creates websites, apps and digital systems for businesses that want to look professional, sell more and operate better.',
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
        demos: 'ADAPTABLE DEMOS',
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
      demos: {
        title: 'Adaptable demos for business websites',
        intro:
          'Before building a fully custom website, ByteShark can ground your business category on a commercial base that shows how your brand could look online.',
        note:
          'These demos are conceptual and editable examples. They are not presented as real clients or live case studies.',
        primaryCta: 'Explore demo catalog',
        secondaryCta: 'Request a custom version',
      },
      proof: {
        title: 'Real projects, demos and owned software',
        intro:
          'A compact overview to validate published work, explore commercial proposals and see ByteShark-owned products without turning the home page into a catalog.',
        realCases: {
          eyebrow: 'REAL PROJECTS',
          title: 'Published real projects',
          description:
            'Real sites and projects built for clients, brands and campaigns with active digital presence.',
          tags: ['Real clients', 'Published web', 'Professional brand', 'Digital presence'],
          primaryCta: 'View real projects',
          secondaryCta: 'Talk to ByteShark',
          mockupItems: ['Transformando Mi Ser', 'GM Asesores', 'Reciclando Goles'],
        },
        demosSummary: {
          eyebrow: 'ADAPTABLE DEMOS',
          title: 'Demos ready to adapt',
          description:
            'Explore visual and functional proposals designed for different types of business.',
          tags: ['Landing pages', 'Bookings', 'ERP / CRM', 'Local businesses'],
          primaryCta: 'Explore demos',
        },
        ownSoftware: {
          eyebrow: 'OWN SOFTWARE',
          title: 'Owned apps and software',
          description:
            'ByteShark-owned products published or prepared to grow as independent product lines.',
        },
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
    cases: {
      seo: {
        title: 'Real Projects | ByteShark',
        description:
          'Published projects for real clients, brands and campaigns developed by ByteShark.',
      },
      hero: {
        badge: 'Published portfolio',
        title: 'Real projects',
        subtitle: 'Published projects for real clients, brands and campaigns.',
        auxiliaryText:
          'Each case shows applied work with active digital presence, not conceptual examples or demo exercises.',
        primaryCta: 'Talk to ByteShark',
        secondaryCta: 'Back home',
      },
      catalog: {
        eyebrow: 'ACTIVE PORTFOLIO',
        title: 'Projects with active digital presence',
        note:
          'These cases do not belong to the demo catalog. They are published work or real projects with verifiable links.',
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
      cases: {
        path: '/casos-reales/',
        ogImagePath: '/assets/social/og-image.png',
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
    aphidexProjectUrl,
    aphidexCanonicalUrl,
    aphidexPlay: aphidexPlayUrl,
    aphidexIos: aphidexIosUrl,
    transformandoMiSer: transformandoMiSerUrl,
    gmAsesores: gmAsesoresUrl,
    reciclandoGoles: reciclandoGolesUrl,
    reciclandoGolesRepo: reciclandoGolesRepoUrl,
    casesCatalog: '/casos-reales/',
    demosCatalog: '/demos/',
    whatsappPhone: '524614220738',
    whatsappTemplates: {
      es: 'Hola Angel, vi tu pagina y me gustaria platicar sobre mi proyecto.',
      en: 'Hello Angel, I saw your website and would like to talk about my project.',
    },
    whatsappQuotePlaceholder:
      'https://api.whatsapp.com/send?phone=000000000000&text=Hello%20ByteShark%2C%20I%20want%20to%20request%20a%20quote%20for%20my%20project.',
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
  cases: 'es',
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
  const { brand, seo } = content;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: brand.name,
        url: seo.siteUrl,
        logo: new URL(brand.logoIcon, seo.siteUrl).toString(),
        slogan: brand.slogan,
        sameAs: siteConfig.socialLinks,
      },
      {
        '@type': 'WebSite',
        name: brand.name,
        url: seo.siteUrl,
        inLanguage: activeLocale,
        description: localizedContent[activeLocale].home.seo.description,
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
      copyright: 'Copyright 2026 ByteShark.',
      ...copy.footer,
    },
    ui: copy.ui,
    links: {
      ...siteConfig.links,
      whatsappQuote: buildWhatsAppUrl(activeLocale),
    },
    collections: copy.collections,
    seo: getPageSeo(pageKey, activeLocale),
    pageKey,
    page: copy[pageKey],
  };
}
