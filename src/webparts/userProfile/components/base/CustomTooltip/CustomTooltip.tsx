//import React from 'react'
import * as React from 'react';
import { Placement } from 'react-bootstrap/esm/types'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import './CustomTooltip.scss'

type Props = {
  children: React.ReactElement
  tooltipBody?: string | React.ReactElement
  placement?: Placement
  variableWidth?: boolean
  id?: string
}

const CustomTooltip = (props: Props): React.ReactElement => {
  return (
    <OverlayTrigger
      placement={props.placement ? props.placement : 'top'}
      overlay={
        <Tooltip id={props.id || 'radio-button-tooltip'} className={props.variableWidth ? 'variableWidthTooltip' : ''}>
          {props.tooltipBody}
        </Tooltip>
      }
    >
      {props.children}
    </OverlayTrigger>
  )
}

export default CustomTooltip
