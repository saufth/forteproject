import React from 'react'
import {
  IconArrowUpRight,
  IconArrowRight,
  IconMenu2
} from '@tabler/icons-react'

type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  ArrowRight: IconArrowRight,
  ArrowUpRight: IconArrowUpRight,
  Menu: IconMenu2,
  Logotype: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={512}
        height={73.6}
        viewBox='0 0 512 73.6'
        {...props}
      >
        <g transform='matrix(1.3333333,0,0,-1.3333333,-216.5488,425.92572)'>
          <g>
            <path d='M162.4,318.9h17.3V314h-12v-6.4h11.2V303h-11.2v-11.2h-5.3V318.9z' />
            <path
              d='M203.8,319.4c0,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0
              c-0.1,0-0.2-0.1-0.2-0.1c-0.1,0-0.2-0.1-0.2-0.1c-0.1,0-0.1-0.1-0.2-0.2c0,0-0.1-0.1-0.1-0.2s-0.1-0.2-0.1-0.2
              c0-0.1-0.1-0.2-0.1-0.2c0-0.1,0-0.2,0-0.3l0-0.2l0,0c0,0-0.1,0-0.2,0c-0.1,0-0.3,0-0.4-0.1c-0.1,0-0.3-0.1-0.4-0.1
              c-0.1,0-0.3-0.1-0.4-0.1c-0.1,0-0.4-0.1-0.5-0.1c-0.1,0-0.3-0.1-0.3-0.1c0,0,0,0,0,0c0,0,0.1-1,0.3-2.1c0.2-1.2,0.3-2.2,0.3-2.3
              c0-0.1,0-0.2,0-0.2c0-0.1,0.1-0.2,0.1-0.2c0-0.1,0.1-0.1,0.1-0.2c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.2-0.1
              c0.1,0,0.2-0.1,0.2-0.1l0.1,0l2,0c1.4,0,2,0,2.1,0c0.1,0,0.2,0,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1c0,0,0.1,0.1,0.1,0.1
              c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.2c0,0.1,0,0.2,0,0.3c0,0.1,0.1,1.1,0.3,2.3
              c0.1,1.2,0.3,2.1,0.3,2.1c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.3,0.1-0.4,0.1c-0.1,0-0.3,0.1-0.4,0.1c-0.1,0-0.3,0.1-0.5,0.1
              c-0.1,0-0.3,0.1-0.4,0.1c-0.1,0-0.2,0-0.2,0l0,0l0,0.1c0,0.1,0,0.2,0,0.2c0,0.1,0,0.1,0,0.2c0,0-0.1,0.1-0.1,0.2
              c0,0.1-0.1,0.2-0.1,0.2c-0.1,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.2,0.1-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.1c-0.1,0-0.1,0-0.2,0
              C203.9,319.4,203.8,319.4,203.8,319.4 M199,316.9c0,0-0.1,0-0.2-0.1c-0.1-0.1-0.3-0.2-0.5-0.3c-0.1-0.1-0.3-0.2-0.4-0.3
              c-0.1-0.1-0.3-0.2-0.5-0.3c-0.1-0.1-0.3-0.2-0.4-0.3c-0.1-0.1-0.2-0.2-0.3-0.2c-0.1-0.1-0.2-0.2-0.3-0.2c-0.1-0.1-0.3-0.3-0.4-0.4
              s-0.3-0.3-0.4-0.4c-0.1-0.1-0.2-0.2-0.2-0.3c-0.1-0.1-0.2-0.2-0.2-0.3c-0.1-0.1-0.2-0.3-0.3-0.4c-0.1-0.1-0.2-0.3-0.3-0.5
              c-0.1-0.1-0.2-0.3-0.3-0.4c-0.1-0.1-0.2-0.3-0.2-0.5c-0.1-0.1-0.2-0.3-0.2-0.4c-0.1-0.1-0.1-0.3-0.2-0.5c-0.1-0.2-0.1-0.4-0.2-0.5
              c0-0.1-0.1-0.3-0.1-0.5c0-0.1-0.1-0.3-0.1-0.5c0-0.1-0.1-0.3-0.1-0.5c0-0.1-0.1-0.4-0.1-0.5c0-0.1,0-0.3-0.1-0.5
              c0-0.1,0-0.3,0-0.3l0,0h-0.6c-0.3,0-0.6,0-0.7,0c0,0-0.1,0-0.2-0.1c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.1-0.1s-0.1-0.1-0.1-0.2
              c0,0,0-0.1-0.1-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.1,0.1-0.2c0,0,0.1-0.1,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1
              c0.1,0,0.1-0.1,0.2-0.1c0.1,0,1.9,0,12.2,0c10.1,0,12.1,0,12.2,0c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0.1c0,0,0.1,0.1,0.1,0.1
              c0,0,0.1,0.1,0.1,0.2c0,0,0.1,0.1,0.1,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2,0,0.2c0,0.1-0.1,0.1-0.1,0.2c0,0-0.1,0.1-0.1,0.2
              c0,0-0.1,0.1-0.2,0.1c0,0-0.1,0.1-0.2,0.1l-0.1,0l-0.6,0l-0.6,0l0,0c0,0,0,0.1,0,0.2c0,0.1,0,0.3-0.1,0.4c0,0.1-0.1,0.3-0.1,0.5
              c0,0.1-0.1,0.4-0.1,0.6c0,0.2-0.1,0.4-0.2,0.6c0,0.1-0.1,0.3-0.1,0.4c0,0.1-0.1,0.3-0.2,0.5c-0.1,0.2-0.2,0.4-0.2,0.6
              c-0.1,0.1-0.2,0.4-0.3,0.5c-0.1,0.1-0.2,0.3-0.2,0.4c-0.1,0.1-0.2,0.3-0.2,0.4c-0.1,0.1-0.2,0.3-0.3,0.4c-0.1,0.1-0.2,0.3-0.3,0.4
              c-0.1,0.1-0.2,0.3-0.3,0.4c-0.1,0.1-0.2,0.3-0.4,0.4c-0.1,0.1-0.3,0.3-0.4,0.4c-0.1,0.1-0.2,0.2-0.4,0.3c-0.1,0.1-0.3,0.2-0.4,0.3
              c-0.1,0.1-0.3,0.2-0.4,0.3c-0.1,0.1-0.3,0.2-0.4,0.3c-0.1,0.1-0.2,0.2-0.3,0.2c-0.1,0.1-0.3,0.2-0.4,0.2c-0.1,0.1-0.3,0.2-0.4,0.2
              l-0.2,0.1l0,0c0,0-0.1-0.9-0.2-1.9c-0.1-1-0.2-2-0.3-2.1c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2-0.1-0.2c0-0.1-0.1-0.2-0.1-0.3
              c0-0.1-0.1-0.2-0.1-0.3c0-0.1-0.1-0.2-0.1-0.2c0-0.1-0.1-0.1-0.2-0.2c-0.1-0.1-0.2-0.1-0.2-0.2c-0.1,0-0.2-0.1-0.2-0.2
              c-0.1,0-0.2-0.1-0.2-0.1c-0.1,0-0.2-0.1-0.2-0.1c-0.1,0-0.2-0.1-0.3-0.1l-0.2,0l-2.1,0c-1.9,0-2.1,0-2.3,0c-0.1,0-0.2,0-0.3,0.1
              c-0.1,0-0.2,0-0.2,0.1c-0.1,0-0.2,0.1-0.2,0.1c-0.1,0-0.2,0.1-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0.1-0.2,0.2
              c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.1-0.1,0.2-0.2,0.2c0,0.1-0.1,0.1-0.1,0.2c0,0.1-0.1,0.2-0.1,0.2c0,0.1-0.1,0.2-0.1,0.3
              c0,0.1,0,0.2,0,0.3c0,0.1-0.1,1-0.3,2.1C199.2,316,199,316.9,199,316.9 M194.1,305.7H193v-4.1l0,0c0,0-0.4-0.3-0.9-0.5l-0.9-0.5
              l0,0c0,0,0.7-1.2,1.4-2.5c0.8-1.4,1.4-2.5,1.4-2.5c0,0,0.4,0.2,0.8,0.5c0.5,0.3,0.8,0.5,0.9,0.5l0,0l0.8-0.5
              c0.5-0.3,1.7-1,2.7-1.6l1.9-1.1v-1.9h5.8v2.3l1.7,1c0.9,0.5,2,1.2,2.4,1.4l0.7,0.4l0.9-0.5c0.5-0.3,0.9-0.5,0.9-0.5
              c0,0,0.6,1.1,1.4,2.5c0.8,1.4,1.4,2.5,1.4,2.5c0,0-0.4,0.2-0.9,0.5l-0.9,0.5l0,2.1l0,2.1l-2.3,0l0,0c0,0,0-0.1,0-0.2
              c0-0.1,0-0.3,0.1-0.4c0-0.1,0-0.4,0-0.5c0-0.2,0-0.4,0-0.6c0-0.2,0-0.4,0-0.6c0-0.1,0-0.3,0-0.4c0-0.1,0-0.3-0.1-0.4
              c0-0.1-0.1-0.3-0.1-0.4c0-0.1-0.1-0.3-0.1-0.4s-0.1-0.3-0.1-0.4c0-0.1-0.1-0.3-0.1-0.4c0-0.1-0.1-0.3-0.1-0.3
              c0-0.1-0.1-0.3-0.2-0.4c-0.1-0.1-0.2-0.3-0.2-0.4c-0.1-0.1-0.2-0.3-0.2-0.3c-0.1-0.1-0.1-0.2-0.2-0.3c0-0.1-0.1-0.2-0.2-0.3
              c-0.1-0.1-0.2-0.2-0.2-0.3c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.1-0.3-0.3-0.4-0.4c-0.1-0.1-0.3-0.3-0.4-0.4c-0.1-0.1-0.2-0.2-0.3-0.2
              c-0.1-0.1-0.2-0.2-0.4-0.3c-0.1-0.1-0.3-0.2-0.4-0.2c-0.1-0.1-0.3-0.2-0.4-0.2c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2-0.1-0.3-0.2-0.4-0.2
              c-0.1,0-0.3-0.1-0.4-0.2c-0.1,0-0.3-0.1-0.4-0.1c-0.1,0-0.3-0.1-0.4-0.1c-0.1,0-0.3-0.1-0.5-0.1c-0.1,0-0.3-0.1-0.4-0.1
              c-0.1,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.5,0c-0.2,0-0.4,0-0.5,0c-0.1,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.4,0.1
              c-0.1,0-0.3,0-0.4,0.1c-0.1,0-0.2,0.1-0.4,0.1c-0.1,0-0.3,0.1-0.3,0.1c-0.1,0-0.2,0.1-0.3,0.1s-0.3,0.1-0.4,0.1
              c-0.1,0-0.3,0.1-0.4,0.2c-0.1,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.3,0.2-0.4,0.2c-0.1,0.1-0.3,0.2-0.4,0.2c-0.1,0.1-0.3,0.2-0.3,0.2
              c-0.1,0.1-0.2,0.2-0.3,0.2c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.3,0.2-0.4,0.4c-0.1,0.1-0.3,0.3-0.4,0.4c-0.1,0.1-0.2,0.3-0.3,0.4
              c-0.1,0.1-0.2,0.3-0.3,0.4c-0.1,0.1-0.2,0.3-0.2,0.4c-0.1,0.1-0.2,0.3-0.2,0.4c-0.1,0.1-0.2,0.3-0.2,0.4c-0.1,0.1-0.1,0.3-0.2,0.4
              c0,0.1-0.1,0.3-0.1,0.4c0,0.1-0.1,0.3-0.1,0.4c0,0.1-0.1,0.3-0.1,0.3c0,0.1-0.1,0.2-0.1,0.3c0,0.1-0.1,0.3-0.1,0.3
              c0,0.1-0.1,0.2-0.1,0.4c0,0.1,0,0.3-0.1,0.4c0,0.1,0,0.4,0,0.5c0,0.2,0,0.4,0,0.6c0,0.2,0,0.4,0,0.5c0,0.1,0,0.3,0,0.3
              c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.2l0,0H194.1z'
            />
            <path
              d='M238.1,306.9c2.6,0,4.5,1.6,4.5,3.8c0,2.2-1.9,3.7-4.5,3.7H234v-7.5H238.1z
               M228.7,318.9h10.1c5.5,0,9.4-3.3,9.4-8.1c0-4-2.8-7-6.9-7.9l8.3-11.1h-6.6l-7.7,10.9H234v-10.9h-5.3V318.9z'
            />
            <path d='M265.9,314h-8.6v4.9h22.4V314h-8.6v-22.3h-5.3V314z' />
            <path
              d='M290.6,318.9H308V314h-12.1v-6.2h11.5l0-4.6h-11.5v-6.5h12.7v-4.9h-18V318.9
              z'
            />
            <path
              d='M345.8,306.7c2.6,0,4.5,1.6,4.5,3.8c0,2.1-1.9,3.7-4.5,3.7h-4.5v-7.5H345.8z
               M336.1,318.9h10.4c5.5,0,9.4-3.5,9.4-8.4c0-4.9-3.9-8.5-9.4-8.5h-5.2v-10.3h-5.3V318.9z'
            />
            <path
              d='M376,306.9c2.6,0,4.5,1.6,4.5,3.8c0,2.2-1.9,3.7-4.5,3.7h-4.1v-7.5H376z
               M366.6,318.9h10.1c5.5,0,9.4-3.3,9.4-8.1c0-4-2.8-7-6.9-7.9l8.3-11.1h-6.6l-7.7,10.9h-1.4v-10.9h-5.3V318.9z'
            />
            <path
              d='M410.9,296.3c4.9,0,8.8,4,8.8,9c0,5.1-3.9,9-8.8,9c-4.9,0-8.7-4-8.7-9
              C402.1,300.3,406,296.3,410.9,296.3 M410.9,319.4c8.1,0,14.5-6.2,14.5-14.1c0-7.9-6.4-14.1-14.5-14.1c-8.1,0-14.4,6.2-14.4,14.1
              C396.4,313.2,402.8,319.4,410.9,319.4'
            />
            <path
              d='M437.9,299c0.9-1.8,2-2.7,3.4-2.7c1.8,0,3,1.3,3,3.4l0,1.6v17.6h5.3v-19.6
              c0-5-3.1-8.1-8-8.1c-4,0-7.1,2-8.6,5.6L437.9,299z'
            />
            <path
              d='M461.2,318.9h17.4V314h-12.1v-6.2H478l0-4.6h-11.5v-6.5h12.7v-4.9h-18V318.9
              z'
            />
            <path
              d='M514.6,296.3c-2.8-3.3-6.8-5.1-11.2-5.1c-8.1,0-14.5,6.2-14.5,14.2
              c0,7.9,6.3,14.1,14.5,14.1c4.5,0,8.3-1.8,11-5.1l-4.3-3.2c-1.6,2-4.1,3.2-6.7,3.2c-4.9,0-8.7-4-8.7-9c0-5.1,3.9-9.1,8.8-9.1
              c2.7,0,5,1.2,6.8,3.5L514.6,296.3z'
            />
            <path d='M532.5,314H524v4.9h22.4V314h-8.6v-22.3h-5.3V314z' />
          </g>
          <g>
            <path
              d='M203.8,264.4h-1.4l-3.2,11.6h1.5l2.3-9.5h0.1l2.6,9.5h1.5l2.6-9.5h0.1
              l2.3,9.5h1.5l-3.2-11.6h-1.4l-2.7,9.2h-0.1L203.8,264.4z'
            />
            <path
              d='M242.5,270.2c0-2.8,1.5-4.6,3.9-4.6c2.4,0,3.9,1.8,3.9,4.6
              c0,2.9-1.5,4.7-3.9,4.7C244,274.9,242.5,273.1,242.5,270.2 M251.7,270.2c0-3.7-2.1-6-5.3-6c-3.3,0-5.3,2.3-5.3,6
              c0,3.7,2.1,6,5.3,6C249.6,276.2,251.7,273.9,251.7,270.2'
            />
            <path
              d='M281.5,270.3h2.8c1.5,0,2.3,0.8,2.3,2.2c0,1.4-0.9,2.2-2.4,2.2h-2.7V270.3z
               M281.5,264.4h-1.4V276h4.3c2.2,0,3.7-1.4,3.7-3.4c0-1.6-0.9-2.9-2.3-3.3l2.7-4.8h-1.7l-2.5,4.6h-2.8V264.4z'
            />
            <path d='M323.5,264.4h-7V276h1.4v-10.3h5.6V264.4z' />
            <path
              d='M353.2,265.7h2.4c2.6,0,4.1,1.6,4.1,4.5c0,2.9-1.5,4.5-4.1,4.5h-2.4V265.7z
               M355.6,276c3.4,0,5.5-2.1,5.5-5.8c0-3.6-2-5.8-5.5-5.8h-3.9V276H355.6z'
            />
            <path
              d='M392.9,264.4h-1.4l-3.2,11.6h1.5l2.3-9.5h0.1l2.6,9.5h1.5l2.6-9.5h0.1
              l2.3,9.5h1.5l-3.2-11.6h-1.4l-2.7,9.2h-0.1L392.9,264.4z'
            />
            <path d='M430.9,276v-11.6h1.4V276H430.9z' />
            <path
              d='M462.6,265.7h2.4c2.6,0,4.1,1.6,4.1,4.5c0,2.9-1.5,4.5-4.1,4.5h-2.4V265.7z
               M465.1,276c3.4,0,5.5-2.1,5.5-5.8c0-3.6-2-5.8-5.5-5.8h-3.9V276H465.1z'
            />
            <path d='M506.1,264.4h-7.2V276h7.2v-1.3h-5.7V271h5.4v-1.3h-5.4v-4h5.7V264.4z' />
          </g>
        </g>
      </svg>
    )
  },
  Logoname: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={512}
        height={98.42}
        viewBox='0 0 512 98.42'
        {...props}
      >
        <g>
          <path d='m0,1.73h60.68v17.06H18.49v22.4h39.33v16.28H18.49v39.33H0V1.73Z' />
          <path d='m144.82,0c-.13,0-.38.02-.55.05-.18.02-.47.08-.66.13-.19.05-.55.19-.81.32-.26.12-.64.35-.84.5-.21.17-.48.41-.61.56-.13.14-.35.44-.5.65s-.32.55-.41.76c-.08.2-.2.53-.25.75-.05.2-.09.6-.12.9l-.02.54-.09.02c-.06.01-.4.06-.77.12-.37.05-1.01.15-1.42.24-.42.07-.99.19-1.27.25-.27.06-.91.22-1.42.34-.5.13-1.3.35-1.76.51-.47.14-.92.28-.99.32-.07.02-.12.07-.12.11,0,.04.46,3.42,1.03,7.53.58,4.09,1.07,7.67,1.09,7.94.02.28.09.65.16.88.06.21.19.53.3.72.09.18.27.45.38.6.12.14.33.37.47.5.14.13.35.31.46.38.11.08.37.23.58.32.21.11.55.24.75.28l.37.11h6.91c4.77.02,7.04.01,7.34-.02.24-.02.61-.11.83-.18.21-.07.5-.19.63-.26.12-.07.34-.22.5-.32.15-.11.38-.31.51-.45.13-.13.32-.35.41-.48.09-.12.24-.35.32-.52.08-.16.2-.48.27-.68.08-.26.14-.58.17-.97.03-.32.47-3.88.99-7.93.52-4.03.93-7.36.92-7.38,0-.04-.41-.18-.91-.34-.49-.15-1.16-.36-1.49-.45-.32-.09-.97-.26-1.42-.37-.46-.11-1.21-.27-1.66-.35-.46-.09-1.14-.21-1.5-.26-.37-.06-.71-.11-.76-.12l-.11-.02-.02-.52c-.01-.28-.06-.66-.1-.84-.03-.18-.11-.44-.16-.58-.05-.14-.18-.45-.3-.68-.12-.22-.35-.58-.52-.79-.18-.21-.5-.53-.71-.7-.24-.19-.58-.41-.89-.57-.28-.14-.66-.29-.85-.34-.19-.05-.52-.11-.75-.14-.22-.02-.49-.04-.62-.04m-16.56,8.66s-.31.08-.88.37c-.46.24-1.2.64-1.63.89-.43.25-1.14.67-1.56.94-.44.27-1.16.77-1.62,1.09-.45.32-1.07.78-1.37,1.02-.31.25-.73.59-.97.78-.22.19-.67.59-1.01.88-.33.3-1.03.96-1.55,1.48s-1.18,1.22-1.47,1.55c-.29.32-.68.78-.88,1.01-.2.23-.55.66-.78.97-.24.31-.7.92-1.03,1.37-.32.46-.82,1.18-1.09,1.62-.27.43-.7,1.14-.94,1.56-.25.44-.64,1.16-.88,1.61-.23.46-.57,1.16-.75,1.55-.18.4-.51,1.17-.72,1.7-.21.55-.51,1.33-.65,1.75-.14.41-.37,1.14-.51,1.61-.13.46-.33,1.2-.44,1.61-.09.41-.26,1.16-.37,1.66-.09.5-.22,1.23-.3,1.64-.06.41-.15,1.17-.21,1.7-.05.52-.11,1.01-.12,1.07v.09h-2.06c-1.19,0-2.15.02-2.33.06-.17.02-.44.11-.62.18-.18.07-.46.24-.64.37-.16.13-.4.37-.52.52s-.28.41-.36.58c-.07.17-.16.46-.2.66-.05.25-.06.5-.05.71.01.18.08.48.14.68.07.2.2.48.31.65.09.15.32.4.48.57.2.19.44.35.69.46.22.11.52.21.75.25.31.06,6.52.07,42.6.07s42.29-.01,42.58-.07c.19-.04.45-.11.59-.15.13-.06.35-.17.48-.26.13-.08.34-.26.48-.4.13-.13.32-.38.41-.54.11-.17.22-.45.28-.64.09-.28.11-.45.11-.85,0-.42-.02-.57-.12-.85-.07-.18-.19-.45-.27-.59-.09-.14-.28-.38-.44-.53-.15-.15-.41-.37-.57-.46-.17-.1-.44-.22-.6-.27l-.3-.09-2.22-.02h-2.23s-.01-.12-.01-.12c-.01-.05-.06-.45-.11-.88-.03-.44-.12-1.14-.19-1.56-.06-.44-.18-1.17-.27-1.63-.08-.47-.28-1.36-.43-1.96-.15-.61-.39-1.48-.53-1.94-.13-.45-.34-1.1-.46-1.44-.12-.34-.39-1.06-.6-1.61-.22-.55-.59-1.42-.83-1.94-.24-.52-.64-1.31-.88-1.76-.24-.45-.61-1.12-.83-1.49-.22-.38-.6-1.01-.86-1.41-.26-.4-.7-1.04-.97-1.42-.27-.39-.74-1.02-1.03-1.4-.3-.38-.79-.98-1.1-1.35-.32-.35-.86-.97-1.23-1.36-.37-.38-.92-.96-1.24-1.27-.33-.31-.88-.83-1.23-1.14-.35-.31-.94-.8-1.31-1.11-.38-.31-.98-.78-1.35-1.04-.37-.27-.94-.68-1.27-.9-.33-.22-.88-.59-1.22-.8-.35-.22-.92-.56-1.29-.77-.37-.21-1.01-.56-1.42-.77l-.75-.39-.02.15c-.01.08-.4,3.13-.88,6.78-.46,3.64-.86,6.9-.9,7.23-.02.33-.09.79-.14,1.02-.05.22-.15.6-.22.85-.08.24-.26.68-.39.96-.14.28-.37.7-.51.91-.14.22-.38.56-.52.73-.14.18-.41.48-.6.66-.2.2-.53.48-.75.65s-.57.41-.78.55c-.21.13-.55.32-.77.41-.2.11-.59.26-.84.35-.26.09-.72.22-1.03.29l-.56.12h-7.42c-6.57.04-7.47.02-7.91-.05-.28-.04-.7-.12-.94-.18-.24-.06-.61-.16-.81-.25-.21-.07-.57-.24-.81-.35-.25-.12-.6-.32-.81-.46-.22-.13-.48-.33-.63-.44-.13-.09-.44-.39-.69-.63-.25-.25-.6-.65-.79-.9-.19-.24-.42-.59-.53-.78-.11-.18-.27-.5-.37-.7-.1-.2-.24-.56-.31-.77-.08-.21-.2-.63-.26-.92-.07-.28-.14-.79-.17-1.12-.02-.33-.46-3.64-.98-7.36-.52-3.73-.94-6.8-.96-6.83m-17.17,39.39h-3.96v14.35l-.12.09c-.07.05-1.56.89-3.33,1.87l-3.18,1.79.08.14c.05.08,2.28,4.06,4.96,8.85,2.67,4.78,4.87,8.71,4.88,8.71,0,.01,1.31-.71,2.9-1.6,1.6-.89,2.95-1.64,3-1.68l.09-.07,2.93,1.69c1.62.93,5.95,3.44,9.63,5.56l6.68,3.86v6.8h20.3v-8.05l5.93-3.42c3.26-1.88,7.1-4.1,8.54-4.93l2.62-1.5,2.99,1.68c1.66.91,3,1.67,3.02,1.66,0,0,2.22-3.98,4.95-8.82,2.71-4.85,4.93-8.82,4.95-8.85,0-.02-1.47-.86-3.26-1.87l-3.27-1.84-.02-7.2-.02-7.19-7.95-.02.02.11s.07.35.12.67c.05.32.13.95.19,1.41.05.45.11,1.23.14,1.73.04.53.04,1.37.02,2.07-.01.64-.06,1.53-.09,1.95-.04.44-.12,1.1-.17,1.49-.05.38-.14.98-.21,1.34-.06.34-.19.95-.27,1.34-.09.39-.26,1.04-.37,1.43s-.31,1.03-.44,1.43c-.13.39-.35.99-.5,1.35-.13.35-.37.91-.51,1.22-.13.32-.41.91-.61,1.31-.2.41-.55,1.05-.76,1.43-.22.38-.55.92-.72,1.19-.18.28-.46.71-.63.95-.17.24-.48.68-.71.99-.22.3-.59.77-.8,1.03-.22.27-.64.76-.94,1.09-.3.32-.9.96-1.36,1.4-.45.45-1.04,1.01-1.31,1.24-.28.24-.75.61-1.04.85-.31.24-.85.66-1.23.92-.38.27-.96.66-1.29.88-.33.22-.9.56-1.26.76-.36.22-1.08.59-1.6.85-.53.26-1.21.58-1.51.71-.32.13-.92.37-1.36.53-.44.16-1.11.39-1.49.51s-1.04.31-1.47.41c-.42.12-1.15.27-1.58.37-.45.08-1.1.2-1.45.25-.36.06-.95.13-1.31.17-.37.04-1.01.09-1.42.12-.42.02-1.21.05-1.75.05s-1.32-.02-1.73-.05c-.4-.02-1.05-.07-1.43-.12-.38-.04-1.03-.12-1.44-.19-.41-.06-1.02-.17-1.34-.23-.32-.06-.88-.19-1.24-.27-.37-.1-.91-.24-1.22-.33-.31-.08-.84-.25-1.18-.37-.34-.12-.92-.32-1.29-.46-.37-.14-.96-.39-1.31-.55-.36-.17-1-.46-1.41-.68-.41-.2-1.04-.54-1.4-.75-.35-.2-.94-.55-1.28-.77-.35-.22-.89-.59-1.2-.81-.31-.21-.81-.59-1.11-.82-.29-.24-.8-.65-1.12-.92-.32-.28-.96-.86-1.41-1.31-.45-.44-1.08-1.09-1.4-1.44-.32-.36-.8-.94-1.1-1.29-.28-.35-.73-.96-1.01-1.34s-.66-.96-.88-1.29c-.2-.33-.56-.91-.77-1.29s-.56-1.02-.77-1.43c-.2-.4-.48-1.01-.63-1.32-.14-.33-.38-.89-.51-1.23-.13-.33-.34-.92-.47-1.3-.13-.39-.3-.91-.37-1.18-.08-.26-.22-.77-.31-1.12-.08-.35-.21-.9-.27-1.22-.07-.31-.18-.88-.24-1.25-.06-.38-.15-1.07-.2-1.53-.05-.46-.12-1.27-.14-1.8-.04-.57-.05-1.46-.04-2.12.02-.64.06-1.5.11-1.92.04-.41.1-.91.12-1.1.02-.19.08-.63.14-.97.05-.34.1-.66.11-.7l.02-.08h-3.96Z' />
          <path d='m265.22,43.84c8.99,0,15.63-5.6,15.63-13.28s-6.51-13.02-15.63-13.02h-14.45v26.31h14.45ZM232.28,1.78h35.42c19.14,0,32.82,11.72,32.82,28.39,0,13.93-9.64,24.61-24.09,27.74l29.17,38.93h-23.05l-26.83-38.02h-4.95v38.02h-18.49V1.78Z' />
          <path d='m362.37,18.84h-29.95V1.78h78.53v17.06h-29.95v78h-18.62V18.84Z' />
          <path d='m449.1,1.78h60.94v17.06h-42.46v21.75h40.24l-.13,16.28h-40.11v22.92h44.41v17.06h-62.9V1.78Z' />
        </g>
      </svg>
    )
  },
  Logomark: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={467.77}
        height={512}
        viewBox='0 0 467.77 512'
        {...props}
      >
        <g>
          <path d='m234.32,0c-.66,0-1.97.13-2.88.25-.93.13-2.46.43-3.45.68-.98.25-2.88.98-4.19,1.65-1.34.61-3.31,1.8-4.36,2.58-1.1.87-2.52,2.16-3.2,2.9-.68.74-1.84,2.28-2.58,3.39-.74,1.1-1.67,2.84-2.16,3.94-.43,1.04-1.04,2.77-1.29,3.88-.24,1.04-.49,3.14-.61,4.68l-.13,2.82-.49.13c-.3.06-2.1.32-4,.61-1.91.25-5.23.8-7.39,1.24-2.21.36-5.17.98-6.63,1.29-1.42.3-4.74,1.17-7.39,1.78-2.58.68-6.77,1.84-9.17,2.65-2.46.74-4.81,1.48-5.17,1.65-.38.13-.61.38-.61.55,0,.19,2.39,17.79,5.34,39.15,3.03,21.29,5.55,39.88,5.67,41.29.13,1.48.49,3.39.85,4.55.32,1.1.99,2.77,1.54,3.75.49.93,1.42,2.35,1.97,3.14.61.74,1.73,1.92,2.46,2.6.74.66,1.8,1.59,2.41,1.95.55.44,1.91,1.18,3.01,1.67,1.1.55,2.84,1.23,3.88,1.48l1.91.55,35.95.06c24.8.06,36.62,0,38.21-.19,1.24-.13,3.15-.55,4.32-.93,1.1-.36,2.58-.98,3.26-1.34.61-.38,1.78-1.12,2.58-1.67.8-.55,1.97-1.59,2.65-2.33.68-.68,1.65-1.8,2.16-2.47.49-.61,1.23-1.84,1.65-2.71.43-.85,1.04-2.52,1.42-3.56.43-1.35.74-3.01.87-5.04.17-1.67,2.46-20.2,5.17-41.25,2.71-20.99,4.85-38.27,4.79-38.4-.05-.19-2.14-.93-4.73-1.78-2.54-.8-6.03-1.86-7.77-2.35-1.65-.49-5.04-1.35-7.37-1.91-2.41-.55-6.29-1.42-8.62-1.84-2.41-.49-5.91-1.1-7.81-1.35-1.91-.32-3.7-.55-3.94-.61l-.55-.13-.13-2.71c-.06-1.48-.32-3.43-.5-4.36-.17-.93-.55-2.28-.85-3.01-.25-.74-.93-2.35-1.54-3.51-.61-1.17-1.84-3.03-2.71-4.13-.91-1.1-2.58-2.77-3.69-3.62-1.23-.99-3.03-2.16-4.62-2.96-1.48-.74-3.45-1.53-4.43-1.78-.99-.25-2.71-.55-3.88-.74-1.12-.13-2.54-.19-3.21-.19m-86.15,45.06c-.06-.25-1.61.43-4.55,1.91-2.41,1.23-6.22,3.32-8.49,4.62-2.22,1.29-5.91,3.5-8.13,4.92-2.28,1.42-6.03,4-8.43,5.67-2.35,1.65-5.55,4.05-7.14,5.29-1.61,1.29-3.81,3.07-5.06,4.05-1.17.99-3.5,3.09-5.23,4.55-1.72,1.54-5.34,4.99-8.05,7.7s-6.16,6.33-7.64,8.05c-1.53,1.67-3.56,4.06-4.55,5.23-1.04,1.18-2.84,3.45-4.06,5.06-1.23,1.59-3.62,4.79-5.34,7.14-1.67,2.39-4.25,6.16-5.67,8.43-1.42,2.22-3.62,5.91-4.92,8.13-1.29,2.27-3.32,6.02-4.55,8.37-1.18,2.39-2.96,6.03-3.88,8.07-.93,2.08-2.65,6.08-3.77,8.85-1.1,2.84-2.65,6.9-3.39,9.11-.72,2.16-1.91,5.91-2.65,8.37-.68,2.41-1.72,6.22-2.27,8.38-.49,2.14-1.35,6.03-1.91,8.62-.49,2.58-1.17,6.4-1.54,8.56-.3,2.14-.8,6.08-1.1,8.85-.25,2.71-.55,5.23-.61,5.55l-.06.49h-10.65c-6.21,0-11.2.13-12.12.3-.87.13-2.28.57-3.21.93-.91.36-2.39,1.23-3.32,1.91-.85.68-2.08,1.91-2.69,2.71s-1.48,2.16-1.86,3.01c-.36.87-.85,2.41-1.04,3.45-.25,1.29-.32,2.58-.25,3.7.06.91.44,2.52.74,3.56.38,1.06,1.06,2.52,1.61,3.39.49.8,1.65,2.1,2.52,2.95,1.04.99,2.27,1.8,3.58,2.41,1.17.55,2.69,1.1,3.88,1.29,1.59.3,33.91.36,221.61.36s220.02-.06,221.5-.36c.98-.19,2.33-.55,3.07-.8.68-.3,1.84-.87,2.52-1.35.68-.43,1.78-1.35,2.52-2.1.68-.68,1.67-1.97,2.16-2.82.55-.87,1.17-2.35,1.48-3.32.49-1.48.55-2.35.55-4.44,0-2.21-.13-2.95-.61-4.43-.38-.91-.99-2.33-1.42-3.07-.49-.74-1.48-1.97-2.28-2.77-.79-.8-2.14-1.91-2.95-2.39-.87-.5-2.28-1.12-3.14-1.42l-1.54-.49-11.56-.13-11.58-.06-.06-.55c-.06-.25-.3-2.35-.55-4.55-.17-2.28-.61-5.91-.98-8.13-.32-2.27-.93-6.1-1.42-8.49-.43-2.46-1.48-7.07-2.22-10.21-.79-3.15-2.03-7.7-2.77-10.1-.66-2.35-1.78-5.72-2.39-7.52-.61-1.78-2.03-5.53-3.14-8.37-1.17-2.84-3.07-7.39-4.3-10.1-1.24-2.69-3.32-6.82-4.57-9.17-1.23-2.33-3.2-5.85-4.3-7.75-1.17-1.97-3.14-5.23-4.49-7.33-1.35-2.08-3.64-5.4-5.04-7.37-1.42-2.03-3.83-5.29-5.36-7.26-1.54-1.97-4.13-5.1-5.73-7.03-1.65-1.84-4.49-5.04-6.4-7.07-1.91-1.97-4.81-4.98-6.46-6.59-1.72-1.59-4.55-4.3-6.4-5.91-1.8-1.59-4.87-4.18-6.84-5.78-1.97-1.59-5.1-4.06-7.01-5.42-1.91-1.42-4.87-3.56-6.59-4.68-1.72-1.17-4.55-3.07-6.33-4.18-1.8-1.12-4.81-2.9-6.71-4-1.91-1.1-5.23-2.9-7.39-4l-3.88-2.03-.13.8c-.06.43-2.1,16.31-4.55,35.26-2.39,18.95-4.49,35.87-4.68,37.61-.13,1.72-.49,4.13-.74,5.29-.24,1.17-.8,3.14-1.17,4.43-.43,1.23-1.35,3.51-2.03,4.98-.74,1.48-1.91,3.64-2.65,4.74-.74,1.17-1.97,2.9-2.71,3.81-.74.93-2.14,2.47-3.14,3.45-1.04,1.06-2.77,2.52-3.88,3.39s-2.95,2.16-4.06,2.84c-1.1.68-2.88,1.65-4,2.14-1.04.57-3.07,1.35-4.36,1.8-1.35.49-3.75,1.17-5.36,1.53l-2.9.61-38.58.06c-34.16.13-38.84.06-41.17-.3-1.48-.19-3.62-.61-4.92-.93-1.24-.3-3.15-.85-4.19-1.29-1.1-.36-2.96-1.23-4.19-1.84-1.29-.61-3.14-1.65-4.24-2.39-1.12-.68-2.52-1.73-3.26-2.28-.68-.49-2.28-2.03-3.58-3.26-1.29-1.29-3.14-3.39-4.13-4.68-.98-1.23-2.21-3.07-2.76-4.06-.57-.91-1.42-2.58-1.91-3.62-.5-1.04-1.24-2.9-1.61-4-.43-1.1-1.04-3.26-1.35-4.81-.36-1.47-.74-4.11-.87-5.85-.11-1.72-2.39-18.95-5.1-38.27-2.71-19.39-4.92-35.4-4.98-35.51M58.87,249.99h-20.62v74.66l-.61.49c-.36.25-8.13,4.62-17.3,9.72l-16.54,9.3.43.74c.25.43,11.88,21.11,25.79,46.04,13.91,24.86,25.35,45.3,25.41,45.3,0,.06,6.84-3.7,15.08-8.32,8.3-4.62,15.33-8.56,15.63-8.73l.49-.38,15.27,8.81c8.43,4.85,30.96,17.91,50.1,28.93l34.77,20.06v35.4h105.61v-41.86l30.83-17.79c16.98-9.78,36.93-21.35,44.43-25.67l13.61-7.81,15.57,8.74c8.62,4.74,15.63,8.68,15.69,8.62,0,0,11.56-20.69,25.73-45.91,14.09-25.24,25.67-45.91,25.73-46.04,0-.13-7.64-4.49-16.98-9.72l-17-9.55-.11-37.48-.13-37.42-41.36-.13.13.57c.11.24.36,1.84.61,3.5.24,1.67.68,4.93.98,7.33.25,2.35.55,6.4.74,8.98.19,2.77.19,7.15.13,10.78-.06,3.32-.32,7.94-.49,10.16-.19,2.27-.61,5.72-.87,7.75-.25,1.97-.74,5.1-1.1,6.95-.32,1.78-.99,4.93-1.42,6.96-.49,2.02-1.35,5.4-1.91,7.44-.55,2.03-1.61,5.36-2.28,7.45-.68,2.03-1.84,5.17-2.58,7.01-.68,1.84-1.91,4.74-2.65,6.35-.68,1.65-2.16,4.73-3.2,6.82-1.04,2.16-2.84,5.48-3.94,7.45-1.17,1.97-2.84,4.79-3.75,6.21-.93,1.48-2.41,3.7-3.26,4.93-.87,1.23-2.52,3.56-3.7,5.17-1.17,1.54-3.07,4-4.18,5.36-1.12,1.42-3.32,3.94-4.87,5.66-1.54,1.67-4.68,4.99-7.07,7.26-2.35,2.35-5.42,5.23-6.84,6.46-1.47,1.23-3.88,3.2-5.4,4.43-1.61,1.24-4.44,3.45-6.41,4.81-1.97,1.42-4.98,3.45-6.71,4.55-1.72,1.12-4.66,2.9-6.57,3.94-1.86,1.12-5.61,3.09-8.32,4.44-2.77,1.34-6.27,3.01-7.88,3.69-1.65.68-4.81,1.91-7.07,2.77-2.28.85-5.78,2.03-7.75,2.65-1.97.61-5.42,1.59-7.64,2.14-2.21.61-5.97,1.42-8.24,1.91-2.33.44-5.72,1.06-7.56,1.29-1.86.32-4.93.68-6.84.87-1.91.19-5.23.49-7.39.61-2.21.13-6.27.25-9.11.25s-6.89-.13-8.98-.25c-2.1-.13-5.48-.36-7.45-.61-1.97-.19-5.36-.61-7.5-.98-2.16-.32-5.29-.87-6.96-1.18-1.65-.3-4.55-.98-6.46-1.4-1.91-.5-4.74-1.24-6.33-1.73-1.61-.43-4.38-1.29-6.16-1.91-1.78-.61-4.81-1.65-6.71-2.39-1.91-.74-4.98-2.03-6.82-2.84-1.86-.87-5.18-2.39-7.33-3.51-2.16-1.04-5.42-2.82-7.26-3.88-1.84-1.04-4.87-2.88-6.65-4-1.84-1.17-4.62-3.07-6.22-4.24-1.59-1.1-4.24-3.07-5.78-4.25-1.53-1.23-4.18-3.37-5.85-4.79-1.65-1.48-4.98-4.49-7.33-6.84-2.33-2.27-5.59-5.66-7.26-7.5-1.65-1.86-4.18-4.87-5.72-6.71-1.48-1.84-3.81-4.99-5.23-6.96s-3.45-4.98-4.55-6.7c-1.04-1.73-2.9-4.74-4-6.71s-2.9-5.29-4-7.45c-1.04-2.1-2.52-5.23-3.26-6.89-.74-1.73-1.97-4.62-2.65-6.41-.68-1.72-1.78-4.79-2.46-6.76-.68-2.03-1.54-4.74-1.91-6.16-.44-1.35-1.12-4-1.61-5.85-.43-1.84-1.1-4.68-1.42-6.33-.36-1.61-.91-4.55-1.23-6.52-.3-1.97-.8-5.55-1.04-7.94-.25-2.41-.61-6.59-.74-9.36-.19-2.96-.25-7.58-.19-11.01.13-3.32.32-7.81.55-9.97.19-2.16.5-4.74.61-5.72.13-.99.44-3.26.74-5.06.25-1.78.5-3.43.57-3.62l.11-.44h-20.61Z' />
        </g>
      </svg>
    )
  },
  Spinner: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        stroke='#000'
        viewBox='0 0 24 24'
        {...props}
      >
        <g>
          <circle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'>
            <animate attributeName='stroke-dasharray' dur='1.5s' calcMode='spline' values='0 150;42 150;42 150;42 150' keyTimes='0;0.475;0.95;1' keySplines='0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1' repeatCount='indefinite' />
            <animate attributeName='stroke-dashoffset' dur='1.5s' calcMode='spline' values='0;-16;-59;-59' keyTimes='0;0.475;0.95;1' keySplines='0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1' repeatCount='indefinite' />
          </circle>
          <animateTransform attributeName='transform' type='rotate' dur='2s' values='0 12 12;360 12 12' repeatCount='indefinite' />
        </g>
      </svg>
    )
  },
  Sun: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={15}
        height={15}
        viewBox='0 0 15 15'
        {...props}
      >
        <path
          d='M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386
          0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276
          4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967
          2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7
          2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867
          4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967
          12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386
          14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144
          12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772
          4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5
          15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986
          12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938
          10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457
          8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5
          7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z'
        />
      </svg>
    )
  },
  Moon: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={15}
        height={15}
        viewBox='0 0 15 15'
        {...props}
      >
        <path
          d='M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998
          0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998
          1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998
          2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998
          1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998
          3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906
          4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998
          5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089
          4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906
          6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756
          7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998
          8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998
          7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275
          0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932
          9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563
          11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883
          12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157
          13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857
          13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241
          14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032
          7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891
          5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773
          13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134
          2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488
          1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032
          4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002
          7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963
          10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373
          9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403
          8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853
          5.90487 10.4032 5.60464 10.4032 5.30023Z'
        />
      </svg>
    )
  },
  Play: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={16}
        height={16}
        viewBox='0 0 16 16'
        {...props}
      >
        <polygon points='2 2 14 8 2 14 2 2' />
      </svg>
    )
  },
  Pause: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={16}
        height={16}
        viewBox='0 0 16 16'
        {...props}
      >
        <g>
          <rect x='9.81' y='2' width='1.38' height='12' />
          <rect x='4.81' y='2' width='1.38' height='12' />
        </g>
      </svg>
    )
  },
  ImageOff: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        viewBox='0 0 24 24'
        {...props}
      >
        <g>
          <path d='M0 0h24v24H0z' />
          <path d='M15 8h.01' />
          <path d='M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153' />
          <path d='M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5' />
          <path d='M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3' />
          <path d='M3 3l18 18' />
        </g>
      </svg>
    )
  },
  Laptop: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={15}
        height={15}
        viewBox='0 0 15 15'
        {...props}
      >
        <path
          d='M2 4.25C2 4.11193 2.11193 4 2.25 4H12.75C12.8881 4 13 4.11193 13 4.25V11.5H2V4.25ZM2.25 3C1.55964 3 1 3.55964 1 4.25V12H0V12.5C0
          12.7761 0.223858 13 0.5 13H14.5C14.7761 13 15 12.7761 15 12.5V12H14V4.25C14 3.55964 13.4404 3 12.75 3H2.25Z'
        />
      </svg>
    )
  },
  Shapes: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        {...props}
      >
        <path d='M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z' />
        <rect x='3' y='14' width='7' height='7' rx='1' />
        <circle cx='17.5' cy='17.5' r='3.5' />
      </svg>
    )
  }
}