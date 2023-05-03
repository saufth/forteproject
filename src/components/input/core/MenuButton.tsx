// Types
import type { Actionable } from '@/types/input'

/**
* The main menu button of the application
* @see {@link Actionable} for props definition
* @param Actionable The basic input component props
* @returns The MenuButton component
*/
export default function MenuButton ({ action }: Actionable) {
  return (
    <button
      className='w-8 h-6 [&>span]:w-full [&>span]:h-0.75 lg:hidden flex flex-col justify-between items-end [&>span]:bg-primary'
      onClick={action}
    >
      <span />
      <span />
      <span />
    </button>
  )
}
