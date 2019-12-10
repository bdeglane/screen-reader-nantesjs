import React from 'react'
import { Link } from 'react-router-dom'

import styles from './nav.module.css'


export function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/long-text">Texte long</Link></li>
        <li><Link to="/tableau">Tableau</Link></li>
        <li><Link to="/form">Formulaire</Link></li>
        <li><Link to="/js-app">Application javascript</Link></li>
      </ul>
    </nav>
  )
}
