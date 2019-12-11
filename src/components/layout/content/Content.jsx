import React from 'react'
import { node } from 'prop-types'

import styles from './content.module.css'


Content.propTypes = {
  children: node,
}

Content.defaultProps = {
  children: null,
}

export function Content({ children }) {
  return (
    <section className={styles.content}>{children}</section>
  )
}
