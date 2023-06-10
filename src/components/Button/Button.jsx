import React from 'react'
import Styles from './Button.module.scss'

const Button = ({children, className, type}) => {
  return (
    <button className={`${Styles[className]} ${Styles[type]} ${Styles['button']}`}>{children}</button>
  )
}

export default Button