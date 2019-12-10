import React from 'react'
import { Input } from '../../components'

import styles from './form.module.css'

export function Form() {
  return (
    <section>
      <form className={styles.form}>

        <Input type="text" id="name" name="name" placeholder="Name" label="Name" />
        <Input type="email" id="email" name="email" placeholder="Email" label="Email" />
        <Input type="text" id="phone" name="phone" placeholder="Phone" label="Phone" />
        <Input type="url" id="website" name="website" placeholder="Website" label="Website" />

        <div className={styles.formGroup}>
          <label htmlFor="job">Job</label>
          <select id="job" name="job">
            <optgroup label="Indoors">
              <option value="fishkeeping">Fishkeeping</option>
              <option value="reading">Reading</option>
              <option value="boxing">Boxing</option>
              <option value="debate">Debate</option>
              <option value="gaming">Gaming</option>
              <option value="snooker">Snooker</option>
              <option value="other_indoor">Other</option>
            </optgroup>
            <optgroup label="Outdoors">
              <option value="football">Football</option>
              <option value="swimming">Swimming</option>
              <option value="fishing">Fishing</option>
              <option value="climbing">Climbing</option>
              <option value="cycling">Cycling</option>
              <option value="other_outdoor">Other</option>
            </optgroup>
          </select>
        </div>
        <textarea name="field5" placeholder="Message" />

        <input type="submit" value="Send Message" />
      </form>
    </section>
  )
}
