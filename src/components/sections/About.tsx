// Components
import Tagline from '../data-display/core/Tagline'
import Showcase from '../data-display/Showcase'
// Types
import type { AboutProps } from '@/types/sections'

/**
 * A section using for show cases about something
 * @see {@link AboutProps} for props specifications
 * @param AboutProps About section component props
 * @returns About section component
 */
export default function About ({ id, heading, description, tagline, showcases }: AboutProps) {
  return (
    <section id={id} className='max-w-8xl px-[5%] mx-auto py-24 space-y-24'>
      <div className='md:w-2xl space-y-3'>
        {tagline ? <Tagline>{tagline}</Tagline> : null}
        <h2>{heading}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      <div className='pb-12 md:pb-56 space-y-24 md:space-y-64'>
        {showcases.map((showcase, key) => (
          <Showcase
            heading={showcase.heading}
            description={showcase.description}
            image={showcase.image}
            reverse={key % 2 !== 0}
            key={key}
          />
        ))}
      </div>
    </section>
  )
}
