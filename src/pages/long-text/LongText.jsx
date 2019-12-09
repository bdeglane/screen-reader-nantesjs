import React from 'react'

export function LongText() {
  return (
    <section>
      <h1>Lecteur d'écran</h1>
      <p>
        Un lecteur d'écran (également appelé revue d'écran) est un logiciel d’assistance technique destiné aux
        personnes « empêchées de lire » (aveugles, fortement malvoyantes, dyslexiques, dyspraxiques…) : il retranscrit
        par synthèse vocale et/ou sur un afficheur braille ce qui est affiché sur l'écran d'un ordinateur tant en termes
        de contenu que de structure et permet d'interagir avec le système d’exploitation et les logiciels applications.
      </p>
      <nav>
        <ul>
          <li><a href="#ally-app">Accessibilité des applications et des documents</a></li>
          <li><a href="#restit">Modes de restitution</a></li>
        </ul>
      </nav>
      <h2 id="ally-app">Accessibilité des applications et des documents</h2>
      <p>
        Le bon fonctionnement d’un lecteur d’écran repose sur des applications correctement construites, qui
        interagissent
        avec le système d’exploitation via les API d’accessibilité. Les documents élaborés à l’aide de ces applications
        doivent également être correctement structurés. Par exemple, pour un document de type texte, doivent être
        utilisés : les styles de titres, de véritables listes à puces…
      </p>
      <p>
        Concernant les sites web, la problématique de l’accessibilité a été abordée par la Web Accessibility Initiative
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
    </section>
  )
}
