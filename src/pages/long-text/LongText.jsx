import React from 'react'
import { Content } from '../../components'
import styles from './long-text.module.css'
import logoNvda from './NVDA-Product-Box-small.png'

export function LongText() {
  return (
    <Content>
      <section>
        <h1>Lecteur d'écran</h1>
        <p>
          Un lecteur d'écran (également appelé revue d'écran) est un logiciel d’assistance technique destiné aux
          personnes « empêchées de lire » (aveugles, fortement malvoyantes, dyslexiques, dyspraxiques…) : il retranscrit
          par synthèse vocale et/ou sur un afficheur braille ce qui est affiché sur l'écran d'un ordinateur tant en
          termes
          de contenu que de structure et permet d'interagir avec le système d’exploitation et les logiciels
          applications.
        </p>
        <nav>
          <ul>
            <li><a href="#ally-app">Accessibilité des applications et des documents</a></li>
            <li><a href="#restit">Modes de restitution</a></li>
            <li>
              <a href="#NVDA">NVDA</a>
              <ul>
                <li><a href="#NVDA-histoire">Historique</a></li>
                <li><a href="#NVDA-caracteristique">Caractéristiques</a></li>
                <li><a href="#NVDA-utilisation">Utilisation</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <h2 id="ally-app">Accessibilité des applications et des documents</h2>
        <p>
          Le bon fonctionnement d’un lecteur d’écran repose sur des applications correctement construites, qui
          interagissent
          avec le système d’exploitation via les API d’accessibilité. Les documents élaborés à l’aide de ces
          applications
          doivent également être correctement structurés. Par exemple, pour un document de type texte, doivent être
          utilisés : les styles de titres, de véritables listes à puces…
        </p>
        <p>
          Concernant les sites web, la problématique de l’accessibilité a été abordée par la Web Accessibility
          Initiative
          (WAI) du World Wide Web Consortium (W3C) qui a produit une série de recommandations, les Web Content
          Accessibility Guidelines (en), afin d’aider les développeurs de contenu à produire des sites appropriés.
        </p>
        <h2 id="restit"> Modes de restitution </h2>
        <p>Il existe deux principaux modes de restitution des informations interceptées par le lecteur d’écran :</p>
        <ul>
          <li>la synthèse vocale</li>
          <li>l'afficheur braille</li>
        </ul>
        <p>
          La synthèse vocale est le mode le plus utilisé, d’une part parce que seule une minorité des personnes
          déficientes
          visuelles maîtrise le braille, d’autre part parce que les afficheurs braille sont des dispositifs coûteux.
        </p>
        <h2 id="NVDA">NVDA</h2>
        <img className={styles.longText__img} src={logoNvda} alt="" />
        <img className={styles.longText__img} src={logoNvda} alt="Boîte produit NVDA" />
        <figure className={styles.longText__img}>
          <img src={logoNvda} alt="Boîte produit NVDA" />
          <figcaption>Boîte produit NVDA</figcaption>
        </figure>
        <h3 id="NVDA-histoire">Historique</h3>
        <p>
          Aveugle à l'âge de 15 ans, l'Australien Michael Curran prend conscience du coût important des lecteurs d'écran
          existants pour les personnes malvoyantes, et par conséquent de la difficulté d'accessibilité à l'univers
          numérique pour nombre d'entre elles. Porté par la vague des logiciels en libre accès, il travaille en 2006 sur
          un lecteur d'écran accessible et gratuit, NonVisual Desktop Access. Avec son ami et collègue James Teh,
          également handicapé visuel, il met sur pied NV Access, une organisation ayant pour but de supporter le
          développement de leur logiciel. Ils bénéficient notamment de financement de la Fondation Mozilla et de
          Microsoft.
        </p>
        <h3 id="NVDA-caracteristique">Caractéristiques</h3>
        <p>
          La restitution sonore ainsi que le contrôle de la voix de l'utilisateur sont réalisés via un synthétiseur
          vocal
          (eSpeak, par défaut, ou alors ETI-Eloquence, Nuance ou Acapela) ou un afficheur braille.
        </p>
        <p>
          NVDA fonctionne sur un processeur 32 ou 64 bits. Il peut être téléchargé sur l'ordinateur, mais peut également
          être utilisé directement à partir d'une clé USB ou d'un autre support portable, ce qui permet d'avoir accès à
          un
          lecteur d'écran en dehors de la maison.
        </p>
        <p>
          Il prend en charge plusieurs interfaces d'accessibilité telles que Microsoft Active Accessibility, Java Access
          Bridge, IAccessible2 et UI Automation4.
        </p>
        <p>
          Il est compatible avec les navigateurs Google Chrome, Firefox, Internet Explorer et Microsoft Edge, les
          différents
          services de messagerie électronique, tout comme avec de nombreux logiciels de bureautique : Microsoft Word,
          Excel,
          Powerpoint, mais également LibreOffice ou OpenOffice.
        </p>
        <p>
          Le lecteur d'écran NVDA lit automatiquement le texte se trouvant sous la souris. Il énonce des informations au
          sujet de la mise en forme du texte : police, taille, présence de fautes, etc. La synthèse vocale peut être
          personnalisée en termes de volume, débit, hauteur, ponctuation, changement automatique de langue. Il est
          possible
          d'ajouter des modules complémentaires pour plus de fonctionnalités.
        </p>
        <h3 id="NVDA-utilisation">Utilisation</h3>
        <p>
          NVDA rejoint un nombre grandissant d'utilisateurs, et rattrape JAWS, son principal compétiteur sur Windows.
          Selon une enquête menée en 2017, 64,9% des gens utilisant un lecteur d'écran avaient recours à NVDA, contre
          66%
          qui utilisaient Jaws et 39,6% qui utilisaient VoiceOver (développé par Apple). Lorsqu'ils naviguent sur le
          Web,
          c'est avec Firefox qu'ils sont plus nombreux à utiliser NVDA.
        </p>
      </section>
    </Content>
  )
}
