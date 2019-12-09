import React from 'react'
import { node } from 'prop-types'

import styles from './header.module.css'


Header.propTypes = {
  children: node,
}

Header.defaultProps = {
  children: null,
}

export function Header({ children }) {
  return (
    <header className={styles.header}>{children}</header>
  )
}
