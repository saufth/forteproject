import Image from 'next/image'
import Link from 'next/link'
import { Icons } from '@/components/icons'
import { services } from '@/config/services'
import { siteConfig, siteNav } from '@/config/site'
import { culture, filosophy } from '@/config/organization'
import { Button } from '@/components/ui/button'

const contactLink = siteNav.find(({ title }) => title === 'Contáctanos')!

export default function IndexPage () {
  return (
    <>
      <section>
        <div className='w-full h-[100dvh] min-h-[500xp] lg:min-h-[600px] max-h-[1000px] relative z-10 -mt-[69px] lg:-mt-[85px] flex flex-col justify-center'>
          <div className='container relative z-10'>
            <div className='w-6-cols md:w-6-cols'>
              <h1 className='f-display-2 max-w-[322px] xs:max-w-none text-black'>
                {siteConfig.slogan}
              </h1>
              <p className='f-subhead-1 mt-spacing-4 text-black font-semibold'>
                {siteConfig.description}.
              </p>
              <Button
                className='mt-spacing-5'
                size='lg'
                asChild
              >
                <Link href={contactLink.href}>
                  {contactLink.title}
                </Link>
              </Button>
            </div>
          </div>
          <div className='absolute inset-0 -z-10 [&>div]:absolute [&>div]:inset-0 [&>div]:bg-cover [&>div]:bg-center [&>div]:bg-no-repeat'>
            <div className='bg-home-hero1-sm md:bg-home-hero1 animate-tansition-1-3' />
            <div className='bg-home-hero2-sm md:bg-home-hero2 animate-tansition-2-3' />
            <div className='bg-home-hero3-sm md:bg-home-hero3 animate-tansition-3-3' />
          </div>
        </div>
      </section>
      <section id='soluciones' className='mt-spacing-7'>
        <div className='container'>
          <div>
            <h2 className='f-heading-1 md:pr-9 lg:pr-11'>
              {services.title}
            </h2>
            {services.description && (
              <p className='f-subhead-1 mt-spacing-4 max-w-6xl'>
                {services.description}
              </p>
            )}
            {services.image && (
              <div className='full-bleed-container mt-spacing-7'>
                <Image
                  src={services.image.src}
                  alt={services.image.alt}
                  width={1024}
                  height={1024}
                  sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                  loading='lazy'
                  className='w-full'
                />
              </div>
            )}
          </div>
          <div className='cols-container mt-spacing-4'>
            {services.items.map((serviceItem, key) => (
              <article className='w-8-cols md:w-4-cols lg:w-6-cols xl:w-4-cols mt-spacing-7' key={key}>
                <div>
                  {serviceItem.image && (
                    <Image
                      src={serviceItem.image.src}
                      alt={serviceItem.image.alt}
                      width={1260}
                      height={840}
                      sizes='(max-width: 744px) 100vw, (max-width: 1280px) 50vw, 500px'
                      loading='lazy'
                    />
                  )}
                </div>
                <div className='mt-4'>
                  <h3 className='f-subhead-1 font-bold'>
                    {serviceItem.title}
                  </h3>
                  {serviceItem.description && (
                    <div className='mt-4'>
                      <p className='f-body-1 text-muted-foreground'>
                        {serviceItem.description}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id='nosotros' className='mt-spacing-7'>
        <div className='container border-t'>
          <div className='cols-container mt-spacing-3'>
            <div className='w-6-cols sm:w-4-cols lg:w-6-cols relative'>
              <div className='xl:w-8-cols sm:pr-9 xl:pr-0'>
                <h3 className='f-heading-1'>
                  {filosophy.title}
                </h3>
                <div>
                  {filosophy.items.map((filosophyItem, key) => (
                    <article className='mt-spacing-4' key={key}>
                      <h4 className='f-body-1 font-semibold'>
                        {filosophyItem.title}
                      </h4>
                      <p className='mt-2 text-muted-foreground'>
                        {filosophyItem.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
              <Button
                className='mt-spacing-5 pointer-events-auto'
                variant='outline'
                size='lg'
                asChild
              >
                <Link
                  className='group flex items-center gap-x-1 text-primary hover:text-primary-foreground'
                  href={contactLink.href}
                >
                  {contactLink.title}
                  <Icons.ArrowUpRight className='w-4 sm:w-4.5 h-auto stroke-primary group-hover:stroke-primary-foreground' />
                </Link>
              </Button>
            </div>
            <div className='w-6-cols sm:w-4-cols lg:w-6-cols mt-10 sm:mt-0'>
              {filosophy.image && (
                <Image
                  src={filosophy.image.src}
                  alt={filosophy.image.alt}
                  width={filosophy.image.width}
                  height={filosophy.image.height}
                  sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                  loading='lazy'
                  className='w-full'
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <section id='valores' className='mt-spacing-9'>
        <div className='container'>
          <div>
            <h2 className='f-heading-1 md:pr-9 lg:pr-11'>
              {culture.title}
            </h2>
            {culture.description && (
              <p className='f-subhead-1 mt-spacing-4 max-w-6xl'>
                {culture.description}
              </p>
            )}
            {culture.image && (
              <div className='full-bleed-container mt-spacing-7'>
                <Image
                  src={culture.image.src}
                  alt={culture.image.alt}
                  width={1024}
                  height={1024}
                  sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                  loading='lazy'
                  className='w-full'
                />
              </div>
            )}
          </div>
          <div className='cols-container mt-spacing-4'>
            {culture.items.map((cultureItem, key) => (
              <article className='w-8-cols md:w-4-cols lg:w-6-cols xl:w-4-cols flex gap-x-4 mt-spacing-6' key={key}>
                <div className='w-32 h-auto'>
                  {cultureItem.image && (
                    <Image
                      src={cultureItem.image.src}
                      alt={cultureItem.image.alt}
                      width={cultureItem.image.width}
                      height={cultureItem.image.height}
                      loading='lazy'
                    />
                  )}
                </div>
                <div className='mt-2'>
                  <h3 className='f-subhead-1 font-medium'>
                    {cultureItem.title}
                  </h3>
                  {cultureItem.description && (
                    <div className='mt-2'>
                      <p className='f-body-1 text-muted-foreground'>
                        {cultureItem.description}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
