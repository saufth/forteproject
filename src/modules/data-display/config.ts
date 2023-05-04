// Config
import { organizationSlogan } from '../app/config'
// Types
import type { ImageExt } from '@/types/data-dislay'

/** The logotype image alternative information */
export const logoAlt = `${organizationSlogan} logotype`

/** The image extention configuration */
export const IMG_EXT: Readonly<Record<ImageExt, ImageExt>> = {
  svg: 'svg',
  jpg: 'jpg',
  png: 'png'
}
