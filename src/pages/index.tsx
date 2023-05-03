// Components
import About from '@/components/sections/About'
import CallToAction from '@/components/navigation/LinkToAction'
import Card from '@/components/data-display/Card'
import Image from 'next/image'
import LinkButton from '@/components/navigation/core/LinkButton'
import PageLayout from '@/components/layout/PageLayout'
// Config
import { NAV } from '@/modules/navigation/config'
import {
  SERVICES,
  VALUES,
  description,
  organization,
  organizationSlogan
} from '@/modules/app/config'
// Types
import type { Dimensionable } from '@/types/sizing'
import type { CardProps, ShowcaseProps } from '@/types/data-dislay'

/** The hero header description */
export const heroDescription = 'Lorem ipsum dolor sit amet, ipsum sit amet dolor, lorem ipsum dolor sit amet, ipsum sit amet dolor.'

/** The solution image size */
export const SOLUTION_IMG_SIZE: Readonly<Dimensionable> = {
  width: 620,
  height: 467
}

/** The solutions section configuration */
export const SOLUTIONS_CONFIG: ReadonlyArray<Readonly<CardProps>> = [
  {
    ...SERVICES.materials,
    image: {
      name: 'consulting.jpg',
      alt: `${organizationSlogan} ${SERVICES.materials.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  },
  {
    ...SERVICES.rent,
    image: {
      name: 'business-model.jpg',
      alt: `${organizationSlogan} ${SERVICES.rent.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  },
  {
    ...SERVICES.engineering,
    image: {
      name: 'business-strategy.jpg',
      alt: `${organizationSlogan} ${SERVICES.engineering.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  },
  {
    ...SERVICES.architecture,
    image: {
      name: 'coaching.jpg',
      alt: `${organizationSlogan} ${SERVICES.architecture.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  },
  {
    ...SERVICES.maintenance,
    image: {
      name: 'market-study.jpg',
      alt: `${organizationSlogan} ${SERVICES.maintenance.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  },
  {
    ...SERVICES.electric,
    image: {
      name: 'business-strategy.jpg',
      alt: `${organizationSlogan} ${SERVICES.electric.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  },
  {
    ...SERVICES.hydraulic,
    image: {
      name: 'coaching.jpg',
      alt: `${organizationSlogan} ${SERVICES.hydraulic.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  },
  {
    ...SERVICES.pavements,
    image: {
      name: 'market-study.jpg',
      alt: `${organizationSlogan} ${SERVICES.pavements.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  },
  {
    ...SERVICES.supervison,
    image: {
      name: 'second-opinion.jpg',
      alt: `${organizationSlogan} ${SERVICES.supervison.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  }
]
/** The size of the image */
export const VALUES_IMG_SIZE: Readonly<Dimensionable> = {
  width: 500,
  height: 500
}

/** Our values section configuration */
export const VALUES_CONFIG: ReadonlyArray<Readonly<ShowcaseProps>> = [
  {
    ...VALUES.honesty,
    image: {
      name: 'excellence.svg',
      alt: `${organizationSlogan} ${VALUES.honesty.heading}`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    ...VALUES.transparency,
    image: {
      name: 'integrity.svg',
      alt: `${organizationSlogan} ${VALUES.transparency.heading}`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    ...VALUES.quality,
    image: {
      name: 'innovation.svg',
      alt: `${organizationSlogan} ${VALUES.quality.heading}`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    ...VALUES.commitment,
    image: {
      name: 'commitment.svg',
      alt: `${organizationSlogan} ${VALUES.commitment.heading}`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    ...VALUES.responsability,
    image: {
      name: 'teamwork.svg',
      alt: `${organizationSlogan} ${VALUES.responsability.heading}`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    ...VALUES.teamwork,
    image: {
      name: 'responsability.svg',
      alt: `${organizationSlogan} ${VALUES.teamwork.heading}`,
      ...VALUES_IMG_SIZE
    }
  }
]

/**
* The Home page of the application
* @returns The HomePage component
*/
export default function HomePage () {
  return (
    <PageLayout page='home'>
      <section className='h-2xl md:h-3xl overflow-hidden bg-hero-sm md:bg-hero bg-cover bg-center bg-no-repeat'>
        <div className='max-w-8xl h-full px-[5%] mx-auto pt-24 space-y-8'>
          <div className='md:w-2xl mt-16 md:mt-24 space-y-4'>
            <Image
              src='/images/slogan.svg'
              alt={`${organization} slogan`}
              className='w-auto h-2 md:h-3'
              width={297}
              height={12}
            />
            <div className='space-y-5'>
              <h1>
                {description.toUpperCase()}
              </h1>
              <p className='font-avenir-bold md:text-lg'>
                {heroDescription}
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
      </section>

      <section id='solutions' className='px-[5%] py-24 bg-stone-50'>
        <div className='space-y-14'>
          <h2 className='md:w-xl'>
            NUESTRAS SOLUCIONES LOREM IPSUM DOLOR SIT AMET
          </h2>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 lg:gap-x-5 gap-y-20 items-start justify-start'>
            {SOLUTIONS_CONFIG.map((solution, key) => (
              <Card
                heading={solution.heading}
                description={solution.description}
                image={solution.image}
                key={key}
              />
            ))}
          </div>
        </div>
      </section>

      <About
        id='values'
        heading='NUESTROS VALORES LOREM IPSUM DOLOR SIT AMET'
        showcases={VALUES_CONFIG}
      />
    </PageLayout>
  )
}
