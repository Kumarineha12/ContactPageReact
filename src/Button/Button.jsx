import React from 'react'
import styles from './Button.module.css'
const Button = (props) => {
  //WE CAN USE DESTRUCTING INSTEDA OF USING EVERWHERE PROPS
  const{isOutline, icon, text}=props;
  return (
    <button className={isOutline? styles.outline_btn: styles.primary_btn}>
      {icon}
      {text}  
    </button>
  )
}

export default Button
