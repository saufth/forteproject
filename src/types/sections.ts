// Types
import type { HeaderProps, ShowcaseProps } from './data-dislay'
import type { SectionRoute } from './navigation'

/** About component props */
export interface AboutProps extends HeaderProps {
  /** Section id */
  id: SectionRoute
  /** Section showcases */
  showcases: ReadonlyArray<Readonly<ShowcaseProps>>
}
