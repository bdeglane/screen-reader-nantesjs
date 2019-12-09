import React from 'react'
import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/long-text">Texte long</Link></li>
      </ul>
    </nav>
  )
}
