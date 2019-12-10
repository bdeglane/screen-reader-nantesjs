import React from 'react'
import { string } from 'prop-types'

import styles from './input.module.css'

Input.propTypes = {
  id: string.isRequired,
  type: string.isRequired,
  name: string.isRequired,
  label: string.isRequired,
  placeholder: string,
}

Input.defaultProps = {
  placeholder: null,
}

export function Input({ id, type, name, placeholder, label, ...props }) {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} id={id} {...props} />
    </div>
  )
}
