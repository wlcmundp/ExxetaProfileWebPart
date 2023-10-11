//import React from 'react'
import * as React from 'react';

import * as variables from '@assets/styles/variables.module.scss'

type Props = {
  stroke?: string
  fill?: string
  height?: number
}

const SvgMove = (props: Props): React.ReactElement => {
  const stroke = props.stroke || variables.black
  const height = props.height || 24

  return (
    <svg height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.0002 20V4M8.5 5.49997L12.0002 2L15.5 5.49997"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 18.5L12 22L15.5 18.5"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 15.5L22 12L18.5 8.5"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5.5 15.5L2 12L5.5 8.5" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 12H7.96875M21.5 12H12.0469" stroke={stroke} strokeWidth="2" />
    </svg>
  )
}

export default SvgMove
