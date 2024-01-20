import { type Article, type Section } from '@/types'

export const filosophy: Section = {
  title: 'Nuestra filosofía',
  image: {
    src: '/images/home-filosophy.webp',
    alt: 'Escritorio de trabajo con una computadora, planos y un casco de construcción con manos de trabajadores',
    width: 2480,
    height: 2480
  },
  items: [
    {
      title: 'Nuestra misión',
      description: 'Nos dedicamos a brindar soluciones integrales en el ámbito de la construcción, venta de materiales y mantenimiento industrial, con un enfoque en la personalización de nuestros servicios para satisfacer las necesidades específicas de nuestros clientes.'
    },
    {
      title: 'Nuestra visión',
      description: 'Nuestra visión es ser una empresa líder en innovación y constante evolución, siendo así la mejor opción para nuestros clientes en todo el mundo.'
    }
  ]
}

export const culture: Section = {
  title: 'Nuestros valores',
  description: 'Nuestros valores son los principios profesionales que guían las acciones y decisiones que tomamos. Representan la esencia de la empresa y la forma en que nos relacionamos con nuestros empleados, clientes, proveedores y comunidad.',
  items: [
    {
      title: 'Innovación',
      description: 'Implementamos nuevas tecnologías, procesos y productos en la industria para mejorar la eficiencia, la productividad y la competitividad de las empresas.',
      image: {
        src: '/images/culture1.svg',
        alt: 'Innovación',
        width: 620,
        height: 620
      }
    },
    {
      title: 'Calidad',
      description: 'Estamos orientados a ofrecer soluciones que cumplan con las expectativas de nuestros clientes y superen sus requisitos.',
      image: {
        src: '/images/culture2.svg',
        alt: 'Calidad',
        width: 620,
        height: 620
      }
    },
    {
      title: 'Trabajo en equipo',
      description: 'Trabajamos en colaboración con nuestros clientes para lograr objetivos comunes y promover un ambiente positivo y cooperativo.',
      image: {
        src: '/images/culture3.svg',
        alt: 'Trabajo en equipo',
        width: 620,
        height: 620
      }
    },
    {
      title: 'Integridad',
      description: 'Nos comprometemos a actuar con integridad y transparencia en todas nuestras relaciones comerciales y personales.',
      image: {
        src: '/images/culture4.svg',
        alt: 'Integridad',
        width: 620,
        height: 620
      }
    },
    {
      title: 'Aprendizaje continuo',
      description: 'Fomentamos el aprendizaje continuo y el desarrollo profesional de nuestros empleados, para garantizar que estamos siempre a la vanguardia en la industria.',
      image: {
        src: '/images/culture5.svg',
        alt: 'Aprendizaje continuo',
        width: 620,
        height: 620
      }
    }
  ]
}

export const history: Article = {
  title: 'Nuestra historia',
  items: [
    'Hace 12 años, un grupo de emprendedores dedicados a la construcción decidió unir fuerzas para crear una empresa que ofreciera un servicio personalizado y de alta calidad a sus clientes. Así nació FORTE PROJECT WORLDWIDE, con una visión clara y un compromiso con la excelencia.',
    'En sus primeros años, se enfocó en establecerse en el mercado y en construir una reputación como una compañía confiable. Con una estrategia centrada en el cliente, la empresa logró aumentar su cartera de proyectos.',
    'A medida que FORTE PROJECT WORLDWIDE crecía, también se enfocaba en ampliar su oferta de servicios, con el fin de brindar soluciones integrales a sus clientes.',
    'Hoy, después de años en el mercado, FORTE PROJECT WORLDWIDE se ha convertido en una empresa líder en la industria de la construcción y el mantenimiento industrial. Con una larga lista de clientes satisfechos, se enfoca en mantener su compromiso con la calidad, la transparencia y la responsabilidad social, mientras continúa innovando y creciendo en un mercado altamente competitivo.'
  ]
}
