// Types
import type { HeaderListConfig } from '@/types/data-dislay'

/** The project author */
export const author = 'Sauftdev'

/** The base URL of the aplication */
export const baseUrl = process.env.NEXT_PUBLIC_HOST

/** The name of the organization */
export const organization = 'Forte Project'

/** The slogan of the organization */
export const slogan = 'Worldwide'

/** The nam and slogan of the organization */
export const organizationSlogan = `${organization} ${slogan}`

/** The head desciption of the application */
export const description = 'Proyectos con cimientos fuertes'

/** The email of the organizacion */
export const email = 'contacto@forte-project.com'

/** Organization services */
export const SERVICES: HeaderListConfig = {
  materials: {
    heading: 'Venta de materiales de construcción',
    description: 'Tenemos una amplia variedad de materiales de construcción a su disposición, desde cemento y ladrillos hasta pisos y techos, para que los clientes tengan acceso a todos los materiales que necesitan para sus proyectos.'
  },
  rent: {
    heading: 'Renta de maquinaria',
    description: 'Ponemos a disposición de nuestros clientes una flota de maquinaria para la construcción y el mantenimiento industrial, con equipos de alta calidad y el soporte técnico necesario.'
  },
  engineering: {
    heading: 'Servicios de ingeniería',
    description: 'Contamos con un equipo de ingenieros altamente capacitados que pueden proporcionar servicios de diseño y planificación de proyectos, desde la conceptualización hasta la ejecución. Nos aseguramos de que nuestro personal aporte soluciones innovadoras y efectivas para el logro de sus objetivos.'
  },
  architecture: {
    heading: 'Servicios de arquitectura',
    description: 'Brindamos servicios de diseño arquitectónico para proyectos de construcción y remodelación. Nuestros arquitectos trabajan en colaboración con nuestros clientes para desarrollar un diseño que se adapte a sus necesidades, estilo y presupuesto. '
  },
  maintenance: {
    heading: 'Mantenimiento industrial',
    description: 'Ofrecemos servicios de mantenimiento preventivo y correctivo para maquinaria y equipos industriales. Nuestro personal está capacitado para diagnosticar y solucionar problemas técnicos. También proporcionamos servicios de reparación y reemplazo de piezas de repuesto para garantizar que nuestros clientes puedan continuar con sus operaciones de manera efectiva.'
  },
  electric: {
    heading: 'Instalaciones eléctricas',
    description: 'Realizamos instalaciones eléctricas en edificios comerciales y residenciales. Nuestros técnicos están completamente preparados para realizar instalaciones seguras y efectivas, garantizando el cumplimiento de los estándares de seguridad y las normas y regulaciones locales.'
  },
  hydraulic: {
    heading: 'Instalaciones hidráulicas',
    description: 'Ayudamos a nuestros clientes con la instalación de sistemas hidráulicos para edificios comerciales y residenciales. Nos aseguramos de trabajar con los mejores materiales y equipos para garantizar la seguridad y eficiencia de los sistemas.'
  },
  pavements: {
    heading: 'Pavimentos',
    description: 'Contamos con productos y servicios de pavimentación para todo tipo de proyectos. Utilizamos materiales de excelente calidad y técnicas avanzadas para asegurarnos de que nuestros pavimentos sean resistentes y duraderos, incluso en condiciones climáticas adversas.'
  },
  supervison: {
    heading: 'Supervisión de proyectos',
    description: 'Nuestros servicios de supervisión de proyectos incluyen la revisión y evaluación de los planes y especificaciones del proyecto, la coordinación y supervisión del equipo de trabajo, la gestión del cronograma y el presupuesto, la identificación y gestión de riesgos y la resolución de problemas y conflictos durante el proyecto.'
  }
}

/** Organization values */
export const VALUES: HeaderListConfig = {
  honesty: {
    heading: 'Honestidad',
    description: 'Honestidad Nos esforzamos por establecer relaciones a largo plazo con nuestros clientes y colaboradores, basadas en la confianza y el respeto mutuo. Promovemos la integridad en todas las áreas de nuestra empresa.'
  },
  transparency: {
    heading: 'Transparencia',
    description: 'Transparencia Nos comprometemos a ser claros y honestos en todas nuestras relaciones comerciales y a proporcionar a nuestros clientes información precisa y detallada sobre nuestros productos y servicios, ya que para nosotros la transparencia es la base de cualquier relación duradera y exitosa.'
  },
  quality: {
    heading: 'Calidad',
    description: 'Calidad Trabajamos en cumplir con los más altos estándares de calidad en cada etapa de nuestro trabajo, desde el diseño hasta la ejecución de cada proyecto, utilizando materiales y equipos de alta gama para garantizar la durabilidad y el rendimiento de estos.'
  },
  commitment: {
    heading: 'Compromiso',
    description: 'Compromiso Perseveramos en cumplir con los plazos y presupuestos establecidos en cada proyecto, y en superar las expectativas de nuestros clientes, brindando soluciones rápidas y efectivas a cualquier problema que pueda surgir.'
  },
  responsability: {
    heading: 'Responsabilidad social',
    description: 'Responsabilidad social Progresamos como compañía contribuyendo positivamente en las comunidades donde operamos, mediante programas de responsabilidad social corporativa y apoyo a organizaciones sin fines de lucro.'
  },
  teamwork: {
    heading: 'Trabajo en equipo',
    description: 'Trabajo en equipo Nos aseguramos de fomentar un ambiente de comunicación abierta, donde cada miembro del equipo se sienta valorado y motivado. Colaboramos en la consecución de nuestros objetivos, y nos apoyamos mutuamente para superar cualquier obstáculo que se presente en el camino.'
  }
}

/** The copyright of the application */
export const copyright = `Copyright ${new Date().getFullYear()} ${organizationSlogan}. All rights reserved.`

/** The keyword list of the application */
export const KEYWORDS: ReadonlyArray<string> = [
  organization,
  organizationSlogan,
  'venta de materiales de construccion',
  'renta de maquinaria',
  'renta de maquinaria para construccion',
  'servicios de construccion',
  'servicios de ingeniería',
  'servicios de arquitectura',
  'servicios de mantenimiento industrial',
  'mantenimiento industrial',
  'servicios instalaciones eléctricas',
  'instalaciones eléctricas',
  'instalaciones hidráulicas',
  'servicios instalaciones hidráulicas',
  'venta de materiales para pavimentacion',
  'servicios de pavimentacion',
  'supervision de proyectos',
  'servicios de supervision de proyectos'
]

/** The keyword list as string */
export const keywords = String(KEYWORDS)

/** Is used as a cover image for social networks */
export const coverImageUrl = `${baseUrl}cover.jpg`

/** Twitter account */
export const twitter: string = ''

/** Html theme color */
export const themeColor = '#9d9e92'
