//import React from 'react'
import * as React from 'react';

import * as variables from '@assets/styles/variables.module.scss'

type Props = {
  stroke?: string
  fill?: string
  height?: number
  altText?: string
}

const SvgTrashcan = (props: Props): React.ReactElement => {
  const stroke = props.stroke || variables.black
  const fill = props.fill || variables.black
  const height = props.height || 24

  return (
    <svg height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title id="catTitle">{props.altText}</title>
      <path d="M9 6V3H15V6" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7V5ZM19 7C19.5523 7 20 6.55228 20 6C20 5.44772 19.5523 5 19 5V7ZM5 7L19 7V5L5 5V7Z"
        fill={fill}
      />
      <path d="M12 9V17" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 20L7 6H17L16 20H12" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default SvgTrashcan
