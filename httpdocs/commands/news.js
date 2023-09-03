import { Command, html, css } from '../modules/command.js'

class NewsCommand extends Command {
  static html = html`
    <x-output>
      <pre>
      <h1>Actualidad de ITEISA</h1>
      <ol>
      <li><b style="background: #28ea00; color: black">La compañía ZITELIA adquiere el negocio y la plataforma de ITEISA</b>
      23/08/2024</li>
      </ol>
      Teclea el número de un mensaje o pulsa sobre su titular para leerlo, o usa el
      subcomando <b style="background: #28ea00; color: black">BLOG</b> para listar las entradas de la etapa anterior (2004-2023).
      Teclea <b style="background: #28ea00; color: black">BACK</b> para volver al menú principal.
      
      NEWS > BLOG<i></i>
      
      <h1>Blog</h1>
      
      Los artículos que se listan a continuación fueron publicados en el blog de
      ITEISA en el período 2004-2023. Se trata de contenidos que ya no están en vigor
      y que se conservan aquí por razones históricas:
      
      [TBD]
      
      NEWS > BACK<i></i>      
</pre>
    </x-output>
  `

  connectedCallback() {}
}

export { NewsCommand }

customElements.define('x-news-command', NewsCommand)
