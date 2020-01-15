import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Input, Content, Spinner } from '../../components'

import styles from './form.module.css'

export function Form() {
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  const onsubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      history.push('/long-text')
    }, 3000)
  }

  return (
    <Content>
      <h1>Formulaire</h1>

      {loading
        ? <Spinner />
        : (
          <Fragment>
            <section>
              <h2>Formulaire Simple</h2>
              <form className={styles.form} onSubmit={onsubmit}>
                <Input type="text" id="surname" name="surname" placeholder="Nom" label="Nom" />
                <Input type="text" id="name" name="name" placeholder="Prénom" label="Prénom" />
                <Input type="email" id="email" name="email" placeholder="Email" label="Email" />
                <Input type="text" id="phone" name="phone" placeholder="Téléphone" label="Téléphone" />
                <Input type="url" id="website" name="website" placeholder="Site internet" label="Site internet" />

                <div className={styles.formGroup}>
                  <label htmlFor="job">Loisir</label>
                  <select id="job" name="Loisir">
                    <optgroup label="Intérieur">
                      <option value="reading">Lecture</option>
                      <option value="boxing">Boxe</option>
                      <option value="debate">Séries et cinéma</option>
                      <option value="gaming">Jeux vidéo</option>
                      <option value="other_indoor">Autre</option>
                    </optgroup>
                    <optgroup label="Extérieur">
                      <option value="football">Football</option>
                      <option value="swimming">Nage</option>
                      <option value="fishing">Pèche</option>
                      <option value="climbing">Escalade</option>
                      <option value="cycling">Vélo</option>
                      <option value="other_outdoor">Autre</option>
                    </optgroup>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="demande">Votre demande</label>
                  <textarea id="demande" name="field5" placeholder="Votre message" />
                </div>

                <input type="submit" value="Envoyer votre demande" />
              </form>
            </section>

            <section>
              <h2>Formulaire accessible</h2>
              <form className={styles.form} onSubmit={onsubmit}>
                <fieldset>
                  <legend>Votre identité</legend>
                  <Input type="text" id="surname" name="surname" placeholder="Nom" label="Nom" />
                  <Input type="text" id="name" name="name" placeholder="Prénom" label="Prénom" />
                </fieldset>
                <fieldset>
                  <legend>Vos coordonnées</legend>
                  <Input type="email" id="email" name="email" placeholder="Email" label="Email" />
                  <Input type="text" id="phone" name="phone" placeholder="Téléphone" label="Téléphone" />
                  <Input type="url" id="website" name="website" placeholder="Site internet" label="Site internet" />
                </fieldset>

                <fieldset>
                  <legend>Vos remarques</legend>
                  <div className={styles.formGroup}>
                    <label htmlFor="job">Objet de votre demande</label>
                    <select id="job" name="object">
                      <optgroup label="Intérieur">
                        <option value="reading">Lecture</option>
                        <option value="boxing">Boxe</option>
                        <option value="debate">Séries et cinéma</option>
                        <option value="gaming">Jeux vidéo</option>
                        <option value="other_indoor">Autre</option>
                      </optgroup>
                      <optgroup label="Extérieur">
                        <option value="football">Football</option>
                        <option value="swimming">Nage</option>
                        <option value="fishing">Pèche</option>
                        <option value="climbing">Escalade</option>
                        <option value="cycling">Vélo</option>
                        <option value="other_outdoor">Autre</option>
                      </optgroup>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="demande">Votre demande</label>
                    <textarea id="demande" name="field5" placeholder="Votre message" />
                  </div>
                </fieldset>
                <input type="submit" value="Envoyer votre demande" aria-describedby="redirect-to-text" />
                <p className="sr-only" id="redirect-to-text">
                  Soumettre le formulaire redirigera vers la ressource "texte long"
                </p>
              </form>
            </section>
          </Fragment>
        )}
    </Content>
  )
}
