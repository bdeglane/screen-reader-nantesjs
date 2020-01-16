import React from 'react'
import { Content } from '../../components'
import styles from './table.module.css'

export function Table() {
  const Lundi = 'Lundi'
  const Mardi = 'Mardi'
  const Mercredi = 'Mercredi'
  const Jeudi = 'Jeudi'
  const Vendredi = 'Vendredi'

  const ouvert = 'Ouvert'
  const ferme = 'Fermé'

  return (
    <Content>
      <section>
        <h2>Tableau Simple</h2>
        <table className={styles.table}>
          <caption>Horaire d'ouverture</caption>
          <tr>
            <td></td>
            <th scope="col">{Lundi}</th>
            <th scope="col">{Mardi}</th>
            <th scope="col">{Mercredi}</th>
            <th scope="col">{Jeudi}</th>
            <th scope="col">{Vendredi}</th>
          </tr>
          <tr>
            <th scope="row">09:00 - 11:00</th>
            <td>{ferme}</td>
            <td>{ouvert}</td>
            <td>{ouvert}</td>
            <td>{ferme}</td>
            <td>{ferme}</td>
          </tr>
          <tr>
            <th scope="row">11:00 - 13:00</th>
            <td>{ouvert}</td>
            <td>{ouvert}</td>
            <td>{ferme}</td>
            <td>{ferme}</td>
            <td>{ferme}</td>
          </tr>
          <tr>
            <th scope="row">13:00 - 17:00</th>
            <td>{ferme}</td>
            <td>{ouvert}</td>
            <td>{ferme}</td>
            <td>{ouvert}</td>
            <td>{ferme}</td>
          </tr>
        </table>
      </section>
    </Content>
  )
}
