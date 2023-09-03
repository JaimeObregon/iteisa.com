import { Command, html, css } from '../modules/command.js'

class ITEISACommand extends Command {
  static html = html`
    <x-output>
      <pre>
      <h1>LA EMPRESA</h1>
      
      ITEISA es una empresa del sector tecnológico fundada en 2004. Atesora una
      trayectoria de 20 años en el mercado de la consultoría y los servicios en la
      nube, y más de 1000 clientes en varios países.
      
      En agosto de 2023 el negocio y la plataforma tecnológica de ITEISA han sido
      adquiridos por otra compañía. Comenzamos así una nueva etapa.
      
      ITEISA, acrónimo de Internet, Telecomunicaciones e Ingeniería de Santander, es
      un proyecto de Jaime Gómez-Obregón.
      
      Más sobre Jaime Gómez-Obregón en Wikipedia:
      <a href="https://es.wikipedia.org/wiki/Jaime_G%C3%B3mez-Obreg%C3%B3n">https://es.wikipedia.org/wiki/Jaime_Gómez-Obregón</a>
      
      </pre>
    </x-output>
  `

  connectedCallback() {}
}

export { ITEISACommand }

customElements.define('x-iteisa-command', ITEISACommand)
