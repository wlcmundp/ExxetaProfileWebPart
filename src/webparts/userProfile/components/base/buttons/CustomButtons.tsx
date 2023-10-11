//import React from 'react'
import * as React from 'react';
import { Link } from 'react-router-dom'

import ButtonLoadingSpinner from './ButtonLoadingSpinner/ButtonLoadingSpinner'
import routerLinkType from '../../../constants/enums/routerLinkType'
import LinkObject from '../../../models/linkObject'
import CustomTooltip from '../CustomTooltip/CustomTooltip'
import LinkTargetType from '../../../constants/enums/LinkTargetType'

import * as styles from '@assets/styles/buttons.module.scss'

type Props = {
  title: string
  onClick?: (e: React.MouseEvent<never>) => void
  iconSrc?: string
  iconSize?: number
  isDisabled?: boolean
  isLoading?: boolean
  children?: React.ReactNode
  svgIcon?: React.ReactElement
  dataTestSelector?: string
  styles?: string
  tooltip?: string
}

const PrimaryButton = (props: Props): React.ReactElement => {
  const buttonElement = (
    <button
      className={`${styles.primaryButton} ${props.styles}`}
      onClick={props.onClick}
      disabled={props.isDisabled || props.isLoading}
      type="button"
      data-test={props.dataTestSelector}
    >
      {props.children}
      {props.title}
      {props.isLoading && <ButtonLoadingSpinner />}
    </button>
  )
  return props.tooltip && props.isDisabled ? (
    <CustomTooltip tooltipBody={props.tooltip} placement="top">
      <div className={styles.tooltipContainer}>{buttonElement}</div>
    </CustomTooltip>
  ) : (
    buttonElement
  )
}

type SubmitButtonProps = {
  title: string
  isLoading: boolean
  dataTestSelector?: string
}

const PrimarySubmitButton = (props: SubmitButtonProps): React.ReactElement => {
  return (
    <button
      className={styles.primaryButton}
      disabled={props.isLoading}
      type="submit"
      data-test={props.dataTestSelector}
    >
      {props.title}
      {props.isLoading && <ButtonLoadingSpinner />}
    </button>
  )
}

const SecondaryButton = (props: Props): React.ReactElement => {
  const styling = `${styles.secondaryButton} ${props.styles}`
  return (
    <button
      className={styling}
      onClick={props.onClick}
      disabled={props.isDisabled}
      type="button"
      data-test={props.dataTestSelector}
    >
      {props.children}
      {props.title}
      {props.isLoading && <ButtonLoadingSpinner />}
    </button>
  )
}

const LinkButton = (props: Props): React.ReactElement => {
  return (
    <div
      className={`${styles.linkButtonContainer} ${props.styles ? props.styles : ''} ${
        props.isDisabled ? styles.disabled : ''
      }`}
    >
      <button
        className={`${styles.linkButton} ${props.isDisabled ? styles.disabled : ''}`}
        type="button"
        disabled={props.isDisabled}
        onClick={props.onClick}
        data-test={props.dataTestSelector}
      >
        {props.iconSrc && <img src={props.iconSrc} height={props.iconSize || 24} />}
        {props.svgIcon}
        {props.title}
        {props.isLoading && <ButtonLoadingSpinner />}
      </button>
    </div>
  )
}

const LinkButtonSmall = (props: Props): React.ReactElement => {
  return (
    <div className={`${styles.linkButtonContainer} ${props.styles}`} onClick={props.onClick}>
      <img src={props.iconSrc} height={props.iconSize || 24} />
      {props.svgIcon}
      <button
        className={styles.linkButtonSmall}
        type="button"
        data-test={props.dataTestSelector}
        disabled={props.isDisabled}
      >
        {props.title}
      </button>
    </div>
  )
}

type RefLinkButtonProps = {
  title?: string
  href: string
  iconSrc?: string
  iconAlt?: string
  iconSize?: number
  small?: boolean
  styles?: string
  dataTestSelector?: string
  isDisabled?: boolean
}

const RefLinkButton = (props: RefLinkButtonProps): React.ReactElement => {
  const styleClasses = `${props.styles} ${props.small ? styles.textLinkButtonSmall : styles.textLinkButton} ${
    props.isDisabled ? styles.disabled : ''
  }`
  return (
    <a
      className={styleClasses}
      href={props.href}
      rel="noreferrer"
      target={LinkTargetType.BLANK}
      data-test={props.dataTestSelector}
    >
      {props.iconSrc && <img src={props.iconSrc} height={props.iconSize || 24} alt={props.iconAlt || ''} />}
      <span className={styles.linkButton}>{props.title}</span>
    </a>
  )
}

type RouterLinkProps = {
  children: React.ReactNode
  href: LinkObject | string
  type: routerLinkType
  styles?: string
  dataTestSelector?: string
  onClick?: () => void
  isDisabled?: boolean
  tooltip?: string
}

const RouterLink = (props: RouterLinkProps): React.ReactElement => {
  let linkClass = ''
  switch (props.type) {
    case routerLinkType.Primary:
      linkClass += styles.primaryLink
      break
    case routerLinkType.Secondary:
      linkClass += styles.secondaryLink
      break
    case routerLinkType.Text:
      linkClass += `${styles.linkButtonContainer} ${styles.textLinkButton}`
      break
    case routerLinkType.TextSmall:
      linkClass += `${styles.linkButtonContainer} ${styles.textLinkButtonSmall}`
      break
    case routerLinkType.Image:
      linkClass += styles.imageButton
      break
  }

  const routerLinkElement = (
    <Link
      onClick={props.onClick}
      className={`${linkClass} ${props.styles} ${props.isDisabled ? styles.disabled : ''}`}
      to={props.href}
      data-test={props.dataTestSelector}
    >
      {props.children}
    </Link>
  )

  return props.tooltip && props.isDisabled ? (
    <CustomTooltip tooltipBody={props.tooltip} placement="top">
      <div className={styles.tooltipContainer}>{routerLinkElement}</div>
    </CustomTooltip>
  ) : (
    routerLinkElement
  )
}

type ButtonStyleLinkProps = {
  title: string
  href: string
  imgSrc?: string
  imgAlt?: string
  isDisabled?: boolean
}

const PrimaryLink = (props: ButtonStyleLinkProps): React.ReactElement => {
  return (
    <a
      className={`${styles.primaryLink} ${props.isDisabled ? styles.disabled : ''}`}
      href={props.href}
      rel="noreferrer"
      target={LinkTargetType.BLANK}
    >
      <span>{props.title}</span>
      {props.imgSrc && <img src={props.imgSrc} className={styles.primaryLinkImage} alt={props.imgAlt} />}
    </a>
  )
}

type ImageButtonProps = {
  onClick: (e: React.MouseEvent<never>) => void
  imgAlt: string
  imgSrc: string
  dataTestSelector?: string
  imgSize?: number
  disabled?: boolean
  styles?: string
}

const ImageButton = (props: ImageButtonProps): React.ReactElement => {
  return (
    <button
      className={`${styles.imageButton} ${props.styles}`}
      onClick={props.onClick}
      disabled={props.disabled}
      data-test={props.dataTestSelector}
      type="button"
    >
      <img src={props.imgSrc} height={props.imgSize || 24} alt={props.imgAlt} />
    </button>
  )
}

type ChildrenButtonProps = {
  onClick: (e: React.MouseEvent<never>) => void
  children: React.ReactElement
  dataTestSelector?: string
  disabled?: boolean
}

const ChildrenButton = (props: ChildrenButtonProps): React.ReactElement => {
  return (
    <button
      className={styles.imageButton}
      onClick={props.onClick}
      type="button"
      data-test={props.dataTestSelector}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

type LabelButtonProps = {
  title: string
  onClick?: (e: React.MouseEvent<never>) => void
  isActive: boolean
  dataTestSelector?: string
  styles?: string
}

const LabelButton = (props: LabelButtonProps): React.ReactElement => {
  return (
    <button
      className={`${styles.labelButton} ${props.isActive && styles.labelButtonActive} ${props.styles}`}
      onClick={props.onClick}
      type="button"
      data-test={props.dataTestSelector}
    >
      {props.title}
    </button>
  )
}

type RefShareButtonProps = {
  title?: string
  href: string
  iconSrc?: string
  iconAlt?: string
  iconSize?: number
  disabled?: boolean
  onClick?: (e: React.MouseEvent<never>) => void
  styles?: string
}

const RefShareButton = (props: RefShareButtonProps): React.ReactElement => {
  return (
    <a
      className={`${styles.refShareButton} ${props.disabled && styles.refShareButtonDisabled} ${props.styles}`}
      href={props.href}
      onClick={props.onClick}
      rel="noreferrer"
      target={LinkTargetType.BLANK}
    >
      {props.iconSrc && <img src={props.iconSrc} height={props.iconSize || 24} alt={props.iconAlt} />}
      <span className={styles.linkButton}>{props.title}</span>
    </a>
  )
}

export {
  PrimaryButton,
  PrimarySubmitButton,
  SecondaryButton,
  LinkButton,
  LinkButtonSmall,
  RefLinkButton,
  RouterLink,
  PrimaryLink,
  ImageButton,
  ChildrenButton,
  LabelButton,
  RefShareButton,
}

export default PrimaryButton
