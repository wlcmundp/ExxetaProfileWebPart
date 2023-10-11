//import React from 'react'
import * as React from 'react';
import PulseLoader from 'react-spinners/PulseLoader'

import * as variables from '@assets/styles/variables.module.scss'

import styles from './ButtonLoadingSpinner.module.scss'

type Props = {
  color?: string
}

const ButtonLoadingSpinner = (props: Props): React.ReactElement => {
  return (
    <div className={styles.container}>
      <PulseLoader size={8} color={props.color || variables.greySecondary} />
    </div>
  )
}

export default ButtonLoadingSpinner
