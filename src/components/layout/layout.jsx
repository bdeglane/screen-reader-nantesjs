import React from 'react'
import { node } from 'prop-types'

import styles from './layout.module.css'


Layout.propTypes = {
  children: node,
}

Layout.defaultProps = {
  children: null,
}

export function Layout({ children }) {
  return (
    <div className={styles.layout}>{children}</div>
  )
}
