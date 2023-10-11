import * as React from 'react';
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import Option, { RadioOption } from '../../../models/selectOption'
import CustomTooltip from '../CustomTooltip/CustomTooltip'

import styles from './RadioGroup.module.scss'

type Props = {
  name: string
  options: RadioOption[]
  selectedOption?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedOption: (value: any) => void
  withTooltip?: boolean
  dataTestSelector?: string
  vertical?: boolean
  disabled?: boolean
  children?: ReactNode
}

const RadioGroup = (props: Props): React.ReactElement => {
  const [t] = useTranslation('profile')

  const isCurrentOptionChecked = (option: RadioOption) => option.value === props.selectedOption

  const radioOption = (option: RadioOption) => (
    <li key={option.label} className={styles.radioOption}>
      <label className={styles.radioLabel}>
        <input
          type="radio"
          className={styles.radioInput}
          value={option.value}
          name={props.name}
          checked={isCurrentOptionChecked(option)}
          onChange={() => props.setSelectedOption(option.value)}
          data-test={props.dataTestSelector}
          disabled={props.disabled}
        />
        {option.label}
      </label>
      {isCurrentOptionChecked(option) && option.hasChildren ? props.children : <></>}
    </li>
  )

  return (
    <ul className={`${styles.radioGroup} ${props.vertical ? styles.vertical : ''}`}>
      {props.withTooltip
        ? props.options.map((option: Option) => {
            return (
              <CustomTooltip key={option.label} tooltipBody={t(`tooltip${option.value}`)}>
                {radioOption(option)}
              </CustomTooltip>
            )
          })
        : props.options.map((option: Option) => {
            return radioOption(option)
          })}
    </ul>
  )
}

export default RadioGroup
