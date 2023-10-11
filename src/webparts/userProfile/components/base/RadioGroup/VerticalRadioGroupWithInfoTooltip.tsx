//import React from 'react'
import * as React from 'react';
import { useTranslation } from 'react-i18next'

import { OTHER } from '../../../constants/ViolationTypes'
import Option from '../../../models/selectOption'
import VisibilityTypes from '../../../constants/enums/visibilityTypes'
import CustomTooltip from '../CustomTooltip/CustomTooltip'

//import InfoIcon from '@assets/images/icons/info.svg'

import styles from './VerticalRadioGroupWithInfoTooltip.module.scss'

type Props = {
  name: string
  options: Option[]
  selectedOption?: string
  setSelectedOption: (value: string) => void
  dataTestSelector?: string
}

const VerticalRadioGroupWithInfoTooltip = (props: Props): React.ReactElement => {
  const [t] = useTranslation(['common'])

  const radioOption = (option: Option, index: number) => (
    <div className={styles.radioLabel} key={index}>
      <label>
        <input
          type="radio"
          className={styles.radioInput}
          value={option.value}
          name={props.name}
          checked={option.value === props.selectedOption}
          onChange={() => props.setSelectedOption(option.value as VisibilityTypes)}
          data-test={props.dataTestSelector}
        />
        {option.label}

        {option.value !== OTHER && (
          <CustomTooltip key={index} tooltipBody={t(`tooltip_${option.value}`)} placement="right">
            <img src=""></img>
          </CustomTooltip>
        )}
      </label>
    </div>
  )

  return (
    <div className={styles.radioGroup}>
      {props.options.map((option: Option, index: number) => {
        return radioOption(option, index)
      })}
    </div>
  )
}

export default VerticalRadioGroupWithInfoTooltip
