// Components
import About from '@/components/sections/About'
import CallToAction from '@/components/navigation/LinkToAction'
import Card from '@/components/data-display/Card'
import Header from '@/components/data-display/Header'
import Image from 'next/image'
import LinkButton from '@/components/navigation/core/LinkButton'
import PageLayout from '@/components/layout/PageLayout'
import Tagline from '@/components/data-display/core/Tagline'
// Config
import { IMG_EXT } from '@/modules/data-display/config'
import { NAV, PAGE_ROUTES, SECTION_ROUTES } from '@/modules/navigation/config'
import {
  SERVICES,
  VALUES,
  description,
  organizationSlogan
} from '@/modules/app/config'
// Types
import type { CardProps, ImageConfig, ShowcaseProps } from '@/types/data-dislay'

/** Solutions name list */
const solutionsNameList: ReadonlyArray<string> = Object.keys(SERVICES)

/** The solution image size */
export const SOLUTIONS_IMG_CONFIG: ImageConfig = {
  width: 620,
  height: 467,
  ext: IMG_EXT.jpg
}

/** The solutions section configuration */
export const SOLUTIONS_CONFIG: ReadonlyArray<Readonly<CardProps>> = [
  {
    ...SERVICES[solutionsNameList[0]],
    image: {
      name: `${solutionsNameList[0]}.${SOLUTIONS_IMG_CONFIG.ext}`,
      alt: `${organizationSlogan} ${SERVICES[solutionsNameList[0]].heading}`,
      ...SOLUTIONS_IMG_CONFIG
    }
  },
  {
    ...SERVICES[solutionsNameList[1]],
    image: {
      name: `${solutionsNameList[1]}.${SOLUTIONS_IMG_CONFIG.ext}`,
      alt: `${organizationSlogan} ${SERVICES[solutionsNameList[1]].heading}`,
      ...SOLUTIONS_IMG_CONFIG
    }
  },
  {
    ...SERVICES[solutionsNameList[2]],
    image: {
      name: `${solutionsNameList[2]}.${SOLUTIONS_IMG_CONFIG.ext}`,
      alt: `${organizationSlogan} ${SERVICES[solutionsNameList[2]].heading}`,
      ...SOLUTIONS_IMG_CONFIG
    }
  },
  {
    ...SERVICES[solutionsNameList[3]],
    image: {
      name: `${solutionsNameList[3]}.${SOLUTIONS_IMG_CONFIG.ext}`,
      alt: `${organizationSlogan} ${SERVICES[solutionsNameList[3]].heading}`,
      ...SOLUTIONS_IMG_CONFIG
    }
  },
  {
    ...SERVICES[solutionsNameList[4]],
    image: {
      name: `${solutionsNameList[4]}.${SOLUTIONS_IMG_CONFIG.ext}`,
      alt: `${organizationSlogan} ${SERVICES[solutionsNameList[4]].heading}`,
      ...SOLUTIONS_IMG_CONFIG
    }
  },
  {
    ...SERVICES[solutionsNameList[5]],
    image: {
      name: `${solutionsNameList[5]}.${SOLUTIONS_IMG_CONFIG.ext}`,
      alt: `${organizationSlogan} ${SERVICES[solutionsNameList[5]].heading}`,
      ...SOLUTIONS_IMG_CONFIG
    }
  },
  {
    ...SERVICES[solutionsNameList[6]],
    image: {
      name: `${solutionsNameList[6]}.${SOLUTIONS_IMG_CONFIG.ext}`,
      alt: `${organizationSlogan} ${SERVICES[solutionsNameList[6]].heading}`,
      ...SOLUTIONS_IMG_CONFIG
    }
  },
  {
    ...SERVICES[solutionsNameList[7]],
    image: {
      name: `${solutionsNameList[7]}.${SOLUTIONS_IMG_CONFIG.ext}`,
      alt: `${organizationSlogan} ${SERVICES[solutionsNameList[7]].heading}`,
      ...SOLUTIONS_IMG_CONFIG
    }
  },
  {
    ...SERVICES[solutionsNameList[8]],
    image: {
      name: `${solutionsNameList[8]}.${SOLUTIONS_IMG_CONFIG.ext}`,
      alt: `${organizationSlogan} ${SERVICES[solutionsNameList[8]].heading}`,
      ...SOLUTIONS_IMG_CONFIG
    }
  }
]

/** Solutions name list */
const valuesNameList: ReadonlyArray<string> = Object.keys(VALUES)

/** The size of the image */
export const VALUES_IMG_CONFIG: ImageConfig = {
  width: 500,
  height: 500,
  ext: IMG_EXT.svg
}

/** Our values section configuration */
export const VALUES_CONFIG: ReadonlyArray<Readonly<ShowcaseProps>> = [
  {
    ...VALUES[valuesNameList[0]],
    image: {
      name: `${valuesNameList[0]}.${VALUES_IMG_CONFIG.ext}`,
      alt: `${organizationSlogan} ${VALUES[valuesNameList[0]].heading}`,
      ...VALUES_IMG_CONFIG
    }
  },
  {
    ...VALUES[valuesNameList[1]],
    image: {
      name: `${valuesNameList[1]}.${VALUES_IMG_CONFIG.ext}`,
      alt: `${organizationSlogan} ${VALUES[valuesNameList[1]].heading}`,
      ...VALUES_IMG_CONFIG
    }
  },
  {
    ...VALUES[valuesNameList[2]],
    image: {
      name: `${valuesNameList[2]}.${VALUES_IMG_CONFIG.ext}`,
      alt: `${organizationSlogan} ${VALUES[valuesNameList[2]].heading}`,
      ...VALUES_IMG_CONFIG
    }
  },
  {
    ...VALUES[valuesNameList[3]],
    image: {
      name: `${valuesNameList[3]}.${VALUES_IMG_CONFIG.ext}`,
      alt: `${organizationSlogan} ${VALUES[valuesNameList[3]].heading}`,
      ...VALUES_IMG_CONFIG
    }
  },
  {
    ...VALUES[valuesNameList[4]],
    image: {
      name: `${valuesNameList[4]}.${VALUES_IMG_CONFIG.ext}`,
      alt: `${organizationSlogan} ${VALUES[valuesNameList[4]].heading}`,
      ...VALUES_IMG_CONFIG
    }
  },
  {
    ...VALUES[valuesNameList[5]],
    image: {
      name: `${valuesNameList[5]}.${VALUES_IMG_CONFIG.ext}`,
      alt: `${organizationSlogan} ${VALUES[valuesNameList[5]].heading}`,
      ...VALUES_IMG_CONFIG
    }
  }
]

/**
* The Home page of the application
* @returns The HomePage component
*/
export default function HomePage () {
  return (
    <PageLayout page={PAGE_ROUTES.home}>
      <section className='h-2xl md:h-3xl relative overflow-hidden'>
        <div className='max-w-8xl h-full px-[5%] mx-auto pt-24 space-y-8'>
          <div className='md:w-2xl mt-16 md:mt-24 space-y-4'>
            <Tagline size='lg'>
              {organizationSlogan.toUpperCase()}
            </Tagline>
            <div className='space-y-5'>
              <h1>
                {description.toUpperCase()}
              </h1>
              <p className='font-avenir-bold md:text-lg'>
                Planeación · Estrategia · Tactica
              </p>
            </div>
          </div>
          <div className='flex justify-start gap-x-5'>
            <CallToAction />
            <div className='hidden md:block'>
              <LinkButton
                href={NAV.solutions.href}
                theme='secondary'
              >
                {NAV.solutions.children}
              </LinkButton>
            </div>
          </div>
        </div>
        <div className='absolute inset-0 -z-10 [&>div]:w-full [&>div]:h-full [&>div]:absolute [&>div]:inset-0 [&>div]:bg-cover [&>div]:bg-center [&>div]:bg-no-repeat'>
          <div className='bg-hero-sm md:bg-hero animate-tansition-1-3' />
          <div className='bg-hero2-sm md:bg-hero2 animate-tansition-2-3' />
          <div className='bg-hero3-sm md:bg-hero3 animate-tansition-3-3' />
        </div>
      </section>

      <section className='px-[5%] py-24 md:py-36 flex flex-col items-center gap-y-12 md:gap-y-16'>
        <Image
          src='/images/logo.svg'
          alt={organizationSlogan}
          className='w-auto h-10 md:h-14'
          width={592}
          height={85}
        />
        <h2 className='font-avenir-bold text-base text-center'>
          Misión
        </h2>
        <div className='max-w-4xl text-center text-stone-500 md:text-lg'>
          Nos dedicamos a brindar soluciones integrales en el ámbito de la construcción, venta de
          materiales y mantenimiento industrial, con un enfoque en la personalización de nuestros
          servicios para satisfacer las necesidades específicas de nuestros clientes.
        </div>
        <h2 className='font-avenir-bold text-base text-center'>
          Visión
        </h2>
        <div className='max-w-4xl text-center text-stone-500 md:text-lg'>
          Nuestra visión es ser una empresa líder en innovación y constante evolución, siendo
          así la mejor opción para nuestros clientes en todo el mundo.
        </div>
      </section>

      <section id={SECTION_ROUTES.solutions} className='px-[5%] py-24 bg-stone-50'>
        <div className='space-y-24'>
          <Header
            heading='NUESTRAS SOLUCIONES'
            description='Estamos 100% comprometidos con las necesidades a corto, mediano y largo plazo de nuestros clientes, buscamos siempre superar las expectativas, generando soluciones a la medida de todas sus necesidades.'
          />
          <ul className='w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 lg:gap-x-5 gap-y-20 items-start justify-start'>
            {SOLUTIONS_CONFIG.map((solution, key) => (
              <li key={key}>
                <Card
                  heading={solution.heading}
                  description={solution.description}
                  image={solution.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <About
        id={SECTION_ROUTES.values}
        heading='NUESTROS VALORES'
        description='Somos una empresa con valores y principios sólidos. Al trabajar de la mano con nuestros clientes nos aseguramos de que tengan la mejor experiencia, guiándolos en la consecución de los objetivos en cada proyecto que emprenden.'
        showcases={VALUES_CONFIG}
      />
    </PageLayout>
  )
}
