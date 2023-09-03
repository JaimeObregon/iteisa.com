import { Command, html, css } from '../modules/command.js'

class IndyCommand extends Command {
  static html = html`
    <x-output>
      <pre>
Idea original: Jaime Gómez-Obregón
Diseño: Jaime Gómez-Obregón
Programación: Jaime Gómez-Obregón
Coordinación del proyecto: Jaime Gómez-Obregón
Analista principal: Jaime Gómez-Obregón
Testing: Jaime Gómez-Obregón
Despliegue: Jaime Gómez-Obregón
Dirección artística: Jaime Gómez-Obregón
Productor ejecutivo: Jaime Gómez-Obregón
Fotografía: Jaime Gómez-Obregón
Asistencia técnica al productor ejecutivo: Jaime Gómez-Obregón
Jefe de proyecto: Jaime Gómez-Obregón
Departamento legal: Jaime Gómez-Obregón
Dirección de operaciones: Jaime Gómez-Obregón
Departamento financiero: Jaime Gómez-Obregón

Solo un animal resultó herido durante esta superproducción: Jaime Gómez-Obregón.

Este sitio web ha sido programado desde la cama y en bolas, con un portátil sobre el regazo, en el verano de 2023. Nace aquí un nuevo paradigma de desarrollo de software: el tecnonudismo.

Este súper proyecto no habría sido posible sin la colaboración del repartidor a domicilio de Domino's pizza.

Copyright (c) MMXXIII, Jaime Gómez-Obregón.
      </pre
      >
    </x-output>
  `

  connectedCallback() {
    const chiptune = new Audio('/sounds/chiptune.mp3')
    chiptune.play()
  }
}

export { IndyCommand }

customElements.define('x-indy-command', IndyCommand)
