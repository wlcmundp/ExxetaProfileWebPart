import * as React from 'react';
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import keyCodes from '../../../constants/KeyCodes'
import ProfileDataType from '../../../constants/enums/profileDataTypes'
import CustomTooltip from '../CustomTooltip/CustomTooltip'

import styles from './LevelPicker.module.scss'

type Props = {
  level: number 
  onLevelSetHandler?: (level: number) => void
  dataType: ProfileDataType
  hideTitle?: boolean
  dataTestSelector?: string
  disabled?: boolean
}

const LevelPicker = (props: Props): React.ReactElement => {
  const [t] = useTranslation(['profile', 'common'])

  const [currentLevel, setCurrentLevel] = useState(0)

  const experienceLevelsList = [
    { index: 0, name: t('common:CONNOISSEUR'), level: 1 },
    { index: 1, name: t('common:EXPERT'), level: 2 },
    { index: 2, name: t('common:MASTER'), level: 3 },
  ]

  const languageLevelsList = [
    { index: 0, name: t('profile:languageBeginner'), level: 1 },
    { index: 1, name: t('profile:languageIntermediate'), level: 2 },
    { index: 2, name: t('profile:languageFluent'), level: 3 },
  ]

  const levelList = props.dataType === ProfileDataType.LANGUAGES ? languageLevelsList : experienceLevelsList

  useEffect(() => {
    setCurrentLevel(props.level)
  }, [props.level])

  const setLevel = (index: number) => {
    if (!props.disabled) {
      const level = levelList[index].level
      setCurrentLevel(level)
      props.onLevelSetHandler && props.onLevelSetHandler(level)
    }
  }

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    let newLevel = currentLevel
    if (event.key === keyCodes.arrowLeft) {
      newLevel = currentLevel - 1
      if (newLevel < 1) {
        newLevel = 1
      }
      setLevel(newLevel - 1)
    } else if (event.key === keyCodes.arrowRight) {
      newLevel = currentLevel + 1
      if (newLevel > levelList.length) {
        newLevel = levelList.length
      }
      setLevel(newLevel - 1)
    }
  }

  const renderLevels = () => {
    const listItems = levelList.map((level) => {
      if (currentLevel >= level.level) {
        return (
          <CustomTooltip key={level.name} tooltipBody={level.name}>
            <span
              key={level.name}
              className={`${styles.levelDot} `}
              onClick={() => setLevel(level.index)}
              data-test={`${props.dataTestSelector}-${level.level}`}
            ></span>
          </CustomTooltip>
        )
      }

      return (
        <CustomTooltip key={level.name} tooltipBody={level.name}>
          <span
            key={level.name}
            className={styles.levelDot}
            onClick={() => setLevel(level.index)}
            data-test={`${props.dataTestSelector}-${level.level}`}
          ></span>
        </CustomTooltip>
      )
    })

    return listItems
  }

  return (
    <div className={`${styles.levelPickerContainer} ${!props.hideTitle && styles.marginForTitle}`}>
      {!props.hideTitle && <p className={styles.skillLevelLabel}>{t('profile:skillLevel')}</p>}
      <div
        tabIndex={0}
        onKeyDown={(e) => onKeyDownHandler(e)}
        className={`${styles.levelList} ${!props.hideTitle && styles.marginForLevelList}`}
      >
        {renderLevels()}
      </div>
    </div>
  )
}

export default LevelPicker
